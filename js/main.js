let scrollSpy = new bootstrap.ScrollSpy(document.body, {
  target: '#main-nav'
});



$(document).ready(function () {

  const currentYear = moment().format("YYYY");

  $("#year").text(currentYear);


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
  console.log('Whoa, checking out my console?! At least buy me dinner first.');



})