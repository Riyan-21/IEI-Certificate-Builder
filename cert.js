const name1 = prompt("Enter your name: ");
const roll = prompt("Enter your roll no: ");
const title = prompt("Enter Project Title: ");
const dept = prompt("Enter department in short form: ");
const year1 = prompt("Enter year: ");
const certno1 = prompt("Enter certificate no. : ");
// const name1 = "Riyan Kundu";
// const roll = "35000324020";
// const title = "NPN Transistor based Full Adder";
// const dept = "ECE";
// const year1 = "2nd";
// const certno1 = "IEIECE/280825/RIY020";
const nameTxt = document.getElementById("name");
const main = document.getElementById("main");
const certno = document.getElementById("certno");
const text = document.createElement("p");
text.setAttribute("id", "text");
main.appendChild(text);
nameTxt.innerHTML = `${name1}`;
certno.innerHTML = `${certno1}`
text.innerHTML = `
Roll No. <b>${roll}</b>, of <b>${dept} Dept. , ${year1} Year</b>, has successfully participated in the <br>
<b>Spectrum 2K25 Project Exhibition</b> organized by <b>ECE IEI Students’ Chapter</b> at <br>
<b>Ramkrishna Mahato Govt. Engineering College, Purulia.</b>
<br><br>
The student presented the project titled <br> <b>
“${title}”,</b>
<br><br>
showcasing creativity, innovation, and technical skills. We sincerely appreciate the student’s contribution and enthusiastic participation in the event.
`;

