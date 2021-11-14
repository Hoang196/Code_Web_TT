import { createApiRequest } from "./index";

export const getTransHisbyUserId = (userId) => {
    return createApiRequest({
        url: `/api/get_user_history/${userId}`,
        method: 'GET'
    })
}