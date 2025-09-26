let isScrolling = false;

document.addEventListener('wheel', (event) => {
    event.preventDefault(); // блокируем дефолтную прокрутку

    if (isScrolling) return;
    isScrolling = true;

    // NodeList
    const gallery = document.getElementById('gallery');
    const galleryItem = gallery.querySelector('.gallery-item');

    if (!galleryItem) return;

    // Создаём объект размеров
    const rect = galleryItem.getBoundingClientRect();

    // Берём высату объекта
    const cardHeight = rect.height;
    const gap = 25;
    // Высота + отступ + две карточки
    const step = (cardHeight + gap) * 2;

    // Определяем в какую сторану покрутили колёсико
    const direction = event.deltaY > 0 ? 1 : -1;

    window.scrollBy({
        top: step * direction,
        behavior: 'smooth'
    });
    // Задержка лишнего прокручивания
    setTimeout(() => {
        isScrolling = false;
    }, 400); // задержка для плавности
}, { passive: false });