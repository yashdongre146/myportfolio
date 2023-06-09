import "./menu.scss"

const Menu = ({openMenu, setMenu}) => {

  const handleClick = () => {setMenu(false)};

  return (
    <div className={"menu " + (openMenu && "active")}>
      <ul>
        <li onClick={handleClick}>
            <a href="#intro">Intro</a>
        </li>
        <li onClick={handleClick}>
            <a href="#portfolio">Portfolio</a>
        </li>
        <li onClick={handleClick}>
            <a href="#works">Works</a>
        </li>
        <li onClick={handleClick}>
            <a href="#testinomials">Testinomials</a>            
        </li>
        <li onClick={handleClick}>
            <a href="#contact">Contact</a>            
        </li>
      </ul>
    </div>
  )
}

export default Menu
