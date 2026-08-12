import { configureStore} from '@reduxjs/toolkit'
import searchReducer from './slices/SearchSlice'


export const customStore = configureStore({
  reducer: {
    search: searchReducer,
  },
});
