const listeninElementsIDs = [
    'numberX',
    'numberA',
    'numberB',
    'randomizeX',
    'randomizeA',
    'randomizeB'
];


let numberX = null;
let numberA = null;
let numberB = null;
function updateDOM(event){
    // console.log(event.currentTarget.id);
    switch (event.currentTarget.id) {
        case "numberX":
            numberX = parseFloat(event.currentTarget.value);
            break;
        case "numberA":
            numberA = parseFloat(event.currentTarget.value);
            break;
        case "numberB":
            numberB = parseFloat(event.currentTarget.value);
            break;
        case "randomizeX":
            randomizeField("numberX");
            break;
        case "randomizeA":
            randomizeField("numberA");
            break;
        case "randomizeB":
            randomizeField("numberB");
            break;
            
        };
    if (typeof(numberX) == "number" && typeof(numberA) == "number" && typeof(numberB) == "number") {
        calculate();
    } else {
        document.getElementById('answer').textContent = " Введите все числа";
    }

    console.log(event.currentTarget.value);
};

function randomizeField(id){
  const el = document.getElementById(id);
  if(!el){ console.error('нет элемента с id:', id); return; }
  el.value = Math.floor(Math.random()*201)-100; // -100..100
}


function calculate(){
    const low = Math.min(numberA,numberB);
    const max = Math.max(numberA,numberB);

    const inRange = numberX >= low && numberX <= max;

    const answer = inRange == true
    ? "Число " + numberX + " принадлежит отрезку [" + numberA + ":" + numberB + "]"
    : "Число " + numberX + " НЕ принадлежит отрезку [" + numberA + ":" + numberB + "]"

    document.getElementById('answer').innerText = answer;
    // console.log(answer);
};

listeninElementsIDs.forEach(id => {
    const elementDOM = document.getElementById(id);
    elementDOM.addEventListener("click", updateDOM);
    elementDOM.addEventListener("input", updateDOM);
    elementDOM.addEventListener("change", updateDOM);
});