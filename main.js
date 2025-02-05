import questions from "./questions.js";

const btn = document.querySelector("button");
const quizSection = document.querySelector(".quizSection");
const timerDiv = document.querySelector(".time");
// btn.addEventListener("click", () => {
//     setTimeout(() => console.log("Khushi"), 2000)
// }

// function queAns() {
//     questions.map((object) => {
//         const heading = document.createElement("h1");
//         // const opt = document.createElement("p");
//         heading.innerHTML = object.q;
//         quizSection.append(heading);
//         object.options.map((opt) => {
//             const option = document.createElement("p");
//             option.innerHTML = opt;
//             quizSection.append(option);
//         })
//     })
// }

let queCount = 0;
let timer = 2;
btn.addEventListener("click", () => {
    btn.style.display = "none";

    //for pring the first que instantly
    timerDiv.innerHTML = timer;
    displayQuestionAndOptions(queCount);
    quizSection.classList.add("bg-white","rounded-lg");
    timerDiv.classList.add("bg-white","rounded-lg");
    const interval = setInterval(() => {
        if (timer === 0) {
            if (queCount < questions.length - 1) {
                queCount++
                timer = 2;
                timerDiv.innerHTML = timer;
                displayQuestionAndOptions(queCount);
            }
            else {
                clearInterval(interval);
                quizSection.innerHTML = "";
                timerDiv.innerHTML="";
            }
        }
        else {
            timer--;
            timerDiv.innerHTML = timer;
        }
    }, 1000)

});

function displayQuestionAndOptions(queCount) {
    quizSection.innerHTML = ""
    const heading = document.createElement("h1");
    // const opt = document.createElement("p");
    heading.innerHTML = questions[queCount].q;
    quizSection.append(heading);

    questions[queCount].options.map((opt) => {
        const option = document.createElement("p");
        option.innerHTML = opt;
        quizSection.append(option);
    })

}
// let count = 0;
// btn.addEventListener("click", () => {
//     const interval = setInterval(() => {
//         if (count === 5) clearInterval(interval);
//         else {
//             console.log("Khushi");
//             count++;
//         }
//     }, 1000);
// });

// queAns();
