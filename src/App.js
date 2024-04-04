import TextEditor from "./TextEditor";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import {
  DocumentIDProvider,
  DocumentIdProvider,
} from "./Context/DocumentIDContext";
import HomePage from "./HomePage/HomePage";


function App() {
  return (
    <Router>
      <DocumentIDProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route
            path="/new"
            element={<Navigate to={`/documents/${uuidV4()}`} />}
          /> */}
          <Route path="/documents/:id" element={<TextEditor />} />
        </Routes>
      </DocumentIDProvider>
    </Router>
  );
}

export default App;
