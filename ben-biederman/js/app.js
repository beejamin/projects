const navSlide = () => {
 const burger = document.querySelector('.burger');
 const nav = document.querySelector('.mobile-nav-links');
 const NavLinks = document.querySelectorAll('.mobile-nav-links li');
 
 burger.addEventListener('click', () => {
  //Toggle nav
  nav.classList.toggle('mobile-nav-active');
  
   //Animate Links
 NavLinks.forEach((link, index) => {
  if(link.style.animation) {
   link.style.animation = '';
  }else {
   link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .5}s`;
  }
 }); 
  //Burger animiation
  burger.classList.toggle('toggle');
  
  
});
 
 
}

navSlide();
