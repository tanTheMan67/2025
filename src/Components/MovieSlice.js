import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice(
    {
        name:"Movie",
        initialState:{
        nowPlaying:null,
        trailerVideo:null
        },
        reducers:{
        addNowPlaying : (state,action)=>{
           state.nowPlaying=action.payload;
        },
        addTrailer:(state,action)=>{
         state.trailerVideo=action.payload;
        }
        }
    }
)
export const {addNowPlaying,addTrailer} = MovieSlice.actions;
export default MovieSlice.reducer;
