const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// .hero{

//   width: 85%;
//   margin: 0 auto;
//   margin-top: 5%;
//   display: flex;
//   align-items: center;
//   justify-content: space-evenly;
// }
// #hero .mobile_photo img {
//  padding-left: 25%;
//  width: 100%;
//   height: 752px;

// }

// .box {
//   width:40%;
//   padding-bottom: 5%;
//   background-color: #fdfffe;
//   /* position: relative;
//   top: -55%;
//   left: 135px;*/
//   z-index: 50000; 
//   position: relative;

// }

// .box h2 {
//   color: #5956E9;
//   font-family: Josefin Sans;
//   font-size: 48.83px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: 130%;
//   text-transform: uppercase;
//   padding-top: 40px;
//   padding-left: 30px;
//   padding-right: 23px;
// }

// .box p {
//   color: #6C6C72;
//   font-family: Josefin Sans;
//   font-size: 16px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: 24px;
//   padding-left: 30px;
//   padding-right: 53px;
//   align-items: center;
//   margin-top: 2%;
// }

// .box h5 {
//   color: #232233;
//   font-family: Josefin Sans;
//   font-size: 25px;
//   font-style: normal;
//   font-weight: 600;
//   line-height: 37.5px;
//   text-transform: uppercase;
//   margin-left: 30px;
//   margin-top: 10%;
// }

// .box img {
//   width: 314px;
//   height: 47px;
//   margin-bottom: -8%;
//   margin-left: 4.5%;

// }

// /* .border {
//   position: absolute;
//   width: 95%;
//   height: 110%;
//   border: 20px solid #7572FF;
//   z-index: 5000;
//   top: -10%;
//   left: 8%;

// } */

const toggleNavbar = document.getElementById("toggleNavbar");
const closeNavbar = document.getElementById("closeNavbar");

toggleNavbar.addEventListener("click", () => {
  document.getElementById("mobileNavbar").classList.toggle("active");
});

closeNavbar.addEventListener("click", () => {
  document.getElementById("mobileNavbar").classList.remove("active");
});