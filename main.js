let img = document.getElementById("dogpic");
let video = document.querySelector("video");
let btn = document.getElementById("dog");
let catimg = document.getElementsByClassName("catpic");
let catbtn = document.getElementsByClassName("cat");
catbtn.addEventListener("click", randomCat);
btn.addEventListener("click", dogPic);

function dogPic() {
  img.classList.remove("hidden");
  fetch("https://random.dog/woof.json", {
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

      if (data.url.endsWith("mp4")) {
        video.src = data.url;
        return;
      }
      img.src = data.url;
    });
}

function randomCat() {
  catimg.classList.remove("hidden");
  fetch("https://aws.random.cat/meow", {
    headers: { Accept: "application/json" }
  })
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      catimg.src = data["file"];
    });
}
