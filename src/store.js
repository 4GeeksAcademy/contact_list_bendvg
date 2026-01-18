export function initialStore() {
    return {
        agenda: '',
    };
}

export default function storeReducer(state, action) {
    switch (action.type) {
        case "SET_AGENDA":
            return { ...state, agenda: action.payload };

        default:
            return state;
    }
}
