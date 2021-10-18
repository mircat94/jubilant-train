import "./App.css";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar> </Toolbar>
      </AppBar>
      <Dashboard />
    </div>
  );
}

export default App;
