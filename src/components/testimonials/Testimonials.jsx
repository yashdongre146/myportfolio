import "./testimonials.scss"


const Testimonials = () => {
  const data = [
    {
      id: '1',
      name: 'Denver Lias',
      title: 'Senoir Developer',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque eius',
      img: 'https://source.unsplash.com/random/200x200/?Male photo',
      icon: 'assets/twitter.png'
    },
    {
      id: '2',
      name: 'Alista Winget',
      title: 'Co-founder of Delka',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque eius',
      img: 'https://source.unsplash.com/random/200x200/?Girl photo',
      icon: 'assets/youtube.png',
      featured: true,
    },
    {
      id: '3',
      name: 'Cristen Roff',
      title: 'Ceo of Lama',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas neque eius',
      img: 'https://source.unsplash.com/random/200x200/?Female photo',
      icon: 'assets/linkedin.png'
    }
    
  ]
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="card-container">
        {data.map(d=>(
          <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <img src="/assets/right-arrow.png" className="left" alt="" />
            <img src={d.img} className="user" alt="" />
            <img src={d.icon} className="right" alt="" />
          </div>
          <div className="center">
            <p>{d.desc}</p>
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials