import "./App.css";
import bird from "/silverica-bird.svg";
import text from "/silverica-text.svg";

function App() {
  return (
    <div className="Box--col">
      <div className="Box--center">
        <img src={bird} className="silverica-logo-bird" />
        <img src={text} className="silverica-logo-text" />
      </div>
      <div className="text--left">
        <ul className="projects">
          <li>
            <a href="https://foxtailsmix.com" target="_blank">
              Foxtails
            </a>{" "}
            &mdash; logo, web app
          </li>
          <li>
            <a href="https://www.zwashboard.com" target="_blank">
              Zwashboard
            </a>{" "}
            &mdash; logo, web app
          </li>
          <li>Club PUMP &mdash; logo, event posters</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
