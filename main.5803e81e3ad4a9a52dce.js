(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(t,e,a){},QfWi:function(t,e,a){"use strict";a.r(e);a("iPZ8"),a("kypl"),a("uQK7"),a("8cZI"),a("lmye"),a("Xlt+"),a("JBxO"),a("FdtR"),a("L1EO");var i={list:document.querySelector(".list"),form:document.querySelector(".form"),output:document.querySelector(".output"),btnToLoadMoreFilms:document.querySelector(".load-more--films"),img:document.querySelectorAll(".list-item__image"),trigger:document.querySelector(".trigger"),nav:document.querySelector(".navigation"),library:document.querySelector(".library"),home:document.querySelector(".home"),container:document.querySelector(".wrapperer"),listLibrary:document.querySelector(".list-library"),previous:document.querySelector(".previous"),next:document.querySelector(".next"),btn:document.querySelector(".btn"),amount:1,counter:1,fetcher:fetch("https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=1").then((function(t){return t.json()})).then((function(t){return t.results}))};i.fetcher.then((function(t){console.log(t),t.map((function(t){null!==t.poster_path&&null!==t.poster_path&&i.list.insertAdjacentHTML("beforeend","<li class = 'list-item' data-id = '"+t.id+"'><div class = 'overage'>"+t.vote_average+"</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"' data-title = \""+t.title+'" data-description = "'+t.overview+"\" data-img = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"'><h3 class = 'heading'>"+t.title+"</h3></li>")}))}));var r=a("rGjz"),o=a.n(r),n={value:"",getValue:function(t){this.value=t}};i.form.addEventListener("submit",(function(t){t.preventDefault(),console.log(t.target.elements),""!==t.target.elements[0].value?(n.getValue(t.target.elements[0].value),fetch("https://api.themoviedb.org/3/search/movie?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=1&include_adult=false&query="+t.target.elements[0].value).then((function(t){return t.json()})).then((function(t){i.list.innerHTML=""+t.results.map((function(t){if(null!==t.poster_path)return null!==t.poster_path?"<li class = 'list-item' data-id = '"+t.id+"'><div class = 'overage'>"+t.vote_average+"</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"' data-title = \""+t.title+'" data-description = "'+t.overview+"\" data-img = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"'><h3 class = 'heading'>"+t.title+"</h3></li>":void 0})).join("")}))):""===t.target.elements[0].value&&o.a.fire({icon:"error",title:"not found films"})}));i.trigger.addEventListener("click",(function(){i.nav.classList.toggle("open"),i.trigger.classList.toggle("rotate-trigger")}));i.form.addEventListener("submit",(function(t){t.preventDefault(),i.amount=1})),i.btnToLoadMoreFilms.addEventListener("click",(function(t){n.value?(i.counter=1,i.form.reset(),fetch("https://api.themoviedb.org/3/search/movie?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page="+(i.amount+=1)+"&include_adult=false&query="+n.value).then((function(t){return t.json()})).then((function(t){return t.results.map((function(t){null!==t.poster_path&&null!==t.poster_path&&i.list.insertAdjacentHTML("beforeend","<li class = 'list-item' data-id = '"+t.id+"'><div class = 'overage'>"+t.vote_average+"</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"' data-title = \""+t.title+'" data-description = "'+t.overview+"\" data-img = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"'><h3 class = 'heading'>"+t.title+"</h3></li>")}))}))):""===n.value&&(i.amount=1,fetch("https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page="+(i.counter+=1)).then((function(t){return t.json()})).then((function(t){return t.results.map((function(t){null!==t.poster_path&&null!==t.poster_path&&i.list.insertAdjacentHTML("beforeend","<li class = 'list-item' data-id = '"+t.id+"'><div class = 'overage'>"+t.vote_average+"</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"' data-title = \""+t.title+'" data-description = "'+t.overview+"\" data-img = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"'><h3 class = 'heading'>"+t.title+"</h3></li>")}))})))}));a("IvQZ"),a("4NM0");var s=a("SgsS"),l=a.n(s),c=[];i.list.addEventListener("click",(function(t){t.preventDefault();var e=t.target.closest("li").dataset.id;"IMG"===t.target.nodeName&&l.a.fire({title:""+t.target.dataset.title,text:""+t.target.dataset.description,imageUrl:""+t.target.dataset.img,imageHeight:450,imageWidth:300,backdrop:"rgba(0, 0, 0, 0.75)",showCloseButton:!0,confirmButtonText:"add to your watched?",confirmButtonColor:"#f03a61",background:"#f6f4f3",customClass:{popup:"modal"}}).then((function(t){t.value&&(l.a.fire({icon:"success",title:"Added to your watched",showConfirmButton:!1,timer:1800,background:"#f6f4f3"}),fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=e9f6322f77334e3f0406d6b8eabd79ce").then((function(t){return t.json()})).then((function(t){null===localStorage.getItem("favorite")?(localStorage.setItem("favorite",JSON.stringify([])),c=JSON.parse(localStorage.getItem("favorite")),!1===localStorage.getItem("favorite").includes(JSON.stringify(t))&&c.push(t),localStorage.setItem("favorite",JSON.stringify(c))):(c=JSON.parse(localStorage.getItem("favorite")),!1===localStorage.getItem("favorite").includes(JSON.stringify(t))&&c.push(t),localStorage.setItem("favorite",JSON.stringify(c)))})))}))}));i.library.addEventListener("click",(function(t){t.preventDefault(),i.form.classList.add("none"),i.btnToLoadMoreFilms.classList.add("none"),i.listLibrary.classList.remove("none"),i.list.classList.add("none");var e=JSON.parse(localStorage.getItem("favorite"));i.listLibrary.innerHTML=""+e.map((function(t){return"<li class = 'list-item--watched' data-id = '"+t.id+"'><div class = 'overage'>"+t.vote_average+"</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"' data-title = \""+t.title+'" data-description = "'+t.overview+'" data-img = "https://image.tmdb.org/t/p/w500/'+t.poster_path+"\"\"><h3 class = 'heading'>"+t.title+"</h3></li>"})).join("")}));i.home.addEventListener("click",(function(t){t.preventDefault(),i.form.classList.remove("none"),i.btnToLoadMoreFilms.classList.remove("none"),i.listLibrary.classList.add("none"),i.list.classList.remove("none"),n.value="",i.form.reset(),fetch("https://api.themoviedb.org/3/movie/popular?api_key=4aa539255aa0c2506cf45806a15a8a0a&language=en-US&page=").then((function(t){return t.json()})).then((function(t){i.list.innerHTML=""+t.results.map((function(t){if(null!==t.poster_path)return null!==t.poster_path?"<li class = 'list-item' data-id = '"+t.id+"'><div class = 'overage'>"+t.vote_average+"</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"' data-title = \""+t.title+'" data-description = "'+t.overview+"\" data-img = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"'><h3 class = 'heading'>"+t.title+"</h3></li>":void 0})).join("")})),i.amount=1,i.counter=1}));a("dYFc");i.listLibrary.addEventListener("click",(function(t){t.preventDefault();var e=t.target.closest("li").dataset.id;"IMG"===t.target.nodeName&&l.a.fire({imageUrl:""+t.target.dataset.img,title:""+t.target.dataset.title,text:""+t.target.dataset.description,showCloseButton:!0,imageHeight:450,imageWidth:300,backdrop:"rgba(0, 0, 0, 0.75)",confirmButtonText:"remove from watched?",confirmButtonColor:"#f03a61",background:"#f6f4f3"}).then((function(t){t.value&&(l.a.fire({icon:"success",title:"removed from watched",showConfirmButton:!1,timer:1800,background:"#f6f4f3"}),fetch("https://api.themoviedb.org/3/movie/"+e+"?api_key=e9f6322f77334e3f0406d6b8eabd79ce").then((function(t){return t.json()})).then((function(t){var e=JSON.parse(localStorage.getItem("favorite")),a=[];e.map((function(t){return a.push(t.id)}));var r=a.indexOf(t.id);r>-1&&e.splice(r,1),localStorage.setItem("favorite",JSON.stringify(e)),i.listLibrary.innerHTML=""+e.map((function(t){return"<li class = 'list-item--watched' data-id = '"+t.id+"'><div class = 'overage'>"+t.vote_average+"</div><img class = 'list-item__image' src = 'https://image.tmdb.org/t/p/w500/"+t.poster_path+"' data-title = \""+t.title+'" data-description = "'+t.overview+'" data-img = "https://image.tmdb.org/t/p/w500/'+t.poster_path+"\"\"><h3 class = 'heading'>"+t.title+"</h3></li>"})).join("")})))}))}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.5803e81e3ad4a9a52dce.js.map