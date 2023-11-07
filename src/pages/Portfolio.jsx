import './Portfolio.css'; // Import the CSS file

export default function Portfolio() {
  return (
    <div className="d-flex flex-column mb-3 text-center">
      <h1 className="p-2">Some of My Recent Projects:</h1>
      <div className="flex-fill p-2 image-container">
        <a href="https://broden123.github.io/Brewer-Loc/">
          <img
            src="./src/assets/brewlocpreview.png"
            className="img-fluid image"
            alt="Picture of Brewery Locator application"
          />
          <div className="description">
            Brew-Loc is a Location-base brewery finder. Enter a city and state
            and it will return a map of all know breweries in the area with a
            list with their individual info!
          </div>
        </a>
      </div>
    </div>
  );
}
