let displayImg = document.querySelector(".display-img");
let thumBar = document.querySelector(".thumbar");
let btn = document.querySelector(".dark");
let overLay = document.querySelector(".overlay");

let imges = [
  "https://resize.indiatvnews.com/en/resize/oldbucket/715_-/mainnational/IndiaTvd20312_NSG.jpg",
  "https://www.edudwar.com/wp-content/uploads/2021/06/garud-commando-uniform-1280x720.jpg",
  "https://static.toiimg.com/photo/msid-47608842/47608842.jpg",
  "https://img.theweek.in/content/dam/week/magazine/the-week/cover-story/2018/february-04-2018/18-para-commandos-week.jpg",
  "https://i.cdn.newsbytesapp.com/images/l156_7011546430268.jpg",
];

for (let img of imges) {
  const saveImg = document.createElement("img");
  saveImg.setAttribute("src", img);
  thumBar.appendChild(saveImg);

  saveImg.addEventListener("click", (photo) => {
    displayImg.src = photo.target.src;
  });
}
