import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import HomePage from "./HomePage/HomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/new"
          element={<Navigate to={`/documents/${uuidV4()}`} />}
        />
        <Route path="/documents/:id" element={<TextEditor />} />
      </Routes>
    </Router>
  );
}

export default App;
