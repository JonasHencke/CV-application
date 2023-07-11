import trashbin from "./trash-full-svgrepo-com.svg"
import { nanoid } from 'nanoid'

export default function Form(props) {

    const mapSkills = props.skills.map(
        skill => <div className="Form--skillBundle"><input type="text" name={skill.name} value={skill.value} key={skill.key} onChange={props.method2}/><div className="Form--deleteSkillBtn" onClick={props.removeSkill(skill.key)}><img className="Form--icon" src={trashbin}/></div></div> )
    
    const mapWorkExperience = props.workExperience.map(
        workExperience =>
        <div key={workExperience.key} className="form--workExperience">
            <input type="text" keyw={workExperience.key} name="timeframe" value={workExperience.timeframe} onChange={props.method3}></input>
            <input type="text" keyw={workExperience.key} name="jobTitle" value={workExperience.jobTitle} onChange={props.method3}></input>
            <input type="text" keyw={workExperience.key} name="company" value={workExperience.company}  onChange={props.method3}></input>
            <textarea type="text" keyw={workExperience.key} name="description" value={workExperience.description}  onChange={props.method3}></textarea>
        </div>
    )

    const mapEducation = props.education.map(
        education =>
        <div key={education.key} className="form--workExperience">
            <input type="text" keyw={education.key} name="timeframe" value={education.timeframe} onChange={props.method4}></input>
            <input type="text" keyw={education.key} name="jobTitle" value={education.jobTitle} onChange={props.method4}></input>
            <input type="text" keyw={education.key} name="company" value={education.company}  onChange={props.method4}></input>
            <textarea type="text" keyw={education.key} name="description" value={education.description}  onChange={props.method4}></textarea>
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
                    <input type="text" name="firstName" value={props.value.firstName} placeholder="Vorname" onChange={props.method}/>
                    <input type="text" name="lastName" value={props.value.lastName} placeholder="Nachname" onChange={props.method}/>
                </div>
                <input type="text" name="address" value={props.value.address} placeholder="Adresse" onChange={props.method}/>
                <input type="text" name="website" value={props.value.website} placeholder="Webseite" onChange={props.method}/>
                <input type="text" name="email" value={props.value.email} placeholder="E-Mail" onChange={props.method}/>
                <input type="text" name="phone" value={props.value.phone} placeholder="Telefonnummer" onChange={props.method}/>
                <textarea type="text" name="Beschreibung" value={props.value.Beschreibung} placeholder="Über dich" onChange={props.method}/>
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
            </div>
        </div>
    )
}