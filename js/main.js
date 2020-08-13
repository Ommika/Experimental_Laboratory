/*
$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  tab.on(".click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let ActiveTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });

  var mySwiper = newSwiper(".swiper-container", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});
*/
$(document).ready(function () {
  const mMenuBtn = $(".m-menu-button");
  const mMenu = $(".m-menu");
  const tab = $(".tab");

  mMenuBtn.on("click", function () {
    mMenu.toggleClass("active");
    $("body").toggleClass("no-scroll");
  });

  tab.on("click", function () {
    tab.removeClass("active");
    $(this).toggleClass("active");
    let activeTabContent = $(this).attr("data-target");
    $(".tabs-content").removeClass("visible");
    $(activeTabContent).toggleClass("visible");
  });

  var mySwiper = new Swiper(".swiper-container", {
    spaceBetween: 25,
    slidesPerView: 4,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
        slidesOffsetAfter: 50,
        navigation: {
          nextEl: ".button-next",
        },
      },
    },
  });
});

/*
const actors = document.querySelector('#actors'),
  creators = document.querySelector('#creators'),
  cadrsActors = document.querySelector('.cadrs-actors'),
  cadrsCreators = document.querySelector('.cadrs-creators');

const openCreators = () => {
    actors.classList.remove('tabs-active');
    creators.classList.add('tabs-active');
    cadrsActors.classList.remove('is-active');
    cadrsCreators.classList.add('is-active');
  },
  openActors = () => {
    creators.classList.remove('tabs-active');
    actors.classList.add('tabs-active');
    cadrsCreators.classList.remove('is-active');
    cadrsActors.classList.add('is-active');
  };

document.addEventListener('click', event => {
  event.preventDefault();
  if (event.target.closest('#actors')) {
    openActors();
  } else if (event.target.closest('#creators')) {
    openCreators();
  }
})

// creators.addEventListener('click', openCreators);
// autors.addEventListener('click', openActors);
*/