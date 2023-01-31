// create a questions object with properties: title, chocies, answers
const questions = [
    {
        question: "In Java, a method is a container that holds classes ", 
        answer: 
        [
            {
                text: 'True', correct: false
            },
            {
                text: 'False', correct: true
            },

        
        ]
    },
    {
        question: "What does npx create-react-app my-appp do?", 
        answer: 
        [
            {
                text: 'creates a backend for  application', correct: false
            },
            {
                text: 'creates an environment with everything needed to create amodern single-page React app', correct: true
            },
            {
                text: 'used to configurate frontend react applications', correct: false
            },
            {
                text: 'command line terminal to open a code editor environment for 3D applications.', correct: false
            },
        
        ]
    },
    {
        question: "What are props in ReactJs?", 
        answer: 
        [
            {
                text: 'Implies "properties": read-only components wehre data can be passed from one component to another', correct: true
            },
            {
                text: 'creates an environment with everything needed to create amodern single-page React app', correct: true
            },
            {
                text: 'used to configurate frontend react applications', correct: false
            },
            {
                text: 'command line terminal to open a code editor environment for 3D applications.', correct: false
            },
        
        ]
    },
    {
        question: "Commonly used data types DO NOT include:",

        answer: 
        [
            {
                text: 'strings', correct: false
            },
            {
                text: 'booleans', correct: false
            },
            {
                text: 'alerts', correct: true
            },
            {
                text: 'numbers', correct: false
            },

        ]
    },

    {
        question: "What does REST stand for",

        answer: 
        [
            {
                text: 'Representational State Transfer', correct: true
            },
            {
                text: 'Representational State Text', correct: false
            },
            {
                text: 'Resting Estate State Test', correct: false
            },
            {
                text: 'Repo Establishsment State Transfer', corrrect: false
            },

        ]
    },

    {
        question: "What are the five elements that support media HTML5",

        answer: 
        [
            {
                text: '<audio> <video> <source> <embed> <track>r', correct: true
            },
            {
                text: '<audio> <vr> <src> <emmm> <trc>', correct: false
            },
            {
                text: '<audiotory> <visual> <script> <transformstream> <etc>', correct: false
            },
            {
                text: '<alert> <auditory> <video> <source> <embed>', correct: false
            },

        ]
    },
    
    {
        question: "What is SVG and why is it used?",

        answer: 
        [
            {
                text: 'Scalable Vector Graphics, used to display vector-based graphics over the web.', correct: true
            },
            {
                text: 'Scalable Video Graphics, used to display videos of high quality', correct: false
            },
            {
                text: 'Scalable Vectoring Gif, used to display vector-based animated gifs', correct: false
            },
            {
                text: 'Scalable Vicious Girl, used to fend off ex-girlfriends snooping', correct: false
            },

        ]
    },
    {
        question: "What is SVG and why is it used?",

        answer: 
        [
            {
                text: 'Scalable Vector Graphics, used to display vector-based graphics over the web.', correct: true
            },
            {
                text: 'Scalable Video Graphics, used to display videos of high quality', correct: false
            },
            {
                text: 'Scalable Vectoring Gif, used to display vector-based animated gifs', correct: false
            },
            {
                text: 'Scalable Vicious Girl, used to fend off ex-girlfriends snooping', correct: false
            },

        ]
    },

    {
        question: "What is the use of Canvas in HTML",

        answer: 
        [
            {
                text: 'Canvas is method allowing users to insert a logo or graphics', correct: false
            },
            {
                text: 'Canvas allows users to draw graphics on the go using Javascript. There are variety of methods for drawing paths, circles, boxes, images, and more.', correct: true
            },
            {
                text: 'Canvas is used by developers to make wireframes for collaboration.', correct: false
            },
            {
                text: 'Canvas allows users to draw graphics using CSS.', correct: false
            },

        ]
    },

    {
        question: "Explain what the difference is between cookies and local storage",

        answer: 
        [
            {
                text: 'diabling cookie will not disable local storagee', correct: false
            },
            {
                text: 'Cookies have an expiration date and the cookies gets deleted over time, while local browser data can only be removed by the server-side.', correct: false
            },
            {
                text: 'Cookies are intended to be read by the server; Local storage can only be read by browser.', correct: true 
            },
            {
                text: 'Local storage is safer than cookies .', correct: false
            },

        ]
    },
  
    {
        question: "How do you differentiate between ID and Class selector?",

        answer: 
        [
            {
                text: 'No difference', correct: false
            },
            {
                text: 'Id is used in javascript.', correct: false
            },
            {
                text: 'Id is specified to a single element, classes can be assigned multiple times. ', correct: true 
            },
            {
                text: 'Class is used for styling', correct: false
            },

        ]
    },
    {
        question: "What is a hook",

        answer: 
        [
            {
                text: 'Node.js command', correct: false
            },
            {
                text: 'CSS style to apply a effect', correct: false
            },
            {
                text: 'Hook into React features such as state and lifecycle methods', correct: true 
            },
            {
                text: 'Javascript function to intiate a function', correct: false
            },

        ]
    },
    {
        question: "What is a React",

        answer: 
        [
            {
                text: 'Module added for CSS', correct: false
            },
            {
                text: 'An emotion', correct: false
            },
            {
                text: 'Frontend Javascript framework created by facebook', correct: true 
            },
            {
                text: 'Frontend Javascript framework that is not often used', correct: false
            },

        ]
    },
    {
        question: "What is a React",

        answer: 
        [
            {
                text: 'Module added for CSS', correct: false
            },
            {
                text: 'An emotion', correct: false
            },
            {
                text: 'Frontend Javascript framework created by facebook engineer Jordan Walke', correct: true 
            },
            {
                text: 'Frontend Javascript framework that is not often used', correct: false
            },

        ]
    },
    {
        question: "What tools are included in create-react-app",

        answer: 
        [
            {
                text: 'IndexDB', correct: false
            },
            {
                text: 'Webpack, Babel, ESlint', correct: true
            },
            {
                text: 'Visual studio', correct: false 
            },
            {
                text: 'MERN and Nosquel dbs', correct: false
            },

        ]
    },

    {
        question: "What is the axios npm package",

        answer: 
        [
            {
                text: 'Store information offline', correct: false
            },
            {
                text: 'Promise based HTTP client for the browser and node.js to make XML ', correct: true
            },
            {
                text: 'Used to encrypt user information', correct: false 
            },
            {
                text: 'Precache databaeses', correct: false
            },

        ]
    },
    {
        question: "What is the axios npm package",

        answer: 
        [
            {
                text: 'Store information offline', correct: false
            },
            {
                text: 'Promise based HTTP client for the browser and node.js to make XML ', correct: true
            },
            {
                text: 'Used to encrypt user information', correct: false 
            },
            {
                text: 'Precache databaeses', correct: false
            },

        ]
    },
    {
        question: "What is useEffect in React ",

        answer: 
        [
            {
                text: 'A way to add side effects to components', correct: true
            },
            {
                text: 'Referencing a object without specifying variable', correct: false
            },
            {
                text: 'Use virtual DOM but does not apply to actual DOM', correct: false 
            },
            {
                text: 'Does not exist', correct: false
            },

        ]
    },
  
    {
        question: "How was JavaScript created?",

        answer: 
        [
            {
                text: 'In May 1995 by Brendan Eich.', correct: true
            },
            {
                text: 'In April 1990 to glue language for Java and make HTML more interactive', correct: false
            },
            {
                text: 'Anonymously on the open source websites', correct: false 
            },
            {
                text: 'It was first called Livescript, created in 1995.', correct: false
            },

        ]
    },

    {
        question: "What does X stand for in XML",

        answer: 
        [
            {
                text: 'Extensible.', correct: true
            },
            {
                text: 'Extra', crrrect: false
            },
            {
                text: 'Exquisite', correct: false 
            },
            {
                text: 'External', correct: false
            },

        ]
    },
    {
        question: "How to emphasize a portion of a text in HTML?",

        answer: 
        [
            {
                text: '<em></em>', correct: true
            },
            {
                text: '<h></h>', correct: false
            },
            {
                text: '<str></str>', correct: false 
            },
            {
                text: '<hs></hs>', correct: false
            },

        ]
    },
    {
        question: "What is the primary organization that defines Web standards?",

        answer: 
        [
            {
                text: 'W3C', correct: true
            },
            {
                text: 'DTD', correct: false
            },
            {
                text: 'HTMLzD', correct: false 
            },
            {
                text: 'Oracle', correct: false
            },

        ]
    },
]
// =========================== End of question object ==================================================

// constants 
const instructions = document.getElementById("quiz_info")
const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById("question-container")
const questionEl = document.getElementById('question')
const answerButtonEl = document.getElementById('answer-buttons')
const highscores = document.getElementById('highscoresBtn')

const timeEL = document.getElementById("time-sec")
const resultsEl = document.getElementById('results')
const currentQuestionEl = document.getElementById('current_q')
const points = document.getElementById('points')


const CORRECT_BONUS = 10 
const MAX_QUESTIONS = 22

let timeLeft = 80; // set the time in seconds 
//default values for shuffled question and the number of question the shffled questions are on
let shuffledQuestions, currentQuestionIndex
let timer = 0; 
let pointsIndex = 0

// event listener for start button to add a class of hide and then unhide the question - container 
startButton.addEventListener('click', startGame)
// make our next button work 
nextButton.addEventListener('click', () => {
    //increase to the next question 
    currentQuestionIndex++
    currentQuestionEl.innerText = currentQuestionIndex + "/" + MAX_QUESTIONS
    console.log(currentQuestionEl)
    setNextQuestion()
})

// function to start game to  
function startGame() {
    // show and hide displays 
    instructions.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    resultsEl.classList.remove('hide')
    startButton.classList.add('hide')
    highscores.classList.add('hide')

    // shuffle questions randomly 
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    pointsIndex = 0;
    setNextQuestion()
    startTimer()
}

//function to start timer 
function startTimer() {
  timer = setInterval(function() {
    timeLeft--;
    timeEL.innerHTML = timeLeft;
    if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
    }
  }, 1000);
}
//set up the next question to display.
function setNextQuestion() {
    //clear out answers after we are done with the p
    resetState()
    //get question an show it 
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(questions) {
    //get question element on HTML and set inner text to equal to question array 
    questionEl.innerText = questions.question 
    //loop through questions.answer
    questions.answer.forEach(answer => {
        //create a button for each of the answers
        const button = document.createElement('button')
        //change button innertext to answer.text
        button.innerText = answer.text
        //add class 'btn' to each button 
        button.classList.add('btn')
        //check if the answer is correct, we will add a data attribute of correct and set it equal to answer.correct 
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        // set an event listener 
        button.addEventListener('click', selectAnswer)
        // append the answer buttons just created 
        answerButtonEl.appendChild(button)

    })
}

// 
function resetState() {
    // after we click on an answer, show the next button, after click, hide next button again 
    nextButton.classList.add('hide')
    // if there is a child inside the answer-buttons elemenet, remove it 
    while (answerButtonEl.firstChild) {
        answerButtonEl.removeChild
        (answerButtonEl.firstChild)
    }
}
// to have it do something when we select answer
function selectAnswer(e) {
    // get which button we selected and set it to e.target( userinput )
    const selectedButton = e.target
    // check if it is correct by checking the dsataset 
    const correct = selectedButton.dataset.correct
    // create an array from answerbutton element childrens so we can use it forEach loop. 
    Array.from(answerButtonEl.children).forEach(button => {
        // take our button, and check if the dataset is correct. 
        setStatusClass (button, button.dataset.correct)
    })
    if (correct) {
        addPoints();
    }
    // if we are not on the last question 
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
       // save item to local storage 
       localStorage.setItem('mostRecentScore', pointsIndex) 
        return window.location.assign('/end.html')

    }
}

function setStatusClass (element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}


function addPoints() {
    pointsIndex += 1;
    points.innerText = pointsIndex;
}
//function to clear status 
function clearStatusClass (element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

function endQuiz () {
    questionContainerEl.classList.add('hide')
    highscores.classList.remove('hide')
}