import { useEffect, useState } from "react";
import data from "./data.json";
import "./App.css";

function App() {
  const [personsCount, setPersonsCount] = useState(3);
  const [personsData, setPersonsData] = useState(data);
  const [pageNo, setPageNo] = useState(2);
  const [personsPerPage, setPersonsPerPage] = useState();

  const nextHandler = () => {
    if (personsCount < data.length) {
      const nextData = data.slice(personsCount, pageNo * 3);
      setPersonsData(nextData);
      setPageNo(pageNo + 1);
      setPersonsCount(personsCount + 3);
      setPersonsPerPage(nextData.length);
    } else {
      window.alert("No more persons");
    }
  };
  useEffect(() => {
    const firstData = data;
    const initialData = firstData.slice(0, 3);
    setPersonsData(initialData);
    setPersonsPerPage(initialData.length);
  }, []);

  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <h1>People Data</h1>
        </div>
        <button className="btn" onClick={nextHandler}>
          Next Person
        </button>
      </div>
      {personsData?.map((person, i) => (
        <div key={i + 1} className="card-container">
          <div className="left-chunk">
            <h1>{i + 1}</h1>
          </div>
          <div className="top-chunk">
            <p>Name: {person.name}</p>
          </div>
          <div className="bottom-chunk">
            <p>Location: {person.location}</p>
          </div>
        </div>
      ))}
      <div className="footer">
        <h5>Currently {personsPerPage} people showing</h5>
      </div>
    </div>
  );
}

export default App;
