import AppRouter from "./routers/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <AppRouter />
    </Router>
  );
}

export default App;
