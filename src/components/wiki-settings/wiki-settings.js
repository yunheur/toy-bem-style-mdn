import './wiki-settings.scss'

const navSubmenus = document.querySelectorAll('.wiki-settings__submenu');
navSubmenus.forEach((el)=>el.style.display = "none")

const navItems = document.querySelectorAll('.wiki-settings__item');
navItems.forEach((el)=>{
  el.addEventListener('mouseenter', event=>{
    const child = event.currentTarget.children[1];
    if (child && child.className.indexOf('wiki-settings__submenu') !== -1) {
      child.style.display = "";
    }
  });
  el.addEventListener('mouseleave', event=>{
    const child = event.currentTarget.children[1];
    if (child && child.className.indexOf('wiki-settings__submenu') !== -1) {
      child.style.display = "none";
    }
  })
})