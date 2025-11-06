const tree = document.getElementById('tree');
const treeButton = document.getElementById('treeButton');

const collapse = () => {
   if (tree.style.height === '0em' && treeButton.textContent === 'Show tree') {
      tree.style.height = 'auto';
      treeButton.textContent = 'Hide tree';
      tree.style.padding = '2em';
      tree.style.transition = 'height 0.5s ease-in-out';
   } else {
      tree.style.height = '0em';
      treeButton.textContent = 'Show tree';
      tree.style.padding = '0em';
      tree.style.transition = 'height 0.5s ease-in-out';
   }
}

treeButton.addEventListener('click', collapse);

const title = document.querySelector('h2').innerText;

const nav = document.querySelector('.nav');
console.log(nav)
const navHover = () => {
   if (window.innerHeight <= 60){
      nav.style.position = 'relative';
      
   } else {
      nav.style.position = 'sticky';
      nav.style.top = '0';
      nav.style.left = '0';
      nav.style.padding = '.5em';
   }
}
window.addEventListener('mouseout', navHover);
window.addEventListener('mouseover', navHover);

const conhid = document.querySelector('#hiddenConcepts');
const b1 = document.querySelector('#more');

const hiddenContent = () => {
   if (conhid.style.display === 'none') {
      conhid.style.display = 'block';
      b1.textContent = 'Less';
   } else {
      conhid.style.display = 'none';
      b1.textContent = 'More';
   }
}
b1.addEventListener('click', hiddenContent);

const conhid2 = document.querySelector('#hiddenDocuments');
const b2 = document.querySelector('#moreD');

const hiddenContent2 = () => {
   if (conhid2.style.display === 'none') {
      conhid2.style.display = 'block';
      b2.textContent = 'Less';
   } else {
      conhid2.style.display = 'none';
      b2.textContent = 'More';
   }
}
b2.addEventListener('click', hiddenContent2);

const s1 = document.querySelector('#s1');

const showS1Example = () => {
   document.querySelector('#s1 h3').textContent = 'Example';
   document.querySelector('#s1 p').textContent = 'const title = document.getElementById("main-title")';
}
s1.addEventListener('click', showS1Example);

const s2 = document.querySelector('#s2');

const showS2Example = () => {
   document.querySelector('#s2 h3').textContent = 'Example';
   document.querySelector('#s2 p').textContent = 'const texts = document.getElementsByClassName("text")';
}
s2.addEventListener('click', showS2Example);

const s3 = document.querySelector('#s3');

const showS3Example = () => {
   document.querySelector('#s3 h3').textContent = 'Example';
   document.querySelector('#s3 p').textContent = 'const divs = document.getElementsByTagName("div");';
}
s3.addEventListener('click', showS3Example);

const s4 = document.querySelector('#s4');

const showS4Example = () => {
   document.querySelector('#s4 h3').textContent = 'Example';
   document.querySelector('#s4 p').textContent = 'const firstBox = document.querySelector(".box");';
}
s4.addEventListener('click', showS4Example);

const s5 = document.querySelector('#s5');

const showS5Example = () => {
   document.querySelector('#s5 h3').textContent = 'Example';
   document.querySelector('#s5 p').textContent = 'const allBoxes = document.querySelectorAll(".box");';
}
s5.addEventListener('click', showS5Example);

const box = document.querySelector('.boxes');
const buttonCollapse = document.querySelector('#bC');

const boxCollapse = () => {
   if (box.style.height === '0em'){
      box.style.height = 'auto';
      buttonCollapse.textContent = 'v'
      box.style.overflow = 'hidden';
   } else {
      box.style.height = '0em';
      buttonCollapse.textContent = '^'
   }
}
buttonCollapse.addEventListener('click', boxCollapse);

// changing contents
const innerT = document.querySelector('#innerText');
const innerH = document.querySelector('#innerHTML');
const textC = document.querySelector('#textContent');

const sec = document.querySelector('.sec');
const hidT = document.querySelector('#innerText .hid');
const hidTC = document.querySelector('#textContent .hid');
const hidH = document.querySelector('#innerHTML .hid');

// innerT
const handleHoverInnerT = ()=> {
   innerT.style.marginLeft = '3em';
   hidT.style.display = 'block';
}
const handleLeaveInnerT = () => {
   innerT.style.marginLeft = '0';
   hidT.style.display = 'none';
};

innerT.addEventListener('mouseover', handleHoverInnerT);
innerT.addEventListener('mouseout', handleLeaveInnerT);

// textC
const handleHoverTextC = ()=> {
   textC.style.marginLeft = '6em';
   hidTC.style.display = 'block';
}
const handleLeaveTextC = () => {
   textC.style.marginLeft = '3em';
   hidTC.style.display = 'none';
};

textC.addEventListener('mouseover', handleHoverTextC);
textC.addEventListener('mouseout', handleLeaveTextC);

// innerH
const handleHoverInnerH = ()=> {
   innerH.style.marginLeft = '8em';
   hidH.style.display = 'block';
}
const handleLeaveInnerH = () => {
   innerH.style.marginLeft = '6em';
   hidH.style.display = 'none';
};

innerH.addEventListener('mouseover', handleHoverInnerH);
innerH.addEventListener('mouseout', handleLeaveInnerH);

// attributes
const setAtt = document.querySelector('#setAttribute');
const getAtt = document.querySelector('#getAttribute');
const removeAtt = document.querySelector('#removeAttribute');
const hidAtt = document.querySelector('#setAttribute .atthid');
const hidgetAtt = document.querySelector('#getAttribute .atthid');
const hidremAtt = document.querySelector('#removeAttribute .atthid');

const handleHoverSetAtt = ()=> {
   hidAtt.style.display = 'block';
}
const handleLeaveSetAtt = () => {
   hidAtt.style.display = 'none';
};

const handleHoverGetAtt = ()=> {
   hidgetAtt.style.display = 'block';
}
const handleLeaveGetAtt = () => {
   hidgetAtt.style.display = 'none';
};

const handleHoverRemoveAtt = ()=> {
   hidremAtt.style.display = 'block';
}
const handleLeaveRemoveAtt = () => {
   hidremAtt.style.display = 'none';
};

setAtt.addEventListener('mouseover', handleHoverSetAtt);
setAtt.addEventListener('mouseleave', handleLeaveSetAtt)

getAtt.addEventListener('mouseover', handleHoverGetAtt);
getAtt.addEventListener('mouseleave', handleLeaveGetAtt)

removeAtt.addEventListener('mouseover', handleHoverRemoveAtt);
removeAtt.addEventListener('mouseleave', handleLeaveRemoveAtt)

let questionStack = [
   {
      question: '1. What does the DOM stand for? <br> <br>A) Document Object Model <br> <br>B) Data Object Model <br><br> C) Document Oriented Model <br><br> D) Dynamic Object Manipulation',
   },
   {
      question: '2. Which method is used to select an element by its ID? <br><br> A) querySelectorAll() <br><br> B) getElementByClassName() <br><br> C) getElementById() <br><br> D) getElementsByTagName()',
   },
   {
      question: `3. What will document.querySelector('.title') select <br><br> A) All elements with class “title” <br><br> B) The first element with class “title” <br> <br>C) The first element with ID “title” <br><br> D) No elements`,
   },
   {
      question: '4. Which method returns a live HTMLCollection? <br><br> A) querySelectorAll() <br><br> B) getElementsByClassName() <br><br> C) querySelector() <br><br> D) getElementById()',
   },
   {
      question: '5. How can you change the text inside a <p> element with ID “demo”? <br> <br>A) document.getElementById("demo").text = "Hello"; <br><br> B) document.getElementById("demo").innerHTML = "Hello"; <br> <br>C) document.getElementById("demo").setHTML = "Hello"; <br> <br>D) document.getElementById("demo").changeText("Hello");',
   },
   {
      question: '6. What is the difference between innerText and innerHTML? <br><br> A) innerText adds HTML tags, innerHTML only adds text <Br> B) innerText gets visible text only, innerHTML can include HTML tags <br> C) Both are identical <br><br> D) innerText works only with input fields',
   },
   {
      question: '7. How do you change the background color of an element with ID “box”? <br> <br>A) document.getElementById("box").style.bgcolor = "red"; <br><br> B) document.getElementById("box").backgroundColor = "red"; <br> <br>C) document.getElementById("box").style.backgroundColor = "red"; <br> D) document.getElementById("box").setStyle("backgroundColor", "red");',
   },
   {
      question: '8. document.querySelector("p").style.color = "blue"; <br> <br>A) Changes all paragraphs’ color to blue <br> <br>B) Changes the first paragraph’s color to blue <br><br> C) Creates a new paragraph in blue <br> <br>D) Removes blue color from all paragraphs',
   },
   {
      question: '9. Which property is used to change the text color of an element using JavaScript? <br> <br>A) textColor <br><br> B) style.fontColor <br> C) style.color <br> D) color.text',
   },
   {
      question: '10. How can you select all paragraph elements on a webpage? <br><br> A) document.querySelector("p") <br> <br>B) document.getElementById("p") <br> <br>C) document.querySelectorAll("p") <br><br> D) document.getElementsByClassName("p")',
   },
];
let question = document.querySelector('.question');
let timer = document.querySelector('#timer');
let questionIndex = 0;
let counter = 15;

question.innerHTML = questionStack[questionIndex].question;

let countdown = setInterval(() => {
   counter--;
   timer.innerText = counter;

   // When timer reaches 0, move to next question
   if (counter <= 0) {
      questionIndex++;
      counter = 15; // reset counter

      // If there are more questions
      if (questionIndex < questionStack.length) {
         question.innerHTML = questionStack[questionIndex].question;
      } else {
         // Quiz is finished
         clearInterval(countdown);
         question.innerText = '🎉 Quiz Finished!';
         timer.innerText = '';
      }
   }
}, 1000);





