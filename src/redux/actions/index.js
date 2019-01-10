export const changeColor = () => ({
    type: 'CHANGECOLOR',
    data: 'red'
})

export const changeRedColor = () => {
    return (dispatch, getState) => {
        dispatch(changeColor())
    }
}