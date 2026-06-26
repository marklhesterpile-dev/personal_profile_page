function createHeroPicture(picture) {
  return `
    <img src="${picture?.src}"
    alt="${picture?.altText}"
    fetchpriority="high"
    loading="lazy"
    decoding="async"
    class="object-cover w-full h-[50%]
     sm:w-full sm:h-full border-night-200 border-2 rounded-2xl"
    >
  `;
}

const heroPicture = [
  {
    src: "public/assets/visual_assets/images/photos/profile.webp",
    altText:
      "A picture of Mark Lhester Pile in black clothes and low angle shot using a digital camera",
  },
];

const heroPictureContainer = document.getElementById("heroPictureContainer");

heroPictureContainer.innerHTML = heroPicture.map(createHeroPicture);
