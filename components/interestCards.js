function createInterestCard(cardImage) {
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

function createInterestDetails(interest) {
  return `
    <li class="flex-row gap-3 hidden sm:flex">
      <img 
        src="public/assets/visual_assets/icons/StarFour.svg" 
        alt="A star icon symbolizing interest/s of a person" 
        fetchpriority="low" 
        decoding="async" 
        loading="lazy" 
        width="20" 
        height="20">
      <span class="text-wrap font-[Inter]">${interest}</span>
    </li>
  `;
}

const animeList = ["Action", "Isekai", "Sci-Fi", "Shounen", "Slice of Life"];

const bookList = [
  "Art Books",
  "Communication",
  "Finance",
  "Psychology",
  "Self-Development",
];

const drawingList = ["Digital Illustration", "Pen Illustration"];

const gamingList = ["MMORPG's", "MOBA's", "FPS's"];

const musicList = ["EDM's", "OPM's", "Pop", "R&B's"];

const readingList = ["Anything I'm curious about"];

const interestCardImage = [
  {
    containerId: "animeImageContainer",
    id: "animeImage",
    src: "public/assets/visual_assets/images/illustrations/interest-anime-square.webp",
    altText: "An icon representing anime interest",
  },
  {
    containerId: "bookImageContainer",
    id: "bookImage",
    src: "public/assets/visual_assets/images/illustrations/interest-books-square.webp",
    altText: "An icon representing books interest",
  },
  {
    containerId: "drawingImageContainer",
    id: "drawingImage",
    src: "public/assets/visual_assets/images/illustrations/interest-drawing-square.webp",
    altText: "An icon representing drawing interest",
  },
  {
    containerId: "gamingImageContainer",
    id: "gamingImage",
    src: "public/assets/visual_assets/images/illustrations/interest-gaming-square.webp",
    altText: "An icon representing gaming interest",
  },
  {
    containerId: "musicImageContainer",
    id: "musicImage",
    src: "public/assets/visual_assets/images/illustrations/interest-music-square.webp",
    altText: "An icon representing music interest",
  },
  {
    containerId: "readingImageContainer",
    id: "readingImage",
    src: "public/assets/visual_assets/images/illustrations/interest-reading-square.webp",
    altText: "An icon representing reading interest",
  },
];

const animeCard = document.getElementById("anime");
const bookCard = document.getElementById("book");
const drawingCard = document.getElementById("drawing");
const gamingCard = document.getElementById("gaming");
const musicCard = document.getElementById("music");
const readingCard = document.getElementById("reading");

interestCardImage.forEach((cardImage) => {
  const container = document.getElementById(cardImage.containerId);
  if (container) {
    container.innerHTML = createInterestCard(cardImage);
  }
});

animeCard.innerHTML = animeList.map(createInterestDetails).join("");
bookCard.innerHTML = bookList.map(createInterestDetails).join("");
drawingCard.innerHTML = drawingList.map(createInterestDetails).join("");
gamingCard.innerHTML = gamingList.map(createInterestDetails).join("");
musicCard.innerHTML = musicList.map(createInterestDetails).join("");
readingCard.innerHTML = readingList.map(createInterestDetails).join("");
