import { useEffect, useRef } from "react"
import "./intro.scss"
import { init } from 'ityped'

const Intro = () => {

  const textRef = useRef()

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Designer', 'Content Creator' ] })
  },[])

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="img-container">
          <img src="assets/profile.jpg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Yash Dongre</h1>
          <h3>Web <span ref={textRef} className="animated-text"></span></h3>
        </div>
        <a href="#portfolio">
          <i class="fa-solid fa-angle-down fa-beat-fade"></i>
        </a>
      </div>
    </div>
  )
}

export default Intro
