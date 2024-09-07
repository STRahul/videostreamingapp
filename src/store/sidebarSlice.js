import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name: 'sidebarSlice',
    initialState: {
        isSidebarOpen: false
    },
    reducers: {
        toggleSidebar: (state,action)=>{
            state.isSidebarOpen = !state.isSidebarOpen
        },
        
    }
})

export const { toggleSidebar } = sidebarSlice.actions

export default sidebarSlice.reducer