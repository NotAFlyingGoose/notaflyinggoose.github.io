
var hide = true;
function showAllVersions() {
   if (!hide){
       document.getElementById("mmva").style.backgroundColor = "#ffffff00";
       document.querySelectorAll('.skipbr').forEach(e => e.remove());
       hide = true;
   } else {
       document.getElementById("mmva").style.backgroundColor = "#666";
       for(i=0;i<10;i++)
       {
       var skipline = document.createElement("br");
       skipline.classList.add("skipbr");
       var element = document.getElementById("skip");
       element.appendChild(skipline);
       }
       hide = false;
   }
 var moreversions = document.getElementById("mmv");
 moreversions.classList.toggle("show");
}
