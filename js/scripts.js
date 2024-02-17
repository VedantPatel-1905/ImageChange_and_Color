// constants for query selector
const studentId = document.querySelector("#myStudentId");
const changeBtn = document.querySelector("button.custColor");
const randomBtn = document.querySelector(".randColor");
const imageSelect = document.querySelector("#imageSelect");
const imageOutput = document.querySelector("#images");
// image array contains the name of the images in image folder
const imageArray = ["img1","img2","img3","img4","img5"];

// function to change bg color from user input and add student id
function changeCustomColor() 
{
    // declaring variable to store input value from the user
    let input = document.querySelector("#customNumber").value;
    // setting my student number as text in paragraph tag
    studentId.textContent = "200552775";
    
    // if else ladder to assign the colors to respected range of numbers
    if (input >0 && input<= 20)
    {
        document.body.style.background = "green";
    }
    else if (input >20 && input<= 40)
    {
        document.body.style.background = "blue";
    }
    else if (input >40 && input<= 60)
    {
        document.body.style.background = "orange";
    }
    else if (input >60 && input<= 80)
    {
        document.body.style.background = "purple";
    }
    else if (input >80 && input<= 100)
    {
        document.body.style.background = "yellow";
    }
    // setting the color to red when the values i greater than 100 or less than 0
    else
    {
        document.body.style.background = "red";
    }
    
    
}

// function to change bg color from random no.
function changeRandomColor() 
{
    // resetting the value of paragraph to empty 
    studentId.textContent = "";
    // declaring the array of colors 
    let colorArray = ["red","green","blue","orange","yellow","purple"];
    // assigning the random background color to the body using random function from Math library
    document.body.style.background = colorArray[Math.floor(Math.random() * colorArray.length)];
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    // for loop will iterate through image array and assign its values to the option value
    for (let i = 0; i < imageArray.length; i++) {
        let option = document.createElement("option");
        option.textContent = imageArray[i];
        option.setAttribute("value",imageArray[i]);
        imageSelect.appendChild(option); 
    }
}

// function to change image
function changeImage() {
    // this will set the src attribute of the img tag to the image selected by the user
    imageOutput.setAttribute("src","./img/"+imageSelect.value+".jpg");
}

// event listeners for on click event of buttons and select
changeBtn.addEventListener("click",changeCustomColor);
randomBtn.addEventListener("click",changeRandomColor);
addList();

// event listeners for on change event of select
imageSelect.addEventListener("change",changeImage);
