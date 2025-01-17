import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MovieReducer from "../MovieSlice";

const AppStore = configureStore(
    {
        reducer:{
            user:UserReducer,
            movie:MovieReducer,
        }
    }
)
export default AppStore;
