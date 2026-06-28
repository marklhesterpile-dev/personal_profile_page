function createFavoriteCard(cardImage) {
  return `
     <img 
        src="${cardImage?.src}" 
        alt="${cardImage?.altText}" 
        id="${cardImage?.id}"
        fetchpriority="low"
        decoding="async"
        loading="lazy"
        width="auto"
        height="auto"
        class="rounded-xl object-contain"
      />
  `;
}

function createFavoriteDetails(favorite) {
  return `
   <li class="flex-row gap-3 hidden sm:flex">
      <img 
        src="public/assets/visual_assets/icons/Heart.svg" 
        alt="A star icon symbolizing interest/s of a person" 
        fetchpriority="low" 
        decoding="async" 
        loading="lazy" 
        width="20" 
        height="20">
      <span class="text-wrap font-[Inter]">${favorite}</span>
    </li>
  `;
}

const animeList_fav = ["Naruto Shippuden", "Your Name", "Weathering With You"];

const colorList_fav = ["Any kind of blue"];

const iceCreamLists_fav = ["Cookies & Cream"];

const drinksLists_fav = ["Coffee", "Water"];

const mealLists_fav = ["Sinigang", "Tinolang Manok", "Nilagang Baboy"];

const musicLists_fav = ["dream by satellite"];

const petsLists_fav = ["Cats", "Shiba Inu", "Siberian Husky"];

const placeLists_fav = ["Church", "Coffee Shops", "Home", "Quiet Places"];

const favoriteCardImage = [
  {
    containerId: "animeImageContainer_fav",
    id: "animeImage_fav",
    src: "public/assets/visual_assets/images/illustrations/favorite-anime-square.webp",
    altText: "Naruto Uzumaki, the main protagonist of the anime Naruto Shippuden.",
  },
  {
    containerId: "colorImageContainer_fav",
    id: "colorImage_fav",
    src: "public/assets/visual_assets/images/illustrations/favorite-color-square.webp",
    altText: "A plain image showing the color blue.",
  },
  {
    containerId: "iceCreamImageContainer_fav",
    id: "iceCreamImage_fav",
    src: "public/assets/visual_assets/images/illustrations/favorite-iceCream-square.webp",
    altText: "A close-up picture of Cookies & Cream.",
  },
  {
    containerId: "drinkImageContainer_fav",
    id: "drinkImage_fav",
    src: "public/assets/visual_assets/images/illustrations/favorite-drink-square.webp",
    altText: "An image of a glass of water and a cup of coffee in a bench.",
  },
  {
    containerId: "mealImageContainer_fav",
    id: "mealImage_fav",
    src: "public/assets/visual_assets/images/illustrations/favorite-meal-square.webp",
    altText: "An image of traditional sinigang Filipino meal.",
  },
  {
    containerId: "musicImageContainer_fav",
    id: "musicImage_fav",
    src: "public/assets/visual_assets/images/illustrations/favorite-music-square.webp",
    altText: "Music cover of the song &quot;dream&quot; by satellite. ",
  },
  {
    containerId: "petImageContainer_fav",
    id: "petImage_fav",
    src: "public/assets/visual_assets/images/illustrations/favorite-pet-square.webp",
    altText: "A picture of a cute and furry cat.",
  },
  {
    containerId: "placeImageContainer_fav",
    id: "placeImage_fav",
    src: "public/assets/visual_assets/images/illustrations/favorite-place-square.webp",
    altText: "An image of a peaceful morning while studying in a grassfield",
  },
];

favoriteCardImage.forEach((cardImage) => {
  const container = document.getElementById(cardImage.containerId);

  if (container) {
    container.innerHTML = createFavoriteCard(cardImage);
  }
});

const animeCard_fav = document.getElementById("anime_fav");
const colorCard_fav = document.getElementById("color_fav");
const iceCreamCard_fav = document.getElementById("iceCream_fav");
const drinksCard_fav = document.getElementById("drink_fav");
const mealCard_fav = document.getElementById("meal_fav");
const musicCard_fav = document.getElementById("music_fav");
const petCard_fav = document.getElementById("pet_fav");
const placeCard_fav = document.getElementById("place_fav");

animeCard_fav.innerHTML = animeList_fav.map(createFavoriteDetails).join("");
colorCard_fav.innerHTML = colorList_fav.map(createFavoriteDetails).join("");
iceCreamCard_fav.innerHTML = iceCreamLists_fav
  .map(createFavoriteDetails)
  .join("");
drinksCard_fav.innerHTML = drinksLists_fav.map(createFavoriteDetails).join("");
mealCard_fav.innerHTML = mealLists_fav.map(createFavoriteDetails).join("");
musicCard_fav.innerHTML = musicLists_fav.map(createFavoriteDetails).join("");
petCard_fav.innerHTML = petsLists_fav.map(createFavoriteDetails).join("");
placeCard_fav.innerHTML = placeLists_fav.map(createFavoriteDetails).join("");
