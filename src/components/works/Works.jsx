import { useState } from "react"
import "./works.scss"
import LeftArrow from '@mui/icons-material/ArrowBackIos';
import RightArrow from '@mui/icons-material/ArrowForwardIos';

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: '1',
      icon: '/assets/mobile.png',
      title: 'Web Design',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque eius',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930'
    },
    {
      id: '2',
      icon: '/assets/globe.png',
      title: 'Mobile Application',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque eius',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930'
    },
    {
      id: '3',
      icon: '/assets/writing.png',
      title: 'Branding',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque eius',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930'
    },
  ]
  const handleClick = (way) =>{
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) :
    setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
  }
  return (
    <div className="works">
      <div className="slider" style={{transform: `translateX(-${currentSlide * 100}vw)`}}>
        {data.map(d => (
        <div className="works-container" id="works">
          <div className="works-left">
            <LeftArrow className="left-arrow" onClick={() =>handleClick("left")}/>
          </div>
          <div className="works-center">
            <div className="center-container">
              <div className="container-left">
                <div className="item-container">
                  <div className="img-container">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="container-right">
                <div className="img-container">
                  <img src={d.img} alt="" />
                </div>
              </div>
            </div>

          </div>
          <div className="works-right">
            <RightArrow className="right-arrow" onClick={() =>handleClick("right")}/>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Works