// constants for query selector
const studentId = document.querySelector("#myStudentId");
const changeBtn = document.querySelector("button.custColor");
const randomBtn = document.querySelector(".randColor");
const imageSelect = document.querySelector("#imageSelect");
const imageArray = ["img1","img2","img3","img4","img5"];
const imageOutput = document.querySelector("#images");

// function to change bg color from user input and add student id
function changeCustomColor() 
{
    let input = document.querySelector("#customNumber");
    input = input.value;
    studentId.textContent = "200552775";
    console.log(input);
    
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
    else
    {
        document.body.style.background = "red";
    }
    
    
}

// function to change bg color from random no.
function changeRandomColor() 
{
    let colorArray = ["red","green","blue","orange","yellow","purple"];
    document.body.style.background = colorArray[Math.floor(Math.random() * colorArray.length)];
}

// function to generate options for select list
function addList() {
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
    for (let i = 0; i < imageArray.length; i++) {
        let option = document.createElement("option");
        option.textContent = imageArray[i];
        option.setAttribute("value",imageArray[i]);
        imageSelect.appendChild(option); 
    }
}

// function to change image
function changeImage() {
    imageOutput.setAttribute("src","./img/"+imageSelect.value+".jpg");
}

// event listeners for on click event of buttons and select
changeBtn.addEventListener("click",changeCustomColor);
randomBtn.addEventListener("click",changeRandomColor);
addList();

// event listeners for on change event of select
imageSelect.addEventListener("change",changeImage);
