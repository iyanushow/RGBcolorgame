let numOfSquares = 6;
let colors = [];
let picked ;
let square = document.querySelectorAll(".square");

let displayedColor = document.querySelector("#picked");
displayedColor.innerHTML= picked;

let status = document.querySelector("#status");
let block = document.querySelector(".top-bar");
let reset = document.querySelector("#reset");
let level = document.querySelectorAll(".level");

init();


function init()
{
    // CONFIGURE LEVEL    
    for(let i =0; i<level.length;i++)
    {
        // add event listener
        level[i].addEventListener("click", function()
        {
            let value = this.textContent
            
            // if easy make colors array of 3
            if (value === "EASY")
            {
                level[i].classList.add("selected")
                level[i+1].classList.remove("selected");
                numOfSquares =3;
                resetGame();
            }
            // if hard make colors array of 6
            else if(value === "HARD")
            {
                level[i].classList.add("selected")
                level[i-1].classList.remove("selected");
                numOfSquares =6;
                resetGame();
            }
            
        });
    
    }


    // CONFIGURE SQUARES
    for (let i = 0;i<square.length;i++ )
    {   
        // add initial colors
        square[i].style.backgroundColor = colors[i];

        // add event listeners
        square[i].addEventListener("click",
        function()
        {  
            // get selected color
            selection = this.style.backgroundColor; 
                if(selection === picked)
                {
                    for (let i = 0;i<square.length;i++ )
                    {   
                        // add initial colors
                        square[i].style.backgroundColor = picked;
                        status.textContent = "CORRECT!!";
                    } 
                    block.style.backgroundColor =picked;
                    reset.textContent = "PLAY AGAIN?"          
                }
                else 
                {
                    this.style.backgroundColor = "#3b3838";
                    status.textContent="TRY AGAIN!"
                }
        })
    }

    resetGame();
}

reset.addEventListener("click", ()=>
{   resetGame();
    // hardGame();
    status.textContent="";
    reset.textContent="NEW COLOR"
});


// GENERATE-RANDOM-COLORS
function generateColors(num)
{
    // create array
    arrayColor =[];

    // add num random colors
    for(let i = 0;i<num;i++)
    { 
        // pick random red value
         red = Math.floor(Math.random()*256);
        // pick random green value
         green = Math.floor(Math.random()*256);
        // pick random green value
         blue = Math.floor(Math.random()*256);
        arrayColor.push(`rgb(${red}, ${green}, ${blue})`); 
    }

    // return array
    return arrayColor;
}


// RANDOMIZE COLOR
function pickedColor()
{
     random = Math.floor(Math.random()*colors.length);
    return colors[random];
}

// RESET FUNCTION
function resetGame()
{
    
     // generate new colors
     colors = generateColors(numOfSquares);
     // pick new color
      picked =pickedColor();
     //  change displayed color
     displayedColor.innerHTML= picked;
     for (let i = 0;i<square.length;i++ )
     {   
         // add initial colors to first three
         if (colors[i])
         {
            square[i].style.display = "block";
            square[i].style.backgroundColor = colors[i];
         }
        else
        {
            square[i].style.display = "none";
        }
     };
          // reset background
     block.style.backgroundColor = "#4682b4";
}

