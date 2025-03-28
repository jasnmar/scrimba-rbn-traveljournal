import globe from "../assets/globe.png"


export default function Header() {
  return (
      <>
          <header class='header'>
              <img src={globe} alt="" className="header--globe"></img>
              <p className="header--text">my travel journal.</p>
          </header>
      </>
  )
}