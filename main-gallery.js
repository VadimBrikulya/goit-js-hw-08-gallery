// - Создание и рендер разметки по массиву данных и
// предоставленному шаблону.
//   -Реализация делегирования на галерее ul.js -
// gallery и получение url большого изображения.
// - Открытие модального окна по клику на элементе галереи.
// - Подмена значения атрибута src элемента img.lightbox__image.
// - Закрытие модального окна по клику на кнопку button[data - action= "close-lightbox"].
// - Очистка значения атрибута src элемента img.lightbox__image.
// Это необходимо для того, чтобы при следующем открытии
// модального окна, пока грузится изображение, мы не видели предыдущее.

// - Закрытие модального окна по клику на div.lightbox__overlay.
// - Закрытие модального окна по нажатию клавиши ESC.
// - Пролистывание изображений галереи в открытом модальном
// окне клавишами "влево" и "вправо".


// + 1. Создаю разметку
// + 2. Зарендерить разметку в готовый список в html
import galleryPicture from "./gallery-items.js"; //импортировал с файла gallery-items - массив с ссылками на фото

const refs = {
    gallery: document.querySelector(".js-gallery"),
    lightbox: document.querySelector(".js-lightbox"),
    lightboxImg: document.querySelector(".lightbox__image"),
    lightboxOverlay: document.querySelector(".lightbox__overlay"),
    lightboxCloseBtn: document.querySelector('button[data-action="close-lightbox"]'),
};

refs.gallery.addEventListener('click', onOpenPicture);
function onOpenPicture(e) {
    event.preventDefault();
    const isPictureClick = e.target.dataset.source
    if (!isPictureClick) {
        return;}
    refs.lightbox.classList.add('is-open');    
    
}

// ============================================================================
const galleryMarkup = createGallery('galleryPicture');
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGallery(){    
    return galleryPicture.map(({ preview, original, description }) => {
        return `
     <li class="gallery__item">
        <a
                class="gallery__link"
                href=""
            >
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
        </a>
</li> `}).join('');    
};
// ============================================================================


//Коллбек открытия модалки

