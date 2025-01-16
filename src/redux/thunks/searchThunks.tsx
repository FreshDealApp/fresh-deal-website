import {RestaurantSearchResult, SearchResponse} from "@/src/types/api/search/responses";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {SearchRestaurantRequest} from "@/src/types/api/search/requests";
import {RootState} from '@/src/redux/store';
import {searchApi} from "@/src/redux/api/searchAPI";

export const SearchforRestaurantsThunk = createAsyncThunk<
    SearchResponse<RestaurantSearchResult>,
    SearchRestaurantRequest,
    { state: RootState; rejectValue: string }
>(
    'search/searchForRestaurants',
    async (payload, {rejectWithValue}) => {
        try {
            const response = await searchApi.RestaurantSearch(payload);
            return response;
        } catch (error: any) {
            return rejectWithValue(error.response?.data || "Search failed");
        }
    }
);