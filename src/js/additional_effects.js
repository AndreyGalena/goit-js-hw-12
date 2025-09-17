import { hideLoader, showLoadMoreButton } from './render-functions';


export function ghostEffectBlock() {
    /* Плавное появление всего блока после загрузки вех изображений */

    const galleryItems = document.querySelectorAll('.gallery-item');
    const images = Array.from(galleryItems).map(item => item.querySelector('img'));

    let loadedCount = 0;

    images.forEach(img => {
        const onLoad = () => {
            loadedCount++;
            if (loadedCount === images.length) {
                // Все изображения загружены — показываем весь блок

                // Добавление класса 'visible' с каскадом
                galleryItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('visible')
                    }, index * 50); // каскадная задержка
                });
                // убирает Loader
                hideLoader();
                // показывает кнопку More
                showLoadMoreButton();
            }
        };

        if (img.complete) {
            // Изображение уже загружено (кеш)
            onLoad();
        } else {
            img.addEventListener('load', onLoad);
        }
    });
}