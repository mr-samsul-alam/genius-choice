import './App.css';
import HomePage from './Pages/HomePage/HomePage/HomePage';
import { Routes, Route } from "react-router-dom";
import CoursesPage from './Pages/CoursesPage/CoursesPage/CoursesPage'; 
import AboutPage from './Pages/AboutPage/AboutPage';
import LoginPage from './Pages/LoginPage/LoginPage/LoginPage';
import RegisterPage from './Pages/LoginPage/RegisterPage/RegisterPage';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SingleCourseCard from './Pages/HomePage/SingleCourseCard/SingleCourseCard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />

        <Route path="courses" element={<PrivateRoute><CoursesPage /></PrivateRoute>} />
        <Route path="singleCoursesDetails/:id" element={<PrivateRoute>< SingleCourseCard /></PrivateRoute>} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registration" element={<RegisterPage />} />
      </Routes>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default App;
