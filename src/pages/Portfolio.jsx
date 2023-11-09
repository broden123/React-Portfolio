import "./Portfolio.css"; // Import the CSS file

export default function Portfolio() {
  return (
    <div className="d-flex flex-column mb-3 text-center">
      <h1 className="p-2">Some of My Recent Projects:</h1>
      <div className="flex-fill p-2 image-container">
        <a href="https://broden123.github.io/Brewer-Loc/">
          <img
            src="/brewlocpreview.png"
            className="img-fluid image"
            alt="Picture of Brewery Locator application"
          />
          <div className="description">
            Brew-Loc is a location-based brewery finder. Enter a city and state
            and it will return a map of all known breweries in the area with a
            list containing their individual info!
          </div>
        </a>
      </div>
      <div className="flex-fill p-2 image-container">
        <a href="https://note-taker-35-e6604a508493.herokuapp.com/notes">
          <img
            src="/notetakerpreview.png"
            className="img-fluid image"
            alt="Picture of Note-Taker application"
          />
          <div className="description">
            Note-Taker is a simple noting taking browser app. It saves data to
            an read/write file.
          </div>
        </a>
      </div>
      <div className="flex-fill p-2 image-container">
        <a href="https://vast-meadow-71566-a5568f84ff53.herokuapp.com/">
          <img
            src="/jatepreview.png"
            className="img-fluid image"
            alt="Picture of J.A.T.E application"
          />
          <div className="description">
            J.A.T.E is just another text editor. It is a progressive web
            application so you can install it on your browser!
          </div>
        </a>
      </div>
      <div className="flex-fill p-2 image-container">
        <a href="https://broden123.github.io/passwordgenerator/">
          <img
            src="/passwordgeneratorpreview.png"
            className="img-fluid image"
            alt="Picture of password generator application"
          />
          <div className="description">
            This is a randomized password generator. You can customize the
            length and which characters you want to use using browser prompts.
          </div>
        </a>
      </div>
      <div className="flex-fill p-2 image-container">
        <a href="https://broden123.github.io/dailyplanner/">
          <img
            src="/dailyplannerpreview.png"
            className="img-fluid image"
            alt="Picture of Work Day Scheduler application"
          />
          <div className="description">
            This is a work day planner. It saves data to local storage.
          </div>
        </a>
      </div>
      <div className="flex-fill p-2 image-container">
        <a href="https://broden123.github.io/portfolio/">
          <img
            src="/originalportfoliopreview.png"
            className="img-fluid image"
            alt="Picture of my original portfolio"
          />
          <div className="description">
            This is my first portfolio to showcase my progress from the
            beginning of my full-stack course! It is coded in HTML/CSS.
          </div>
        </a>
      </div>
    </div>
  );
}
