savebutton =  document.querySelector('.saveBtn')
currentday = moment().format('dddd, MMMM Do')
document.querySelector("#currentDay").textContent = currentday

function boxattributes (){
    var currenthour = parseInt(moment().format("H")) //Check current hour using moment js
    //console.log(currenthour)
    for (let i = 0; i<9; i++){
        var textbox = document.body.children[1].children[1 + 3*i] //Loops and finds each textbox element inside the container div
        textbox.textContent = localStorage.getItem(textbox.name) //gets saved notes from local storage and sets the text of the box to that saved value
        if (9+i > currenthour){// compares the current time to the time stated on each box to determine its color and state (past/present/future)
            textbox.setAttribute("class", "future")
        }else if(9+i < currenthour){
            textbox.setAttribute("class", "past")
        }else{
            textbox.setAttribute("class", "present")
        }
    }
}

boxattributes()

document.querySelector(".container").addEventListener('click', event => {
    if (event.target.getAttribute('class') === 'saveBtn'){
        localStorage.setItem(event.target.previousElementSibling.name , event.target.previousElementSibling.value); //if the button is clicked 
    }else if (event.target.getAttribute('class') === 'btnIcon'){
        localStorage.setItem(event.target.parentElement.previousElementSibling.name , event.target.parentElement.previousElementSibling.value); //if the button icon is clicked 
    }
})
