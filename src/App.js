import Form from "./components/Form";
import CV from "./components/CV";
import CVPrint from "./components/CVPrint";
import React, { useState } from "react";
import { nanoid } from "nanoid";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

function App() {

  /* ====================
      App State */

  const [userData, setUserData] = useState({
    firstName: "",
    jobTitle: "",
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

  const [photo, setPhoto] = useState();
  const [skills, setSkills] = useState([
    { value: "", name: nanoid(), key: nanoid() },
    { value: "", name: nanoid(), key: nanoid() },
    { value: "", name: nanoid(), key: nanoid() },
  ]);
  const [workExperience, setWorkExperience] = useState([
    {
      timeframe: "",
      jobTitle: "",
      company: "",
      description: "",
      name: nanoid(),
      key: nanoid(),
    },
  ]);
  const [education, setEducation] = useState([
    {
      timeframe: "",
      jobTitle: "",
      company: "",
      description: "",
      name: nanoid(),
      key: nanoid(),
    },
  ]);

  /* ==========================
      PDF Download function */

  function downloadPDF() {
    let screenshot = document.getElementById("capture");
    html2canvas(screenshot).then(function (screenshot) {
      let image = screenshot.toDataURL("image/png");
      const resume = new jsPDF();
      resume.addImage(image, "PNG", 0, 0, 210, 297);
      resume.save("resume");
    });
  }

  /* =====================================
      Functions to handle State changes */

  function handleSkillsChange(event) {
    const { name, value } = event.target;
    setSkills((oldSKills) =>
      oldSKills.map((skill) => {
        return skill.name === name ? { ...skill, value: value } : skill;
      })
    );
  }

  function handleWorkExperienceChange(event) {
    const { name, value } = event.target;
    const key2 = event.target.getAttribute("keyw");
    setWorkExperience((oldWorkExperience) =>
      oldWorkExperience.map((workExperience) => {
        return workExperience.key === key2
          ? { ...workExperience, [name]: value }
          : workExperience;
      })
    );
  }

  function handleEducationChange(event) {
    const { name, value } = event.target;
    const key2 = event.target.getAttribute("keyw");
    setEducation((oldEducation) =>
      oldEducation.map((education) => {
        return education.key === key2
          ? { ...education, [name]: value }
          : education;
      })
    );
  }

  function handleUserDataChange(event) {
    const { name, value } = event.target;
    setUserData((prevName) => ({
      ...prevName,
      [name]: value,
    }));
  }

  function handlePhoto(event) {
    setPhoto(event.target.file[0]);
    console.log(event.target.file[0]);
  }

  /* ==================
    Constants that can be added to state via add functions */

  const newEducation = {
    timeframe: "",
    jobTitle: "",
    company: "",
    description: "",
    name: nanoid(),
    key: nanoid(),
  };

  const newWorkExperience = {
    timeframe: "",
    jobTitle: "",
    company: "",
    description: "",
    name: nanoid(),
    key: nanoid(),
  };

  const newSkill = { value: "", name: nanoid(), key: nanoid() };

  /* ==================
    Functions to add/remove new objects to array of state*/

  function addEducation() {
    setEducation([...education, newEducation]);
  }

  function removeEducation(key) {
    return function () {
      setEducation(education.filter((a) => a.key !== key));
    };
  }

  function addWorkExperience() {
    setWorkExperience([...workExperience, newWorkExperience]);
  }

  function removeWorkExperience(key) {
    return function () {
      setWorkExperience(workExperience.filter((a) => a.key !== key));
    };
  }

  function addSkill() {
    setSkills([...skills, newSkill]);
  }

  function removeSkill(key) {
    return function () {
      setSkills(skills.filter((a) => a.key !== key));
    };
  }

  return (
    <div className="layout">
      <Form
        userData={userData}
        handleUserDataChange={handleUserDataChange}
        handleSkillsChange={handleSkillsChange}
        skills={skills}
        addSkill={addSkill}
        removeSkill={removeSkill}
        workExperience={workExperience}
        education={education}
        handleWorkExperienceChange={handleWorkExperienceChange}
        handleEducationChange={handleEducationChange}
        downloadPDF={downloadPDF}
        setPhoto={setPhoto}
        photo={photo}
        handlePhoto={handlePhoto}
        addWorkExperience={addWorkExperience}
        removeWorkExperience={removeWorkExperience}
        addEducation={addEducation}
        removeEducation={removeEducation}
      />
      <CV
        userData={userData}
        skills={skills}
        workExperience={workExperience}
        education={education}
        photo={photo}
      />
      <CVPrint
        userData={userData}
        skills={skills}
        workExperience={workExperience}
        education={education}
        photo={photo}
      />
    </div>
  );
}

export default App;
