console.log("bok");

function init(){
  changeColor();
}

// Daniel: function which updates the movie list; takes 1 query param for movie name
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

function chageColor(){
//Rainbow effekt na naslovu stranice
var title = document.getElementById("title");
var color = "rgb(0,0,0)";
var interval = setInterval(function () {
  color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";
  title.style.color = color;
}, 1000);
}
