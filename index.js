import{a as g,S as y,i as l}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const h="18618260-23b6d79f5c2a85fb2d6c9be6b",L="https://pixabay.com/api";async function v(t,e){const s=new URLSearchParams({key:h,q:t,per_page:15,page:e,lang:"ru",image_type:"photo",orientation:"horizontal",safesearch:!0});return(await g(`${L}/?${s}`)).data}function b(){const t=document.querySelectorAll(".gallery-item"),e=Array.from(t).map(a=>a.querySelector("img"));let s=0;e.forEach(a=>{const o=()=>{s++,s===e.length&&(t.forEach((r,n)=>{setTimeout(()=>{r.classList.add("visible")},n*50)}),I(),S())};a.complete?o():a.addEventListener("load",o)})}const d=document.getElementById("loader"),u=document.querySelector(".buttonMore");let w=new y(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionPosition:"bottom",captionDelay:250});function M(t){return t.map(e=>`
    <div class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
        <img class="gallery-image" src="${e.webformatURL}" data-source="${e.largeImageURL}" alt="${e.tags}" />
        <div class="gallery-textBox">
            <div>
                <p>Likes</p>
                <p>${e.likes}</p>
            </div>
            <div>
                <p>Views</p>
                <p>${e.views}</p>
            </div>
            <div>
                <p>Comments</p>
                <p>${e.comments}</p>
            </div>
            <div>
                <p>Downloads</p>
                <p>${e.downloads}</p>
            </div>
        </div>
        </a>
    </div>
  `).join("")}function B(t){const e=document.getElementById("gallery");e&&(e.insertAdjacentHTML("beforeend",M(t)),b(),w.refresh())}function E(){const t=document.getElementById("gallery");t.innerHTML=""}function $(){d.classList.remove("hidden")}function I(){d.classList.add("hidden")}function S(){u.classList.replace("hideLoadMoreButton","showLoadMoreButton")}function p(){u.classList.replace("showLoadMoreButton","hideLoadMoreButton")}l.success({title:"Внимание!",message:"Мы готовы к работе !",position:"topRight"});let f=1,i=null;const c=document.querySelector(".form"),q=document.querySelector(".buttonMore");async function m(){try{$();const t=await v(i,f);B(t.hits)}catch(t){l.error({title:"Error!",icon:"fa-solid fa-xmark",iconColor:"white",message:`${t.message}`,messageColor:"white",position:"center",timeout:5e3,progressBar:!0,backgroundColor:"red"})}}c.addEventListener("submit",t=>{t.preventDefault(),p(),E(),i=c.elements["search-text"].value.trim(),i&&m()});q.addEventListener("click",t=>{t.preventDefault(),p(),f++,m()});
//# sourceMappingURL=index.js.map
