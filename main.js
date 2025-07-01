/*---================ TOGGLE BUTTON ======================---*/
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link")
const hambuger = document.getElementById("hambuger")

hambuger.addEventListener("click", () => {
   navMenu.classList.toggle("left-[0]")
   hambuger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
   link.addEventListener("click", () => {
      navMenu.classList.toggle("left-[0]")
      hambuger.classList.toggle('ri-close-large-line')
   })
})


/*---================ SHOW SCROOL ======================---*/
const scrollUp = () => {
   const scrollUpBtn = document.getElementById("scroll-up")

   if(this.scrollY >=250) {
      scrollUpBtn.classList.remove("-bottom-1/2")
      scrollUpBtn.classList.add("bottom-4")
   } else {
      scrollUpBtn.classList.add("-bottom-1/2")
      scrollUpBtn.classList.remove("bottom-4")
   }
}

window.addEventListener("scroll", scrollUp)


/*---================ CHANGE BACKGOUND HEADER ======================---*/

const scrollHeader = () => {
   const header = document.getElementById("navbar")

   if(this.scrollY >=50) {
      header.classList.add("border-b", "border-yellow-500")
   } else {
      header.classList.remove("border-b", "border-yellow-500")
   }
}

window.addEventListener("scroll", scrollHeader)

/*---================ SWIPER ======================---*/
const swiper = new Swiper('.swiper', {
  // Optional parameters
  speed: 400,
  spaceBetween: 30,
  Autoplay: {
   delay: 3000,
   disableOnInteraction: false
  },



  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  grabCursor: true,
  breakpoints: {
   640: {
      slidesPerView: 1
   },

   768: {
      slidesPerView: 2
   },

   1024: {
      slidesPerView: 3
   },
  }
});


/*---================ SCROLL SECTION ACTIVE LINK ======================---*/
const activeLink = () => {
   const sections = document.querySelectorAll('section')
   const navLinks = document.querySelectorAll('.nav-link')

   let current = "home"

   sectons.forEach(section => {
      const sectionTop = section.offsetTop;

      if(this.scrollY >= sectionTop -60) {
         current = section.getAttribute("id")
      }
   })

   navLinks.forEach(item => {
      item.classList.remove("active")

      if(item.href.includes(current)) {
         item.classList.add("active")
      }
   })
}

window.addEventListener("scroll", activeLink)


/*---================ SCROLL REVEAL ANIMATON ======================---*/
const sr = ScrollReveal({
   origin:"top",
   distance: "60px",
   duration: 2500,
   delay: 300,
   reset: true
})


sr.reveal('.home_data, .about_top, .popular_top, .review_top, .review_swiper, .footer_icon, .footer_content, .copy_right')
sr.reveal('.home_image ', {delay: 500, scale: 0.5})

sr.reveal('.service_card, .popular_card', {interval: 100})

sr.reveal('.about_leaf', {delay: 1000, origin: "right"})
sr.reveal('.about_item_1_content, .about_item_2_image', {origin: "right"})
sr.reveal('.about_item_2_content, .about_item_1_image', {origin: "left"})

sr.reveal('.review_leaf, .footer_floral', {delay: 1000, origin: "left"})
