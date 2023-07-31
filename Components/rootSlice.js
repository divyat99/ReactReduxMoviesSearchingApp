import { createSlice } from '@reduxjs/toolkit'

const initialState = {
apiData:{},
favouriteData:[],
filterData:{},
}

export const searchBarSlice = createSlice({
  name: 'searchBar',
  initialState,
  reducers: {
   
   setApiData:(state,action)=>{
    state.apiData=action.payload
   },
   setFilterData:(state,action)=>{
    state.filterData=action.payload
   },
   
    
   setFavouriteData:(state,action)=>{
    state.favouriteData=action.payload
   },
   
   
  },
})

// Action creators are generated for each case reducer function
export const { setApiData,setFilterData,setFavouriteData} = searchBarSlice.actions

export default searchBarSlice.reducer