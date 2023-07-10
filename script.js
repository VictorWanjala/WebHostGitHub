const h1 = document.getElementById('containerhead');

h1.addEventListener("mouseover", function(){
    h1.style.color = "red";
    h1.style.fontSize = "48px";
}
);

h1.addEventListener("mouseout", function() {
    h1.style.color = "white";
    h1.style.fontSize = "40px";
  });
