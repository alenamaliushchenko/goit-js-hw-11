import { fetchImages } from "./js/pixabay-api";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

document.getElementById('searchForm').addEventListener("submit", function(event) {
    event.preventDefault();
    const query = document.getElementById('searchInput').value.trim();

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
       return data.hits;
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
