/* 
    В файле render-functions.js создай экземпляр SimpleLightbox для работы с модальным окном 
    и сохраняй функции для отображения элементов интерфейса:
*/
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { ghostEffectBlock } from './additional_effects';
import { gallery, loader, buttonMore } from './shared';


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
            <img class="gallery-image" src="${img.webformatURL}" data-source="${img.largeImageURL}" loading="lazy" alt="${img.tags}" />
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
    if (gallery) {
        gallery.insertAdjacentHTML("beforeend", createMarkup(images));
        // Плавное появление img при загрузке
        ghostEffectBlock();
        // Обновление галереи
        lightbox.refresh();
    }
}

export function clearGallery() {
    /* Очищает содержимое контейнера галереи */
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
    /* Меняет класс для отображения кнопки Load more. */
    buttonMore.classList.replace("hideLoadMoreButton", "showLoadMoreButton");
}

export function hideLoadMoreButton() {
    /* Меняет класс для скрытия кнопки Load more */
    buttonMore.classList.replace("showLoadMoreButton", "hideLoadMoreButton");
}