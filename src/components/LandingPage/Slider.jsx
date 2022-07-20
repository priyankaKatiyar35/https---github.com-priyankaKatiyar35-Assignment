import { Link } from "react-router-dom";
import { useState } from "react";

// Assets
import "./Slider.css";
import LadyWithComputer from "../../assets/LadyWithComputer.png";

// Active Slider Item
const SliderItem = ({ allLines, LadyWithComputer }) => {
  let { line_1, bold_line, bottom_line } = allLines;
  line_1 = line_1.split(" ");
  return (
    <div className="sliderItem">
      <div className="sliderDetails">
        <div className="tag-line">{allLines.tag_line}</div>
        <div className="line-1">
          {line_1[0] + " " + line_1[1]}{" "}
          <span className="orangeBold">{line_1[2]}</span>
        </div>
        <div className="bold-line">{bold_line}</div>
        <div className="bottom-line">{bottom_line}</div>
        <Link to="/share" className="create-a-card-button">
          create a card
        </Link>
      </div>
      <img className="ladyWithComputer" src={LadyWithComputer} alt="lady img" />
    </div>
  );
};

// Slider Dots to navigate to different slider
const SliderDots = ({ allData, active, gotoThisItem }) => {
  return (
    <div className="SliderDots">
      {allData.map((data, index) => {
        return (
          <button
            key={index}
            onClick={() => gotoThisItem(index)}
            className={`dot ${index === active ? "activeDot" : ""}`}
          ></button>
        );
      })}
    </div>
  );
};

const Slider = () => {
  const [index, setActiveStep] = useState(0); // To keep track of which slider is active

  // For setting slider
  const gotoThisItem = (index) => {
    setActiveStep(index);
  };

  // Data for slider
  const data = [
    {
      tag_line: "Make your professional life easy",
      line_1: "Create your Free",
      bold_line: "Virtual Business Card",
      bottom_line: "Take your first step towards a successful business",
    },
    {
      tag_line: "Make your professional life easy",
      line_1: "Create your Free",
      bold_line: "Virtual Business Card",
      bottom_line: "Take your first step towards a successful business",
    },
    {
      tag_line: "Make your professional life easy",
      line_1: "Create your Free",
      bold_line: "Virtual Business Card",
      bottom_line: "Take your first step towards a successful business",
    },
    {
      tag_line: "Make your professional life easy",
      line_1: "Create your Free",
      bold_line: "Virtual Business Card",
      bottom_line: "Take your first step towards a successful business",
    },
  ];

  return (
    <div className="Slider">
      {/* Slider Items */}
      <SliderItem allLines={data[index]} LadyWithComputer={LadyWithComputer} />
      {/* Slider Dots */}
      <SliderDots allData={data} active={index} gotoThisItem={gotoThisItem} />
    </div>
  );
};

export default Slider;
