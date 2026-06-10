// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'
// import Props from './component/props'

// function App() {
//   const name='React JS Library'
//   return (
//     <>
//       <h1>Hello {name} </h1>

      
//       <Props name="Abhinash Rai" rollno="2025B01010395" 
//       course="B.Tech"  branch="Computer Science"   />
//     </>
//   )
// }

// export default App



// Student Data
const students = [
  { name: "Rahul Sharma", course: "Computer Science", marks: 85 },
  { name: "Anita Verma", course: "Information Technology", marks: 92 },
  { name: "Rohan Gupta", course: "Electronics", marks: 78 }
];

const container = document.getElementById("students");

// Loop through students
students.forEach(student => {

  // Condition (Pass/Fail)
  let result = student.marks >= 40 ? "Pass" : "Fail";
  let resultClass = student.marks >= 40 ? "pass" : "fail";

  // Create card
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <div class="name">${student.name}</div>
    <p>Course: ${student.course}</p>
    <p>Marks: ${student.marks}</p>
    <p class="${resultClass}">Result: ${result}</p>
  `;

  container.appendChild(card);
});