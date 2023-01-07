let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/pubg-baniere.png") {
    myImage.setAttribute("src", "images/pubg-baniere2.png");
  } else if (mySrc === "images/pubg-baniere2.png"){
    myImage.setAttribute("src", "images/pubg-baniere3.jpeg");
  } else {
    myImage.setAttribute("src", "images/pubg-baniere.png");
  }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `pubg is going to take your soul, ${myName}`;
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  }
  
  