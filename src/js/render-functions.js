/* 
    В файле render-functions.js создай экземпляр SimpleLightbox для работы с модальным окном 
    и сохраняй функции для отображения элементов интерфейса:
*/
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { ghostEffectBlock } from './additional_effects';


const loader = document.getElementById('loader');
const buttonMore = document.querySelector('.buttonMore');


let lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionSelector: 'img',
    captionType: 'attr',
    captionPosition: 'bottom',
    captionDelay: 250,
});


function createMarkup(arr) {
    return arr.map((img) => `
    <div class="gallery-item">
        <a class="gallery-link" href="${img.largeImageURL}">
        <img class="gallery-image" src="${img.webformatURL}" data-source="${img.largeImageURL}" alt="${img.tags}" />
        <div class="gallery-textBox">
            <div>
                <p>Likes</p>
                <p>${img.likes}</p>
            </div>
            <div>
                <p>Views</p>
                <p>${img.views}</p>
            </div>
            <div>
                <p>Comments</p>
                <p>${img.comments}</p>
            </div>
            <div>
                <p>Downloads</p>
                <p>${img.downloads}</p>
            </div>
        </div>
        </a>
    </div>
  `).join("");
}


export function createGallery(images) {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        gallery.insertAdjacentHTML("beforeend", createMarkup(images));
        // Плавное появление img при загрузке
        ghostEffectBlock();
        // Обновление галереи
        lightbox.refresh();
    }
}

export function clearGallery() {
    /* должна очищать содержимое контейнера галереи */
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = "";
}

export function showLoader() {
    /* Показывает лоадер */
    // удалить чтобы стал видемый
    loader.classList.remove('hidden');
}

export function hideLoader() {
    /* Скрыть лоадер */
    loader.classList.add('hidden');
}

export function showLoadMoreButton() {
    // должна добавлять класс для отображения кнопки Load more.
    buttonMore.classList.replace("hideLoadMoreButton", "showLoadMoreButton");
}

export function hideLoadMoreButton() {
    // должна убирать класс для отображения кнопки Load more
    buttonMore.classList.replace("showLoadMoreButton", "hideLoadMoreButton");
}