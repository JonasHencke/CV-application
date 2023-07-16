import telephone from "./SVG/telephone-receiver-material-svgrepo-com.svg"
import location from "./SVG/location-pin-svgrepo-com.svg"
import email from "./SVG/email-svgrepo-com.svg"
import website from "./SVG/website-webpage-url-domain-svgrepo-com.svg"
import defaultProfile from "./Blank_portrait,_male_(rectangular).png"
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
        <div id="capture" className="CV">
            <div className="CV--left">
                <div className="CV--img--container">
                    <img id="image" className="CV--img" src={(props.photo) ? props.photo : defaultProfile} alt="your goes here"/>
                </div>
                <div className="CV--firstName">{props.value.firstName.toUpperCase()}</div>
                <div className="CV--lastName">{props.value.lastName.toUpperCase()}</div>
                <div className="CV--title">{props.value.jobTitle.toUpperCase()}</div>
                <div className="CV--headline">KONTAKT</div>
                <div className="bundle"><img className="CV--icon" src={location}/>{props.value.address}</div>
                <div className="bundle"><img className="CV--icon" src={telephone} width="80"/>{props.value.phone}</div>
                <div className="bundle"><img className="CV--icon" src={email}/>{props.value.email}</div>
                <div className="bundle"><img className="CV--icon" src={website}/>{props.value.website}</div>
                <div className="CV--headline">FÄHIGKEITEN</div>
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