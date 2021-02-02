///////////  jQuery ////////////

// change icons on scroll with jQuery//
$(document).ready(function () {
  // Color Icons
  $(window).scroll(function () {
    if ($(window).scrollTop() > 170) {
      $(".four-scroll").css("color", "rgb(65, 34, 142)");
    } else {
      $(".four-scroll").css("color", "#ffffff");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 240) {
      $(".three-scroll").css("color", "rgb(65, 34, 142)");
    } else {
      $(".three-scroll").css("color", "#ffffff");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $(".two-scroll").css("color", "rgb(65, 34, 142)");
    } else {
      $(".two-scroll").css("color", "#ffffff");
    }
  });
  $(window).scroll(function () {
    if ($(window).scrollTop() > 350) {
      $(".one-scroll").css("color", "rgb(65, 34, 142)");
    } else {
      $(".one-scroll").css("color", "#ffffff");
    }
  });
  // Icons fadeOut fadeIn
  $(window).scroll(function () {
    if ($(window).scrollTop()> 2050 ) {
      $("#fadeFooter").fadeOut('fast');
    } else {
      $("#fadeFooter").fadeIn('slow');
    }
  });
});

// Date Footer Copyright
var d = new Date();
var n = d.getFullYear();

document.getElementById("date").innerHTML = n;

// Scroll Reveal

const sr = ScrollReveal();

sr.reveal(".box--text", {
  origin: "left",
  distance: "500px",
  duration: 700,
});
sr.reveal(".s-one", {
  origin: "bottom",
  distance: "300px",
  duration: 800,
  delay: 700,
});
sr.reveal(".s-two", {
  origin: "top",
  distance: "100px",
  duration: 800,
  delay: 700,
});
sr.reveal(".s-three", {
  origin: "bottom",
  distance: "300px",
  duration: 800,
  delay: 700,
});
sr.reveal(".block1", {
  origin: "left",
  distance: "500px",
  duration: 700,
  delay: 700,
});
sr.reveal(".block3", {
  origin: "left",
  distance: "500px",
  duration: 700,
  delay: 700,
});
sr.reveal(".block2", {
  origin: "right",
  distance: "500px",
  duration: 700,
  delay: 700,
});
sr.reveal(".block4", {
  origin: "right",
  distance: "500px",
  duration: 700,
  delay: 700,
});
sr.reveal(".one", {
  origin: "left",
  distance: "800px",
  duration: 700,
  delay: 600,
});

sr.reveal(".two", {
  origin: "bottom",
  distance: "800px",
  duration: 700,
  delay: 800,
});
sr.reveal(".three", {
  origin: "bottom",
  distance: "800px",
  duration: 700,
  delay: 1000,
});
sr.reveal(".d1", {
  origin: "bottom",
  distance: "800px",
  duration: 700,
  delay: 1000,
});
sr.reveal(".d2", {
  origin: "right",
  distance: "800px",
  duration: 700,
  delay: 1000,
});


const buttons = document.querySelectorAll('.box---p');
const overlay = document.querySelector('.overlay');
const overlayImage = document.querySelector('.overlay-inner img');

function open(e){
    overlay.classList.add('open');
    const src = e.currentTarget.querySelector('img').src;
    overlayImage.src = src;
}

function close(){
    overlay.classList.remove('open');
}

buttons.forEach(button => button.addEventListener('click', open));
overlay.addEventListener('click', close);


// ==============================================

