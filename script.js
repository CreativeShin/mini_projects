const navigation = document.querySelector('.navigation');
const navEl = document.querySelector('nav');
const menu = document.querySelector('.menu');
document.querySelector('.menu').addEventListener('click', ()=>{
    navigation.classList.toggle('clicked');
    menu.classList.toggle('cross');
});

window.addEventListener('scroll', ()=>{
    if(window.scrollY){
        navEl.style.background = "#444";
        navEl.style.height = "60px"; 
    }else{
        navEl.style.background = "none";
    }
});