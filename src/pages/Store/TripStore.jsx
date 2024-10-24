import { create } from "zustand";
import axios from 'axios'
import useUserStore from "./userStore";

const token = useUserStore.getState().token
const tripStore = create((set) => ({
    trips: [],
    trip: null,
    tripDate: null,
    tour: [],
    location: [],
    postTripS: null,
    user: null,
    UpcomingTrip: null,
    currentTrip: null,
    bookingS: null,
    BookingC: null,
    getTripOwner: null,
    updateTrip: null,
    createTourS: null,

    getAllLocations: async (id) => {
        const res = await axios.get('http://localhost:8000/admin/getLocationById/' + id)
        set({ trips: res.data });
    },
    getAllTrip: async (id) => {
        const res = await axios.get('http://localhost:8000/admin/getTrip/' + id)
        console.log(res.data.trip)
        set({ trip: res.data.trip });

    },
    getTripByDate: async () => {
        const res = await axios.get('http://localhost:8000/admin/getTripByDate')
        // console.log(res.data)
        set({ tripDate: res.data });
    },
    getTour: async (token) => {
        const res = await axios.get('http://localhost:8000/admin/getTour', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        set({ tour: res.data });
    },
    getLocation: async () => {
        const res = await axios.get('http://localhost:8000/admin/getLocation')
        // console.log(res.data)
        set({ location: res.data });
    },
    uploadFiles: async (form) => {
        // code 
        // console.log('form api frontent', form)
        return axios.post('http://localhost:8000/admin/images', {
            image: form
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    removeFiles: async (public_id) => {
        // code 
        // console.log('form api frontent', form)
        return axios.post('http://localhost:8000/admin/removeimages', {
            public_id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    },
    postTrip: async (form, token) => {
        const res = await axios.post('http://localhost:8000/admin/createTrip', form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data)
        set({ postTripS: res.data });
    },
    upcomingTrip: async () => {
        const res = await axios.get('http://localhost:8000/admin/getUpcomingTrip')
        console.log(res.data)
        set({ UpcomingTrip: res.data });
    },
    setcurrentTrip: async (id) => {
        set({ currentTrip: id });
    },
    booking: async (form) => {
        const res = await axios.post('http://localhost:8000/user/booking', form)
        console.log(res.data)
        set({ bookingS: res.data });
    },
    getBooking: async () => {
        const res = await axios.get('http://localhost:8000/user/getBooking')
        // console.log(res.data)
        set({ BookingC: res.data });
    },
    updatebookingStatus: async (id, status) => {
        const body = {
            payMentStatus: status
        }
        const res = await axios.patch('http://localhost:8000/user//updatebookingstatus/' + id, body, {
            id
        })
        console.log(res.data)
        set({ BookingC: res.data });
    },
    getTrip: async () => {
        const res = await axios.get('http://localhost:8000/admin/getTrip')
        console.log(res.data)
        set({ getTripOwner: res.data.trip });
    },
    getTripById: async (id) => {
        const res = await axios.get('http://localhost:8000/admin/getTrip/' + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data)
        return res.data.trip
    },
    updateTripById: async (token,id, form) => {
        const res = await axios.patch('http://localhost:8000/admin/getTrip/' + id, form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data)
        set({ updateTrip: res.data });
    },
    deleteTripById: async (token,id) => {
        const res = await axios.delete('http://localhost:8000/admin/deleteTrip/' + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data)
    },
    createTour: async (token,form) => {
        const res = await axios.post('http://localhost:8000/admin/createTour', form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data)
        set({ createTourS: res.data });
    },
    getTourById: async (id) => {
        const res = await axios.get('http://localhost:8000/admin/getTour/' + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data)
        return res.data.tour
    },
    updateTourById: async (token,id, form) => {
        const res = await axios.patch('http://localhost:8000/admin/updateTour/' + id, form, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data)
        set({ updateTour: res.data });
    },
    deleteTourById: async (id) => {
        const res = await axios.delete('http://localhost:8000/admin/deleteTour/' + id, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data)
    }
}));



export default tripStore;