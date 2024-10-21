import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchBudget from '../pages/searchBudget'
import Layout from '../pages/layout.jsx/Layout'
import LayoutOwner from '../pages/layout.jsx/LayoutOwner'
import Dashboard from '../pages/Owner/Dashboard'
import LayoutCustomer from '../pages/layout.jsx/LayoutCustomer'
import MyPrograms from '../pages/Customer/MyPrograms'
import RegisterForm from '../pages/Form'
import PaymentCheck from '../pages/Owner/PaymentCheck'
import CreateTripForm from '../pages/Owner/CreateTripForm'
import TourCompanyInfo from '../pages/Owner/TourCompanyInfo'
import Recommend from '../pages/Component/recommend'
import Login from '../pages/Auth/Login'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            { index: true, element: <SearchBudget /> },
            { path: 'RegisterForm', element: <RegisterForm /> },
            { path: 'Recommend', element: <Recommend /> },
            { path: "*", element: <Login />}

        ]
        
    },
    {
        path: '/Owner',
        element: <LayoutOwner />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: 'CreateTripForm', element: <CreateTripForm /> },
            { path: 'PaymentCheck', element: <PaymentCheck /> },
            { path: 'TourCompanyInfo', element: <TourCompanyInfo /> },
            { path: "*", element: <Dashboard />}
            

            
        ]
    },
    {
        path: '/Customer',
        element: <LayoutCustomer />,
        children: [
            { index: true, element: <MyPrograms /> },
            { path: 'RegisterTrip', element: <RegisterForm /> }
        ]
    }
])

// const [count, setCount] = useState(0)

// const listRef = useRef(null)
// const listScroll = () => listRef.current.scrollIntoView()
// const TourPageRef = useRef(null)
// const TourPageScroll = () => TourPageRef.current.scrollIntoView()
// const TourDetailRef = useRef(null)
// const TourDetailScroll = () => TourDetailRef.current.scrollIntoView()

export const AppRouter = () => {
    return (
        <div className="bg-custom-pattern min-h-screen bg-fixed bg-cover bg-center bg-slate-500" 
        style={{backgroundImage: `url('https://scontent.fbkk28-1.fna.fbcdn.net/v/t39.30808-6/458799067_1066312438197188_8738832615108666864_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=VopEAnQPLw0Q7kNvgGdv0dn&_nc_zt=23&_nc_ht=scontent.fbkk28-1.fna&_nc_gid=A_IQQ9Vt4iKNmEiEp0QHe8I&oh=00_AYAXD5SaMMQ2T2cMKfPcQWLpVuG8EC3MNdSHilhz-AYCxg&oe=6718FCF3')`,
        }} >
            {/* <Header listScroll={listScroll} TourPageScroll={TourPageScroll} TourDetailScroll={TourDetailScroll} /> */}
            
            <RouterProvider router={router} />
        </div>
    )
}