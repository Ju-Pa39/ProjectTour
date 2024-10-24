import { create } from "zustand";
import axios from 'axios'
import { persist } from "zustand/middleware";

const userStore = ((set) => ({
    user: null,
    token: null,
    postLogin: async (formLogin) => {
        const res = await axios.post('http://localhost:8000/auth/login', formLogin)
        // console.log(res.data)
        set({ user: res.data.payload,
            token: res.data.token
         })
        return res
    },
    resetUser: () => set({ user: null, token: null })
}));

const usePersist ={
    name: 'userStore',
}
const useUserStore = create(persist(userStore,usePersist))


export default useUserStore;