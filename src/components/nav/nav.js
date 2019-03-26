import './nav.scss'

const navSubmenus = document.querySelectorAll('.nav__submenu');
navSubmenus.forEach((el)=>el.style.display = "none")

const navItems = document.querySelectorAll('.nav__item');
navItems.forEach((el)=>{
  el.addEventListener('mouseenter', event=>{
    event.currentTarget.children[1].style.display = "";
  });
  el.addEventListener('mouseleave', event=>{
    event.currentTarget.children[1].style.display = "none";
  })
})