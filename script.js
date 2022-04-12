const start = document.querySelector('.logo')
const question = document.querySelector('.question')
const score = document.querySelector('.score')
const a1 = document.querySelector('.a1')
const a2 = document.querySelector('.a2')
const a3 = document.querySelector('.a3')
const a4 = document.querySelector('.a4')
const afterstart = document.querySelector('.afterstart')
const yes = document.querySelector('.startupyes')
const startup = document.querySelector('.startup')
const fail = document.querySelector('.failscreen')
const reset = document.querySelector('.reset')
let timerjs = document.querySelector('.timerhtml')

const appState = {
  currentIndex: 0
}
reset.addEventListener('click', startgame)
yes.addEventListener('click', startgame)
a1.addEventListener('click', checka1)
a2.addEventListener('click', checka2)
a3.addEventListener('click', checka3)
a4.addEventListener('click', checka4)


const mainq = [
  {
    title: "Who started WW2?",
    answers: ["DaVinci", "Suad", "Hitler", "Stalin"],
    correct: "Hitler"
  },
  {
    title: "What is the correct molecular formula for cocaine?",
    answers: ["C17H21NO4", "C21H23NO5", "C20H25N3O", "C21H30O2"],
    correct: "C17H21NO4"
  },
  {
    title: "What is schizophrenia?",
    answers: ["Mental disorder", "A village in germany", "A Netfix series", "A latin phrase"],
    correct: "Mental disorder"
  },
  {
    title: "What flag has 50 stars on the top left corner?",
    answers: ["Mexico", "Cuba", "USA", "Canada"],
    correct: "USA"
  },
  {
    title: "In what language is the phrase Lorem Ipsum Dolor Sit Amet?",
    answers: ["Italian", "Spanish", "French", "Latin"],
    correct: "Latin"
  },
  {
    title: "Which one of these is NOT a Bosnian name?",
    answers: ["Anes", "Mudžiburahman", "Sejo", "Suad"],
    correct: "Mudžiburahman"
  },
  {
    title: "What is 10+2(34 - 20.665) * (19 + 2 - 6 + 2 - 17) + 4-2",
    answers: ["420", "3.14", "2", "9"],
    correct: "2"
  },
  {
    title: "Where is Maui located?",
    answers: ["The Bahammas", "The state of Hawaii", "The Maldives", "The Carribians"],
    correct: "The state of Hawaii"
  },
  {
    title: "What color does blue mixed with red give?",
    answers: ["Cyan", "Lilac", "Purple", "Green"],
    correct: "Purple"
  },
  {
    title: "Which one of these musitians were deaf?",
    answers: ["Beethoven", "Mozart", "tRAVIS sCOTT", "Safet"],
    correct: "Beethoven"
  },
].sort(() => Math.random() -0.5)

let answerscheck = []
let correctanswer = []
let timerlet = 0

timerjs.innerHTML=timerlet

setInterval(function(){
  timerlet++
  timerjs.innerHTML=timerlet
}, 1000)


function startgame(){
    question.innerHTML = (mainq[appState.currentIndex].title)
    a1.innerHTML = (mainq[appState.currentIndex].answers[0])
    a2.innerHTML = (mainq[appState.currentIndex].answers[1])
    a3.innerHTML = (mainq[appState.currentIndex].answers[2])
    a4.innerHTML = (mainq[appState.currentIndex].answers[3])
    startup.style.display = ('none')
    fail.style.display = ('none')
}

function oneup(){
  appState.currentIndex = appState.currentIndex + 1
  question.innerHTML = mainq[appState.currentIndex].title
    a1.innerHTML = (mainq[appState.currentIndex].answers[0])
    a2.innerHTML = (mainq[appState.currentIndex].answers[1])
    a3.innerHTML = (mainq[appState.currentIndex].answers[2])
    a4.innerHTML = (mainq[appState.currentIndex].answers[3])
}


score.innerHTML = 0

function checka1(){
  const answerCheck = event.target.innerHTML
  if(answerCheck === mainq[appState.currentIndex].correct){
    oneup()
    console.log('suiii')
    score.innerHTML++
  }
  else{
    fail.style.display = ('block')
  }
}

function checka2(){
  const answerCheck = event.target.innerHTML
  if(answerCheck === mainq[appState.currentIndex].correct){
    oneup()
    score.innerHTML++
  }
  else{
    fail.style.display = ('block')
  }
}

function checka3(){
  const answerCheck = event.target.innerHTML
  if(answerCheck === mainq[appState.currentIndex].correct){
    oneup()
    score.innerHTML++
  }
  else{
    fail.style.display = ('block')
  }
}

function checka4(){
  const answerCheck = event.target.innerHTML
  if(answerCheck === mainq[appState.currentIndex].correct){
    oneup()
    score.innerHTML++
  }
  else{
    fail.style.display = ('block')
  }
}