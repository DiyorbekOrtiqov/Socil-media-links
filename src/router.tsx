import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import NoteFound from "./components/note-found/NoteFound";
// import AboutMe from "./components/about/information-me";

export default function MainRoutes() {
  return (
    <Router>
      <Routes>
        <Route>
          <Route index element={<App />} />
          {/* <Route path="/about-me" element={<AboutMe />} /> */}
        </Route>

        <Route path="*" element={<NoteFound />} />
      </Routes>
    </Router>
  );
}
