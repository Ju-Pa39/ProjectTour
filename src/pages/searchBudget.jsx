import React, { useState } from 'react'
import TripList from './TripList'
import TripDetail from './TripDetail'
import TourPage from './Trippage'
import axios from 'axios'
import Trippage_CP from './Component/Trippage_CP'
import Recommend from './Component/recommend'
import TripDetail_CP from './Component/TripDetali_CP'

function SearchBudget() {
    const [search, setSearch] = useState({
        price: []
    })
    const [result, setResult] = useState([])
    const [budget, setBudget] = useState(0)
    const [show, setShow] = useState(false)

    const onChangeSearch = (e) => {
        setSearch({
            ...search,
            [e.target.name]: [0, +e.target.value]
        })
        setBudget(+e.target.value)
        console.log(search)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(search)
        setShow(true)
        try {
            const res = await axios.post('http://localhost:8000/admin/search', search)
            console.log(res)
            setResult(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className='gap-2' >
            <form onSubmit={onSubmit}>
                <div className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/path-to-your-image.png')" }}>
                    <div className="absolute inset-0"></div>
                    <div className="relative flex flex-col justify-center items-center h-full">
                        <h1 className="text-4xl sm:text-4xl text-white font-bold mb-6">กรอก"งบ"เที่ยว</h1>
                        <input
                            name='price'
                            onChange={onChangeSearch}
                            type="Int"
                            placeholder="กรอกงบ"
                            className="px-4 py-2 text-xl rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <button className="mt-4 px-6 py-2 bg-gray-200 text-black text-lg font-medium rounded-md hover:bg-gray-300">
                            ตกลง
                        </button>
                    </div>
                </div>
            </form>
            {
                show
                    ? <TripList data={result} budget={budget} />
                    : <Recommend />
            }
            {
                show
                    ? <TourPage data={result} budget={budget} />
                    : <Trippage_CP />
            }
            <TripDetail />
            {/* {
                show
                ? <TripDetail />
                : <TripDetail_CP />
            } */}
        </div>
    )
}

export default SearchBudget