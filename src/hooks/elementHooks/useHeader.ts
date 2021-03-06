import {PathActionTypes} from "../../store/reducers/pathReducer";
import {useTypedSelector} from "../useTypedSelector";
import {useDispatch} from "react-redux";
import {useActions} from "../useActions";
import {useState} from "react";
import {availableThemes, getSystemTheme, getTheme} from "../../theme";

const lightLogo = require('../../svg/limq-for-white.svg').default
const darkLogo = require('../../svg/limq-for-dark.svg').default


export function useHeader() {
    function onClick(route: string) {
        return function () {
            dispatch({type: PathActionTypes.setPath, payload: route})
        }
    }

    const theme = getTheme()
    const headerImage = (theme === availableThemes.light ||
        (theme === availableThemes.system && getSystemTheme() === availableThemes.light)) ? lightLogo : darkLogo

    const {user, userDataState} = useTypedSelector(state => state.user)
    const {lang} = useTypedSelector(state => state.lang)
    const dispatch = useDispatch()
    return {lang, onClick, user, userDataState, headerImage}
}

export function useUserButton() {
    function checkOutsideClick(event: Event): any {
        if (!event.composedPath().filter((e: any) => e.id === 'user-button').length) {
            changeOpen(false)
        }
    }

    function toggleOpen() {
        changeOpen(!buttonOpen)
    }

    function exit() {
        return function () {
            fetchLogout()
            changeOpen(false)
            return null
        }
    }

    const {fetchLogout} = useActions()
    const {user} = useTypedSelector(state => state.user)
    const {lang} = useTypedSelector(state => state.lang)
    const [buttonOpen, changeOpen] = useState(false)
    document.addEventListener("mousedown", checkOutsideClick);

    return {lang, exit, user, buttonOpen, changeOpen, toggleOpen}
}
