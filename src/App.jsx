import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/projetos/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
