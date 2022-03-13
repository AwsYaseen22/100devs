let menu = document.querySelector("#menu");
let header = document.querySelector("header");
if (document.readyState === "complete" || document.readyState !== "loading") {
  console.log("loading completed");
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("setting up the site");
    menu.addEventListener("click", function () {
      menu.classList.toggle("fa-times");
      header.classList.toggle("toggle");
    });
    window.onscroll = scrollFunction;
    function scrollFunction() {
      menu.classList.remove("fa-times");
      header.classList.remove("toggle");
    }
    //   // smooth scrolling

    document.querySelectorAll('a[href*="#"]').forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();

        // use the jquery animate function
        $("html, body").animate(
          {
            scrollTop: $($(this).attr("href")).offset().top,
          },
          500,
          "linear"
        );
      });
    });
  });
}
