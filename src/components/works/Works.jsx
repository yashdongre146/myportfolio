import { useState } from "react"
import "./works.scss"

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
            <i class="fa-solid fa-chevron-left" onClick={() => handleClick("left")}></i>
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
            <i class="fa-solid fa-chevron-right" onClick={() =>handleClick("right")}></i>
          </div>
        </div>
      ))}
      </div>
    </div>
  )
}

export default Works


//lama code

// import "./works.scss";

// export default function Works() {
//   const data = [
//     {
//       id: "1",
//       icon: "./assets/mobile.png",
//       title: "Web Design",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
//       img:
//         "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
//     },
//     {
//       id: "2",
//       icon: "./assets/globe.png",
//       title: "Mobile Application",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
//     },
//     {
//       id: "3",
//       icon: "./assets/writing.png",
//       title: "Branding",
//       desc:
//         "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
//       img:
//         "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
//     },
//   ];
  
//   return (
//     <div className="works" id="works">
//       <div className="slider">
        
//         {data.map((d) => (
//             <div className="container">
//               {d.title}
//             </div>
//         ))}
//       </div>
//     </div>
//   );
// }
