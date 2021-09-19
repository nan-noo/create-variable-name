import { useReducer } from "react";

const initialState = {
    loading: false,
    data: null,
    error: null
}

function reducer(state, action){
    switch(action.type){
        case 'LOADING':
            return{
                loading: true,
                data: null,
                error: null
            };
        case 'SUCCESS':
            return{
                loading: false,
                data: action.data,
                error: null
            };
        case 'ERROR':
            return{
                loading: false,
                data: null,
                error: action.error
            };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function useAsync(callback){
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async() => {
        dispatch({type: 'LOADING'});
        try{
            const data = await callback();
            dispatch({type: 'SUCCESS', data});
        }
        catch(e){
            dispatch({type: 'ERROR', error: e});
        }
    }

    return [state, fetchData];
}

export default useAsync;