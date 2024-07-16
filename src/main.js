import { fetchImages } from "./js/pixabay-api";
import { renderGallery, clearGallery } from "./js/render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


document.getElementById('searchForm').addEventListener("submit", function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.trim();

    const gallery = document.getElementById('gallery');
    clearGallery(gallery);

if (query === ""){
    iziToast.error({
        title: 'Error',
        message: 'Sorry, there are no images matching your search query. Please try again!',
    });
    return;
}
fetchImages(query) 
   .then(data => {
    if(data.hits.length > 0){
       renderGallery(gallery, data.hits);
    }
    else{
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
   });
  });
