import axios from "axios";

export const deleteTripS = async (id,token) => {
    const res = await axios.delete(`http://localhost:8000/admin/deleteTrip/${id}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    console.log(res.data)
    return res
}