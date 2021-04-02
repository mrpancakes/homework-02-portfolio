var scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#main-nav'
})

$(document).ready(function () {

  function typewriter() {
    setTimeout(function () {

      $("#name").attr("class", "");
      $("#job-title").attr("class", "typewriter");

      setTimeout(function(){
        $("#job-title").attr("class", "text-center five-px-padding");
      }, 5500)

    }, 1000)
  }

  typewriter();

})