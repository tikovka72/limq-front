import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./header/header";
import {Login} from "./login/login";

import {
    Route,
    Routes, useLocation,
    useNavigate
} from "react-router-dom";
import {useTypedSelector} from "./hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {dataStates} from "./store/reducers/consts";
import {fetchUser} from "./fetch/fetchUser";
import {Register} from "./register/register";
import {routes} from "./routes/routes";
import {Redirect} from "./routes/redirect";
import { Body } from './body/body';
import {CreateChannel} from "./createChannel/createChannel";
import {ChannelSettings} from "./channelSettings/channelSettings";
import {fetchChannels} from "./fetch/fetchChannels";
import {UserSettings} from "./userSettings/userSettings";
import {FetchActionTypes} from "./store/reducers/fetchReducer";


function App() {
    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute("data-theme")
        document.documentElement.setAttribute("data-theme", currentTheme === 'dark' ? 'light' : 'dark');

    }
    const {id, userDataState} = useTypedSelector(state => state.user)
    const {channelsDataState} = useTypedSelector(state => state.channels)
    const {path} = useTypedSelector(state => state.path)

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (userDataState === dataStates.notRequested) {
            dispatch(fetchUser() as any)
        }
    })

    useEffect(() => {
        if (channelsDataState === dataStates.notRequested && userDataState === dataStates.received && id) {
            dispatch(fetchChannels() as any)
        }
    })

    useEffect(() => {
        if (path) {
            dispatch({type: FetchActionTypes.deleteFetches})

            Redirect(path, navigate, location)
        }
    })

    return (
        <>
            <div className="App">
                <Header/>
            </div>
            <button onClick={toggleTheme}>theme</button>
            <div className={`app-body`}>
                <Routes>
                    <Route path={routes.index} element={<Body/>}/>
                    <Route path={routes.login} element={<Login/>}/>
                    <Route path={routes.register} element={<Register/>}/>
                    <Route path={routes.addChannel} element={<CreateChannel/>}/>
                    <Route path={routes.channelSettings} element={<ChannelSettings/>}/>
                    <Route path={routes.userSettings} element={<UserSettings/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
