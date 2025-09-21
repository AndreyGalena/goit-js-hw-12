import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { globalVariables, form, buttonMore } from './js/shared';
import { getImagesByQuery } from './js/pixabay-api';
import {
    createGallery,
    showLoader,
    hideLoadMoreButton,
    clearGallery
} from './js/render-functions';



iziToast.success({
    title: 'Внимание!',
    message: 'Мы готовы к работе !',
    position: 'topRight'
});

/* 
API_KEY находится:
https://pixabay.com/api/docs/
Parameters -> key (required)	str	Your API key: 18618260-23b6d79f5c2a85fb2d6c9be6b
*/


async function takeImages() {
    try {
        // показать лоадер
        showLoader();
        const data = await getImagesByQuery(globalVariables.query, globalVariables.page);
        return data;
    } catch (error) {
        iziToast.error({
            title: 'Error!',
            icon: 'fa-solid fa-xmark',
            iconColor: 'white',
            message: `${error.message}`,
            messageColor: 'white',
            position: 'center',
            timeout: 5000,
            progressBar: true,
            backgroundColor: 'red',
        });
    }
}


form.addEventListener('submit', async (event) => {
    event.preventDefault();
    // обнуление начальной страницы
    globalVariables.page = 1;
    // убирает кнопку buttonMore
    hideLoadMoreButton();
    // очищает галерею
    clearGallery();
    // пользовательский ввод
    globalVariables.query = form.elements['search-text'].value.trim();
    // если ничего то.
    if (!globalVariables.query) return;
    // Делает запрос на сервер
    const data = await takeImages(); // ждёт
    // количество страниц
    globalVariables.fullPages = Math.floor(data.totalHits / globalVariables.per_page);
    // создаём разметку
    createGallery(data.hits);
})

buttonMore.addEventListener('click', async (event) => {
    event.preventDefault();
    // убирает кнопку More
    hideLoadMoreButton();
    globalVariables.page++;
    // Делает запрос на сервер
    const data = await takeImages(); // ждёт
    // создаём разметку
    createGallery(data.hits);
})