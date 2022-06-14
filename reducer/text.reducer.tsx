import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CardType } from '../types/types';



interface TextState {
    data: Array<CardType>,
   
}

const initialState: TextState = {
    data: [],
    
};

export const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        addCard: (state: TextState) => {
            state.data = [...state.data, { idx: state.data.length, text: '' }]
        },
        addText: (state: TextState, action: PayloadAction<CardType>) => {
            state.data = state.data.map((card) => {
                if (card.idx == action.payload.idx) {
                    return action.payload;
                }
                else {
                    return card;
                }
            })
        },
        init: (state: TextState) => {
            state.data = [];
           
        },
        
    }
});

export const { addText, addCard, init, } = textSlice.actions;
export default textSlice.reducer;