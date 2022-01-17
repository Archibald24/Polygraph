$( document ).ready(function() {
    
  $('.simple-hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.header-inner .right').toggleClass('open');
    $('body').toggleClass('overflow');
  });
  
  $('.dash-hamburger').on('click', function(){
    $(this).toggleClass('is-active');
    $('.dash-nav').toggleClass('open');
    $('body').toggleClass('overflow');
    $('.dash-overflow').toggleClass('visible');
  });
  
  $('.dash-overflow').on('click', function(){
    $('.dash-hamburger').removeClass('is-active');
    $('.dash-nav').removeClass('open');
    $('body').removeClass('overflow');
    $(this).removeClass('visible');
  });
  
//   $('.polygraph-help-single-text:first-child').on('click', function(){
//     $('.polygraph-help-media-content img').attr("src", "img/get1.svg");
//   });
//   $('.polygraph-help-single-text:nth-child(2)').on('click', function(){
//     $('.polygraph-help-media-content img').attr("src", "img/get2.svg");
//   });
//  $('.polygraph-help-single-text:nth-child(3)').on('click', function(){
//     $('.polygraph-help-media-content img').attr("src", "img/get3.svg");
//   });
//    $('.polygraph-help-single-text:nth-child(4)').on('click', function(){
//     $('.polygraph-help-media-content img').attr("src", "img/get4.svg");
//   });
  closeContentBlock();
  openLoginMenu();
  calcMainContentMargin();
  periodSelection();
  calculateContentMarginTop();
  addEventListenerForMenu();
  setValueFromDropDown();
});

function closeContentBlock() {
  const closeButtons = document.getElementsByClassName("close");

  for(let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function (){
      closeButtons[i].parentElement.style.display = "none";
    });
  }
}

function openLoginMenu() {
  const accountMenu = document.getElementById("account-menu");
  const accountMenuPopup = document.getElementById("account-menu-popup");

  if (null !== accountMenu && null !== accountMenuPopup) {
    const toggleMenu = function() {
      accountMenuPopup.classList.toggle("hide-element");
    }

    accountMenu.addEventListener("click", function (e) {
      e.stopPropagation();
      toggleMenu();
    });

    hideDropDownByClick(accountMenu, accountMenuPopup);
  }

}

function openDropdownMenu(element) {
  const elementMenu = document.getElementById(element.id + '-dropdown');

  if (null !== elementMenu) {
    const toggleMenu = function() {
      elementMenu.classList.toggle("hide-element");
    }
    toggleMenu();
    hideDropDownByClick(element, elementMenu);
  }
}

function hideDropDownByClick(element, elementMenu) {
  document.addEventListener("click", function(e){
    const eTarget = e.target;
    const itsElementMenu = eTarget === elementMenu || elementMenu.contains(eTarget);
    const itsElement = eTarget === element || element.contains(eTarget);
    const menuIsActive = !elementMenu.classList.contains("hide-element");

    if (itsElementMenu && !itsElement && menuIsActive) {
      elementMenu.classList.toggle("hide-element");
    }
  });
}

function setValueFromDropDown() {
  const dropDownMenu = document.querySelectorAll('.values-for-input');

  for (let i = 0; i < dropDownMenu.length; i++) {
    const dropDownMenuInputId = dropDownMenu[i].getAttribute('id').replace('-dropdown', '');
    const dropDownMenuInput = document.getElementById(dropDownMenuInputId);

    dropDownMenu[i].onclick = function(event){
      let target = event.target;
      if (target.tagName === 'LI') {
        dropDownMenuInput.querySelector('.value-from-dropdown').innerHTML = target.innerHTML;
      }
    };
  }
}

function toggleDropdown() {
  $('.dropdown').on('click', function(){
    $('.dropdown-active + ul').slideToggle()
    let content = $('.dropdown-active + ul li.active a').text()
    console.log(content)
    $('.dropdown-active').html(content)
  })
}
toggleDropdown()

function calcMainContentMargin() {
  const navigationBlock = document.getElementById("dash-navigation");
  const contentBlock = document.getElementsByClassName("dash-content");
  const footerBlock = document.getElementsByTagName("footer");

  if (
      null !== navigationBlock &&
      null !== contentBlock &&
      null !== footerBlock
  ) {
    const navigationBlockWidth = navigationBlock.offsetWidth;
    
    for(let i = 0; i < contentBlock.length; i++) {
      contentBlock[i].style.marginLeft = navigationBlockWidth + "px";
    }

    for(let i = 0; i < footerBlock.length; i++) {
      footerBlock[i].style.marginLeft = navigationBlockWidth + "px";
    }
  }

}

function periodSelection() {
  const allSelectionsMenu = document.getElementsByClassName("period-selection");

  for(let i = 0; i < allSelectionsMenu.length; i++) {

    const selectionsMenuLi =
        allSelectionsMenu[i].getElementsByTagName("ul")[0].getElementsByTagName("li");

    for(let i = 0; i < selectionsMenuLi.length; i++) {
      let anchor = selectionsMenuLi[i];
      anchor.onclick = function () {
        for (let i = 0; i < selectionsMenuLi.length; i++) {
          selectionsMenuLi[i].classList.remove("active");
        }
        anchor.classList.add("active");
      }
    }

  }
}

function calculateContentMarginTop() {
  const headerHeight = $('header').height();
  $('.blog').css('margin-top', headerHeight + 'px');
  $('.dashboard').css('margin-top', headerHeight + 'px');
  $('.single').css('margin-top', headerHeight + 'px');
}
window.onresize = calculateContentMarginTop;

function addEventListenerForMenu() {
  $('.main-pages-right').children('nav').children('ul').children('li').each(function () {
    $(this).on('click', function () {
      if ($('#homepage_hamburger_menu').css('display') === 'block') {
        $('.simple-hamburger').toggleClass('is-active');
        $('.header-inner .right').toggleClass('open');
        $('body').toggleClass('overflow');
      }
    });
  });
}

