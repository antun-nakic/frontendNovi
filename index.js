console.log("bok")

function init() {
  changeColor()
}

// Daniel: function which updates the movie list; takes 1 query param for movie name
function novaLista(upit) {
  let ubaciOde = document.getElementById("podaci")
  fetch(`https://api.tvmaze.com/search/shows?q=${upit}`)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      console.log(data)
      let html = ""
      data.forEach(function (movie) {
        html += "<p>" + movie.show.name + "</p>"
      })
      ubaciOde.innerHTML = html
    })
}

function changeColor() {
  //Rainbow effekt na naslovu stranice
  let title = document.getElementById("title")
  let color = "rgb(0,0,0)"
  let interval = setInterval(function () {
    color =
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")"
    title.style.color = color
  }, 1000)
}
