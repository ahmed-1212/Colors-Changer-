const initialState = {
    lightOne: '#ff8a8a',
    lightTow: '#68edbc',
    lightThree: '#a5c5ff',
    lightFour: '#d8a5ff',
    lightFive: '#ffa5be',
    lightSix: '#e72626',
    lightSeven: '#276a06',
    lightEight: '#1c5fed',
    lightNine: '#4f1ee5',
    lightTen: '#f65407',
    backColor: ''
};

const store = (state = initialState, action) => {
    switch (action.type) {
        case 'COLOR_O':

            return {
                ...state,
                backColor: state.lightOne
            }

        case 'COLOR_T':

            return {
                ...state,
                backColor: state.lightTow
            }

        case 'COLOR_H':

                return {
                    ...state,
                    backColor: state.lightThree
                }

        case 'COLOR_F':

                return {
                    ...state,
                    backColor: state.lightFour
                }

        case 'COLOR_V':

                return {
                    ...state,
                    backColor: state.lightFive
                }
        case 'COLOR_I':

                return {
                    ...state,
                    backColor: state.lightSix
                }

        case 'COLOR_E':

                return {
                    ...state,
                    backColor: state.lightSeven
                }

        case 'COLOR_G':

                return {
                    ...state,
                    backColor: state.lightEight
                }

        case 'COLOR_N':

                return {
                    ...state,
                    backColor: state.lightNine
                }

        case 'COLOR_X':

                return {
                    ...state,
                    backColor: state.lightTen
                }
        default:
            return state;
    }
};

export default store;