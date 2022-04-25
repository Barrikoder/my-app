import logo from './logo.svg';
import './App.css';

const contentful = require("contentful");
const client = contentful.createClient({
  host: "preview.contentful.com",
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "pswo94mknuin",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "4aNCbkAhlMxIboRs-rB6e0w5MgkS2H4h-D7WMffuns4"
});
// This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
client
  .getEntry("5PeGS2SoZGSa4GuiQsigQu")
  .then(entry => console.log(entry))
  .catch(err => console.log(err));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
