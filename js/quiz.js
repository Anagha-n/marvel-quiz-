let questions = [
    {
    id : 1 ,
    question : "What's the name of Black Panther's Kingdom?",
    answer : "Wakanda",
    options : ["Makanda","Wakanda","Lambina","Waklanda"]
    },
    {
    id : 2,
    question : "Who is Thanos the son of?",
    answer : "A'lars",
    options : ["karen","A'lars","En sabaah Nur","Joe"]
    },
    {
    id : 3,
    question : "What is the name of Thor's Mother?",
    answer : "Frigga",
    options : ["Karen","Frigga","Ageir","Alfdis"]
    },
    {
    id : 4,
    question : "What was captain America's height before he transformed into a super-soilder?",
    answer : "5'4",
    options : ["4'11","5'1","5'9","5'4"]
    },
    {
    id : 5,
    question : "What was the name of dwarf of Nidavellir?",
    answer : "Eitri",
    options : ["Steve","Walsh","Eitri","Erik"]
    },
    {
    id : 6,
    question :"Finish this line from Captain America : And Hulk ______",
    answer : "Smash",
    options : ["Smash","Kick Ass","Do it","Good Luck"]
    }
    ]
    
    let value = JSON.stringify(questions)
    localStorage.setItem("question",value)
    
    let question_count = 0 , points = 0 ;
    
    // Function to display the question and option
    window.onload = function (){
    show(question_count)
    }
    
    //function show
    function show(count){
    let question = document.getElementById("questions")
    let [first,second,third,fourth]= questions[count].options
    
    question.innerHTML = `
    <h2>${questions[count].question}</h2>
    <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
    </ul>
    `
    toggleActive();
    }
    
    //function next
    function next(){
    //to check whether it's last question
    if(question_count == questions.length - 1){
    location.href= "./end.html"
    }
    let user_answer = document.querySelector("li.option.active").innerHTML
    if(user_answer == questions[question_count].answer){
    points +=1
    sessionStorage.setItem("points",points)
    } else {
    points +=0
    sessionStorage.setItem("points",points)
    }
    question_count++
    show(question_count)
    }
    
    //function toggle active
    function toggleActive(){
    let option =document.querySelectorAll("li.option")
    for(let i=0;i<option.length;i++){
    option[i].onclick = function(){
    for(let i=0;i<option.length;i++){
    if(option[i].classList.contains("active")){
    option[i].classList.remove("active")
    }
    }
    option[i].classList.add("active")
    }
    }
    }
    function quizpage(){

        location.href = "quiz.html"; 
    
    }