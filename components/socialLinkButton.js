function createLinkButton(linkBtn) {
  return `  
        <a
          href="${linkBtn?.href}"
          target="_blank"
          class="p-3 lg:p-4 bg-blue-200 hover:bg-blue-300 active:bg-blue-200 cursor-pointer transition-all inline-block rounded-xl"
        >
          <img
            src="${linkBtn?.iconSrc}"
            alt="${linkBtn?.altText}"
            fetchpriority="low"
            decoding="async"
            loading="lazy"
            class="w-6.25 h-6.25 sm:w-7 sm:h-7 lg:w-8 lg:h-8"
          />
        </a>
  `;
}

const socialLinks = [
  {
    href: "https://web.facebook.com/profile.php?fb_profile_edit_entry_point=%7B%22click_point%22%3A%22edit_profile_button%22%2C%22feature%22%3A%22profile_header%22%7D&id=61562546194521&sk=about",
    iconSrc: "public/assets/visual_assets/icons/social_media/facebook.svg",
    altText: "Facebook Logo",
  },
  {
    href: "https://www.tiktok.com/@itsmyxylio_szn",
    iconSrc: "public/assets/visual_assets/icons/social_media/tiktok.svg",
    altText: "Tiktok Logo",
  },
  {
    href: "https://discord.com/channels/@me",
    iconSrc: "public/assets/visual_assets/icons/social_media/discord.svg",
    altText: "Discord Logo",
  },
  {
    href: "https://open.spotify.com/user/314ci3fs6dfhmxjpj35k656nwlpa?si=91aaa59c4de44103",
    iconSrc: "public/assets/visual_assets/icons/social_media/spotify.svg",
    altText: "Spotify Logo",
  },
  {
    href: "https://github.com/marklhesterpile-dev",
    iconSrc: "public/assets/visual_assets/icons/social_media/github.svg",
    altText: "Github Logo",
  },
];

const container = document.getElementById("socialLinkBtn");
container.innerHTML = socialLinks
  .map((link) => createLinkButton(link))
  .join("");
