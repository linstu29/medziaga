import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import NewItemPage from './pages/NewItemPage'
import DetailPage from './pages/DetailPage'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/sukurti' element={<NewItemPage />} />
                        <Route path='/informacija/:id' element={<DetailPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default App
