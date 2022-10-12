const correctAnswer = ['Yes','Yes','Yes','Yes','Yes',];
const form = document.querySelector('.question-form');

form.addEventListener('submit', e => {
    e.preventDefault();

    let score = 0;
    const userAnwvers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value,]

    userAnwvers.forEach((answer, index) => {
        if(answer === correctAnswer[index]){
            score += 20;
        }
    })
    console.log(score);
})