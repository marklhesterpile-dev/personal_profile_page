document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("seeMoreToggle");
  const paragraph = document.getElementById("whoamI_Extra");

  if(!toggleBtn || !paragraph ) return;

  toggleBtn.addEventListener("click", () => {
    const isTruncated = paragraph.classList.contains("truncate");

    if(isTruncated){
      paragraph.classList.remove("truncate");
      paragraph.classList.add("whitespace-normal");
      toggleBtn.textContent = "See Less";
    }
    else{
      paragraph.classList.add("truncate");
      paragraph.classList.remove("whitespace-normal");
      toggleBtn.textContent = "See More";
    }
  });
});