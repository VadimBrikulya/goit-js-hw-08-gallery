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


// 1. Создаю разметку
// 2. Зарендерить разметку в готовый список в html


// const galleryRef = document.querySelector(".js-gallery");

import gallerryPicture from "./gallery-items.js";



function createGallery(items)
{
    return gallerryPicture.map(({ preview, original, description }) => {
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
    
}
console.log(createGallery(gallerryPicture))
    
    

