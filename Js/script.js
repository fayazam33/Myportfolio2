const header=document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky" ,window.scrollY >90)
})

// const scrollDownButton = document.getElementById('scroll-down');

// scrollDownButton.addEventListener('click', () => {

//   const nextSection = document.querySelector('#services');
//   nextSection.scrollIntoView({ behavior: 'smooth' });
// });

let menu=document.querySelector('#menu-icon');
let nav=document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open');
}
// window.addEventListener('scroll', () => {
//     if (window.scrollY > 500) {
//       scrollDownButton.style.display = 'none';
//     } else {
//       scrollDownButton.style.display = 'block';
//     }
//   });