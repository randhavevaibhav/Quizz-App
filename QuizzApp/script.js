const quizData = [
    {
        question: 'what is the shape of sun ?',
        a: 'round',
        b: 'conical',
        c:'rectangular',
        d:'spherical',
        correct: 'a'
    },
    {
        question: 'which one is the fastest animal ?',
        a: 'dear',
        b: 'rabit',
        c:'lion',
        d:'cheeta',
        correct:'d'
    },
    {
        question: 'what is the most used programming lnaguage in 2021 ?',
        a: 'C',
        b: 'C++',
        c:'Javascript',
        d:'Java',
        correct:'c'

    },
    {
        question: 'what does html stand for ?',
        a: 'Hypertext Markup Language',
        b: 'Holly text medium Language',
        c:'Help to me language',
        d:'None of the above',
        correct:'a'

    },

    {
        question: 'Who is the founder of C++ Language ?',
        a: 'Guido van Rossum',
        b: 'Dennis Ritchie',
        c:'James Gosling',
        d:'Brendan Eich',
        correct:'b'

    },
    
] 

const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

const quiz = document.getElementById("quiz");

const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz()
{   
    
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


   
}

function getSelected()
{
     const answerEls = document.querySelectorAll(".answer");
     let answer = undefined;

     answerEls.forEach((answerEl) =>
     {
        if(answerEl.checked)
        {
            answer= answerEl.id;
        }

       
     });

     return answer;

}

function deselectAnswers()
{
    const answerEls = document.querySelectorAll(".answer");
     let answer = undefined;

     answerEls.forEach((answerEl) =>
     {
        answerEl.checked = false;

       
     });
}

submitBtn.addEventListener('click', () =>{
   
    const answer = getSelected();
    console.log("answer value: "+answer);
    if(answer && currentQuiz < 5)
    {
        if(answer === quizData[currentQuiz].correct)
        {
            score++;
            console.log(score);
        }
        currentQuiz++;
        console.log("No. of questions "+currentQuiz);
        if(currentQuiz < quizData.length)
        {
            loadQuiz();
        }else{

            //show results
            quiz.innerHTML=`<h2>You answered correctly 
            ${score} out of ${quizData.length}</h2><br>
            <button onclick="location.reload()">Reload</button>`
            
            
        }
    }
    

    
})