import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  movieName: "",
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    shareMovie: (state, action) => {
        console.log('search redux func called');
        console.log(action);
        state.movieName = action.payload;
        
    }
   
  }
})

export const {shareMovie} = searchSlice.actions

export default searchSlice.reducer;