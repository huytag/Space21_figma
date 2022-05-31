(function ($) {
  $(function () {
    $(document).ready(function () {
      AccordionAccountUser();
    });
    // function menuToggle() {
    //   const toggle = document.querySelector(".menu-toglle");
    //   const logo = document.querySelector(".header-logo img");
    //   const menu = document.querySelector(".header-menu");
    //   const isShow = "is-show";
    //   toggle.addEventListener("click", function () {
    //     menu.classList.add(isShow);
    //     logo.classList.add(isShow);
    //     toggle.classList.add(isShow);
    //   });
    //   window.addEventListener("click", function (e) {
    //     if (!menu.contains(e.target) && !e.target.matches(".menu-toglle")) {
    //       menu.classList.remove(isShow);
    //       logo.classList.remove(isShow);
    //       toggle.classList.remove(isShow);
    //     }
    //   });
    // }
    function AccordionAccountUser() {
      var acc = document.getElementsByClassName("accordion");
      let view = $(".tab-accordion");
      let i;
      for (i = 0; i < acc.length; i++) {
        (function (index) {
          acc[i].addEventListener("click", function (e) {
            this.classList.toggle("active");
            var panel = view[index].nextElementSibling;
            if (panel.style.maxHeight) {
              panel.style.maxHeight = null;
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            }
          });
        })(i);
      }
    }
  });
})(jQuery);
