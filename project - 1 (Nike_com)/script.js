document.addEventListener('DOMContentLoaded', function() {


// intro video js
let lastScrollTop = 0;

window.addEventListener("scroll", () => {
  const currentScroll = document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    document.getElementById("navbar").style.top = "-70px";
  } else {
    document.getElementById("navbar").style.top = "0";
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});
gsap.to("#intro-text", {
  delay: 2.72,
  display: "flex",
})

gsap.to("#intro-text h1", {
  delay: 2.88,
  opacity: 1,
})

setTimeout(()=> {
  document.getElementById("intro_video").style.opacity = "0";
  document.getElementById("intro-text").style.opacity = "0";
},6000);


setTimeout(()=> {
  document.body.style.overflowY = 'visible';
  document.getElementById("head").style.display= "block";
  document.getElementById("navbar").style.display= "flex";
  document.getElementById("intro_video").style.display = "none";
  document.getElementById("intro-text").style.display = "none";
  

  var forNavbar = gsap.timeline();

  forNavbar.from("nav ul li", {
    opacity: 0,
    stagger: 0.2,
    y: -10,
  });
  forNavbar.from(".search_input_box", {
    duration: 0.5,
    opacity: 0,
    y: -10,
  });
  forNavbar.from(".nav_logo .fa-magnifying-glass", {
    duration: 0.5,
    opacity: 0,
    y: -10,
  });
  forNavbar.from("nav .nav_logo .fa-heart", {
    duration: 0.5,
    opacity: 0,
    y: -5,
  });
  forNavbar.from("nav .nav_logo .fa-bag-shopping", {
    duration: 0.5,
    opacity: 0,
    y: -5,
  });
},7200);

// for removing items from teh wishlist------------------------------------------->


  document.querySelectorAll('.close_icon').forEach(icon => {
    icon.addEventListener('click', function() {
      this.closest('.heartInnerCon').style.display = 'none';
    });
  });


const iconClose = document.querySelector('.icon-close');
const iconCloseConfirm = document.querySelector('.icon-close-confirm');
const wrapper = document.querySelector('.wrapper');
const btnOpen = document.querySelector('.btn_buy_now');
const confirmationPopup = document.querySelector('.confirmation-popup');
const purchaseForm = document.getElementById('purchase-form');

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

btnOpen.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

iconCloseConfirm.addEventListener('click', () => {
    confirmationPopup.style.display = 'none';
});

purchaseForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form from submitting the traditional way

    // Validate form fields
    const name = purchaseForm.querySelector('input[placeholder="Name"]').value;
    const email = purchaseForm.querySelector('input[placeholder="Email"]').value;
    const address = purchaseForm.querySelector('input[placeholder="Address with pincode"]').value;
    const paymentOption = purchaseForm.querySelector('input[name="payment"]:checked');

    if (name && email && address && paymentOption) {
        // All fields are filled
        wrapper.classList.remove('active-popup');
        confirmationPopup.style.display = 'block';
    } else {
        // Some fields are missing
        alert('Please fill all the fields.');
    }
});

// for navMenu _______________________________________________
let sideBar  = document.getElementById('menuCheck');
let sideMenu = document.getElementById('show_menu');
let Tcommon1 = document.getElementById("Tcommon1");
let Tcommon2 = document.getElementById("Tcommon2");

sideBar.addEventListener("click", ()=> {
  if(sideBar.checked) {
    sideMenu.style.right = "0px";
  }
  else {
    sideMenu.style.right = "-900px";
  }
})

// _____Dropdown function finishes________________________________

// section1 js and gsap starts here ___________________________________

gsap.to([".bubble1", ".bubble4"], {
  y: -150,
  scrollTrigger: {
    trigger: "#section1",
    scroller: "body",
    scrub: true,
    start: "top top",
    end: "center top"
  }
});

gsap.to([".bubble2", ".bubble3"], {
  y: -170,
  scrollTrigger: {
    trigger: "#section1",
    scroller: "body",
    scrub: true,
    start: "top top",
    end: "center top"
  }
});

gsap.to([".bubble5", ".bubble6"], {
  y: -200,
  scrollTrigger: {
    trigger: "#section1",
    scroller: "body",
    scrub: true,
    start: "top top",
    end: "center top"
  }
});

// the section 1 js ends here  ____________________________________________________

// section 2 js starts _______________________________________________________________


gsap.to(".gallery-outerBox", {
  height: "90%",
  width: "90%",
  borderRadius: "20px",
  scrollTrigger: {
    trigger: "#section2",
    scroller:"body",
    scrub: 0.25,
    start:"10% top",
    end: "10% -20%",
  }
});


// section 2 js ends ____________________________________________________________________

// section4 js starts ___________________________________________________

var video = document.getElementById("section4-video");

        // Function to update the video source based on screen width
        function updateVideoSource() {
            if (window.innerWidth <= 700) {
                video.src = "IMG's/Different Category Photos/Section 4 Banners/sec_4_video_mobile.mp4";
            } else {
                video.src = "IMG's/Different Category Photos/Section 4 Banners/sec_4_video_laptop.mp4";
            }
            video.load(); // Reload the video with the new source
        }
        // Initial check
        updateVideoSource();

        // Update on resize
        window.addEventListener('resize', updateVideoSource);

        // Intersection Observer to play/pause the video
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }, { threshold: 0.5 })

        observer.observe(document.querySelector("#section4"));

// section4 js ends ______________________________________________________

// section6 js starts _____________________________________________

const tagline3 = document.getElementById('tagline3');
    const phrases = ['KIDS', 'PROS', 'DREAMERS', 'WOMEN', 'TEAMS', 'COACHES', 'MEN', 'REBELS', 'BEGINNERS', 'ATHLETES*'];
    let currentIndex = 0;
    let interval;

    function startTextChange() {
      if (!interval) {
        interval = setInterval(() => {
          tagline3.innerText = phrases[currentIndex];
          currentIndex++;
          if (currentIndex >= phrases.length) {
            clearInterval(interval);
          }
        }, 200);
      }
    };

    gsap.to("#section6", {
      scrollTrigger: {
        scroller: "body",
        trigger: "#section6",
        scrub: 0.25,
        start: "top top",
        onEnter: startTextChange,
      },
    });

    const section6_1 = document.querySelectorAll('#heading, #heroline, #info-line1, .info-content2 h1, .card');
    section6_1.forEach(element => {
        gsap.fromTo(element, 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, 
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    once: true
                }
            });
    });
    const section6_2 = document.querySelectorAll('#section6_2 h1, .box');

    section6_2.forEach(element => {
        gsap.fromTo(element, 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, 
                scrollTrigger: {
                    trigger: element,
                    start: "top 80%",
                    once: true
                }
            });
    });
   

// section6 js ends __________________________________________________

// section 7 js starts __________________________________

var swiper2 = new Swiper(".mySwiper", {
  slidesPerView: 1.2,
  spaceBetween: 25,

  autoplay:{
    delay:3500,
    disableOnInteraction:false,
  },

  breakpoints:{
      
      700:{
          slidesPerView: 2,
          spaceBetween: 50,
      },
      1100:{
          slidesPerView:3,
          spaceBetween:50,
      },
      1500:{
          slidesPerView:4,
          spaceBetween:50,
      },

},
});

// section 7 js ends ________________________________________



var swiper = new Swiper('.swiper-container', {
  speed: 1000,
  pagination: {
      el: '.swiper-pagination',
      clickable: true,
  },
  navigation: {
      nextEl: '.swiper_button_next',
      prevEl: '.swiper_button_prev',
  },
  mousewheel: {
      // invert: false,
      forceToAxis: true,  // Scrolls only horizontally
      sensitivity: 1,
      releaseOnEdges: true // Allow scrolling beyond the first and last slide
  },

});

// add for on click event
let gradient_box = document.getElementById("gradient_box");
let shoes = document.querySelectorAll(".shoes_list_container .platform .shoes");
let active_product_img = document.getElementById("active_product_img");
const swiperWrapper = document.querySelector('.swiper-wrapper');

// for product Ifo
const open_shoes_box = document.getElementById("open_shoes_box");
const blur_full_screen_bg = document.getElementById("blur_full_screen_bg");
const product_name = document.getElementById("product_name");
const small_name = document.getElementById("small_name");
const product_MRP = document.getElementById("product_MRP");
const product_description = document.getElementById("product_description");
const product_rating_star = document.getElementById("product_rating_star");
const product_size = document.getElementById("product_size");
const right_side_shoes_bg = document.getElementById("right_side_shoes_bg");

// Function to add elements dynamically
function create_and_add_shoes() {
  swiperWrapper.innerHTML = ""

  // Calculate number of items per slide based on screen width
  let itemsPerSlide = (4 * 2);
  const screenWidth = window.innerWidth;
  if (screenWidth <= 1350) {
      itemsPerSlide = (3 * 2);
  }
  if (screenWidth <= 970) {
      itemsPerSlide = (2 * 2);
  }
  if (screenWidth <= 670) {
      itemsPerSlide = 2;
  }

  // Create initial swiper-slide and containerDiv
  let swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  swiperWrapper.appendChild(swiperSlide);

  let containerDiv = document.createElement('div');
  containerDiv.classList.add('shoes_list_container');
  swiperSlide.appendChild(containerDiv);

  data_array.forEach((element, index) => {
      if (index % itemsPerSlide === 0 && index !== 0) {
          // Create new swiper-slide and containerDiv for every itemsPerSlide elements
          swiperSlide = document.createElement("div");
          swiperSlide.classList.add("swiper-slide");
          swiperWrapper.appendChild(swiperSlide);

          containerDiv = document.createElement('div');
          containerDiv.classList.add('shoes_list_container');
          swiperSlide.appendChild(containerDiv);
      }

      // Create platform div
      const platformDiv = document.createElement('div');

      platformDiv.classList.add('platform');

      // Create img element
      const imgElement = document.createElement('img');
      imgElement.src = element.img_path;
      imgElement.id = element.id;
      imgElement.alt = "Shoes";
      // bottom: ;
      imgElement.style.bottom =`calc(-7px + ${element.set_height})` 
      imgElement.classList.add('shoes');

      imgElement.addEventListener("click", () => {
          click_add_img(imgElement.src);
          const product = imgElement.id;
          //with this work when user select any shoes
          let get_data_id = parseInt(product) - 1
          add_product_details(data_array[get_data_id])
      });

      const name_text = document.createElement('div');
      name_text.innerHTML = element.name
      name_text.classList.add('name_text');

      // Append img to platform
      platformDiv.appendChild(imgElement);
      platformDiv.appendChild(name_text);

      // Append platform to swiper slide
      containerDiv.appendChild(platformDiv);
  });
}
create_and_add_shoes();
// small function effet for when resize or onload
function for_reload_resize() {
  gsap.fromTo('.shoes_list_container .platform .shoes', { opacity: 0 }, { opacity: 1, duration: 1 });
}
for_reload_resize()

// this event for responsive(some part set with css)
window.addEventListener("resize", function () {
  create_and_add_shoes();
  for_reload_resize();
})

// when user click on any shoes
function click_add_img(img_src) {
  open_shoes_box.classList.add("active")
  blur_full_screen_bg.classList.add("active")
  active_product_img.classList.add("active")
  active_product_img.innerHTML = `<img src="${img_src}">`
  document.body.style.overflowY = 'hidden';
}

// for back to menu
function click_remove_img() {
  blur_full_screen_bg.classList.remove("active")
  open_shoes_box.classList.remove("active")
  active_product_img.classList.remove("active")
  document.body.style.overflowY = 'visible';
}

document.getElementById("close_shoes_box").addEventListener("click", click_remove_img)

// on click add details about click
function add_product_details(get_data) {

  // add small animation for bg
  setTimeout(() => {
      right_side_shoes_bg.style.background = get_data.img_default_color    
  }, 1.5);
  
  //add small name of product
  let create_p_1 = document.createElement("p");
  create_p_1.innerText = get_data.product_name;
  small_name.innerHTML = "";
  // small_name.style.color = get_data.img_default_color
  small_name.appendChild(create_p_1);


  let create_p_2 = document.createElement("p");
  create_p_2.innerText = get_data.name;
  product_name.innerHTML = "";
  product_name.appendChild(create_p_2);

  //add rating of product
  product_rating_star.innerHTML = "";
  let total_product_rating = get_data.product_rating;
  for (let i = 0; i < total_product_rating; i++) {
      let create_img = document.createElement("img");
      create_img.src = "IMG's/LOGO/star.png";
      create_img.alt = "rating star";
      product_rating_star.appendChild(create_img);
  }
  //add MRP of product
  let create_p_4 = document.createElement("p");
  create_p_4.innerText = `MRP : ₹ ${get_data.product_MRP}`;
  let create_p_4_3 = document.createElement("p");
  create_p_4_3.innerText = "incl. of taxes \n (Also includes all applicable duties)";
  product_MRP.innerHTML = "";
  product_MRP.appendChild(create_p_4);
  product_MRP.appendChild(create_p_4_3);
}

// add effect for left - men and women button
document.querySelector('#men').addEventListener('click', function () {
  gsap.fromTo(
      ".swiper-slide-active .shoes_list_container",
      { x: 0, opacity: 1 }, // starting position
      {
          x: -250, opacity: 0,
          duration: 0.7, onComplete: function () { // move down 200px
              gsap.to(".swiper-slide-active .shoes_list_container", { x: 0, duration: 0.7, opacity: 1 }); // move back to original position
          }
      }
  );
});
// add effect for left - men and women button
document.querySelector('#women').addEventListener('click', function () {
  gsap.fromTo(
      ".swiper-slide-active .shoes_list_container",
      { x: 0, opacity: 1 }, // starting position
      {
          x: 250, opacity: 0,
          duration: 0.7, onComplete: function () { // move down 200px
              gsap.to(".swiper-slide-active .shoes_list_container", { x: 0, duration: 0.7, opacity: 1 }); // move back to original position
          }
      }
  );
});

let mainCon = document.querySelectorAll("#mainCon .box");
const mainCon_con = document.getElementById("mainCon");
const next_page_item = document.getElementById("next_page_item");

let title_con = document.querySelector("#next_page_item .title_con .title")

mainCon.forEach((element,index)=>{
  element.addEventListener("click",()=>{
    // set title
    title_con.innerHTML = element.querySelector("h1").innerHTML
    element.style.opacity = "0"
    // first set opacity 0
    setTimeout(() => {
      // mainCon_con.style.opacity = "0.2"
      mainCon_con.style.opacity = "0"
    }, 600);
    setTimeout(() => {
      mainCon_con.style.display = "none"
      setTimeout(() => {
        next_page_item.style.display = "flex"
        next_page_item.style.opacity = "1"
      }, 10);
    }, 900);

    document.getElementById("back_to_next_page_item").addEventListener("click",()=>{
      element.style.opacity = "1"
      next_page_item.style.display = "none"
      mainCon_con.style.display = "grid"
      mainCon_con.style.opacity = "1"   
    });
  })
});

let sec5_platform = document.querySelectorAll(".sec5_platform");
let sec_5_shoes_list_container = document.getElementById("sec_5_shoes_list_container");

// Clear previous content inside sec_5_shoes_list_container
// sec_5_shoes_list_container.innerHTML = "";

data_array.forEach((element, index) => {
  if (index < 5 || index >= 15) {
    return; // Skip the loop iteration if the index is less 
  }
  // Create platform div
  const sec5_platform = document.createElement('div');
  sec5_platform.classList.add('sec5_platform');

  // Create img element
  const imgElement = document.createElement('img');
  imgElement.src = element.img_path;
  imgElement.id = element.id;
  imgElement.alt = "Shoes_sec_5";
  imgElement.style.bottom = `calc(-7px + ${element.set_height})`; // Example style setting

  imgElement.classList.add('sec5_shoes');

  imgElement.addEventListener("click", () => {
    click_add_img(imgElement.src);
    const product = imgElement.id;
    let get_data_id = parseInt(product) - 1;
    sec_add_product_details(data_array[get_data_id]);
  });

  // Create name_text div
  const name_text = document.createElement('div');
  name_text.innerHTML = element.name;
  name_text.classList.add('name_text');

  // Append img and name_text to platform
  sec5_platform.appendChild(imgElement);
  sec5_platform.appendChild(name_text);

  // Append platform to sec_5_shoes_list_container
  sec_5_shoes_list_container.appendChild(sec5_platform);
});

document.querySelector(".sec5_platform").addEventListener("click",function(){
  let get_data_id = parseInt(product) - 1
  add_product_details(data_array[get_data_id])
});

function sec_add_product_details(get_data) {

  // add small animation for bg
  setTimeout(() => {
      right_side_shoes_bg.style.background = get_data.img_default_color    
  }, 1.5);
  
  //add small name of product
  let create_p_1 = document.createElement("p");
  create_p_1.innerText = get_data.product_name;
  small_name.innerHTML = "";
  // small_name.style.color = get_data.img_default_color
  small_name.appendChild(create_p_1);


  let create_p_2 = document.createElement("p");
  create_p_2.innerText = get_data.name;
  product_name.innerHTML = "";
  product_name.appendChild(create_p_2);

  //add rating of product
  product_rating_star.innerHTML = "";
  let total_product_rating = get_data.product_rating;
  for (let i = 0; i < total_product_rating; i++) {
      let create_img = document.createElement("img");
      create_img.src = "IMG's/LOGO/star.png";
      create_img.alt = "rating star";
      product_rating_star.appendChild(create_img);
  }
  //add MRP of product
  let create_p_4 = document.createElement("p");
  create_p_4.innerText = `MRP : ₹ ${get_data.product_MRP}`;
  let create_p_4_3 = document.createElement("p");
  create_p_4_3.innerText = "incl. of taxes \n (Also includes all applicable duties)";
  product_MRP.innerHTML = "";
  product_MRP.appendChild(create_p_4);
  product_MRP.appendChild(create_p_4_3);
}

let heart = document.querySelector(".like")
let heartContainer = document.getElementById('heartOuter')

heart.addEventListener('click',()=>{
  heartContainer.classList.toggle ('show')
})

// section 4 code starts from here 

document.getElementById('like_icon').addEventListener('click', function() {
  this.style.display = 'none';
  document.getElementById('filled_icon').style.display = 'block';
});

document.getElementById('filled_icon').addEventListener('click', function() {
  this.style.display = 'none';
  document.getElementById('like_icon').style.display = 'block';
});

});