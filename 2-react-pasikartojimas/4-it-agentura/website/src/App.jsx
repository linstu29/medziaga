// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUsPage';
import PortfolioPage from './pages/PortfolioPage';
import PortfolioDetailsPage from './pages/PortfolioDetailsPage';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/apie-mus' element={<AboutUsPage/>} />
                        <Route path='/kontaktai' element={<ContactUsPage />} />
                        <Route path='/portfelis' element={<PortfolioPage />} />
                        <Route path='/portfelis/:slug' element={<PortfolioDetailsPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
