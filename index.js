import{a as L,S as v,i as p}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=s(o);fetch(o.href,r)}})();const u=document.querySelector(".form"),c=document.getElementById("gallery"),f=document.getElementById("loader"),d=document.querySelector(".buttonMore"),a={page:1,per_page:15,fullPages:1,query:null},b="18618260-23b6d79f5c2a85fb2d6c9be6b",w="https://pixabay.com/api";async function B(t,e){const s=new URLSearchParams({key:b,q:t,per_page:a.per_page,page:e,lang:"ru",image_type:"photo",orientation:"horizontal",safesearch:!0});return(await L(`${w}/?${s}`)).data}function E(){const t=document.querySelectorAll(".gallery-item"),e=Array.from(t).map(n=>n.querySelector("img"));let s=0;e.forEach(n=>{const o=()=>{s++,s===e.length&&(t.forEach((r,i)=>{setTimeout(()=>{r.classList.add("visible")},i*50)}),$(),a.page<=a.fullPages&&P())};n.complete?o():n.addEventListener("load",o)})}let M=new v(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionPosition:"bottom",captionDelay:250});function q(t){return t.map(e=>`
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
  `).join("")}function g(t){c&&(c.insertAdjacentHTML("beforeend",q(t)),E(),M.refresh())}function I(){c.innerHTML=""}function S(){f.classList.remove("hidden")}function $(){f.classList.add("hidden")}function P(){d.classList.replace("hideLoadMoreButton","showLoadMoreButton")}function m(){d.classList.replace("showLoadMoreButton","hideLoadMoreButton")}let l=!1;document.addEventListener("wheel",t=>{if(t.preventDefault(),l)return;l=!0;const s=document.getElementById("gallery").querySelector(".gallery-item");if(!s)return;const i=(s.getBoundingClientRect().height+25)*2,h=t.deltaY>0?1:-1;window.scrollBy({top:i*h,behavior:"smooth"}),setTimeout(()=>{l=!1},400)},{passive:!1});p.success({title:"Внимание!",message:"Мы готовы к работе !",position:"topRight"});async function y(){try{return S(),await B(a.query,a.page)}catch(t){p.error({title:"Error!",icon:"fa-solid fa-xmark",iconColor:"white",message:`${t.message}`,messageColor:"white",position:"center",timeout:5e3,progressBar:!0,backgroundColor:"red"})}}u.addEventListener("submit",async t=>{if(t.preventDefault(),a.page=1,m(),I(),a.query=u.elements["search-text"].value.trim(),!a.query)return;const e=await y();a.fullPages=Math.floor(e.totalHits/a.per_page),g(e.hits)});d.addEventListener("click",async t=>{t.preventDefault(),m(),a.page++;const e=await y();g(e.hits)});
//# sourceMappingURL=index.js.map
