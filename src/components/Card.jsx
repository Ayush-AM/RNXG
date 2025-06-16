import "./Card.css";
import { FaLinkedin } from "react-icons/fa";

const Card = ({ photo, name, department, position, linkedin }) => {
  return (
    <div className="card">
      <div className="card-image-wrapper">
        <img src={photo} alt={name} className="card-photo" />
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-icon"
        >
          <FaLinkedin />
        </a>
      </div>
      <div className="card-details">
        <h3>{name}</h3>
        <p>{department}</p>
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Card;
