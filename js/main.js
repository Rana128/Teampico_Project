$(".slide3").owlCarousel({
    items:5,
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed:1000,
    center:true,
    dots:false,
    responsive:{
    0:{
      items:1,
      nav:false,
    },
    576:{
      items:2,
      nav:false,
    },
    768:{
      items:3,
      nav:false,
     },
    992:{
      items:5,
      nav:false,
   }

  }
    
});

$(".slide1").owlCarousel({
    items:3,
    nav:true,
    loop:true,
    responsive:{
    0:{
      items:1,
      nav:false,
    },
    576:{
      items:2,
      nav:false,
    },
    768:{
      items:3,
      nav:false,
     },

  }
    
});

var mixer = mixitup('.all');


$(document).ready(function(){
$(window).scroll(function(){
  if($(this).scrollTop() > 40){
    $('#topbtn').slideDown(400);
  }else{
    $('#topbtn').slideUp(400);
  }
});
});


const indicator = document.getElementById('ind');
indicator.addEventListener('click', ()=>{
document.body.classList.toggle('java');
})

$('.counter').counterUp({
delay: 10,
time: 1000
});
$('.hemo').ripples({

// Image Url
imageUrl: null,

// The width and height of the WebGL texture to render to. 
// The larger this value, the smoother the rendering and the slower the ripples will propagate.
resolution: 256,

// The size (in pixels) of the drop that results by clicking or moving the mouse over the canvas.
dropRadius: 20,

// Basically the amount of refraction caused by a ripple. 
// 0 means there is no refraction.
perturbance: 0.04,

// Whether mouse clicks and mouse movement triggers the effect.
interactive: true,

// The crossOrigin attribute to use for the affected image. 
crossOrigin: ''

});