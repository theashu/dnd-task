import { data } from "./data";
import './App.css';
import Card from "./components/Card";
import { useEffect, useState } from "react";

function App() {
  const [result, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <div className="App">
      {
        data.map((item, idx) => (
          <Card item={item} image ={result[idx]} loading={loading} />
        ))
      }
    </div>
  );
}

export default App;
