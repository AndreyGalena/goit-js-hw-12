/* 
    В файле pixabay-api.js сохраняй функции для выполнения HTTP-запросов:
*/
import axios from "axios";

const API_KEY = '18618260-23b6d79f5c2a85fb2d6c9be6b';
const url = `https://pixabay.com/api`;


export async function getImagesByQuery(query, page) {
    const params = new URLSearchParams({
        key: API_KEY,
        q: query,
        per_page: 15,
        page: page,
        lang: 'ru',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
    });

    const response = await axios(`${url}/?${params}`)
    return response.data;
}

