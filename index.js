import{r as e}from"./assets/rolldown-runtime-QTnfLwEv.js";import{n as t,r as n,t as r}from"./assets/vendor-CSXFJ-7B.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var i=e(n(),1),a=e=>{let n=new URLSearchParams({key:`56234849-957137b57f74daf80c06e675b`,q:e,image_type:`photo`,orientation:`horizontal`,safesearch:`true`});return t.get(`https://pixabay.com/api/`,{params:n}).then(e=>e.data)},o={captionsData:`alt`,captionDelay:250},s=null,c=e=>{let t=e.map(e=>`
    <li class="gallery-card">
      <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" />
      </a>
      <div class="gallery-stats">
        <div class="stat-item">
          <span class="stat-label">Likes</span>
          <span class="stat-value">${e.likes}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Views</span>
          <span class="stat-value">${e.views}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Comments</span>
          <span class="stat-value">${e.comments}</span>
        </div>
        <div class="stat-item">
          <span class="stat-label">Downloads</span>
          <span class="stat-value">${e.downloads}</span>
        </div>
      </div>
    </li>
  `).join(``);l.galleryList.insertAdjacentHTML(`beforeend`,t),s=new r(`.gallery-link`,o)},l={galleryList:document.querySelector(`.js-gallery`),preloader:document.querySelector(`.js-loader`)},u=()=>{s&&=(s.destroy(),null),l.galleryList.innerHTML=``},d=()=>{l.preloader.classList.add(`is-active`)},f=()=>{l.preloader.classList.remove(`is-active`)};({searchForm:document.querySelector(`.form`)}).searchForm.addEventListener(`submit`,e=>{e.preventDefault();let{target:t}=e,n=t.elements[`search-text`].value.trim();u(),d(),a(n).then(e=>{if(e.hits.length===0){i.default.error({title:`Error`,message:`Sorry, there are no images matching your search query. Please try again!`,position:`topRight`});return}c(e.hits)}).catch(e=>{i.default.error({title:`Error`,message:`Something went wrong: ${e.message}`,position:`topRight`})}).finally(()=>{f()})});
//# sourceMappingURL=index.js.map