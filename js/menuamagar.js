// funció per canviar el primer boto

function cambio1(){
        var el = document.getElementById('segon');
     el.classList.add("hidden");
     var el = document.getElementById('tercer');
     el.classList.add("hidden");
     var el = document.getElementById('quart');
     el.classList.add("hidden");
     var el = document.getElementById('primer');
            el.classList.remove("hidden");
             }

// funcio per canviar el segon boto
 function cambio2(){
 var el = document.getElementById('primer');
el.classList.add("hidden");
var el = document.getElementById('tercer');
el.classList.add("hidden");
var el = document.getElementById('quart');
el.classList.add("hidden");
var el = document.getElementById('segon');
el.classList.remove("hidden");}
        

// funcio per al tercer boto
function cambio3(){
  var el = document.getElementById('primer');
  el.classList.add("hidden");
  var el = document.getElementById('segon');
  el.classList.add("hidden");
  var el = document.getElementById('quart');
  el.classList.add("hidden");
  var el = document.getElementById('tercer');
  el.classList.remove("hidden");}

// funcio per al quart boto
  function cambio4(){
    var el = document.getElementById('primer');
    el.classList.add("hidden");
    var el = document.getElementById('segon');
    el.classList.add("hidden");
    var el = document.getElementById('tercer');
    el.classList.add("hidden");
    var el = document.getElementById('quart');
    el.classList.remove("hidden");}