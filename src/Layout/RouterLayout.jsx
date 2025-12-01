import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar/Navbar.jsx'

export default function RouterLayout() {
    return <>
        <Navbar/>
        <Outlet/>
    </>
}
