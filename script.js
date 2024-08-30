//copy menu for mobile
 function copyMenu() {
    //copy inside
    var dptCategory = document.querySelector('.dpt-cat');
    var dptplace = document.querySelector('.departments');
    dptplace.innerHTML = dptCategory.innerHTML;

    //copy inside nav nav 
    var mainNav = document.querySelector('.header-nav nav');
    var navPalce = document.querySelector('.off-canvas nav')
    navPalce.innerHTML = mainNav.innerHTML;


    //copy .header-top .wraper to .thetop-nav
    var topNav = document.querySelector('.header-top .wrapper');
    var topPlace = document.querySelector('.off-canvas .thetop-nav')
    topPlace.innerHTML = topNav.innerHTML;


 }
 copyMenu();

 // show mobile menu
 const menuButton = document.querySelector('.trigger'),
 closeButton = document.querySelector('.t-close'),
 addClass = document.querySelector('.site');
 menuButton.addEventListener('click', function() {
  addClass.classList.toggle('showmenu')
 })
 closeButton.addEventListener('click', function(){
  addClass.classList.remove('showmenu')
 })


 //show sub menu on mobile//

 const submenu = document.querySelectorAll('.has-child .icon-small');
 submenu.forEach((menu) => menu.addEventListener('click', toggle));

 function toggle(e) {
   e.preventDefault();
   submenu.forEach((item) => item != this ? item.closest('.has-child').classList.remove('expand') : null);
   if (this.closest('.has-child').classList != 'expand');
   this.closest('.has-child').classList.toggle('expand')
 }

 // slider ///

 const swiper = new Swiper('.swiper', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
  },

});

//show search

const searchButton = document.querySelector('.t-search'),
      tClose= document.querySelector('.search-close'),
      showClass = document.querySelector('.site');
searchButton.addEventListener('click', function() {
  showClass.classList.toggle('showsearch')
})  
tClose.addEventListener('click', function() {
    showClass.classList.remove('showsearch')
})
