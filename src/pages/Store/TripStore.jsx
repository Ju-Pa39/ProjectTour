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
    }
}));



export default tripStore;