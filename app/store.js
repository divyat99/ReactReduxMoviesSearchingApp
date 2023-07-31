import { configureStore } from '@reduxjs/toolkit'
import searchBarReducer from '../Components/rootSlice'
export const store = configureStore({
  reducer: {
    searchbar:searchBarReducer,
  },
})