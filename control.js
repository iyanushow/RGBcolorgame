

const colors = [
"rgb(255, 0, 0)",
"rgb(0, 255, 0)",
"rgb(255, 255, 0)",
"rgb(0, 255, 255)",
"rgb(0, 0, 255)",
"rgb(255, 0, 255)"
]
// const picked = colors[4];
const picked =pickedColor();
const square = document.querySelectorAll(".square");
let displayedColor = document.querySelector("#picked");
displayedColor.innerHTML= picked;
let status = document.querySelector("#status");


for (let i = 0;i<square.length;i++ )
{   
    // add initial colors
    square[i].style.backgroundColor = colors[i];

    // add event listeners
    square[i].addEventListener("click",
    function()
    {  
        // get selected color
        let selection = this.style.backgroundColor; 
            if(selection === picked)
            {
                for (let i = 0;i<square.length;i++ )
                {   
                    // add initial colors
                    square[i].style.backgroundColor = picked;
                    status.textContent = "CORRECT!!";
                }              
            }
            else 
            {
                this.style.backgroundColor = "#3b3838";
                status.textContent="TRY AGAIN!"
            }
    })
}


// RANDOMIZE COLOR
function pickedColor()
{
    let random = Math.floor(Math.random()*colors.length);
    return colors[random];
}
