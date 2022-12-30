// Deciding what the colour is

const finalColour = {
    red: Math.floor(Math.random() * 255),
    green: Math.floor(Math.random() * 255),
    blue: Math.floor(Math.random() * 255),
}

document.addEventListener('DOMContentLoaded', (event) => {


    // Setting the colour prompt

    document.getElementById("colourName").innerText = `The RGB value you must find is: (${finalColour.red}, ${finalColour.green}, ${finalColour.blue})`

    
    Array.from(document.getElementsByClassName("colour")).forEach(colour => { // Loop through colour divs

        // Set their colour

        colour.style["background-color"] = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`

        // Add event listener for click, check if it's the right colour, if it is, display win screen, if not, remove the colour
        
        colour.addEventListener("click", () => {
            
            if (colour.style["background-color"] == `rgb(${finalColour.red}, ${finalColour.green}, ${finalColour.blue})`) {
                win()
            } else {
                colour.remove()
            }

        });
    })

    // Set a random colour to be the right one

    document.getElementsByClassName("colour")[Math.floor(Math.random() * 6)].style["background-color"] = `rgb(${finalColour.red}, ${finalColour.green}, ${finalColour.blue})`

    // Add event listener for reset button

    document.getElementById("reset").addEventListener("click", () => {
        reset()
    });

});
  


const win = () => {
    document.getElementById("game").style["display"] = "none"
    document.getElementById("win").style["display"] = "flex"
    document.body.style["background-color"] = `rgb(${finalColour.red}, ${finalColour.green}, ${finalColour.blue})`
}

const reset = () => {
    location.reload()
}