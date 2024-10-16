import React from 'react'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchBudget from '../pages/searchBudget'
import Layout from '../pages/layout.jsx/Layout'
import LayoutOwner from '../pages/layout.jsx/LayoutOwner'
import Dashboard from '../pages/Owner/Dashboard'
import LayoutCustomer from '../pages/layout.jsx/LayoutCustomer'
import MyPrograms from '../pages/Customer/MyPrograms'
import RegisterForm from '../pages/Customer/Form'

const router = createBrowserRouter([
    {
        path: '/Home',
        element: <Layout />,
        children: [{ index: true, element: <SearchBudget /> }]
    },
    {
        path: '/Owner',
        element: <LayoutOwner />,
        children: [
            { index: true, element: <Dashboard /> },
            
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
        style={{backgroundImage: `url('https://scontent.fbkk6-1.fna.fbcdn.net/v/t39.30808-6/458799067_1066312438197188_8738832615108666864_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TplQRy4lJBEQ7kNvgFjNQtM&_nc_ht=scontent.fbkk6-1.fna&_nc_gid=AHjOTWXaGukUBEPddH1T71W&oh=00_AYCu-ghtRhp3DL75KNWDJyu_nzpS2SN1qfdnBIwaIGfajg&oe=670EA933')`,
        }} >
            {/* <Header listScroll={listScroll} TourPageScroll={TourPageScroll} TourDetailScroll={TourDetailScroll} /> */}
            
            <RouterProvider router={router} />
        </div>
    )
}