(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function i(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(t){if(t.ep)return;t.ep=!0;const s=i(t);fetch(t.href,s)}})();const v=n=>{document.querySelectorAll("."+n).forEach(e=>e.classList.remove(n))},d=(n,e)=>{const i=n.currentTarget.classList.contains(e);v(e),i?n.currentTarget.classList.remove(e):n.currentTarget.classList.add(e)};function b(n,e){return n.filter(i=>Object.keys(e).every(o=>i.hasOwnProperty(o)&&i[o]===e[o]))}const g=async()=>{const{"menu-items":n}=await fetch("https://sajedehf.github.io/filimo-db/db.json").then(e=>e.json());return n},p=async n=>{const{movies:e}=await fetch("https://sajedehf.github.io/filimo-db/db.json").then(i=>i.json());return Object.keys(n).length?b(e,n):e},w=async()=>{const{cenemas:n}=await fetch("https://sajedehf.github.io/filimo-db/db.json").then(e=>e.json());return n},h=async()=>{const{comments:n}=await fetch("https://sajedehf.github.io/filimo-db/db.json").then(e=>e.json());return n},x=async()=>{const{faq:n}=await fetch("https://sajedehf.github.io/filimo-db/db.json").then(e=>e.json());return n},y=async()=>{const e=(await w()).map(o=>{const{title:t,director:s,tags:r,image:a}=o;return`
    <div class="border border-white/20 p-2 md:p-4 rounded-xl bg-white/5 backdrop-blur-2xl flex">
      <div>
        <img src="${a}" alt="${t}" class="rounded-lg w-28 lg:w-auto" />
      </div>
      <div class="flex flex-1 flex-col justify-between text-[8px] md:text-[10px] lg:text-xs px-3">
        <div class="flex justify-between">
          <h3 class="font-black text-sm">${t}</h3>
          <span class="font-semibold bg-black/50 grid items-center py-1 px-3 rounded-full">اکران آنلاین</span>
        </div>
        <div class="font-light">
          <p>کارگردان: ${s}</p>
        </div>
        <div>
          ${r.map(c=>`<span class="bg-black/20 py-1 px-3 rounded-full">${c}</span>`).join(" ")}
        </div>
        <div class="">
          <button class="border rounded-md lg:rounded-lg p-1.5 md:p-2.5">خرید بلیت</button>
        </div>
      </div>
    </div>
  `});document.querySelector("#cenemas-container").insertAdjacentHTML("afterbegin",e.join(""))},j=async()=>{const e=(await h()).map(o=>{const{username:t,text:s}=o;return`
        <div class="swiper-slide">
            <div class="bg-black/10 rounded-xl px-6 pt-6 min-h-48 border border-white/10">
                <p class="text-sm lg:text-base text-white/60 mb-5">${t}</p>
                <p class="text-xs text-white/80 lg:text-sm">${s}</p>
            </div>
        </div>
    `});document.querySelector("#comments-container > .swiper-wrapper").insertAdjacentHTML("afterbegin",e.join(""))},q=async()=>{const e=(await x()).map(t=>{const{question:s,answer:r}=t;return`
        <div class="border border-white/10 px-4 text-[10px] md:text-xs lg:text-sm rounded-2xl shadow-xl shadow-black/20 transition-all duration-300 h-fit">
            <div class="faq-question font-semibold cursor-pointer py-4 transition-colors duration-500 flex items-center justify-between">${s} <img src="plus.svg" alt="آیکون" class="faq-icon w-3 h-3 transition-transform duration-500"></div>
            <div class="faq-answer text-white/60 h-0 overflow-hidden opacity-0 transition-all duration-500">${r}</div>
        </div>
    `});document.querySelector("#faq-container").insertAdjacentHTML("afterbegin",e.join("")),document.querySelectorAll(".faq-question").forEach(t=>{t.addEventListener("click",s=>{d(s,"faq-question-active")})})},L=async()=>{const e=(await p({cashType:"free"})).map(({title:t,image:s})=>`
    <div class="swiper-slide">
      <div class="relative free-movie-card transition-all duration-500 brightness-50">
        <span class="absolute top-1 right-2 z-10 text-xs bg-green-950 text-green-500 py-1 px-2 rounded-full">رایگان</span>
        <img src="${s}" alt="${t}" class="rounded-lg cursor-pointer mb-2" />
        <p class="text-[10px] lg:text-xs lg:font-bold">${t}</p>
      </div>
    </div>
  `);document.querySelector(".free-movies-swiper > .swiper-wrapper").insertAdjacentHTML("afterbegin",e.join("")),document.querySelectorAll(".free-movie-card").forEach(t=>{t.addEventListener("click",s=>d(s,"free-movie-card-active"))})},M=async()=>{const e=(await g()).map(({href:s,text:r})=>`<li><a href="${s}" class="hover:text-amber-500 transition-all px-6">${r}</a></li>`);document.querySelector("ul.menu").insertAdjacentHTML("afterbegin",e.join("")),document.querySelector("ul.mobile-menu").insertAdjacentHTML("afterbegin",e.join(""));const i=document.querySelector("#mobile-menu-toggle"),o=document.querySelector(".mobile-menu-container");i.addEventListener("click",()=>{o.classList.add("mobile-menu-active")}),document.querySelector("#mobile-menu-close").addEventListener("click",()=>{o.classList.remove("mobile-menu-active")})},m=async()=>{const n=document.querySelector(".movie-filter-option-active"),i=(await p({movieType:n.value})).map((s,r)=>{const{title:a,image:c,isSpecialMovie:f}=s,u="movie-card-img block w-full rounded-lg cursor-pointer";let l="movie-card transition-all duration-500 brightness-50 hover:brightness-100";return r==0&&(l=l+" movie-card-active"),f?`<div class="relative ${l}">
                <img src="${c}" alt="${a}" class="${u}" />
                <span class="text-[8px] md:text-[10px] lg:text-xs font-light absolute w-full text-center bottom-0 py-1.5 bg-black/50 backdrop-blur-md rounded-b-lg">اختصاصی 
                  <span class="text-amber-500 font-black">فیلیمو</span>
                </span>
              </div>`:`<div class="${l}">
              <img src="${c}" alt="${a}" class="${u}" />
            </div>`}),o=document.querySelector("#popular-movies");o.innerHTML="",o.insertAdjacentHTML("afterbegin",i.join("")),document.querySelectorAll(".movie-card").forEach(s=>{s.addEventListener("click",r=>d(r,"movie-card-active"))})},S=()=>{document.querySelectorAll(".movie-filter-option").forEach(e=>e.addEventListener("click",async i=>{d(i,"movie-filter-option-active"),await m()})),m()};M();new Swiper(".hero-swiper",{slidesPerView:"auto",spaceBetween:10,effect:"fade",fadeEffect:{crossFade:!0},loop:!0,autoplay:{delay:3e3},speed:5e3,centeredSlides:!0});S();L();new Swiper(".free-movies-swiper",{breakpoints:{320:{slidesPerView:2,spaceBetween:20},480:{slidesPerView:3,spaceBetween:30},640:{slidesPerView:4,spaceBetween:40},992:{slidesPerView:6,spaceBetween:10}},autoplay:{delay:5e3},loop:!0,speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});y();j();new Swiper(".comments-swiper",{spaceBetween:10,breakpoints:{320:{slidesPerView:1},640:{slidesPerView:2},992:{slidesPerView:3}},autoplay:{delay:5e3},speed:500,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});q();
