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

var modal = document.getElementByClassName("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var images = document.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
var i;
for (i = 0; i < images.length; i++) {
  images[i].onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.nextElementSibling.innerHTML;
  };
}
