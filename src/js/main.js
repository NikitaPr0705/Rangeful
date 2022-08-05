/**
 * название функции
 *
 * @param {number} first - первое число
 * @returns {number}
 */

 jQuery(document).ready(function(){
  jQuery('.fs-slider').slick({
    autoplay: false,
    // adaptiveWidth: true,
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveWidth: true,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          dots: false,
        }
      }

    ]
  });

  jQuery('.popular-products-slider').slick({
    autoplay: false,
    // adaptiveWidth: true,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    // variableWidth: false,
    // adaptiveWidth: true,
    cssEase: 'linear',

    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,

          // swipe: true,
          // swipeToSlide: true,
          // touchMove: true,
          // touchThreshold: 5,
          // adaptiveWidth: false,
        }
      }

    ]
  });

  jQuery('.slider-for').slick({
    // autoplay: false,
    // adaptiveWidth: true,
    // dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // variableWidth: false,
    fade: true,
    asNavFor: '.slider-nav',

  });
  jQuery('.slider-nav').slick({
    // autoplay: false,
    arrows: false,
    // dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    infinite: true,
    focusOnSelect: true,

  });



});

// let cardPictSlider = document.querySelector('.card-picture-slider');
// let popularProductsSection = document.querySelectorAll('.popular-products-slider');
// let fsSlider = document.querySelector('.fs-slider');

// $(window).resize(function(){

//   if(popularProductsSection.length != 0) {
//     popularProductsSection.forEach(item => item.slick.refresh())
//   }
//   if(cardPictSlider) {
//     cardPictSlider.slick.refresh();
//   }

//   if(fsSlider) {
//     fsSlider.slick.refresh();
//   }
// });





// MOBILE MENU OPENER

let menuOpener = document.querySelector('.menu-opener');
let mainNav = document.querySelector('.mobile-menu');
let header = document.querySelector('.header');
let menuWrapper = document.querySelector('.mobile-menu .wrapper');
// let headerContactLink = document.querySelector('.header .contact-link');
let modalsTranspBg = document.querySelector('.semi-transparent-bg');

let mainBlock = document.querySelector('main');

let closeMenuBurger = document.querySelector('.close-menu--burger');

menuOpener.addEventListener('click', function (e) {
  // header.classList.toggle('nav-opened');
  //
  e.preventDefault();
  mainBlock.classList.add('z-index-negative');
  headerSectInner.classList.add('z-index-negative');
  // searchHeaderForm.classList.add('z-index-negative');
  modalsTranspBg.classList.add('active');
  // headerContactLink.classList.toggle('hidden');
  menuOpener.classList.toggle('active');
  mainNav.classList.toggle('nav-opened');
  menuWrapper.classList.toggle('nav-opened');

  document.querySelector('body').classList.toggle('lock');
})

// let scrolledLink = document.querySelector('.scrolled');

// scrolledLink.addEventListener('click', function (e) {
//     menuOpener.classList.remove('active');
//     mainNav.classList.remove('nav-opened');

//     menuWrapper.classList.remove('nav-opened');
//     headerContactLink.classList.remove('hidden');
    // modalsTranspBg.classList.remove('active');

//     // document.querySelector('main').classList.remove('active');


//     document.querySelector('body').classList.remove('lock');
//     // header.classList.remove('nav-opened');

// })

closeMenuBurger.addEventListener('click', function (e) {
  menuOpener.classList.remove('active');
  mainNav.classList.remove('nav-opened');
  menuWrapper.classList.remove('nav-opened');
  modalsTranspBg.classList.remove('active');
  mainBlock.classList.remove('z-index-negative');
  headerSectInner.classList.remove('z-index-negative');


  // document.querySelector('main').classList.remove('active');


  document.querySelector('body').classList.remove('lock');
  // headerContactLink.classList.remove('hidden');
  // header.classList.remove('nav-opened');

})

document.addEventListener('click', function (e) {

  if (e.target.classList.contains('mobile-menu')) {

    menuOpener.classList.remove('active');
    mainNav.classList.remove('nav-opened');
    menuWrapper.classList.remove('nav-opened');
    mainBlock.classList.remove('z-index-negative');
    headerSectInner.classList.remove('z-index-negative');
    // headerContactLink.classList.remove('hidden');
    modalsTranspBg.classList.remove('active');


    // document.querySelector('main').classList.remove('active');
    // document.querySelector('.semi-transparent-bg').classList.remove('active');

    document.querySelector('body').classList.remove('lock');
    // header.classList.remove('nav-opened');

  }

  if(e.target.classList.contains('search-img') || e.target.classList.contains('header-input-js')) {
    // headerForm.classList.add('hidden');
    console.log(e.target)
    // searchHeaderForm.classList.add('hidden');
    // searchHeader.classList.add('hidden');
    // headerSectInner.classList.add('hidden');

  }
  else {
      searchHeaderForm.classList.add('hidden');
    searchHeader.classList.add('hidden');
    headerSectInner.classList.add('hidden');
    // mainLogoLink.classList.remove('z-index-negative');
  }

})

// MOBILE MENU OPENER





var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "custom-select":*/
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");

  for (j = 0; j < ll; j++) {
    /*for each option in the original select element,
    create a new DIV that will act as an option item:*/
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function (e) {
      /*when an item is clicked, update the original select box,
      and the selected item:*/
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          let event = new CustomEvent('change', {
            bubbles: true
          });
          s.dispatchEvent(event);
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function (e) {
    /*when the select box is clicked, close any other select boxes,
    and open/close the current select box:*/
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /*a function that will close all select boxes in the document,
  except the current select box:*/
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}
/*if the user clicks anywhere outside the select box,
then close all select boxes:*/
document.addEventListener("click", closeAllSelect);



// TABS usefull-section

const tabsBtn = document.querySelectorAll(" .tabs__nav-btn");
const tabsItems = document.querySelectorAll(" .tabs__item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains('active')) {
      tabsBtn.forEach(function (item) {
        item.classList.remove('active');
      });

      tabsItems.forEach(function (item) {
        item.classList.remove('active');
      });

      currentBtn.classList.add('active');
      currentTab.classList.add('active');
    }
  });
}

if (document.querySelector('.tabs')) {
  for (let i = 0; i < 1; i++) {
    tabsBtn[i].classList.add('active');
    tabsItems[i].classList.add('active');
  }
  // document.querySelector('.howitworks-section .tabs__nav-btn').click();
}


// TABS usefull-section



// MODAL OPENER
// $(document).ready(function($) {
// 	// Клик по ссылке "Закрыть".
// 	$('.popup-close').click(function() {
// 		$(this).parents('.popup-fade').fadeOut();
// 		return false;
// 	});

// 	// Закрытие по клавише Esc.
// 	$(document).keydown(function(e) {
// 		if (e.keyCode === 27) {
// 			e.stopPropagation();
// 			$('.popup-fade').fadeOut();
// 		}
// 	});

// 	// Клик по фону, но не по окну.
// 	$('.popup-fade').click(function(e) {
// 		if ($(e.target).closest('.popup').length == 0) {
// 			$(this).fadeOut();
// 		}
// 	});
// });



//open modal
function show(state) {
  document.getElementById('window').style.display = state;
  document.getElementById('gray').style.display = state;
}
let popupOpener = document.querySelectorAll('.open-modal');
let popupClose = document.querySelectorAll('.close-modal');

popupOpener.forEach(item => item.addEventListener('click', function (e) {
  show('block')
}))

popupClose.forEach(item => item.addEventListener('click', function (e) {
  show('none')
}))
//open modal




let searchLink = document.querySelector('.search-link');
let searchHeaderForm = document.querySelector('.header .form');
let searchHeader = document.querySelector('.header .form input');
let headerSectInner = document.querySelector('.header .section-inner');
let headerAccBtn = document.querySelector('.header .btn');
let mainLogoLink = document.querySelector('.header .main-logo-link');


searchLink.addEventListener('click', function (e) {
  searchHeaderForm.classList.remove('hidden');
  searchHeader.classList.remove('hidden');
  headerSectInner.classList.remove('hidden');
  headerAccBtn.classList.add('z-index-1');
  // mainLogoLink.classList.add('z-index-negative');
})



// COUNT SELECT WIDTH
let customSelectWidth = document.querySelectorAll('.categories-section .select-selected');
let selectItemsWidth = document.querySelectorAll('.categories-section .select-items');
let arrWidth = [];
// console.log(selectItemsWidth[0]);
// function calculateSelectWidth() {
  // customSelectWidth.forEach(item => {
  //   console.log(item.offsetWidth);
  //   arrWidth.push(item.offsetWidth);
  //   console.log(arrWidth);


  // })

  // return arrWidth;
  // for(let i = 0; i < customSelectWidth.length; i++) {
  // //   console.log(customSelectWidth[i].offsetWidth);
  // customSelectWidth[i].addEventListener('click', function (e) {
  //   customSelectWidth[i].style.minWidth = `${selectItemsWidth[i].offsetWidth}px`

  // })

  // }

// }




// selectItemsWidth.forEach(item => {

  // for(let i = 0; i < arrWidth.length; i++) {
  //   item.style.width = i + 'px';
  // }
  // item.style.width = 12 + 'px';
  // console.log(item);
// })
// COUNT SELECT WIDTH