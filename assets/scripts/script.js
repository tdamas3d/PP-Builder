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
  /* It simply access and use in the home page the content from external resources */
  
  var linkUrl="userguide.html";
  $(".resources").click(function(){
  var whichid = this.id;
  switch(whichid) {
    case 'user-guide-link':
      linkUrl = "userguide.html";
      break;
    case 'related-products':
      linkUrl = "related-products.html";
      break;
    case 'faqs':
      linkUrl = "faqs.html";
      break;
      default:
    linkUrl = "userguide.html";
  }


var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        $("#content-display-zone").html(this.responseText);
    }
};

xhr.open("GET", linkUrl);

xhr.send(); 

 });  
  

 var searchSite;
 var url;
  $("#searchProducts").click($.fn.searchSite=function(){
    var url1=$("#siteUrl").val();/* Site to search products from*/
    var url2=$("#productName").val(); /* keywords, name or type of products */
    url=url1+url2; /* combined or the url of the search */
    $("#productsSearchForm").attr('action',url);
    //alert(url);
     
  });



   $("#testbtn").click(function(){

     /*$.get("faqs.txt", function(data, status){
       $("#testo").html(data);
       alert(status);})*/
     

       alert($("#testo").html());
         alert("OKAY");
      //});
    });
   


}); /*end of jquery scripts*/