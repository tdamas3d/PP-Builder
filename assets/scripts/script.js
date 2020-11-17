
/*Start Javascript Developer code */
/* Enclosing Our javascript into javascript's DOM "ready" function for the script to run after the entire html oage is loaded  */
$(document).ready(function(){

$("#user-support").hover(function(){ 
    $("#support-down-menu").removeClass('top-nav-links');
    $("#support-down-menu").addClass('resetMenu');
    $("#support-down-menu").addClass('dropDownMenu');
    $("#support-down-menu").show();
    $("#home-top-menu-item").hide();
    $("#login-top-menu-item").hide();
  });
  
$("#support-down-menu").mouseout(function(){
    $("#support-down-menu").hide();
        $("#home-top-menu-item").show();
    $("#login-top-menu-item").show();
  });
  
  /*Create a drop down menu for the Resources Menu Option - it has subsections that we would like to hide by default and show them on mouse over*/
$("#resourcesItem").hover(function(){
    $("#drop-down-menu").show();
  });


$("#drop-down-menu").hover(function(){
        $("#resourcesItem").show();
        $("#drop-down-menu").show();
  });

    $("#resourcesItem").mouseleave(function(){
        $("#resourcesItem").show();
        $("#drop-down-menu").hide();
  });

  $("#drop-down-menu").mouseleave(function(){
        $("#resourcesItem").show();
        $("#drop-down-menu").hide();
  });






  
  $("#searchProducts").click($.fn.searchSite=function(){
    var url1=$("#siteUrl").val();/* Site to search products from*/
    var url2=$("#productName").val(); /* keywords, name or type of products */
    var url=url1+url2; /* combined or the url of the search */
    $("#productsSearchForm").attr('action',url);

  });


}); /*end of jquery scripts*/

