/*function addition(numOne, numTwo){
    if(typeof(numOne)=="number" &&typeof(numTwo)=="number"){
    return(numOne+numTwo);
    } else return("Error");
}*/

$(document).ready(function(){

/*
$("#searchProducts").click(function(){
$("#user-support").css("font-size","11px");
  });
  */
  
  $("#searchProducts").click($.fn.searchSite=function(){
    var url1=$("#siteUrl").val();/* Site to search products from*/
    var url2=$("#productName").val(); /* keywords, name or type of products */
    var url=url1+url2; /* combined or the url of the search */
    $("#productsSearchForm").attr("action",url);
       
    /*return false;*/

  });

/*
var defaultText=$(".social-networks").html();
$("body").append(defaultText);
alert(defaultText);*/


}); /*end of jquery scripts*/

