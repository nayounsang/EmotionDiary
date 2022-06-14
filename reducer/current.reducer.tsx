import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CurrentState {
    screen: string|null,
};

const initialState: CurrentState = {
   screen: null,
};

export const currentSlice = createSlice({
    name: 'current',
    initialState,
    reducers: {
        setScreen: (state: CurrentState,action:PayloadAction<string>) => {
            state.screen = action.payload;
        },
        vacate: (state: CurrentState) => {
            state.screen = null;
        }
        
    }
})

export const { setScreen, vacate } = currentSlice.actions;
export default currentSlice.reducer;