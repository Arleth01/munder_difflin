let mypic = document.getElementById("butter");

  mypic.addEventListener('click', function(){
  mypic.style.animation = "the 2s";
  setTimeout(function(){
    mypic.style.animation = "";
  }, 3000)});

let mypic2 = document.getElementById("pc");

  mypic2.addEventListener('click', function(){
  mypic2.style.animation = "the 2s";
  setTimeout(function(){
    mypic2.style.animation = "";
  }, 3000)});
