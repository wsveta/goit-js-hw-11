import{a as m,i as d,S as h}from"./assets/vendor-4fb3e0b3.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const s={gallery:document.querySelector(".gallery"),form:document.querySelector(".search-form"),input:document.querySelector("input")},y="41029112-ec6e065fca3f0d308b81a7ee5";m.defaults.baseURL="https://pixabay.com/api/";let c=1,l=null;s.form.addEventListener("submit",a=>{a.preventDefault(),s.gallery.innerHTML="",c=1,l=s.input.value.trim(),l&&b(c,l)});function b(a,i){const n=new URLSearchParams({key:y,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:a,per_page:40});m.get(`?${n}`).then(o=>{if(c===1){if(o.data.totalHits===0){d.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}d.show({message:`Hooray! We found ${o.data.totalHits} images.`,position:"topRight"}),L(o)}}).catch(o=>console.log(o))}function L(a){const i=a.data.hits.map(({webformatURL:e,largeImageURL:t,tags:r,likes:u,views:f,comments:p,downloads:g})=>`<a href="${t}"><div class="photo-card">
  <img class="image" src="${e}" alt="${r}" loading="lazy" />
  <span class="loader"></span>
  <div class="info">
    <p class="info-item">
      <b>Likes</b><br>${u}
    </p>
    <p class="info-item">
      <b>Views</b><br>${f}
    </p>
    <p class="info-item">
      <b>Comments</b><br>${p}
    </p>
    <p class="info-item">
      <b>Downloads</b><br>${g}
    </p>
  </div>
  </div></a>`).join("");s.gallery.innerHTML+=i,s.images=document.querySelectorAll(".image"),[...s.images].map(e=>e.addEventListener("load",t=>{const r=t.target.nextElementSibling;r.classList.add("loader-hidden"),r.addEventListener("transitionend",()=>{r.remove()})}));const{height:n}=s.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:n/3,behavior:"smooth"}),new h(".gallery a",{}).refresh()}
//# sourceMappingURL=commonHelpers.js.map
