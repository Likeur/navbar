const menuAdd = document.querySelector(".menu");
console.log(menuAdd);

const btn=document.querySelector("button");
console.log(btn);

btn.addEventListener('click', ()=>{
    menuAdd.classList.toggle("nomenu");
});