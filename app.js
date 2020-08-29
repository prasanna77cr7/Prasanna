$("#recipeCarousel").carousel({
  interval: 10000,
});

$(".carousel .carousel-item").each(function () {
  var minPerSlide = 3;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }

    next.children(":first-child").clone().appendTo($(this));
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
function scrolltoskills() {
  document.getElementById("tech-section").scrollIntoView({
    behavior: "smooth",
  });
}
function scrolltoprojects() {
  document.getElementById("projects-section").scrollIntoView({
    behavior: "smooth",
  });
}
function scrolltoexp() {
  document.getElementById("experience-section").scrollIntoView({
    behavior: "smooth",
  });
}
function scrolltoedu() {
  document.getElementById("education-section").scrollIntoView({
    behavior: "smooth",
  });
}
function scrolltoabout() {
  document.getElementById("about-section").scrollIntoView({
    behavior: "smooth",
  });
}

function scrolltocontact() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth",
  });
}
