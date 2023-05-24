const shareBtn = document.querySelector(".share-btn");
const socialMediaShareBtn = document.querySelector(".social-media-share-btn");
const socialMediaSection = document.querySelector(".share-section");

shareBtn.addEventListener("click", function () {
  socialMediaSection.classList.toggle("clicked");
});

socialMediaShareBtn.addEventListener("click", function () {
  socialMediaSection.classList.toggle("clicked");
});
