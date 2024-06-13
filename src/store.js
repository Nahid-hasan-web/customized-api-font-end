import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './ProductSlice/ProductSlice'

export default configureStore({
  reducer: {
    singelData: ProductSlice,
  },
})