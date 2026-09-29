// Static snapshot of calorie data, fetched 2026-09-14. Nutrition figures come from the USDA
// FoodData Central API (dataType 'Survey (FNDDS)' -- the What We Eat In America survey dataset,
// which reports energy per 100g plus a set of named, human-readable serving sizes per food, e.g.
// '1 medium pancake' or '1 fast food order'). Images come from Wikipedia's summary API thumbnail
// for the food's name.
//
// calories = (USDA energy per 100g) * (chosen serving's gram weight) / 100, rounded to the
// nearest 5. servingLabel is the USDA portion description the calorie count is FOR -- shown in
// the game so a guess is scoped to a concrete amount ('1 small breast' of fried chicken, not
// 'fried chicken' in the abstract).
//
// USDA's FNDDS search is a bare relevance-ranked text search with no notion of "the iconic
// version of this food" -- a plain query very often surfaces an unexpected variant first, and
// several classes of mismatch showed up repeatedly during curation:
// - Wrong preparation: a bare "banana" query's top hit was "Banana, baked" (161 kcal/100g) even
//   though a plain Wikipedia banana photo is unambiguously a raw one (89 kcal/100g) -- fixed by
//   appending "raw"/"plain"/a named cut to the USDA query for every whole-ingredient food.
// - Wrong scale: FNDDS lists multiple named sizes per food (miniature/small/medium/large/jumbo),
//   and a naive "pick the smallest valid portion" rule kept landing on a "miniature" or "1 oz"
//   fragment portion that badly undersells the food a photo actually shows (a 1oz/28g "serving"
//   of fried chicken breast, a miniature bagel) -- fixed by excluding miniature/mini portions and
//   preferring whole-unit wording ("1 medium", "1 fruit", "1 item") over a fragment ("1 slice",
//   "1 oz, cooked") when both exist for the same food.
// - Wrong dish entirely: a handful of tightly-scoped queries still resolved to something
//   unrelated -- "blueberry muffin, regular" matched "Applesauce, regular"; "croissant, plain,
//   regular" matched "Cream cheese, regular, plain"; "buffalo wing" matched "Buffalo sauce"
//   alone (5 kcal for "a wing"); "bacon, pan-fried" matched "Pan Dulce" (a Mexican sweet bread,
//   apparently via the shared word "pan"). All four were dropped rather than shipped with
//   confidently-wrong numbers.
// - Wrong format for the photo: "pretzel" resolved to pretzel *chips* (a bagged cracker-style
//   snack), not the large soft twisted pretzel a Wikipedia photo shows -- dropped. A cupcake
//   match explicitly excluded icing ("no icing"), which undercounts what a frosted-cupcake photo
//   implies -- dropped.
//
// The survivors were spot-checked against commonly-known calorie facts (a McDonald's cheeseburger
// at ~295 kcal, a medium baked potato-style dish, a large fried chicken breast at ~365 kcal) and
// are reasonably represented, though FNDDS entries are still USDA survey averages, not the exact
// dish pictured.
//
// A 2026-09-15 expansion pass targeting ethnic and composite dishes (curries, dumplings, tapas,
// desserts) hit USDA's weak-relevance search much harder than the original American-food-heavy
// pass -- of ~30 "ok" matches, over a dozen were outright wrong dishes rather than just the wrong
// variant: "Chicken Tikka Masala" and "Butter Chicken" and "Souvlaki" all resolved to the same
// generic deli "chicken roll" lunch meat; "Risotto" and "Macaron" both matched "Cheesecake,
// plain"; "Milkshake" matched a chocolate doughnut; "S'more" matched chocolate puff cereal;
// "Lobster roll" matched plain lobster meat with no roll; "Bao" resolved on the Wikipedia side to
// the 2018 Pixar short film of the same name instead of the food. All were dropped. Only the
// matches that were both dish-correct and calorie-plausible survived (gyros, tempura, crab cake,
// New England clam chowder, eggs Benedict, naan, spanakopita, calzone, gelato, beignet, a genuine
// soft pretzel this time rather than the pretzel-chips mismatch from the first pass, corn dog,
// funnel cake, and banana split).
//
// Baked in statically like the other datasets here.

export interface CalorieData {
  name: string;
  servingLabel: string;
  calories: number;
  imageUrl: string;
}

export const CALORIES: CalorieData[] = [
  {
    "name": "Sushi",
    "servingLabel": "1 piece",
    "calories": 30,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Sushi_platter.jpg/330px-Sushi_platter.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Dumpling",
    "servingLabel": "1 item, any size",
    "calories": 30,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/HK_SYP_%E8%A5%BF%E7%87%9F%E7%9B%A4_Sai_Ying_Pun_Kwan_Yick_Building_%E5%90%8D%E6%98%9F%E6%B5%B7%E9%AE%AE%E9%85%92%E5%AE%B6_Star_Seafood_Restaurant_food_%E5%90%9E%E9%BA%B5_Wonton_dim_sum_October_2020_SS2_01.jpg/330px-HK_SYP_%E8%A5%BF%E7%87%9F%E7%9B%A4_Sai_Ying_Pun_Kwan_Yick_Building_%E5%90%8D%E6%98%9F%E6%B5%B7%E9%AE%AE%E9%85%92%E5%AE%B6_Star_Seafood_Restaurant_food_%E5%90%9E%E9%BA%B5_Wonton_dim_sum_October_2020_SS2_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Bruschetta",
    "servingLabel": "1 small or thin/very thin slice",
    "calories": 55,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg/330px-2014_Bruschetta_The_Larder_Chiang_Mai.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Watermelon",
    "servingLabel": "1 small wedge/slice",
    "calories": 65,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/47/Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg/330px-Taiwan_2009_Tainan_City_Organic_Farm_Watermelon_FRD_7962.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Savory spinach pie",
    "servingLabel": "1 small/individual",
    "calories": 65,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/37/Spanakopita.jpg/330px-Spanakopita.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Boiled egg",
    "servingLabel": "1 egg",
    "calories": 70,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Soft-boiled-egg.jpg/330px-Soft-boiled-egg.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Tempura",
    "servingLabel": "1 fritter",
    "calories": 70,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Tempura_01.jpg/330px-Tempura_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Orange (fruit)",
    "servingLabel": "1 fruit",
    "calories": 75,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Oranges_-_whole-halved-segment.jpg/330px-Oranges_-_whole-halved-segment.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Pita",
    "servingLabel": "1 small pita",
    "calories": 75,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/32/Pita_Bread.jpg/330px-Pita_Bread.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Samosa",
    "servingLabel": "1 small/individual",
    "calories": 80,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c4/Samosas%2C_snack_food_at_Wikipedia%27s_16th_Birthday_celebration_in_Chittagong_%2801%29.jpg/330px-Samosas%2C_snack_food_at_Wikipedia%27s_16th_Birthday_celebration_in_Chittagong_%2801%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Quesadilla",
    "servingLabel": "1 triangular piece",
    "calories": 95,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/01/Empanada_flor_de_Calabaza.jpg/330px-Empanada_flor_de_Calabaza.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Scrambled eggs",
    "servingLabel": "1 egg",
    "calories": 100,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Scrambed_eggs.jpg/330px-Scrambed_eggs.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Apple",
    "servingLabel": "1 small",
    "calories": 100,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/330px-Pink_lady_and_cross_section.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Ramen",
    "servingLabel": "1 oz",
    "calories": 110,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg/330px-Shoyu_Ramen%EF%BC%88Tokyo_Ramen%EF%BC%89_-_01.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Guacamole",
    "servingLabel": "1 individual container",
    "calories": 110,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Guacamole_IMGP1271.jpg/330px-Guacamole_IMGP1271.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Empanada",
    "servingLabel": "1 small/individual",
    "calories": 115,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Tapa_de_empanadillitas.JPG/330px-Tapa_de_empanadillitas.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Banana",
    "servingLabel": "1 banana",
    "calories": 120,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/de/Bananavarieties.jpg/330px-Bananavarieties.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Hash browns",
    "servingLabel": "1 patty",
    "calories": 120,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d1/Mmm..._sliders_and_deep_fried_hash_browns_%287958927842%29.jpg/330px-Mmm..._sliders_and_deep_fried_hash_browns_%287958927842%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Chocolate chip cookie",
    "servingLabel": "1 small bar",
    "calories": 125,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b4/Choco_chip_cookie.png/330px-Choco_chip_cookie.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Tortilla chips",
    "servingLabel": "1 small single serving bag",
    "calories": 130,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/4003_-_Zermatt_-_Restaurant_Weisshorn.JPG/330px-4003_-_Zermatt_-_Restaurant_Weisshorn.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Naan",
    "servingLabel": "1 piece (1/4 of 10\" dia)",
    "calories": 135,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Annapurna_Naan.jpg/330px-Annapurna_Naan.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Pancake",
    "servingLabel": "1 medium pancake",
    "calories": 140,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/40/Foodiesfeed.com_pouring-honey-on-pancakes-with-walnuts.jpg/330px-Foodiesfeed.com_pouring-honey-on-pancakes-with-walnuts.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Waffle",
    "servingLabel": "1 small waffle",
    "calories": 150,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5b/Waffles_with_Strawberries.jpg/330px-Waffles_with_Strawberries.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Potato chips",
    "servingLabel": "1 small single serving bag",
    "calories": 150,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Potato-Chips.jpg/330px-Potato-Chips.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Hummus",
    "servingLabel": "1 individual container",
    "calories": 170,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/bf/Lebanese_style_hummus.jpg/330px-Lebanese_style_hummus.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Mashed potato",
    "servingLabel": "1 potato, any size",
    "calories": 170,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/51/Sous_vide_mashed_potatoes.jpg/330px-Sous_vide_mashed_potatoes.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Hot dog",
    "servingLabel": "1 bun length/jumbo",
    "calories": 175,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b1/Hot_dog_with_mustard.png/330px-Hot_dog_with_mustard.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Coleslaw",
    "servingLabel": "1 single serving container",
    "calories": 175,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/2015-12-20_Spitzkohlsalat_mit_M%C3%B6hren_anagoria.JPG/330px-2015-12-20_Spitzkohlsalat_mit_M%C3%B6hren_anagoria.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "French toast",
    "servingLabel": "1 slice, any size",
    "calories": 175,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/42/FrenchToast.JPG/330px-FrenchToast.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Bagel",
    "servingLabel": "1 small",
    "calories": 180,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/85/Bagel_with_sesame_3.jpg/330px-Bagel_with_sesame_3.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Crab cake",
    "servingLabel": "1 cake or patty",
    "calories": 180,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dc/A_Delicious_Crabcake_at_the_Middleton_Tavern.jpg/330px-A_Delicious_Crabcake_at_the_Middleton_Tavern.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Oatmeal",
    "servingLabel": "1 fast food order",
    "calories": 190,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/39/Oatmeal.jpg/330px-Oatmeal.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Churro",
    "servingLabel": "1 regular",
    "calories": 190,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c6/Chocolate_con_churros_%2827343655726%29.jpg/330px-Chocolate_con_churros_%2827343655726%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Beignet",
    "servingLabel": "1 beignet",
    "calories": 190,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Beignet_good_for_mouth.jpg/330px-Beignet_good_for_mouth.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Submarine sandwich",
    "servingLabel": "1 small (5-1/2\" long)",
    "calories": 205,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6d/Submarine_sandwich_with_toppings_and_dijon_mustard.jpg/330px-Submarine_sandwich_with_toppings_and_dijon_mustard.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Pretzel",
    "servingLabel": "1 small",
    "calories": 210,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/30/BrezelnSalz02_%28cropped%29.JPG/330px-BrezelnSalz02_%28cropped%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Corn dog",
    "servingLabel": "1 regular",
    "calories": 220,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/CornDog.jpg/330px-CornDog.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Avocado",
    "servingLabel": "1 fruit",
    "calories": 240,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f2/Persea_americana_fruit_2.JPG/330px-Persea_americana_fruit_2.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Trail mix",
    "servingLabel": "1 package",
    "calories": 250,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fd/2021-05-15_04_45_03_A_sample_of_Kirkland_Trail_Mix_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg/330px-2021-05-15_04_45_03_A_sample_of_Kirkland_Trail_Mix_in_the_Dulles_section_of_Sterling%2C_Loudoun_County%2C_Virginia.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Éclair",
    "servingLabel": "1 eclair, frozen",
    "calories": 260,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Two_Safeway_Chocolate_Eclairs_%2819043880936%29.jpg/330px-Two_Safeway_Chocolate_Eclairs_%2819043880936%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Doughnut",
    "servingLabel": "1 doughnut",
    "calories": 260,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Glazed-Donut.jpg/330px-Glazed-Donut.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Pizza",
    "servingLabel": "1 piece, medium pizza",
    "calories": 275,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/91/Pizza-3007395.jpg/330px-Pizza-3007395.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Ice cream cone",
    "servingLabel": "1 cone",
    "calories": 285,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg/330px-Strawberry_ice_cream_cone_%285076899310%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Lasagna",
    "servingLabel": "1 piece (1/6 of 8\" square, approx 2-1/2\" x 4\")",
    "calories": 285,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/ba/Lasagne_-_stonesoup.jpg/330px-Lasagne_-_stonesoup.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Cheeseburger",
    "servingLabel": "1 cheeseburger",
    "calories": 295,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Cheeseburger.jpg/330px-Cheeseburger.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Meatloaf",
    "servingLabel": "1 sandwich, any size",
    "calories": 295,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/MeatloafWithSauce.jpg/330px-MeatloafWithSauce.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "French fries",
    "servingLabel": "1 small fast food order",
    "calories": 320,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/83/French_Fries.JPG/330px-French_Fries.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Funnel cake",
    "servingLabel": "1 cake (6\" dia)",
    "calories": 320,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Funnel_Cake_With_no_Toppings.jpeg/330px-Funnel_Cake_With_no_Toppings.jpeg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Pork chop",
    "servingLabel": "1 chop, any size",
    "calories": 340,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2b/Pork_chops_167541218.jpg/330px-Pork_chops_167541218.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Baklava",
    "servingLabel": "1 piece",
    "calories": 350,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Baklava%281%29.png/330px-Baklava%281%29.png?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Fried chicken",
    "servingLabel": "1 small breast",
    "calories": 365,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Fried-Chicken-Set.jpg/330px-Fried-Chicken-Set.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Gyros",
    "servingLabel": "1 sandwich, any size",
    "calories": 370,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Pita_giros.JPG/330px-Pita_giros.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Spaghetti and meatballs",
    "servingLabel": "1 meal (12.5 oz)",
    "calories": 400,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Spaghetti_and_meatballs_1.jpg/330px-Spaghetti_and_meatballs_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Grilled cheese",
    "servingLabel": "1 sandwich",
    "calories": 400,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/13/Classic_Grilled_Cheese_Sandwich_%2825791331763%29_%28cropped%29.jpg/330px-Classic_Grilled_Cheese_Sandwich_%2825791331763%29_%28cropped%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Gelato",
    "servingLabel": "1 scoop",
    "calories": 400,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3a/Delicious_Gelato_on_display.jpg/330px-Delicious_Gelato_on_display.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Clam chowder",
    "servingLabel": "1 individual container",
    "calories": 410,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Quail_07_bg_041506.jpg/330px-Quail_07_bg_041506.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Onion ring",
    "servingLabel": "1 fast food order",
    "calories": 420,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/eb/OnionRings.JPG/330px-OnionRings.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Apple pie",
    "servingLabel": "1 regular slice",
    "calories": 445,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Apple_pie_14.jpg/330px-Apple_pie_14.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Eggs Benedict",
    "servingLabel": "1 egg",
    "calories": 445,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/24/Traditional_Eggs_Benedict.jpg/330px-Traditional_Eggs_Benedict.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Burrito",
    "servingLabel": "1 small/regular",
    "calories": 480,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Burrito.JPG/330px-Burrito.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Candy bar",
    "servingLabel": "1 large/king size",
    "calories": 480,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Planters-Peanut-Bar.jpg/330px-Planters-Peanut-Bar.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Tiramisu",
    "servingLabel": "1 piece",
    "calories": 620,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/58/Tiramisu_-_Raffaele_Diomede.jpg/330px-Tiramisu_-_Raffaele_Diomede.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Nachos",
    "servingLabel": "1 item, any size",
    "calories": 665,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/87/Nachos-cheese.jpg/330px-Nachos-cheese.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Cheesecake",
    "servingLabel": "1 piece/slice, any size",
    "calories": 700,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ea/Baked_cheesecake_with_raspberries_and_blueberries.jpg/330px-Baked_cheesecake_with_raspberries_and_blueberries.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Banana split",
    "servingLabel": "1 banana split",
    "calories": 975,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a5/Banana_split_1.jpg/330px-Banana_split_1.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  },
  {
    "name": "Calzone",
    "servingLabel": "1 calzone or stromboli",
    "calories": 1650,
    "imageUrl": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Wikimania_2016_Deryck_day_0_-_07_calzone.jpg/330px-Wikimania_2016_Deryck_day_0_-_07_calzone.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail"
  }
];
