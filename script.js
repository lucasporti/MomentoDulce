function nightMode() {
    let header = document.getElementById("header");
    let main = document.getElementById("main")
    let parrafo = document.getElementsByClassName("p");
    let productos = document.getElementById("productos")
    let nightMode = document.getElementsByClassName("nightmode")
    let card = document.getElementsByClassName("card-body")
    let card_p = document.getElementsByClassName("card-text")
    let contacto = document.getElementById("contacto")
    let svg = document.getElementsByTagName("svg")
    let footer = document.getElementById("footer")

    header.style.backgroundColor= "#000000";
    main.style.backgroundColor = "#000000";
    productos.style.backgroundColor = "#000000";
    nightMode[0].style.backgroundColor = "#000000"
    for(i = 0; i < parrafo.length; i++) parrafo[i].style.color = "#ffffff";
    for(i = 0; i < card.length; i++) card[i].style.backgroundColor = "#000000"
    for(i = 0; i < card_p.length; i++) card[i].style.color = "#ffffff"
    contacto.style.backgroundColor = "#000000"
    for(i = 0; i < svg.length; i++) svg[i].style.backgroundColor = "#e64c99"
    footer.style.backgroundColor = "#000000"
}

alert("Bienvenidos a Momento Dulce")

function autor() {
    alert("GitHub: lucasporti \nLinkedIn: Lucas Portillo")
}