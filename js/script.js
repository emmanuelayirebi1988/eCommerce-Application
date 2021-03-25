$('#add').on('click', ()=>{
    $('.pop-up').fadeIn();
});



// ADD TO CART functionality
function showCart(){
  if($(".pop-up ").hasClass("cartHide")){
    $(".pop-up ").removeClass("cartHide");
    $(".pop-up ").addClass("showCart");
    
  }

  else if($(".pop-up ").hasClass("showCart")){
    $(".pop-up ").removeClass("showCart");
    $(".pop-up ").addClass("cartHide");
  }

}