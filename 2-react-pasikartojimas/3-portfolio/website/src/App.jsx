import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import CVPage from './pages/CVPage';
import ContactUsPage from './pages/ContactUsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/projektai' element={<ProjectsPage />} />
                        <Route path='/cv' element={<CVPage />} />
                        <Route path='/susisiekti' element={<ContactUsPage />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Route>
                    {/* <Route path='/sistema' element={<DashboardLayout />}>
                        <Route path='/' element={<DashboardPradzia/>} />
                        <Route path='/mokejimai' element={<DashboardPayments/>} />
                    </Route> */}
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
