// src/store/slices/restaurantSlice.ts
import {createSlice} from '@reduxjs/toolkit';
import {getRestaurantsByProximity,} from '@/src/redux/thunks/restaurantThunks';

import {addFavoriteThunk, getFavoritesThunk, removeFavoriteThunk,} from "@/src/redux/thunks/userThunks";
import {logout} from '@/src/redux/slices/userSlice';
import {RestaurantState} from "@/src/types/states";


const initialState: RestaurantState = {
    restaurantsProximity: [],
    restaurantsProximityStatus: 'idle',
    restaurantsProximityLoading: false,
    favoriteRestaurantsIDs: [],
    favoritesStatus: 'idle',
    favoritesLoading: false,
    error: null,
};

const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(logout, () => initialState)
            .addCase(getRestaurantsByProximity.pending, (state) => {
                state.restaurantsProximityStatus = 'loading';
                state.restaurantsProximityLoading = true;
                state.error = null;
            })
            .addCase(getRestaurantsByProximity.fulfilled, (state, action) => {
                state.restaurantsProximityStatus = 'succeeded';
                state.restaurantsProximityLoading = false;
                state.restaurantsProximity = action.payload;
            })
            .addCase(getRestaurantsByProximity.rejected, (state, action) => {
                state.restaurantsProximityStatus = 'failed';
                state.restaurantsProximityLoading = false;
                state.error = action.payload || 'Failed to fetch restaurants';
            })
            .addCase(getFavoritesThunk.pending, (state) => {
                state.favoritesStatus = 'loading';
                state.favoritesLoading = true;
                state.error = null;
            })
            .addCase(getFavoritesThunk.fulfilled, (state, action) => {
                state.favoritesStatus = 'succeeded';
                state.favoritesLoading = false;
                state.favoriteRestaurantsIDs = action.payload.favorites;
                console.log('Favorites:', action.payload);
            })
            .addCase(getFavoritesThunk.rejected, (state, action) => {
                state.favoritesStatus = 'failed';
                state.favoritesLoading = false;
                // state.error = action.payload || 'Failed to fetch favorites';
            })
            .addCase(addFavoriteThunk.pending, (state) => {
            })
            .addCase(addFavoriteThunk.fulfilled, (state, action) => {
            })
            .addCase(addFavoriteThunk.rejected, (state, action) => {
                state.error = action.payload || 'Failed to add to favorites';
            })
            .addCase(removeFavoriteThunk.pending, (state) => {
            })
            .addCase(removeFavoriteThunk.fulfilled, (state, action) => {
            })
            .addCase(removeFavoriteThunk.rejected, (state, action) => {
                state.error = action.payload || 'Failed to remove from favorites';
            });
    },
});

export default restaurantSlice.reducer;
