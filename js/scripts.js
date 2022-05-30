(function ($) {
  $(function () {
    $(document).ready(function () {
      menuToggle();
      clickbtnSwitch();
    });
    function menuToggle() {
      const toggle = document.querySelector(".menu-toglle");
      const logo = document.querySelector(".header-logo img");
      const menu = document.querySelector(".header-menu");
      const isShow = "is-show";
      toggle.addEventListener("click", function () {
        menu.classList.add(isShow);
        logo.classList.add(isShow);
        toggle.classList.add(isShow);
      });
      window.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !e.target.matches(".menu-toglle")) {
          menu.classList.remove(isShow);
          logo.classList.remove(isShow);
          toggle.classList.remove(isShow);
        }
      });
    }
    function clickbtnSwitch() {
      const elbtn = $(".button-switch");
      const elLeft = $(".text-left");
      const elRight = $(".text-right");
      let click = true;
      if (elbtn.length > 0) {
        elbtn.on("click", function () {
          if (click) {
            elbtn.removeClass("is-click");
            elRight.addClass("text-white");
            elLeft.removeClass("text-white");
            click = false;
          } else {
            elbtn.addClass("is-click");

            elLeft.addClass("text-white");
            elRight.removeClass("text-white");
            click = true;
          }
        });
      }
    }
  });
})(jQuery);
