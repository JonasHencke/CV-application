import trashbin from "../SVG/trash-full-svgrepo-com.svg";
import downloadSVG from "../SVG/download-svgrepo-com.svg";
import uploadPhotoSVG from "../SVG/photo-upload-svgrepo-com.svg";
import demo_picture from "../images/pexels-brenda-lelis-2899744.jpg"

export default function Form(props) {
  const mapSkills = props.skills.map((skill) => (
    <div className="Form--skillBundle">
      <input
        className="form--input"
        type="text"
        placeholder="Fähigkeit"
        name={skill.name}
        value={skill.value}
        key={skill.key}
        onChange={props.handleSkillsChange}
      />
      <div className="Form--deleteBtn" onClick={props.removeSkill(skill.key)}>
        <img className="Form--icon" src={trashbin} alt="delete" />
      </div>
    </div>
  ));

  const mapWorkExperience = props.workExperience.map((workExperience) => (
    <div className="form--inputBundle">
      <div key={workExperience.key} className="form--workExperienceBundle">
        <input
          className="form--input"
          type="text"
          keyw={workExperience.key}
          placeholder="Zeitraum"
          name="timeframe"
          value={workExperience.timeframe}
          onChange={props.handleWorkExperienceChange}
        ></input>
        <input
          className="form--input"
          type="text"
          keyw={workExperience.key}
          placeholder="Titel"
          name="jobTitle"
          value={workExperience.jobTitle}
          onChange={props.handleWorkExperienceChange}
        ></input>
        <input
          className="form--input"
          type="text"
          keyw={workExperience.key}
          placeholder="Unternehmen"
          name="company"
          value={workExperience.company}
          onChange={props.handleWorkExperienceChange}
        ></input>
        <textarea
          type="text"
          keyw={workExperience.key}
          placeholder="Beschreibung"
          name="description"
          value={workExperience.description}
          onChange={props.handleWorkExperienceChange}
        ></textarea>
      </div>
      {props.workExperience.length > 1 && (
        <div
          className="Form--deleteBtn"
          onClick={props.removeWorkExperience(workExperience.key)}
        >
          <img className="Form--icon" src={trashbin} alt="delete" />
        </div>
      )}
    </div>
  ));

  const mapEducation = props.education.map((education) => (
    <div className="form--inputBundle">
      <div key={education.key} className="form--educationBundle">
        <input
          className="form--input"
          type="text"
          keyw={education.key}
          placeholder="Zeitraum"
          name="timeframe"
          value={education.timeframe}
          onChange={props.handleEducationChange}
        ></input>
        <input
          className="form--input"
          type="text"
          keyw={education.key}
          placeholder="Titel"
          name="jobTitle"
          value={education.jobTitle}
          onChange={props.handleEducationChange}
        ></input>
        <input
          className="form--input"
          type="text"
          keyw={education.key}
          placeholder="Institution"
          name="company"
          value={education.company}
          onChange={props.handleEducationChange}
        ></input>
        
      </div>
      {props.education.length > 1 && (
        <div
          className="Form--deleteBtn"
          onClick={props.removeEducation(education.key)}
        >
          <img className="Form--icon" src={trashbin} alt="delete" />
        </div>
      )}
    </div>
  ));

  return (
    <div className="form--layout">
      <div className="form">
        <h1>Erstelle deinen Lebenslauf</h1>
        <div className="form-button-bundle">
        <button className="downloadBtn" onClick={props.downloadPDF}>
          <img
            className="Form--icon"
            src={downloadSVG}
            alt="download icon"
          ></img>
          als PDF Herunterladen
        </button>
        <button className="downloadBtn" onClick={() => props.fillFormWithExample(demo_picture)}>
          <img
            className="Form--icon"
            src={downloadSVG}
            alt="download icon"
          ></img>
          Demo
        </button>
        </div>
      </div>
      <div className="form">
        <h1>Persönliches</h1>
        <div className="input--container">
          <input
            className="form--input"
            type="text"
            name="firstName"
            value={props.userData.firstName}
            placeholder="Vorname"
            onChange={props.handleUserDataChange}
          />
          <input
            className="form--input"
            type="text"
            name="lastName"
            value={props.userData.lastName}
            placeholder="Nachname"
            onChange={props.handleUserDataChange}
          />
        </div>
        <input
          className="form--input"
          type="text"
          name="jobTitle"
          value={props.userData.jobTitle}
          placeholder="Berufstitel"
          onChange={props.handleUserDataChange}
        />
        <input
          className="form--input"
          type="text"
          name="address"
          value={props.userData.address}
          placeholder="Adresse"
          onChange={props.handleUserDataChange}
        />
        <input
          className="form--input"
          type="text"
          name="website"
          value={props.userData.website}
          placeholder="Webseite"
          onChange={props.handleUserDataChange}
        />
        <input
          className="form--input"
          type="text"
          name="email"
          value={props.userData.email}
          placeholder="E-Mail"
          onChange={props.handleUserDataChange}
        />
        <input
          className="form--input"
          type="text"
          name="phone"
          value={props.userData.phone}
          placeholder="Telefonnummer"
          onChange={props.handleUserDataChange}
        />
        <textarea
          type="text"
          name="Beschreibung"
          value={props.userData.Beschreibung}
          placeholder="Über dich"
          onChange={props.handleUserDataChange}
        />
        <input
          style={{ display: "none" }}
          type="file"
          id="file"
          onChange={(e) =>
            props.setPhoto(URL.createObjectURL(e.target.files[0]))
          }
          accept="image/jpeg, image/png, image/jpg"
        />
        <label className="uploadBtn" for="file">
          <img
            className="Form--icon"
            src={uploadPhotoSVG}
            alt="upload icon"
          ></img>
          Upload Photo
        </label>
      </div>

      <div className="form">
        <h1>Fähigkeiten</h1>
        {mapSkills}
        <button className="Form--addSKillBtn" onClick={props.addSkill}>
          +
        </button>
      </div>
      <div className="form">
        <h1>Ausbildung</h1>
        {mapEducation}
        {props.education.length < 3 && (
          <button className="Form--addSKillBtn" onClick={props.addEducation}>
            +
          </button>
        )}
      </div>
      <div className="form">
        <h1>Erfahrung</h1>
        {mapWorkExperience}
        {props.workExperience.length < 3 && (
          <button
            className="Form--addSKillBtn"
            onClick={props.addWorkExperience}
          >
            +
          </button>
        )}
      </div>
    </div>
  );
}
