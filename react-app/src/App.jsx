import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { HeaderNavbar } from "./components/HeaderNavbar";
import { ROUTES } from "./data";
import { Posts } from "./pages/Posts";
import { Post } from "./pages/Post";

function App() {
  return (
    <div className="app">
      <HeaderNavbar />

      <Routes>
        <Route path={ROUTES.home} element={<Home />} />
        <Route path={ROUTES.about} element={<About />} />
        <Route path={ROUTES.contact} element={<Contact />} />
        <Route path={ROUTES.posts} element={<Posts />} />
        <Route path={ROUTES.post}  element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
