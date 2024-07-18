import{i as c,S as u}from"./assets/vendor-3fe00192.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function d(s){const n=`https://pixabay.com/api/?key=44883065-b38075931b52680ca8f625c61&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(n).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t).catch(t=>{throw console.log("Error:",t),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),t})}function m({webformatURL:s,largeImageURL:o,tags:n,likes:t,views:e,comments:r,downloads:a}){return`
        <div class="photo-card">
            <a href="${o}">
                <img src="${s}" alt="${o}"  loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                    <b>Likes:</b><span class="info-item-value">${t}</span>
                </p>
                <p class="info-item">
                    <b>Views:</b><span class="info-item-value">${e}</span>
                </p>
                <p class="info-item">
                    <b>Comments:</b><span class="info-item-value">${r}</span>
                </p>
                <p class="info-item"> 
                    <b>Downloads:</b><span class="info-item-value">${a}</span>
                </p>
            </div>
        </div>`}function f(s){s.innerHTML=""}function p(s,o){const n=o.map(m).join("");s.insertAdjacentHTML("beforeend",n),new u(".gallery a").refresh()}document.getElementById("searchForm").addEventListener("submit",function(s){s.preventDefault();const o=document.getElementById("searchInput").value.trim(),n=document.getElementById("gallery");f(n);const t=document.querySelector(".loader-container"),e=document.querySelector(".loader"),r=document.querySelector(".loading-message");function a(){e.classList.add("is-active"),r.classList.add("is-active"),t.style.display="block"}function l(){e.classList.remove("is-active"),r.classList.remove("is-active"),t.style.display="none"}a(),d(o).then(i=>{l(),i.hits.length>0?p(n,i.hits):c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(i=>{console.log("Error:",i),c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l()})});
//# sourceMappingURL=commonHelpers.js.map
