var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#main-nav'
})

$(document).ready(function () {

  function typewriter() {
    setTimeout(function () {

      $("#job-title").attr("class", "text-center");

    }, 6000)
  }

  typewriter();

})