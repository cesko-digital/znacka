console.log("document is ready");
  

  $( ".shadow-on-hover" ).hover(
  function() {
    $(this).addClass('shadow').css('cursor', 'pointer'); 
  }, function() {
    $(this).removeClass('shadow');
  }
);
