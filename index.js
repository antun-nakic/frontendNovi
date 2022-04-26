console.log("bok");

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
