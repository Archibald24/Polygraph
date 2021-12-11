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
  
  $('.polygraph-help-single-text:first-child').on('click', function(){
    $('.polygraph-help-media-content img').attr("src", "img/get1.svg");
  });
  $('.polygraph-help-single-text:nth-child(2)').on('click', function(){
    $('.polygraph-help-media-content img').attr("src", "img/get2.svg");
  });
 $('.polygraph-help-single-text:nth-child(3)').on('click', function(){
    $('.polygraph-help-media-content img').attr("src", "img/get3.svg");
  });
   $('.polygraph-help-single-text:nth-child(4)').on('click', function(){
    $('.polygraph-help-media-content img').attr("src", "img/get4.svg");
  });
  closeContentBlock();
  openLoginMenu();
  calcMainContentMargin();
  periodSelection();
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

    document.addEventListener("click", function(e){
      const target = e.target;
      const itsAccountMenuPopup = target === accountMenuPopup || accountMenuPopup.contains(target);
      const itsAccountMenu = target === accountMenu;
      const menuIsActive = !accountMenuPopup.classList.contains("hide-element");

      if (!itsAccountMenuPopup && !itsAccountMenu && menuIsActive) {
        toggleMenu();
      }
    });
  }

}

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
