import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
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

let page = 1;
let query = null;

const form = document.querySelector('.form');
const buttonMore = document.querySelector('.buttonMore');


async function takeImages() {
    try {
        // показать лоадер
        showLoader();
        const data = await getImagesByQuery(query, page);
        createGallery(data.hits);
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


form.addEventListener('submit', (event) => {
    event.preventDefault();
    // убирает кнопку More
    hideLoadMoreButton();
    // зачищаем галерею
    clearGallery();
    // пользовательский ввод
    query = form.elements['search-text'].value.trim();
    // если ничего то.
    if (!query) return;
    // Делает запрос на сервер
    takeImages();
})

buttonMore.addEventListener('click', (event) => {
    event.preventDefault();
    // убирает кнопку More
    hideLoadMoreButton();
    page++;
    // Делает запрос на сервер
    takeImages();
})