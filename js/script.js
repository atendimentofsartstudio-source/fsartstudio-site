
const header=document.getElementById('header');
window.addEventListener('scroll',()=>{
header.style.background=window.scrollY>80?'rgba(5,11,16,.95)':'rgba(5,11,16,.65)';
});
