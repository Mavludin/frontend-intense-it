import { configureStore } from "@reduxjs/toolkit";

import posts from './posts'

export const store = configureStore({
    reducer: {
        posts
    }
})
