const tabs = document.querySelectorAll(".process-container .p-tab");
const contents = document.querySelectorAll(
  ".process-container .tab-content-container",
);

const removeActiveClass = () => {
  tabs.forEach((t) => {
    t.classList.remove("active");
  });

  contents.forEach((c) => {
    c.classList.remove("active");
  });
};

//Loop through each tab, update active status upon click
tabs.forEach((t, i) => {
  t.addEventListener("click", () => {
    removeActiveClass();
    contents[i].classList.add("active");
    t.classList.add("active");

    swipers[i].update();
  });
});

//Swipers: One set of slides per tab
const swipers = [];

contents.forEach((content) => {
  const swiper = new Swiper(content.querySelector(".card-wrapper"), {
    loop: true,
    spaceBetween: 30,
    //Updating visibility statuses
    observer: true,
    observeParents: true,

    //Each swiper is synced to its own tab
    pagination: {
      el: content.querySelector(".swiper-pagination"),
      clickable: true,
      dynamicBullets: true,
    },

    navigation: {
      nextEl: content.querySelector(".swiper-button-next"),
      prevEl: content.querySelector(".swiper-button-prev"),
    },
  });

  swipers.push(swiper);
});

// Image Enlargement

// Collect all zoomable images
var images = document.querySelectorAll(".zoom");
// Modal components
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var closeBtn = document.querySelector(".close");

// Image Zoom Modal
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("zoom")) {
    modal.style.display = "flex";
    modalImg.src = e.target.src;
    modalImg.alt = e.target.alt;

    var imageSection = e.target.closest(".img-section");
    var imageCaption = imageSection
      ? imageSection.querySelector(".img-desc")
      : null;
    captionText.innerHTML = imageCaption ? imageCaption.innerHTML : "";
  }
});

// Close modal when clicking the close button / background
closeBtn.onclick = function () {
  modal.style.display = "none";
};
modal.onclick = function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};
