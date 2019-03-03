const initialState = { news: [] };
const getNewsType = 'GET_NEWS'
const receiveNewsType = 'RECEIVE_NEWS'
const url = 'api/news/get'

export const actionCreators = {
    getNews: () => async (dispatch) => {
        dispatch({ type: getNewsType });

        const response = await fetch(url);
        const news = await response.json();

        dispatch({ type: receiveNewsType, news });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === getNewsType) {
        return {
            ...state,
            isLoading: true
        };
    }

    if (action.type === receiveNewsType) {
        return {
            ...state,
            news: action.news,
            isLoading: false
        };
    }

    return state;
};
