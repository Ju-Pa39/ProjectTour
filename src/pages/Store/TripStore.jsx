import { create } from "zustand";
import axios from 'axios'
import CreateTripForm from "../Owner/CreateTripForm";
import { persist,createJSONStorage } from "zustand/middleware";

const tripStore = create((set) => ({
    trips: [], 
    trip: null, 
    tripDate: null,
    tour: [],
    location: [],
    postTrip: null,
    user: null,
    token: null,
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
    getTour : async () => {
        const res = await axios.get('http://localhost:8000/admin/getTour')
        set({ tour: res.data});
    },
    getLocation : async () => {
        const res = await axios.get('http://localhost:8000/admin/getLocation')
        // console.log(res.data)
        set({ location: res.data});
    },
     uploadFiles : async (form) => {
        // code 
        // console.log('form api frontent', form)
        return axios.post('http://localhost:8000/admin/images', {
            image: form
        }, {
            // headers: {
            //     Authorization: `Bearer ${token}`
            // }
        })
    },
    
     removeFiles : async (public_id) => {
        // code 
        // console.log('form api frontent', form)
        return axios.post('http://localhost:8000/admin/removeimages', {
            public_id
        }, {
            // headers: {
            //     Authorization: `Bearer ${token}`
            // }
        })
    },
        postTrip : async (form) =>{
        const res = await axios.post('http://localhost:8000/admin/createTrip', form)
        console.log(res.data)
        set({ postTrip: res.data });
    },
}));



export default tripStore;