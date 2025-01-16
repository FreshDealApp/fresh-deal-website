import {Listing} from "@/src/redux/slices/listingSlice";
import axios from "axios";
import {logError, logRequest, logResponse} from "@/src/utils/logger";
import {API_BASE_URL} from "@/src/redux/api/API";

const LISTINGS_ENDPOINT = `${API_BASE_URL}/listings`;

export const getListingsAPI = async (params: { restaurantId: number; page?: number; perPage?: number }): Promise<{
    success: boolean;
    data: Listing[];
    pagination: any;
}> => {
    const functionName = "getListingsAPI";

    // Adjusting endpoint for proper query parameter handling
    const queryParams = {
        restaurant_id: params.restaurantId,
        page: params.page,
        per_page: params.perPage,
    };

    logRequest(functionName, LISTINGS_ENDPOINT, queryParams);

    try {
        const response = await axios.get(LISTINGS_ENDPOINT, {params: queryParams});
        logResponse(functionName, LISTINGS_ENDPOINT, response.data);
        return response.data;
    } catch (error: any) {
        logError(functionName, LISTINGS_ENDPOINT, error);
        throw error;
    }
};
