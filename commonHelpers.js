import{a as u,i as c,S as b}from"./assets/vendor-4fb3e0b3.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i={gallery:document.querySelector(".gallery"),form:document.querySelector(".search-form"),input:document.querySelector("input"),loadBtn:document.querySelector(".load-more")},L="41029112-ec6e065fca3f0d308b81a7ee5";u.defaults.baseURL="https://pixabay.com/api/";let a=1,d=null;i.form.addEventListener("submit",async o=>{o.preventDefault(),i.gallery.innerHTML="",a=1,d=i.input.value.trim(),d&&m(a,d).then(r=>f(r))});i.loadBtn.addEventListener("click",w);async function w(){i.loadBtn.classList.add("hidden"),a+=1,m(a,d).then(o=>{if(f(o),a===Math.ceil(o.data.totalHits/40)){c.show({message:"We're are sorry, but you've reached the end of search results.",position:"topRight"}),i.loadBtn.classList.add("hidden");return}})}async function m(o,r){a!==1&&c.show({message:"PLease wait, pictures are loading...",position:"topRight"});const n=new URLSearchParams({key:L,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:40}),s=await u.get(`?${n}`);if(a===1){if(s.data.totalHits===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}c.show({message:`Hooray! We found ${s.data.totalHits} images.`,position:"topRight"})}return s}async function f(o){const r=o.data.hits.map(({webformatURL:e,largeImageURL:t,tags:l,likes:h,views:p,comments:g,downloads:y})=>`<a href="${t}"><div class="photo-card">
  <img class="image" src="${e}" alt="${l}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b><br>${h}
    </p>
    <p class="info-item">
      <b>Views</b><br>${p}
    </p>
    <p class="info-item">
      <b>Comments</b><br>${g}
    </p>
    <p class="info-item">
      <b>Downloads</b><br>${y}
    </p>
  </div>
</div></a>`).join("");i.gallery.innerHTML+=r;const{height:n}=i.gallery.firstElementChild.getBoundingClientRect();window.scrollBy({top:n/2,behavior:"smooth"}),i.loadBtn.classList.remove("hidden"),new b(".gallery a",{}).refresh()}const{height:v}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:v/2,behavior:"smooth"});
//# sourceMappingURL=commonHelpers.js.map
