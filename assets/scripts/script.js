
/*Start Javascript Developer code */
/* Enclosing Our javascript into javascript's DOM "ready" function for the script to run after the entire html oage is loaded  */
$(document).ready(function(){
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

  /*On user's request, i.e., when click the link "user's guide"  the code below dynamically get and displays the content of user's guide web page into the zone of content on the home page */
  /* It simply access and use in the home page the content from external resources, in this case, from my own pages */
  $("#user-guide-link").click(function(){
       
  });

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
    if(this.readState == 4 && this.status == 200) {
   document.getElementById("contentDisplayZone").innerHTML = this.responseText;
   }
};

xhr.open("GET", "https://swapi.co/api/");
xhr.send();



  
  $("#searchProducts").click($.fn.searchSite=function(){
    var url1=$("#siteUrl").val();/* Site to search products from*/
    var url2=$("#productName").val(); /* keywords, name or type of products */
    var url=url1+url2; /* combined or the url of the search */
    $("#productsSearchForm").attr('action',url);

  });


}); /*end of jquery scripts*/

