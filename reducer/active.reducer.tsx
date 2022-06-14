import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ActiveState {
    data: {
        Write: boolean,
        How: boolean,
        Collection: boolean,
    }
}

const initialState: ActiveState = {
    data: {
        Write: false,
        How: false,
        Collection: false,
    }
};

export const activeSlice = createSlice({
    name: 'active',
    initialState,
    reducers: {
        activate: (state: ActiveState, action: PayloadAction<string>) => {
            const key = action.payload as keyof typeof state.data;
            const temp = { ...state.data };
            temp[key] = state.data[key] ? state.data[key] : !state.data[key];
            state.data = { ...temp };
        },
        release: (state: ActiveState, action: PayloadAction<string>) => {
            const key = action.payload as keyof typeof state.data;
            const temp = { ...state.data };
            temp[key] = state.data[key] ? !state.data[key] : state.data[key];
            state.data = { ...temp };
        },
        init: (state: ActiveState) => {
            state.data = {
                Write: false,
                How: false,
                Collection: false,
            }
        },
    }
});

export const { activate, release, init } = activeSlice.actions;
export default activeSlice.reducer;