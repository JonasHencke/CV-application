import trashbin from "./SVG/trash-full-svgrepo-com.svg"
import downloadSVG from "./SVG/download-svgrepo-com.svg"
import uploadPhotoSVG from "./SVG/photo-upload-svgrepo-com.svg"
import { nanoid } from 'nanoid'

export default function Form(props) {

    const mapSkills = props.skills.map(
        skill => <div className="Form--skillBundle"><input className="form--input" type="text" placeholder="Fähigkeit" name={skill.name} value={skill.value} key={skill.key} onChange={props.method2}/><div className="Form--deleteSkillBtn" onClick={props.removeSkill(skill.key)}><img className="Form--icon" src={trashbin}/></div></div> )
    
    const mapWorkExperience = props.workExperience.map(
        workExperience =>
        <div key={workExperience.key} className="form--workExperience">
            <input className="form--input" type="text" keyw={workExperience.key} placeholder="Zeitraum" name="timeframe" value={workExperience.timeframe} onChange={props.method3}></input>
            <input className="form--input" type="text" keyw={workExperience.key} placeholder="Titel" name="jobTitle" value={workExperience.jobTitle} onChange={props.method3}></input>
            <input className="form--input" type="text" keyw={workExperience.key} placeholder="Unternehmen" name="company" value={workExperience.company}  onChange={props.method3}></input>
            <textarea type="text" keyw={workExperience.key} placeholder="Beschreibung" name="description" value={workExperience.description}  onChange={props.method3}></textarea>
        </div>
    )

    const mapEducation = props.education.map(
        education =>
        <div key={education.key} className="form--workExperience">
            <input className="form--input" type="text" keyw={education.key} placeholder="Zeitraum" name="timeframe" value={education.timeframe} onChange={props.method4}></input>
            <input className="form--input" type="text" keyw={education.key} placeholder="Titel" name="jobTitle" value={education.jobTitle} onChange={props.method4}></input>
            <input className="form--input" type="text" keyw={education.key} placeholder="Unternehmen" name="company" value={education.company}  onChange={props.method4}></input>
            <textarea type="text" keyw={education.key} placeholder="Beschreibung" name="description" value={education.description}  onChange={props.method4}></textarea>
        </div>
    )

    return (
        <div>
            <div className="form">
                <h1>Erstelle deinen Lebenslauf</h1>
            </div>
            <div className="form">
                <h1>Persönliches</h1>
                <div className="input--container">
                    <input className="form--input" type="text" name="firstName" value={props.value.firstName} placeholder="Vorname" onChange={props.method}/>
                    <input className="form--input" type="text" name="lastName" value={props.value.lastName} placeholder="Nachname" onChange={props.method}/>
                </div>
                <input className="form--input" type="text" name="jobTitle" value={props.value.jobTitle} placeholder="Berufstitel" onChange={props.method}/>
                <input className="form--input" type="text" name="address" value={props.value.address} placeholder="Adresse" onChange={props.method}/>
                <input className="form--input" type="text" name="website" value={props.value.website} placeholder="Webseite" onChange={props.method}/>
                <input className="form--input" type="text" name="email" value={props.value.email} placeholder="E-Mail" onChange={props.method}/>
                <input className="form--input" type="text" name="phone" value={props.value.phone} placeholder="Telefonnummer" onChange={props.method}/>
                <textarea type="text" name="Beschreibung" value={props.value.Beschreibung} placeholder="Über dich" onChange={props.method}/>
                <input className="displayNone" type="file" id="file" onChange={(e) => props.setPhoto(URL.createObjectURL(e.target.files[0]))} accept="image/jpeg, image/png, image/jpg"/>
                <label className="uploadBtn" for="file"><img className="Form--icon" src={uploadPhotoSVG}></img>Upload Photo</label>
            </div>

            <div className="form">
                <h1>Skills</h1>
                {mapSkills}
                <button className="Form--addSKillBtn" onClick={props.addSkill}>+</button>
            </div>
            <div className="form">
                <h1>Ausbildung</h1>
                {mapEducation}
            </div>
            <div className="form">
                <h1>Erfahrung</h1>
                {mapWorkExperience}
                <button className="downloadBtn" onClick={props.downloadPDF}><img className="Form--icon" src={downloadSVG}></img>Lebenslauf Herunterladen</button>
            </div>
            
        </div>
    )
}