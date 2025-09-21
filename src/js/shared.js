
export const form = document.querySelector('.form');
export const gallery = document.getElementById('gallery');
export const loader = document.getElementById('loader');
export const buttonMore = document.querySelector('.buttonMore');

export const globalVariables = {
    page: 1,       // номер начальной страницы
    per_page: 15,  // элементав на страницу
    fullPages: 1,  // всего страниц
    query: null    // ввод пользователя
}