import{i as c,S as u}from"./assets/vendor-3fe00192.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();async function d(s){const n=`https://pixabay.com/api/?key=44883065-b38075931b52680ca8f625c61&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>r).catch(r=>{throw console.log("Error:",r),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),r})}function m({webformatURL:s,largeImageURL:o,tags:n,likes:r,views:e,comments:t,downloads:a}){return`
        <div class="photo-card">
            <a href="${o}">
            <img src="${s}" alt="${o}"  loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                <b>Likes:</b><span class="info-item-value">${r}</span>
                </p>
                <p class="info-item">
                <b>Views:</b><span class="info-item-value">${e}</span>
                </p>
                <p class="info-item">
                <b>Comments:</b><span class="info-item-value">${t}</span>
                </p>
                <p class="info-item"> 
                <b>Downloads:</b><span class="info-item-value">${a}</span>
                </p>
            </div>
        </div>
    `}function f(s){s.innerHTML=""}function y(s,o){const n=o.map(m).join("");s.insertAdjacentHTML("beforeend",n),new u(".gallery a").refresh()}document.getElementById("searchForm").addEventListener("submit",function(s){s.preventDefault();const o=document.getElementById("searchInput").value.trim(),n=document.getElementById("gallery");if(f(n),o===""){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}const r=document.querySelector(".loader-container"),e=document.querySelector(".loader"),t=document.querySelector(".loading-message");function a(){e.classList.add("is-active"),t.classList.add("is-active"),r.style.display="block"}function l(){e.classList.remove("is-active"),t.classList.remove("is-active"),r.style.display="none"}a(),d(o).then(i=>{l(),i.hits.length>0?y(n,i.hits):c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(i=>{console.log("Error:",i),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l()})});
//# sourceMappingURL=commonHelpers.js.map
