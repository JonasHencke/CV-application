import telephone from "../SVG/telephone-receiver-material-svgrepo-com.svg";
import location from "../SVG/location-pin-svgrepo-com.svg";
import email from "../SVG/email-svgrepo-com.svg";
import website from "../SVG/website-webpage-url-domain-svgrepo-com.svg";
import defaultProfile from "../images/Blank_portrait,_male_(rectangular).png";
export default function CVPrint(props) {
  const mapSkills = props.skills.map((x) => <li key={x.key}>{x.value}</li>);

  const mapWorkExperience = props.workExperience.map((x) => (
    <div key={x.key} className="CVPrint--arrayBundle">
      <div className="CVPrint--timeframe">{x.timeframe}</div>
      <div className="CVPrint--position">{x.jobTitle}</div>
      <div className="CVPrint--institution">{x.company}</div>
      <div className="CVPrint--description">{x.description}</div>
    </div>
  ));

  const mapEducation = props.education.map((x) => (
    <div key={x.key} className="CVPrint--arrayBundle">
      <div className="CVPrint--timeframe">{x.timeframe}</div>
      <div className="CVPrint--position">{x.jobTitle}</div>
      <div className="CVPrint--institution">{x.company}</div>
      <div className="CVPrint--description">{x.description}</div>
    </div>
  ));

  return (
    <div id="capture" className="CVPrint">
      <div className="CVPrint--left">
        <div className="CVPrint--img--container">
          <img
            id="image"
            className="CVPrint--img"
            src={props.photo ? props.photo : defaultProfile}
            alt="your goes here"
          />
        </div>
        <div className="CVPrint--firstName">
          {props.userData.firstName.toUpperCase()}
        </div>
        <div className="CVPrint--lastName">{props.userData.lastName.toUpperCase()}</div>
        <div className="CVPrint--title">{props.userData.jobTitle.toUpperCase()}</div>
        <div className="CVPrint--headline">KONTAKT</div>
        <div className="CVPrint-bundle">
          <img className="CVPrint--icon" src={location} alt="" />
          {props.userData.address}
        </div>
        <div className="CVPrint-bundle">
          <img className="CVPrint--icon" src={telephone} alt="" />
          {props.userData.phone}
        </div>
        <div className="CVPrint-bundle">
          <img className="CVPrint--icon" src={email} alt="" />
          {props.userData.email}
        </div>
        <div className="CVPrint-bundle">
          <img className="CVPrint--icon" src={website} alt="" />
          {props.userData.website}
        </div>
        <div className="CVPrint--headline">FÄHIGKEITEN</div>
        <ul>{mapSkills}</ul>
      </div>
      <div className="CVPrint--right">
        <div className="CVPrint--headline">PROFIL</div>
        <div className="CVPrint--aboutMe">{props.userData.Beschreibung}</div>
        <div className="CVPrint--headline">AUSBILDUNG</div>
        {mapEducation}
        <div className="CVPrint--headline">BERUFSERFAHRUNG</div>
        {mapWorkExperience}
      </div>
    </div>
  );
}
