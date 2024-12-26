
import Style from "./Style";

function App() {
  return (
    <main className="container">
      {/* title */}
      <h1>Advanced React Concepts:</h1>
      <h4>
        <ul>
          <li>Hooks</li>
          <li>Forms</li>
          <li>Context API</li>
          <li>Prop drilling</li>
          <li>Custom Hooks</li>
          <li>performance</li>
          <li>etc</li>
        </ul>
      </h4>

      <hr style={Style.hrH2} />

      {/* Hooks */}
      <h2>1. Hooks</h2>
      <hr style={Style.hrH3}></hr>

      {/* useState */}
      <section>
        <h3>1.1. useState</h3>

        
        <hr style={Style.hrH3}></hr>
      </section>
    </main>
  );
}

export default App;
