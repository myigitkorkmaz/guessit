"use client";

import { ComposableMap, Geographies, Geography, Marker, ZoomableGroup } from "react-simple-maps";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-50m.json";

interface WorldMapProps {
  targetCcn3: string;
  lat: number;
  lng: number;
  areaKm2: number | null;
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

export default function WorldMap({ targetCcn3, lat, lng, areaKm2 }: WorldMapProps) {
  const zoom = zoomForArea(areaKm2);
  const minZoom = Math.max(1, zoom * 0.5);
  const maxZoom = zoom * 4;

  // Archipelago nations (Antigua & Barbuda, Saint Vincent & the Grenadines,
  // etc.) can render as a sliver too thin to spot by eye even when the
  // polygon fill is technically correct — the bounding box is mostly open
  // water between islands. A fixed-size pin at the country's coordinates
  // guarantees visibility regardless of how the landmass itself renders.
  const markerRadius = 5 / zoom;

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-surface-raised">
      <ComposableMap
        projectionConfig={{ scale: 147 }}
        style={{ width: "100%", height: "auto" }}
      >
        <ZoomableGroup center={[lng, lat]} zoom={zoom} minZoom={minZoom} maxZoom={maxZoom}>
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isTarget = geo.id === targetCcn3;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      fill: isTarget ? "var(--accent)" : "var(--surface)",
                      stroke: "var(--border)",
                      strokeWidth: 0.5 / zoom,
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
    </div>
  );
}
