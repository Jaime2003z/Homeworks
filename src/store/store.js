import { configureStore } from '@reduxjs/toolkit'
import { sliceConfiguration } from './counterSlice'

export const storeConfiguration = configureStore({
    reducer: {
        counter: sliceConfiguration.reducer
    }
})