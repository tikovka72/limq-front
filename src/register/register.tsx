import {useDispatch} from "react-redux";
import {useState} from "react";
import {fetchRegister} from "../fetch/fetchRegister";

export function Register() {
    function submit() {
        dispatch(fetchRegister(email, username, password, passwordAgain) as any)
        return false;
    }

    const dispatch = useDispatch()

    const [email, changeEmail] = useState('');
    const [username, changeUsername] = useState('');

    const [password, changePassword] = useState('')
    const [passwordAgain, changePasswordAgain] = useState('')

    return (
        <div className='center'>
            <form className='app-form' onSubmit={submit}>
                <label>
                    Email
                    <input className='input' id='email' type='email' value={email}
                           onChange={(e) => changeEmail(e.target.value)}/>
                </label>

                <label>
                    Username
                    <input className='input' id='username' type='text' value={username}
                           onChange={(e) => changeUsername(e.target.value)}/>
                </label>

                <label>
                    Password
                    <input className='input' id='password' type='password' value={password}
                           onChange={(e) => changePassword(e.target.value)}/>
                </label>

                <label>
                    Password again
                    <input className='input' id='password-again' type='password' value={passwordAgain}
                           onChange={(e) => changePasswordAgain(e.target.value)}/>
                </label>

                <input type='submit'/>
            </form>
        </div>
    )
}