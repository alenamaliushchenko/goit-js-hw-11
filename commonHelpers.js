import{i,S as c}from"./assets/vendor-3fe00192.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function e(r){if(r.ep)return;r.ep=!0;const t=s(r);fetch(r.href,t)}})();async function l(n){const s=`https://pixabay.com/api/?key=44883065-b38075931b52680ca8f625c61&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(s).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>e).catch(e=>{throw console.log("Error:",e),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),e})}function u({webformatURL:n,largeImageURL:o,tags:s,likes:e,views:r,comments:t,downloads:a}){return`
        <div class="photo-card">
            <a href="${o}">
            <img src="${n}" alt="${o}"  loading="lazy" />
            </a>
            <div class="info">
                <p class="info-item">
                <b>Likes:</b><span class="info-item-value">${e}</span>
                </p>
                <p class="info-item">
                <b>Views:</b><span class="info-item-value">${r}</span>
                </p>
                <p class="info-item">
                <b>Comments:</b><span class="info-item-value">${t}</span>
                </p>
                <p class="info-item"> 
                <b>Downloads:</b><span class="info-item-value">${a}</span>
                </p>
            </div>
        </div>
    `}function m(n){n.innerHTML=""}function f(n,o){const s=o.map(u).join("");n.insertAdjacentHTML("beforeend",s),new c(".gallery a").refresh()}document.getElementById("searchForm").addEventListener("submit",function(n){n.preventDefault();const o=document.getElementById("searchInput").value.trim(),s=document.getElementById("gallery");if(m(s),o===""){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}l(o).then(e=>{e.hits.length>0?f(s,e.hits):i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{console.log("Error:",e),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"})})});
//# sourceMappingURL=commonHelpers.js.map
