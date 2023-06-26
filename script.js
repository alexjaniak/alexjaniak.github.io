$(document).ready(function() {
    // Initial scaling
    scaleElement();
  
    // Scale element on window resize
    $(window).resize(function() {
      scaleElement();
    });
  });
  
  function scaleElement() {
    // Calculate the scaling factor based on window width
    var windowWidth = $(window).width();
    var scaleFactor = windowWidth / 5000; // Adjust the value as needed
  
    // Apply the scaling to the element
    $('.resize').css('transform', 'scale(' + scaleFactor + ')');
  }