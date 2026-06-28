function createFooterSocials(socialsImage) {
  return `
    <li class="flex">
      <a href="${socialsImage?.href}" target="_blank" class="flex flex-row gap-3 items-center">
        <img 
          src="${socialsImage?.src}"
          alt="${socialsImage?.altText}"
          fetchpriority="low"
          loading="lazy"
          decoding="async"
          width="36"
          height="36"
          class="shrink-0">

          <span class="text-nowrap font-[Inter]">${socialsImage?.caption}
          </span>
      </a>
    </li>
  `;
}

const socials = [
  {
    href: "https://web.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61562546194521&sk=about",
    src: "public/assets/visual_assets/icons/social_media/facebook.svg",
    altText: "Facebook Logo",
    caption: "Mark Lhester Pile",
  },
  {
    href: "https://discord.com/channels/@me",
    src: "public/assets/visual_assets/icons/social_media/discord.svg",
    altText: "Discord Logo",
    caption: "shikiro_kageyoshi",
  },
  {
    href: "https://pin.it/7yI66iXiA",
    src: "public/assets/visual_assets/icons/social_media/pinterest.svg",
    altText: "Pinterest Logo",
    caption: "Kageyoshi",
  },
  {
    href: "https://www.linkedin.com/in/mark-lhester-pile-134808414/",
    src: "public/assets/visual_assets/icons/social_media/linkedin.svg",
    altText: "Linked In Logo",
    caption: "Mark Lhester Pile",
  },
  {
    href: "https://www.tiktok.com/@kingvoid_kiro",
    src: "public/assets/visual_assets/icons/social_media/tiktok.svg",
    altText: "Tiktok Logo",
    caption: "Kiro キロ ࣪𖥔 ݁",
  },
  {
    href: "https://open.spotify.com/user/314ci3fs6dfhmxjpj35k656nwlpa?si=91aaa59c4de44103",
    src: "public/assets/visual_assets/icons/social_media/spotify.svg",
    altText: "Spotify Logo",
    caption: "Shikiro",
  },
  {
    href: "https://github.com/marklhesterpile-dev",
    src: "public/assets/visual_assets/icons/social_media/github.svg",
    altText: "Github Logo",
    caption: "marklhesterpile-dev",
  },
];

const socialsLinkContainer = document.getElementById("socialsContainer");

socialsLinkContainer.innerHTML = socials
  .map((link) => createFooterSocials(link))
  .join("");
