import './App.css';
import Form from './Form';
import CV from './CV';
import React,{useState} from "react"
import { nanoid } from 'nanoid'
import { jsPDF } from "jspdf"

function App() {

  const [title, setTitle] = useState({
    imgURL: "https://media.istockphoto.com/id/545655398/de/foto/freundliches-bewerbungsfoto.jpg?s=612x612&w=0&k=20&c=cG-sUkc56KjXxlLXIdGKrHLLvzJfltqGDEfGCPCx2UQ=",
    firstName: "",
    lastName: "",
    address: "",
    website: "",
    email: "",
    phone: "",
    Beschreibung: "",
    uni: "",
    uniAbschluss: "",
    uniZeitraum: "",
    school: "",
    abschlussSchule: "",
    schuleZeitraum: "",
  });

  const [skills, setSkills] = useState([{value: "Python", name:"hallo", key: nanoid()},{value: "Javascript", name:"hallo2", key: nanoid()},{value: "NodeJS", name:"hallo3", key: nanoid()}])
  const [workExperience, setWorkExperience] = useState([{timeframe: "2020 - 2021", jobTitle:"Hausmeister", company:"Faber Castell", description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,", name: nanoid(), key: nanoid()},{timeframe: "2020-2021", jobTitle:"Hausmeister", company:"Faber Castell", description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,", name: nanoid(), key: nanoid()}]);
  const [education, setEducation] = useState([{timeframe: "2023 - 2023", jobTitle:"Hausmeister", company:"Faber Castell", description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,", name: nanoid(), key: nanoid()},{timeframe: "2020-2021", jobTitle:"Hausmeister", company:"Faber Castell", description:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,", name: nanoid(), key: nanoid()}]);

  const doc = new jsPDF();

  doc.text("Hello world!", 10, 10);

  function downloadPDF() {
    doc.save("a4.pdf");
  }

  // skills: [], workExperience
  function handleSkillsChange(event) {
    const {name, value} = event.target;
    setSkills(oldSKills => oldSKills.map( skill => {
      return skill.name === name ?
      {...skill, value: value} : skill
    }))
  }

  function handleWorkExperienceChange(event) {
    const {name, value} = event.target;
    const key2 = event.target.getAttribute('keyw')
    setWorkExperience(oldWorkExperience => oldWorkExperience.map( workExperience => {
      return workExperience.key === key2 ?
      {...workExperience, [name]: value} : workExperience
    }))
  }

  function handleEducationChange(event) {
    const {name, value} = event.target;
    const key2 = event.target.getAttribute('keyw')
    setEducation(oldEducation => oldEducation.map( education => {
      return education.key === key2 ?
      {...education, [name]: value} : education
    }))
  }

  const newSkill = {value: "", name: nanoid(), key: nanoid()}

  function addSkill() {
    setSkills([
      ...skills,
      newSkill
    ])
  }

  function removeSkill(key) {
    return function(){
    setSkills( skills.filter(a =>
    a.key !== key))}
  }

  function handleTitleChange(event) {
    const {name, value} = event.target
    setTitle(prevName => ({
        ...prevName,
        [name]: value
    }))
}

  return (
  <div >
   <Form value={title} method={handleTitleChange} method2={handleSkillsChange} skills={skills} addSkill={addSkill} removeSkill={removeSkill} workExperience={workExperience} education={education} method3={handleWorkExperienceChange} method4={handleEducationChange} downloadPDF={downloadPDF}/>
   <CV value={title} skills={skills} workExperience={workExperience} education={education}/>
  </div>
  );
}

export default App;
