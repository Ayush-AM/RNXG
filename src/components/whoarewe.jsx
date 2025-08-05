import "./whoarewe.css"
import CountUp from 'react-countup';  // npm i react-countup

const Whoarewe = () => {
  return (
    <>
     <div className="container">
         <div className="wrapper">
         <div className="left">
            <div className="heading">
            <h1><b>Who Are We?</b></h1>
         </div>
            <div className="content">
            <p>We're a bunch of young people trying to solve as many problems as possible for our community and giving them an optimum, all-in-one platform for their overall growth.</p>
            </div>
         </div>

         <div className="one-image">
            <div className="image"></div>
         </div>

       <div className="stats-container">
            <div className="stat-box"> 
              <div className="stat-number"><CountUp start={2026} end={2012} duration={5}/></div>
              <div className="stat-label">Since</div>
            </div>
            <div className="stat-box">
               <div className="stat-number"><CountUp end={100} duration={3} />+</div>
               <div className="stat-label">Current Members</div>
            </div>
            <div className="stat-box">
               <div className="stat-number"><CountUp end={32} duration={4}/>+</div>
               <div className="stat-label">Research Papers</div>
            </div>
            <div className="stat-box">
               <div className="stat-number"><CountUp end={5} duration={4} />+</div>
               <div className="stat-label">Patents Filed</div>
            </div>
       </div>
    </div>
    </div>
    </>
  )
}

export default Whoarewe
