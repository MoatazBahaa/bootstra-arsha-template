skillsProgressFill = ()=>{
  document.querySelectorAll(".skills .skill .progress-bar").forEach(el=>{
    if (el.getBoundingClientRect().top - window.innerHeight <= -100){
      el.style.width = el.dataset.w;
    }
  });
};
animateFade = (classAdd, classRemove)=>{
  let elements = document.querySelectorAll(`.${classRemove}`);
  let winHeight = window.innerHeight;
  elements.forEach(el=>{
    if (el.getBoundingClientRect().top - winHeight <= -150){
      if (window.innerWidth >= 991 && el.dataset.delay != null){
        setTimeout(()=>{
          el.classList.remove(classRemove);
          el.classList.add(classAdd);
        }, Number(el.dataset.delay) * 1000);
      }
      else{
        el.classList.remove(classRemove);
        el.classList.add(classAdd);
      }
    }
  });
}
let scrollToTopBtn = document.querySelector(".scroll-to-top");
animateFade("fade-in", "hidden-fade-in");
animateFade("fade-up", "hidden-fade-up");
window.addEventListener("scroll", e=>{
  animateFade("fade-in", "hidden-fade-in");
  animateFade("fade-up", "hidden-fade-up");
  skillsProgressFill();
  // show scroll to top btn on scrolling down
  if (scrollY >= 500){
    scrollToTopBtn.classList.add("show");
  }
  else{
    scrollToTopBtn.classList.remove("show");
  }
});

// remove loading section after 1 sedond
window.onload = ()=>{
  setTimeout(()=>{
    document.querySelector(".load").remove();
  }, 500);
}

// scroll to top btn
scrollToTopBtn.addEventListener("click", ()=>{
  scrollTo(0, 0);
  console.log("Hello btn");
});

// show navbar menu on small screens
let navMenu = document.querySelector(".navbar .navbar-collapse");
let navMneuBtn = document.querySelector(".navbar .navbar-toggler");

navMneuBtn.addEventListener("click", e=>{
  navMenu.classList.toggle("d-none");
});

// Portfolio Section
let portfolioImgsCols = document.querySelectorAll(".portfolio .imgs-container .col.all");
let portfolioSlider = document.querySelector(".portfolio .portfolio-slider");
document.querySelectorAll(".portfolio .portfolio-filters li").forEach(li=>{
  li.addEventListener("click", e=>{
    document.querySelector(".portfolio .portfolio-filters li.active").classList.remove("active");
    e.target.classList.add("active");
    portfolioImgsCols.forEach(col=>{
      col.style.display = "none";
    });
    document.querySelectorAll(`.portfolio .imgs-container .col.${e.target.dataset.elements}`).forEach(col=>{
      col.style.display = "block";
    });
  });
});

// portfolio sllider open
document.querySelectorAll(".portfolio .imgs-container .portfolio-img .fa-plus").forEach(el=>{
  el.addEventListener("click", ev=>{
    portfolioSlider.classList.remove("d-none");
  });
});
// portfolio sllider close
document.querySelector(".portfolio-slider .close-slider").addEventListener("click", e=>{
  portfolioSlider.classList.add("d-none");
});