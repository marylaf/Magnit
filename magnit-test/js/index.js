import "swiper/swiper-bundle.min.css";
import "swiper/css/navigation";
import { cards } from "../utils/constants";

const containerTable = document.querySelector(".table__container");
const containerSlider = document.querySelector(".swiper-wrapper");
const buttonShow = document.querySelector(".button");
const slideBlock = document.querySelector(".swiper");

// Вставка блоков с картинками в html страницу с информацией из массива

cards.forEach((card) => {
  const cardBlock = `
                  <div class="cell" style="background: ${card.background}" >
                      <img class="cell__image" src="${card.imageSrc}" />
                      <h2 class="cell__title">${card.title}</h2>
                  </div>
              `;
  containerTable.innerHTML += cardBlock;

  const sliderBlock = `
              <div class="swiper-slide">
                      <img class="slider-image" src="${card.imageSrc}" />
              </div>
              `;

  containerSlider.innerHTML += sliderBlock;
});

// Добавление обработчиков клика к карточкам

document.querySelectorAll(".cell").forEach((cardElement, index) => {
  cardElement.addEventListener("click", () => {
    swiper.slideTo(index);
    // updateInfo(cards[index]);
    slideBlock.scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Функция добавления отображения большего кол-ва карточек

function addItems() {
  const buttonImage = this.querySelector(".button__icon");
  const buttonText = this.querySelector(".button__subtitle");

  const isShownAll = containerTable.classList.toggle("show-all");

  buttonText.textContent = isShownAll ? "Скрыть" : "Посмотреть все Стикерсы";
  buttonImage.src = isShownAll ? "/images/all.svg" : "/images/Watches.svg";
}

buttonShow.addEventListener("click", addItems);

const updateInfo = (card) => {
  const containerInfo = document.querySelector(".info");
  containerInfo.classList.remove("info-visible");

  setTimeout(() => {
    if (card) {
      containerInfo.innerHTML = `
        <h1 class="info__title">${card.title}</h1>
        <p class="info__subtitle">${card.about}</p>
      `;
    }

    requestAnimationFrame(() => {

      containerInfo.classList.add("info-visible");
    });
  }, 500);
};

// Инициализация слайдера

const swiper = new Swiper(".swiper", {
  speed: 500,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  mousewheel: true,
  keyboard: true,
  on: {
    slideChange: function () {
      const activeIndex = this.activeIndex;
      const selectedCard = cards[activeIndex];
      updateInfo(selectedCard);
    },
  },
});

updateInfo(cards[swiper.activeIndex]);
