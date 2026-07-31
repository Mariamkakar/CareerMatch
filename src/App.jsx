import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Profile from "./pages/Profile";
import JobDetail from "./pages/JobDetail";
import ApplyJob from "./pages/ApplyJob";
import SavedJobs from "./pages/SavedJobs";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-20 min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/jobs" element={<Jobs />} />

          <Route path="/profile" element={<Profile />} />

          <Route path="/jobs/:id" element={<JobDetail />} />

          <Route path="/apply" element={<ApplyJob />} />

          <Route path="/saved-jobs" element={<SavedJobs />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
