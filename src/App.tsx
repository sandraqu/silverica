import "./App.css";
import silverica from "/silverica.svg";

function App() {
  return (
    <div className="home homeBox--col">
      <div className="brand brandBox homeItem">
        <img src={silverica} className="silverica brandItem" />
      </div>
      <div className="homeItem text--left">
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
