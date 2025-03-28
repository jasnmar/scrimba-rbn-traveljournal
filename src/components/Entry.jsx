import marker from "../assets/marker.png"

export default function Entry() {
  return (
    <>
      <article className="entry--article">
        <div className="entry--image-container">
          <img className="entry--main-image" src="https://scrimba.com/links/travel-journal-japan-image-url" alt="Mount Fuji"/>

        </div>
        <div className="entry--summary">
          <div className="entry--top-line">
            <img className="entry--marker" src={marker} alt="" />
            <h2 className="entry--location">Japan</h2>
            <a className="entry--link" href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu">View on Google Maps</a>

          </div>
          <h3 className="entry--title">Mount Fuji</h3>
          <h4 className="entry--date">12 Jan, 2021 - 24 Jan, 2021</h4>
          <p className="entry--description">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>
        </div>
      </article>

    </>
  )
}