let displayImg = document.querySelector(".display-img");
let thumBar = document.querySelector(".thumbar");
let btn = document.querySelector(".dark");
let overLay = document.querySelector(".overlay");
let backbtn = document.querySelector(".back");
let nextbtn = document.querySelector(".next");
let count = 0;
// let getArrayImage;
let images = [
  "https://upload.wikimedia.org/wikipedia/commons/a/ae/Army_Corps_at_the_Victory_parade.jpg",
  "https://static.theprint.in/wp-content/uploads/2020/02/Indian-Army-4.jpg?compress=true&quality=80&w=376&dpr=2.6",
  "https://images.news18.com/ibnlive/uploads/2022/01/army-day.jpg",
  "https://images.hindustantimes.com/img/2022/10/12/1600x900/da6192d2-762c-11ec-9427-36667445a51d_1642269738859_1665544204422_1665544204422.jpg",
  "https://img.freepik.com/premium-photo/army-ranger-field-uniforms_1443-198.jpg?w=2000",
  "https://c.ndtvimg.com/2022-01/qma5i2h8_poonch-army-generic-army-in-hills-pti-650_625x300_20_January_22.jpg",
  "https://images.livemint.com/img/2022/10/15/600x338/Agniveers_1655561441148_1665839519352_1665839519352.jpg",
  "https://st.adda247.com/https://wpassets.adda247.com/wp-content/uploads/multisite/sites/5/2022/07/04081129/IAD_4514.jpg",
  "https://static.theprint.in/wp-content/uploads/2022/11/ANI-20221105233858.jpg",
  "https://m.media-amazon.com/images/I/41fs7dqXq9L._SX355_.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJcIkIBRahlkg9wFQe6Y5clukq8OVwCh8IQ&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3STTX8iYhxUAfFWIyx-12s0ilPhKaVzHX9A&usqp=CAU",
  "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/3/17/w900X450/Republic_Day_Parade_Rehersal_AP.jpg?w=400&dpr=2.6",
  "https://blog.ipleaders.in/wp-content/uploads/2020/09/police-army-commando-special-task-force-20258-1.jpg",
  "https://w0.peakpx.com/wallpaper/345/177/HD-wallpaper-indian-soldier-with-rifle-indian-army.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7zzKWfMya6ZWC_tftaNrQ9GFJu1m_Hes8Iw&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqDnSiMH2NefNHjZiNa0d9ULhnGnCtphPLCg&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJX4wCoDCZrXa8aRlZgzFYz7aotT42CuU8A&usqp=CAU",
  "https://wallpapercave.com/wp/wp2066094.jpg",
  "https://fairytaleofasimplegirl.files.wordpress.com/2017/09/nsg-at-parade_650x400_71485431575.jpg?w=768",
  "https://resize.indiatvnews.com/en/resize/newbucket/730_-/2019/06/sudarshan-shakti-071211-08-025334-1559571841.jpg",
  "https://static.theprint.in/wp-content/uploads/2022/01/Untitled-design-74.png",
  "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202105/E14n_BHVIAY0Fhp_1200x768.jpeg?size=690:388",
  "https://sites.breakingmedia.com/uploads/sites/3/2021/12/211204_ukrainian_sea_border_GettyImages-1066072190-scaled-e1638641452441.jpg",
];

for (let img of images) {
  const saveImg = document.createElement("img");
  saveImg.setAttribute("src", img);
  thumBar.appendChild(saveImg);

  saveImg.addEventListener("click", (photo) => {
    displayImg.src = photo.target.src;
  });
}

nextbtn.addEventListener("click", increzCounter);

function increzCounter() {
  var note = images[count];
  console.log(note);
  console.log(count);
  count++;
}
increzCounter();

backbtn.addEventListener("click", counterDic);

function counterDic() {
  count--;
  console.log(count);
}

// back.addEventListener("click", () => {
//   count = -1;
//   console.log;
// });

// next.addEventListener("click", () => {
//   count++;
//   console.log(count);
// });
