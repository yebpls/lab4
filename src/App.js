import Navigation from "./components/Navigation"
import Main from "./components/Main"
import Footer from "./components/Footer"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Films from "./components/Films"
import About from "./components/About"
import News from "./components/News"
import Contact from "./components/Contact"
import Detail from "./components/Detail"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="/" element={<Films />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
