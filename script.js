let backButton = document.querySelector("#back")
let nextButton = document.querySelector("#next")

let students = [
  {
   profileImage: "https://media.npr.org/assets/artslife/arts/2010/12/best-movies-of-2010/ryan-gosling-film-de4259b4abc784e312a677e5b48132ff6b2d8590-s800-c85.jpg",
   name: "Ryan Gosling",
   quote: "I think we're very complicated and we're capable of all kinds of things, and movies don't reflect that.",
   superlative: "Most Hunky"
  },
  {
    profileImage: "https://upload.wikimedia.org/wikipedia/commons/1/14/Deadpool_2_Japan_Premiere_Red_Carpet_Ryan_Reynolds_%28cropped%29.jpg",
    name: "Ryan Reynolds",
    quote: "I’d walk through fire for my daughter. Well not FIRE, because it’s dangerous. But a super humid room. But not too humid, because my hair.",
    superlative: "Best Smile"
  }
]

let count = 0
document.querySelector("#pic").src = students[count].profileImage
document.querySelector("#name").innerHTML = students[count].name

nextButton.addEventListener("click",()=>{
  console.log('next')
  count ++
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  //add quote
  
  //add superlative
})

backButton.addEventListener("click",()=>{
  console.log('back')
  count --
  console.log(count)
  document.querySelector("#pic").src = students[count].profileImage
  document.querySelector("#name").innerHTML = students[count].name
  //add quote
  
  //add superlative
})
