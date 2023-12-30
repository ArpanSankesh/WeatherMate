const inputBox = document.querySelector('.input_box');
const btn = document.querySelector('.btn');
const city = document.querySelector('.city');

function changeValue(){
    city.innerHTML = inputBox.value;
    city.style.textTransform = "capitalize";
    console.log("clicked");
}

btn.addEventListener('click',() =>{
    changeValue()
});
inputBox.addEventListener('keypress',(event) =>{
    if(event.key === 'Enter'){
        console.log("pressed")
        changeValue()
    }

});

function getWether(){
    const Api_Key = "9c5c2063a22b2bb4373d1fd19da907fd";

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Api_Key}`).then(res => res.json()).then(data =>console.log(data))
}
console.log(getWether(city));

