import telephone from "./telephone-receiver-material-svgrepo-com.svg"
import location from "./location-pin-svgrepo-com.svg"
import email from "./email-svgrepo-com.svg"

export default function CV(props) {

    const mapSkills = props.skills.map(
        x => <li key={x.key}>{x.value}</li> )
    
    const mapWorkExperience = props.workExperience.map(
       x => <div key={x.key} className="CV--arrayBundle">
            <div className="CV--timeframe">{x.timeframe}</div>
            <div className="CV--position">{x.jobTitle}</div>
            <div className="CV--institution">{x.company}</div>
            <div className="CV--description">{x.description}</div>
            </div>
    )

    const mapEducation = props.education.map(
        x => <div key={x.key} className="CV--arrayBundle">
             <div className="CV--timeframe">{x.timeframe}</div>
             <div className="CV--position">{x.jobTitle}</div>
             <div className="CV--institution">{x.company}</div>
             <div className="CV--description">{x.description}</div>
             </div>
     )   

    return (
        <div className="CV">
            <div className="CV--left">
                <div className="CV--img--container">
                    <img className="CV--img" src={props.value.imgURL} alt="your goes here"/>
                </div>
                <div className="CV--firstName">{props.value.firstName.toUpperCase()}</div>
                <div className="CV--lastName">{props.value.lastName.toUpperCase()}</div>
                <div className="CV--title">CREATIVE DESIGNER</div>
                <div className="CV--headline">KONTAKT</div>
                <div className="bundle"><img className="CV--icon" src={location}/>{props.value.address}</div>
                <div className="bundle"><img className="CV--icon" src={telephone} width="80"/>{props.value.phone}</div>
                <div className="bundle"><img className="CV--icon" src={email}/>{props.value.email}</div>
                <div className="CV--headline">SKILLS</div>
                <ul>
                    {mapSkills}
                </ul>
            </div>
            <div className="CV--right">
            <div className="CV--headline">PROFIL</div>
            <div className="CV--aboutMe">{props.value.Beschreibung}</div>
            <div className="CV--headline">AUSBILDUNG</div>
            {mapEducation}
            <div className="CV--headline">BERUFSERFAHRUNG</div>
            {mapWorkExperience}
            </div>
        </div>
    )
}