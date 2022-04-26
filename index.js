console.log("bok");

//Funkcija koja se poziva kada se inicializira stranica
function init(){
  changeColor();
}

//Funkcija dohvaća variablu upit te ga koristi u pozivu na TVMaze API da dohvati
//  filmove koji imaju isti upit kao i upit
//Zatim odgovore od API-a prvo ispisuje u konzolu, pa onda u HTML
//  na nacin da sa forEach petljom dohvaca svaki rezultat i ispisuje u HTML sa
//  p tagom
function novaLista(upit) {
  var ubaciOde = document.getElementById("podaci");
  fetch(`https://api.tvmaze.com/search/shows?q=${upit}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      var html = "";
      data.forEach(function (movie) {
        html += "<p>" + movie.show.name + "</p>";
      });
      ubaciOde.innerHTML = html;
    });
}

function changeColor(){
    //Rainbow effekt na naslovu stranice
    var title = document.getElementById("title");
    //varijabla boju u rgb formatu (red, green, blue) koju ćemo mijenjati i primjenjivati na naslov
    var color = "rgb(0,0,0)";
    //varijabla koja svaki interval od 1s ili 1000ms mijenja boju
    //sa Math.random() funkcijom dobijamo slučajan broj između 0 i 255 i stime dobivamo vrijednost boje
    //zatim spremimo tu boju novu i primjenimo ju na naslov
    var interval = setInterval(function () {
        color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
        title.style.color = color;
    }, 1000);
}
