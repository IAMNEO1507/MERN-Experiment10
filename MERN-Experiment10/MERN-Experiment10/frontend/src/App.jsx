import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/status")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        return response.json();
      })
      .then((data) => {
        setStatus(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  return (
    <div className="app">
      <header className="header">
        <h1>MERN Cloud Application</h1>
        <p>Experiment No. 10</p>
      </header>

      <main className="container">
        <section className="card">
          <h2>MERN Stack Deployment</h2>

          <p>
            A full-stack web application using MongoDB, Express.js,
            React.js and Node.js.
          </p>

          <div className="status-box">
            <h3>Application Status</h3>

            {status ? (
              <>
                <p>✅ {status.message}</p>
                <p>🗄️ {status.database}</p>
              </>
            ) : error ? (
              <p>❌ {error}</p>
            ) : (
              <p>Connecting to backend...</p>
            )}
          </div>
        </section>

        <section className="technology">
          <div>
            <strong>MongoDB</strong>
            <span>Database</span>
          </div>

          <div>
            <strong>Express.js</strong>
            <span>Backend Framework</span>
          </div>

          <div>
            <strong>React.js</strong>
            <span>Frontend</span>
          </div>

          <div>
            <strong>Node.js</strong>
            <span>Runtime</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;