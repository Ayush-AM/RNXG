import Divider from '../assets/Divider.png';
import Spline from '@splinetool/react-spline';
import Slider from '../components/Slider';
import './Participations.css'; // optional, only if you want to add page-specific CSS

export default function Participations() {
  return (
    <div className="wrapper">
      <div className="top-section">
        <div className="left-side">
          <div className="left-content">
             <h1>Participations</h1>
          <img src={Divider} alt="divider" />
          <h3>Embraced challenges and conquered many competitions!</h3>
        
          </div>
         </div>

        <div className="right-side">
          <div className="rightobj">
            <Spline scene="https://prod.spline.design/DJ5s3rpJgJPnfZqQ/scene.splinecode" />
          </div>
        </div>
      </div>

      {/* --- Bottom Section --- */}
      <div className="bottom-section">
        <Slider />
      </div>
    </div>
  );
}
