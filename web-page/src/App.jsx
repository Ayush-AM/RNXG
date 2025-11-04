import { useState } from 'react'
import './App.css'
import Divider from './assets/Divider.png'
import Spline from '@splinetool/react-spline';
import Slider from './components/Slider';


function App() {
  return (
    <>
      <div className='wrapper'>
        <div className='top-section'>
          <div className='left-side'>
            <h1 >Participations</h1>
            <img src={Divider} alt="divider" />
            <h3 >Embraced challenges and conqered many competitions!</h3>
          </div>

          <div className='right-side'>
            <div className='rightobj'>
           
  <Spline  scene="https://prod.spline.design/DJ5s3rpJgJPnfZqQ/scene.splinecode" />

</div>
  </div>
        </div>

        <div className='bottom-section'>
          <Slider />

        </div>
      </div>
    </>
  )
}

export default App



