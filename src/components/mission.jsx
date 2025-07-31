import "./mission.css"

const Mission = () => {
  return (

<div className="mission-wrapper">
    <div className="section">
      <img src="robot.png" alt="robot" className="robot-img"/>
      <div className="mission-box">
        <img src="mission.png" alt="Mission Title" className="img-tag1"/>
        <p className="text-box1">
          To increase enthusiasm & knowledge towards robotics by providing hands-on & multidisciplinary collaborative experience in mechanics, electronics, designing & programming, with all departments working in symphony to create marvellous projects.
        </p>
      </div>
    </div>

    <div className="section">
      <img src="graph.png" alt="graph" className="graph-img"/>
      <div className="vision-box">
        <img src="vision.png" alt="Vision Title" className="img-tag"/>
        <p className="text-box">
          We provide an open platform for our community in the institute who wish to advance in the technological world. We integrate technology to tackle real-world challenges.
        </p>
      </div>
    </div>
  </div>

  )
}

export default Mission
