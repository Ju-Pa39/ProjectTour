import { create } from "zustand";
import axios from 'axios'

const tripStore = create((set) => ({
    trips: [], trip: null,
    getAllLocations: async (id) => {
        const res = await axios.get('http://localhost:8000/admin/getLocationById/' + id)
        set({ trips: res.data });
    },
    getAllTrip: async (id) => {
        const res = await axios.get('http://localhost:8000/admin/getTrip/' + id)
        console.log(res.data.trip)
        set({ trip: res.data.trip });
    
    }
}));


export default tripStore;