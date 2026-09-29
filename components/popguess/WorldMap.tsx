"use client";

import { useEffect, useState } from "react";
import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

interface WorldMapProps {
  targetCcn3: string;
  lat: number;
  lng: number;
  areaKm2: number | null;
  // Border Count needs this: with neighboring countries visibly outlined, a player can just
  // count shapes touching the target on the map instead of guessing. Blends every other
  // country into the map's own background so only the target's silhouette is visible.
  hideNeighbors?: boolean;
}

// Smaller countries need a MUCH tighter zoom to be visible at all — a
// continuous log curve undershot badly for micro-states (Singapore at ~728
// km² was computing to the same ~zoom-6 as countries 10x its size, which is
// just an invisible speck at that scale). Tiered instead, tuned by hand
// against real countries at each bucket.
function zoomForArea(areaKm2: number | null): number {
  if (!areaKm2 || areaKm2 <= 0) return 4;
  if (areaKm2 < 1_000) return 25; // Singapore, Bahrain, Malta, Maldives
  if (areaKm2 < 10_000) return 12; // Luxembourg, Cyprus, Comoros
  if (areaKm2 < 50_000) return 7; // Belgium, Netherlands, Switzerland
  if (areaKm2 < 200_000) return 4.5; // Portugal, South Korea, Cuba
  if (areaKm2 < 1_000_000) return 2.5; // France, Spain, Nigeria
  return 1.3; // Russia, Canada, China, USA, Brazil, Australia
}

const ZOOM_STEP = 1.5;

export default function WorldMap({ targetCcn3, lat, lng, areaKm2, hideNeighbors = false }: WorldMapProps) {
  const baseZoom = zoomForArea(areaKm2);
  const minZoom = Math.max(1, baseZoom * 0.5);
  const maxZoom = baseZoom * 4;

  const [zoom, setZoom] = useState(baseZoom);
  const [center, setCenter] = useState<[number, number]>([lng, lat]);

  // Reset the view whenever a new round loads a different country — otherwise
  // the previous round's pan/zoom position would carry over.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- resetting the map view for a new round, not a derived-render effect
    setZoom(zoomForArea(areaKm2));
    setCenter([lng, lat]);
  }, [targetCcn3, areaKm2, lat, lng]);

  // Archipelago nations (Antigua & Barbuda, Saint Vincent & the Grenadines,
  // etc.) can render as a sliver too thin to spot by eye even when the
  // polygon fill is technically correct — the bounding box is mostly open
  // water between islands. A fixed-size pin at the country's coordinates
  // guarantees visibility regardless of how the landmass itself renders.
  const markerRadius = 5 / zoom;

  const clampZoom = (z: number) => Math.min(maxZoom, Math.max(minZoom, z));
  const zoomIn = () => setZoom((z) => clampZoom(z * ZOOM_STEP));
  const zoomOut = () => setZoom((z) => clampZoom(z / ZOOM_STEP));

  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-surface-raised">
      <ComposableMap
        projectionConfig={{ scale: 147 }}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup
          center={center}
          zoom={zoom}
          minZoom={minZoom}
          maxZoom={maxZoom}
          onMoveEnd={({ coordinates, zoom: newZoom }) => {
            if (coordinates) setCenter(coordinates);
            if (newZoom !== undefined) setZoom(newZoom);
          }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isTarget = geo.id === targetCcn3;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      fill:
                        isTarget
                          ? "var(--accent)"
                          : hideNeighbors
                            ? "var(--surface-raised)"
                            : "var(--surface)",
                      stroke: hideNeighbors && !isTarget ? "var(--surface-raised)" : "var(--border)",
                      strokeWidth: hideNeighbors && !isTarget ? 0 : 0.5 / zoom,
                      outline: "none",
                    }}
                  />
                );
              })
            }
          </Geographies>
          <Marker coordinates={[lng, lat]}>
            <circle r={markerRadius * 2} fill="var(--accent)" opacity={0.35} className="animate-pulse" />
            <circle r={markerRadius} fill="var(--accent)" stroke="#04120a" strokeWidth={0.8 / zoom} />
          </Marker>
        </ZoomableGroup>
      </ComposableMap>

      <div className="absolute bottom-2 right-2 flex flex-col gap-1">
        <button
          type="button"
          aria-label="Zoom in"
          onClick={zoomIn}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-lg font-bold leading-none text-foreground backdrop-blur transition hover:border-accent"
        >
          +
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          onClick={zoomOut}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background/80 text-lg font-bold leading-none text-foreground backdrop-blur transition hover:border-accent"
        >
          −
        </button>
      </div>
    </div>
  );
}
