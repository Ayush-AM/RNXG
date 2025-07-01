import "./Card.css";
import { FaLinkedin } from "react-icons/fa";

const Card = ({ photo, name, position, linkedin }) => {
  return (
    <div
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-easing="ease-in"
      className="card"
    >
      <div className="card-image-wrapper">
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img src={photo} alt={name} className="card-photo" />
        </a>
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
        <p>{position}</p>
      </div>
    </div>
  );
};

export default Card;
