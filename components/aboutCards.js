function createListItem(text) {
  return `
    <li class="flex items-center gap-1">
      <img
        src="public/assets/visual_assets/icons/CheckCircle.svg"
        alt="A check circle showing the description is true"
        loading="lazy"
        fetchpriority="low"
        decoding="async"
        width="20"
        height="20"
        class="shrink-0"
      />
      <span class="font-normal font-[Inter] text-sm md:text-base text-nowrap">${text}</span>
    </li>
  `;
}

function createHeadingPersonality(heading) {
  return `
          <img
            src="${heading?.src}"
            alt="${heading?.altText}"
            fetchpriority="high"
            decoding="async"
            loading="lazy"
          />
  `;
}

function createAboutImage(image) {
  return `
  <img
    src="${image.src}"
    alt="${image.altText}"
    fetchpriority="high"
    decoding="async"
    loading="lazy"
    class="shrink-0 object-cover object-center w-full h-full 2xs:w-[50%] 2xs:h-[50%] sm:w-full sm:h-full 2xs:m-auto sm:m-0"
  />
  `;
}

const aboutPersonality = [
  "Calm",
  "Caring",
  "Curious",
  "Emphatic",
  "Humorous",
  "Kind",
  "Motivator",
  "Optimist",
  "Punctual",
  "Quiet",
  "Reflective",
  "Thinker",
];

const aboutValue = [
  "Consistency",
  "Connection",
  "Empathy",
  "Growth Mindset",
  "Inner Peace",
  "Love",
  "Optimism",
  "Punctuality",
  "Reciprocity",
  "Reflectiveness",
  "Thoughfulness",
  "Wisdom",
];

const aboutCardHeadingPersonality = [
  {
    src: "public/assets/visual_assets/icons/brain.svg",
    altText: "Brain icon symbolizing the personality of a human",
  },
];

const aboutCardHeadingValue = [
  {
    src: "public/assets/visual_assets/icons/compass.svg",
    altText: "Compass icon symbolizing the values uphold by the person",
  },
];

const aboutImage = [
  {
    src: "public/assets/visual_assets/images/photos/profile.webp",
    altText:
      "A photo of Mark Lhester Pile wearing a black t-shirt and a watch captured in low angle shot",
  },
];

const personalityTraits = document.getElementById("traitsList");
const valueLists = document.getElementById("valuesList");
const aboutCardHeadPersonality = document.getElementById("cardHead");
const aboutCardHeadValue = document.getElementById("cardValue");
const aboutImageHolder = document.getElementById("aboutImgHolder");

aboutImageHolder.innerHTML = aboutImage.map(createAboutImage);
personalityTraits.innerHTML = aboutPersonality.map(createListItem).join("");

valueLists.innerHTML = aboutValue.map(createListItem).join("");

aboutCardHeadPersonality.innerHTML = aboutCardHeadingPersonality.map(
  (headingPersonality) => createHeadingPersonality(headingPersonality),
);

aboutCardHeadValue.innerHTML = aboutCardHeadingValue.map((headingValue) =>
  createHeadingPersonality(headingValue),
);
