import "./whoarewe.css"

const Whoarewe = () => {
  return (
    <>
    <div className="container">
         <div className="wrapper">
         <div className="left">
            <div className="heading">
            <h1>Who Are We?</h1>
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
              <div className="stat-number">2012</div>
              <div className="stat-label">Since</div>
            </div>
            <div className="stat-box">
               <div className="stat-number">100+</div>
               <div className="stat-label">Current <br/> Members</div>
            </div>
            <div className="stat-box">
               <div className="stat-number">32+</div>
               <div className="stat-label">Research <br/> Papers</div>
            </div>
            <div className="stat-box">
               <div className="stat-number">5+</div>
               <div className="stat-label">Patents <br/> Filed</div>
            </div>
       </div>
    </div>
    </div>
    </>
  )
}

export default Whoarewe
