// Asset
import uploadImage from "../../assets/uploadImage.png";
import "./Left.css";

// Icon
import { BsImage, BsPlus } from "react-icons/bs";

// Component
import InputField from "./InputField";

// Representing Left part of Create Card page
const Left = () => {
  // Label for each input fields
  let inputFields = [
    "First Name",
    "Middle Name",
    "Last Name",
    "Designation",
    "Company Name",
    "Contact Number",
    "Email ID",
    "Website URL",
  ];

  return (
    <div className="left">
      {/* ---------- Image Container ---------- */}
      <div className="imageContainer">
        <img
          src={uploadImage}
          alt="upload Background"
          className="backgroundImage"
        />
        <div className="uploadImage">
          <BsImage className="imageIcon" />
          <p>Upload an Image</p>
        </div>
        <div className="sideLogo">
          <BsPlus className="plusLogo" />
          <p>LOGO</p>
        </div>
      </div>
      {/* ---------- //Image Container ---------- */}

      {/* ---------- Input Fields ---------- */}
      <div className="inputFields">
        {inputFields.map((inputItem) => (
          <InputField item={inputItem} key={inputItem} />
        ))}
      </div>
      <div className="buttons">
        <button className="cancelBtn">Cancel</button>
        <button className="saveBtn">Save</button>
      </div>
      {/* ---------- //Input Fields ---------- */}
    </div>
  );
};

export default Left;
