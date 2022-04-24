console.log("connected")
savebutton =  document.querySelector('.saveBtn')
currentday = moment().format('dddd, MMMM Do')
document.querySelector("#currentDay").textContent = currentday

function boxattributes (){
    var currenthour = parseInt(moment().format("H"))
    console.log(currenthour)
    for (let i = 0; i<9; i++){
        var textbox = document.body.children[1].children[1 + 3*i]
        textbox.textContent = localStorage.getItem(textbox.name)
        if (9+i > currenthour){
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
        localStorage.setItem(event.target.previousElementSibling.name , event.target.previousElementSibling.value);
    }
})
