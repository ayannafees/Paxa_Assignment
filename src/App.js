// Importing the CSS file for styling
import './App.css';

// Importing the Home component from the pages directory
import Home from './pages/Home';

// Functional component representing the main App
function App() {
  // Returning a div with the "App" class containing the Home component
  return (
    <div className="App">
      <Home />
    </div>
  );
}

// Exporting the App component as the default export
export default App;
