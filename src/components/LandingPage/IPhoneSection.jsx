import iPhone from "../../imeges/iPhone.png";
import iPhoneBack from "../../imeges/iPhoneBack.png";
import "./iPhoneSection.css";

const IPhoneSection = () => {
  return (
    <div className="iPhoneSection">
      <img className="path" src={iPhoneBack} alt="phone back path" />
      <div className="detailsContainer">
        <div className="iphoneContainer">
          <img src={iPhone} alt="iphone back" className="iphone" />
        </div>
        <div className="details">
          <div className="simple">Create Your</div>
          <div className="boldText">Digital Business Card</div>
          <div className="simple">
            Just enter the information you want to show on the card. Share
            anywhere, anytime on any Platform.
          </div>
          <div className="contact-us">Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneSection;
