import "./topbar.scss"
const Topbar = ({openMenu, setMenu}) => {
  return (
    <div className={"topbar " + (openMenu && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">My Portfolio</a>
          <div className="item-container">
            <i className="fa-solid fa-user icon"></i>
            <span>+91 8109218904</span>
          </div>
          <div className="item-container">
            <i className="fa-solid fa-envelope icon"></i>            
            <span>yash.dongre146@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => {setMenu(!openMenu)}}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Topbar