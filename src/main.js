import { fetchImages } from "./js/pixabay-api";
import { renderGallery, clearGallery } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.getElementById('searchForm').addEventListener("submit", function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.trim();

    const gallery = document.getElementById('gallery');
    clearGallery(gallery);
    const loaderContainer = document.querySelector('.loader-container');
    const loader = document.querySelector('.loader');
    const loadingMessage = document.querySelector('.loading-message');

    function showLoader() {
        loader.classList.add('is-active');
        loadingMessage.classList.add('is-active');
        loaderContainer.style.display = 'block';
    }
    function hideLoader() {
        loader.classList.remove('is-active');
        loadingMessage.classList.remove('is-active');
        loaderContainer.style.display = 'none';
    }
    showLoader();
    fetchImages(query) 
        .then(data => {
            hideLoader();
            if(data.hits.length > 0) {
                renderGallery(gallery, data.hits);
            } else {
                iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                });
            }
        })
        .catch(error => {
            console.log('Error:', error);
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
            });
            hideLoader();
        });
});
