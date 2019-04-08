const initialState = { news: [] };
const getNewsType = 'GET_NEWS'
const receiveNewsType = 'RECEIVE_NEWS'
const addedNewsType = 'ADDED_NEWS'
const url = 'api/news/get'
const postUrl = 'api/news/post'

export const actionCreators = {
    getNews: () => async (dispatch) => {
        dispatch({ type: getNewsType });

        const response = await fetch(url);
        const news = await response.json();

        dispatch({ type: receiveNewsType, news });
    },

    addNews: (news) => async (dispatch) => {
        const request = new Request(postUrl,
            {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/json'
                }),
                body: JSON.stringify(news),
            }
        )

        await fetch(request)
        dispatch({ type: addedNewsType, news })
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

    if (action.type === addedNewsType) {
        return {
            ...state,
            news: [...state.news, action.news],
        }
    }

    return state;
};
