let img = document.querySelector("img");
let btn = document.getElementById("cat");
btn.addEventListener("click", randomCat);

function randomCat() {
  fetch("https://aws.random.cat/meow", {
    headers: {
      Accept: "application/json"
    }
  })
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      img.src = data["file"];
    });
}
