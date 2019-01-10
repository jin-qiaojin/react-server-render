export const colorChange = (state = '', action) => {
    switch (action.type) {
        case 'CHANGECOLOR':
            state = action.data;
            return state;
        default:
            return state;    
    }
}