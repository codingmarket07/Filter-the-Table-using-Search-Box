var search_input = document.querySelector("#search_input");

search_input.addEventListener("keyup", function(e){
  var span_items = document.querySelectorAll(".table_body .name span");
  var table_body = document.querySelector(".table_body ul");
  var search_item = e.target.value.toLowerCase();
 
 span_items.forEach(function(item){
   if(item.textContent.toLowerCase().indexOf(search_item) != -1){
      item.closest("li").style.display = "block";
   }
   else{
     item.closest("li").style.display = "none";
     }
 })
  
});
