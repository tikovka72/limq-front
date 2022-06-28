import {checkUsernameLength, NameBlock} from "../../userSettings/blocks/nameBlock";
import {EmailBlock} from "../../userSettings/blocks/emailBlock";
import {PasswordBlock} from "../../userSettings/blocks/passwordBlock";
import {useSearchParams} from "react-router-dom";
import {useTypedSelector} from "../useTypedSelector";
import React, {useState} from "react";
import {checkPasswordLength, checkPasswordsMatch, confirmEmail} from "./useRegister";
import {useActions} from "../useActions";
import {ApiRoutes} from "../../store/actionCreators/apiRoutes";
import {dataStates} from "../../store/reducers/consts";
import {checkChannelLength} from "./useCreateChannel";
import {getErrorDescription} from "../../lang/getServerErrorDescription";


const menuTabs = (names: { changeName: string, changeEmail: string, changePassword: string }) => [
    {
        name: names.changeName, parameterName: 'changeName',
        id: 1, block: () => <NameBlock key='1'/>
    },
    {
        name: names.changeEmail, parameterName: 'changeEmail',
        id: 2, block: () => <EmailBlock key='2'/>
    },
    {
        name: names.changePassword, parameterName: 'changePassword',
        id: 3, block: () => <PasswordBlock key='3'/>
    }
]

const params = {
    tab: 'tab'
}

function hideEmail(email: string) {
    if (email.length < 3) {
        return ''
    }

    const [name, fullDomain] = email.split('@')
    const [domain, zone] = fullDomain.split('.')
    const hiddenName = name.length > 2 ?
        name[0] + '*'.repeat(Math.max(0, name.length - 2)) + name[Math.max(0, name.length - 1)]
        : name
    const hiddenDomain = domain.length > 2 ?
        domain[0] + '*'.repeat(domain.length - 2) + domain[domain.length - 1]
        : domain
    return `${hiddenName}@${hiddenDomain}.${zone}`
}


export function useUserSettings() {
    function checkTabInParams() {
        if (!searchParams.get(params.tab)) {
            changeTab(tabs[0].parameterName)()
        }
    }

    function changeTab(tab: string) {
        return function () {
            changeSearchParams({[params.tab]: tab})
        }
    }

    const [searchParams, changeSearchParams] = useSearchParams()
    const {lang} = useTypedSelector(state => state.lang)
    const tabs = menuTabs({
        changeName: lang.UserSettingsMenuUsername,
        changeEmail: lang.UserSettingsMenuEmail, changePassword: lang.UserSettingsMenuPassword
    })
    const currentTab = searchParams.get(params.tab)
    return {lang, tabs, currentTab, checkTabInParams, changeTab}
}

export function useEmailSettingsBlock() {
    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        let newErrors = {...errors}

        newErrors.email = !confirmEmail(newEmail) ? lang.InvalidEmailError : ''
        newErrors.password = !checkPasswordLength(password) ? lang.PasswordTooShortError : ''

        changeErrors(newErrors)
        if (newErrors.email || newErrors.password) {
            return
        }

        if (user.id) {
            changeEmail(newEmail, password)
            changePassword('')
        }
    }

    function validateEmail(email: string) {
        if (confirmEmail(email)) {
            return changeErrors({...errors, email: ''})
        }
    }

    function checkPassword(password: string) {
        if (checkPasswordLength(password)) {
            return changeErrors({...errors, password: ''})
        }
    }


    const {user} = useTypedSelector(state => state.user)
    const [newEmail, changeNewEmail] = useState('')
    const [password, changePassword] = useState('')

    const {changeEmail} = useActions()

    const [errors, changeErrors] = useState({email: '', password: ''})

    const {states} = useTypedSelector(state => state.fetch)
    const {lang} = useTypedSelector(state => state.lang)
    const changeEmailState = states[ApiRoutes.ChangeEmail]

    const requested = changeEmailState && changeEmailState.dataState === dataStates.requested
    const hasError = changeEmailState && changeEmailState.status !== 200
    const errorMessage = hasError ? getErrorDescription(lang, changeEmailState.code) : ''

    const placeholder = user.email ? hideEmail(user.email) : ''

    return {
        lang,
        newEmail,
        changeNewEmail,
        validateEmail,
        placeholder,
        password,
        checkPassword,
        changePassword,
        submit,
        errors,
        errorMessage,
        requested
    }
}

export function useNameSettingsBlock() {
    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        let newErrors = {...errors}
        newErrors.name = !checkChannelLength(newUsername) ? lang.UsernameTooLongError : ''
        changeErrors(newErrors)
        if (newErrors.name) {
            return
        }

        if (user.id) {
            fetchRenameUser(newUsername)
        }
    }

    function checkUsername(name: string) {
        if (checkUsernameLength(name)) {
            return changeErrors({...errors, name: ''})
        }
    }

    const {user} = useTypedSelector(state => state.user)
    const [newUsername, changeNewUsername] = useState('')
    const {fetchRenameUser} = useActions()

    const [errors, changeErrors] = useState({name: ''})

    const {states} = useTypedSelector(state => state.fetch)
    const {lang} = useTypedSelector(state => state.lang)
    const renameUserState = states[ApiRoutes.RenameUser]

    const requested = renameUserState && renameUserState.dataState === dataStates.requested
    const hasError = renameUserState && renameUserState.status !== 200
    const errorMessage = hasError ? getErrorDescription(lang, renameUserState.code) : ''

    const placeholder = user.username ? user.username : ''

    return {
        lang,
        newUsername,
        changeNewUsername,
        placeholder,
        checkUsername,
        submit,
        errors,
        errorMessage,
        requested
    }
}


export function usePasswordSettingsBlock() {
    function submit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        let newErrors = {...errors}

        newErrors.oldPassword = !checkPasswordLength(oldPassword) ? lang.PasswordTooShortError : ''
        newErrors.newPassword = !checkPasswordLength(newPassword) ? lang.PasswordTooShortError : ''
        newErrors.newPasswordAgain = !checkPasswordsMatch(newPassword, newPasswordAgain)
            ? lang.PasswordsNotMatchError : ''
        changeErrors(newErrors)
        if (newErrors.oldPassword || newErrors.newPasswordAgain || newErrors.newPasswordAgain) {
            return
        }

        if (user.id) {
            fetchChangePassword(oldPassword, newPassword)
        }
    }

    function checkOldPassword(password: string) {
        if (checkPasswordLength(password)) {
            return changeErrors({...errors, oldPassword: ''})
        }
    }

    function checkNewPassword(password: string) {
        if (checkPasswordLength(password)) {
            return changeErrors({...errors, newPassword: ''})
        }
    }

    function checkNewPasswordAgain(passwordAgain: string) {
        if (checkPasswordsMatch(newPassword, passwordAgain)) {
            return changeErrors({...errors, newPasswordAgain: ''})
        }
    }

    const {user} = useTypedSelector(state => state.user)
    const [oldPassword, changeOldPassword] = useState('')
    const [newPassword, changeNewPassword] = useState('')
    const [newPasswordAgain, changeNewPasswordAgain] = useState('')

    const {fetchChangePassword} = useActions()

    const [errors, changeErrors] = useState({oldPassword: '', newPassword: '', newPasswordAgain: ''})

    const {states} = useTypedSelector(state => state.fetch)
    const {lang} = useTypedSelector(state => state.lang)
    const changePasswordState = states[ApiRoutes.ChangePassword]

    const requested = changePasswordState && changePasswordState.dataState === dataStates.requested
    const hasError = changePasswordState && changePasswordState.status !== 200
    const errorMessage = hasError ? getErrorDescription(lang, changePasswordState.code) : ''

    return {
        lang,
        oldPassword,
        changeOldPassword,
        checkOldPassword,
        newPassword,
        changeNewPassword,
        checkNewPassword,
        newPasswordAgain,
        changeNewPasswordAgain,
        checkNewPasswordAgain,
        submit,
        errors,
        errorMessage,
        requested
    }
}
