let mar = document.getElementById("mar");
let pimentel = document.getElementById("pimentel");

mar.addEventListener("click", function() {
    mar.classList.remove("mar-chica");
    mar.classList.add("mar-chica-hidden");
    pimentel.classList.remove("pimentel-chica");
    pimentel.classList.add("pimentel-chica-hidden");
});
pimentel.addEventListener("click", function() {
    pimentel.classList.remove("pimentel-chica-hidden");
    pimentel.classList.add("pimentel-chica");
    mar.classList.remove("mar-chica-hidden");
    mar.classList.add("mar-chica");
    
    
});
