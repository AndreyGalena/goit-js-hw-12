import{a as y,S as h,i as u}from"./assets/vendor-BSTwZ_tR.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))s(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}})();const d=document.querySelector(".form"),l=document.getElementById("gallery"),p=document.getElementById("loader"),c=document.querySelector(".buttonMore"),a={page:1,per_page:15,fullPages:1,query:null},L="18618260-23b6d79f5c2a85fb2d6c9be6b",v="https://pixabay.com/api";async function b(o,e){const n=new URLSearchParams({key:L,q:o,per_page:a.per_page,page:e,lang:"ru",image_type:"photo",orientation:"horizontal",safesearch:!0});return(await y(`${v}/?${n}`)).data}function w(){const o=document.querySelectorAll(".gallery-item"),e=Array.from(o).map(s=>s.querySelector("img"));let n=0;e.forEach(s=>{const t=()=>{n++,n===e.length&&(o.forEach((r,i)=>{setTimeout(()=>{r.classList.add("visible")},i*50)}),q(),a.page<=a.fullPages&&P())};s.complete?t():s.addEventListener("load",t)})}let M=new h(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionPosition:"bottom",captionDelay:250});function B(o){return o.map(e=>`
    <div class="gallery-item">
        <a class="gallery-link" href="${e.largeImageURL}">
            <img class="gallery-image" src="${e.webformatURL}" data-source="${e.largeImageURL}" loading="lazy" alt="${e.tags}" />
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
  `).join("")}function f(o){l&&(l.insertAdjacentHTML("beforeend",B(o)),w(),M.refresh())}function E(){l.innerHTML=""}function $(){p.classList.remove("hidden")}function q(){p.classList.add("hidden")}function P(){c.classList.replace("hideLoadMoreButton","showLoadMoreButton")}function g(){c.classList.replace("showLoadMoreButton","hideLoadMoreButton")}u.success({title:"Внимание!",message:"Мы готовы к работе !",position:"topRight"});async function m(){try{return $(),await b(a.query,a.page)}catch(o){u.error({title:"Error!",icon:"fa-solid fa-xmark",iconColor:"white",message:`${o.message}`,messageColor:"white",position:"center",timeout:5e3,progressBar:!0,backgroundColor:"red"})}}d.addEventListener("submit",async o=>{if(o.preventDefault(),a.page=1,g(),E(),a.query=d.elements["search-text"].value.trim(),!a.query)return;const e=await m();console.log("data ",e),a.fullPages=Math.floor(e.totalHits/a.per_page),f(e.hits)});c.addEventListener("click",async o=>{o.preventDefault(),g(),a.page++;const e=await m();f(e.hits)});
//# sourceMappingURL=index.js.map
