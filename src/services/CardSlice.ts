import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterValuesType, IPost } from "../models/models";




interface CardsState {
    cards: IPost[]
    filter: FilterValuesType
    body: string
}

const initialState: CardsState = {
    cards: [],
    filter: 'all',
    body: ''
}

const cardSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setFilterCard: (state, action: PayloadAction<FilterValuesType>) => {
            state.filter = action.payload
        }
      
    }
})

export const {setFilterCard} = cardSlice.actions
export default cardSlice.reducer
