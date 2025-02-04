import React, { useState, useRef } from 'react'
import styles from './LoginPage.module.css'
import { useDispatch } from 'react-redux'
import { setLoginState, setUserData } from '../../slices/loginSlice';
import { assets } from '../../assets/assets';

import { IoMdClose, IoLogoGoogle } from "react-icons/io";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth, googleAuthProvider } from '../../firebase';


const LoginPage = () => {
    const [toogle, setToogle] = useState(false);
    const [error, setError] = useState('');

    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    const dispatch = useDispatch()

    const sigInWithGoogleClick = async (e) => {
        e.preventDefault();
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            const user = result.user;
            const userData = {
                name: user.displayName,
                email: user.email,
                profileImage: user.photoURL
            }
            dispatch(setUserData(userData));
            localStorage.setItem('userLoginDetails', JSON.stringify(userData));
            dispatch(setLoginState(false));
        } catch (err) {
            console.log('This is authentication error,', err);
            setError(err.message);
        }

    }

    const onLogInLogOutClick = async (e) => {
        e.preventDefault();
        
        if (toogle) {
            let name = nameRef.current.value.trim();
            let email = emailRef.current.value.trim();
            let password = passwordRef.current.value.trim();
            let confirmPassword = confirmPasswordRef.current.value.trim();

            if(!name || !email || !password || !confirmPassword){
                alert('All Fields are required');
                return;
            }
            if (password !== confirmPassword) {
                setError('Password does not match!');
                return;
            }
            
            try {
                const result = await createUserWithEmailAndPassword(auth, email, password);
                const user = result.user;
                await updateProfile(user , {displayName: name});
                const userData = {
                    name: user.displayName,
                    email: user.email,
                    profileImage: user.photoURL
                }
                // console.log("User created successfully:", result.user);
                setError('');
                dispatch(setUserData(userData));
                localStorage.setItem('userLoginDetails', JSON.stringify(userData));
                alert('Welcome to FavFood');
                dispatch(setLoginState(false));
            }
            catch (err) {
                console.log("Create User with google", err);
                setError(err.message);
            }

        } else {
            let email = emailRef.current.value.trim();
            let password = passwordRef.current.value.trim();
            if( !email || !password ){
                alert('All Fields are required');
                return;
            }
            try {
                const result = await signInWithEmailAndPassword(auth, email, password);
                // console.log("Login successful:", result.user);
                const user = result.user;
                const userData = {
                    name: user.displayName,
                    email: user.email,
                    profileImage: user.photoURL
                }
                setError('');
                dispatch(setUserData(userData));
                localStorage.setItem('userLoginDetails', JSON.stringify(userData));
                dispatch(setLoginState(false));
            }
            catch (err) {
                console.log('Login Error with google', err);
                setError(err.message);
            }

        }

    }

    return (
        <div className={styles['container']}>
            <form className={styles["form-container"]}>
                <button className={styles['close-btn']} onClick={() => dispatch(setLoginState(false))}> <IoMdClose className={styles.icon} /> </button>
                <div className={styles['logo-div']}>
                    <p>Welcome</p>
                    <div className={styles.logo}>
                        <img src={assets.logo} alt="logo" />
                        <span className={styles.first}>Fav</span>
                        <span className={styles.second} >Food</span>
                    </div>
                </div>
                <h2>{toogle ? 'Register' : 'Log In'} </h2>

                {error ? <p className={styles.error}>{error}</p> : ""}
                {
                    toogle ?
                        <>
                            <input ref={nameRef} type="text" placeholder='Name' />
                            <input ref={emailRef} type='email' placeholder='name@gmail.com' />
                            <input ref={passwordRef} type="password" placeholder='Password' />
                            <input ref={confirmPasswordRef} type="password" placeholder='Confirm Password' />
                        </>
                        :
                        <>
                            <input ref={emailRef} type='email' placeholder='name@gmail.com' />
                            <input ref={passwordRef} type="password" placeholder='Password' />

                            <div className={styles.checkbox}>
                                <input type="checkbox" required />
                                <p>I agree to the <span>Terms of Service</span> & <span>Privacy Policy</span> </p>
                            </div>
                        </>
                }
                <button onClick={onLogInLogOutClick} className={styles.btn1}>{toogle ? 'Sign Up' : 'Log In'} </button>
                
                <button onClick={sigInWithGoogleClick} className={styles.btn2}><IoLogoGoogle className={styles.icon} /> Login with Google</button>

                <p className={styles['bottom-btn']}>Create a new account? <span onClick={() => setToogle(!toogle)}>Click here</span></p>
            </form>
        </div>
    )
}

export default LoginPage
































// <div className={styles['container']}>
//     <form className={styles["form-container"]}>
//         <button className={styles['close-btn']} onClick={() => dispatch(setLoginState(false))}> <IoMdClose className={styles.icon} /> </button>
//         <div className={styles['logo-div']}>
//             <p>Welcome</p>
//             <div className={styles.logo}>
//                 <img src={assets.logo} alt="logo" />
//                 <span className={styles.first}>Fav</span>
//                 <span className={styles.second} >Food</span>
//             </div>
//         </div>
//         <h2>{toogle ? 'Register' : 'Log In'} </h2>
//         {
//             toogle ?
//                 <>
//                     <input type="text" placeholder='Name' />
//                     <input type='email' placeholder='name@gmail.com' />
//                     <input type="password" placeholder='Password' />
//                     <input type="password" placeholder='Confirm Password' />
//                     <button className={styles.btn1}>Sign Up</button>
//                     <button className={styles.btn2}><IoLogoGoogle className={styles.icon} /> Login with Google</button>

//                     <p className={styles['bottom-btn']}>Alrady have an account <span onClick={() => setToogle(false)}>Click here</span></p>
//                 </>
//                 :
//                 <>
//                     <input type='email' placeholder='name@gmail.com' />
//                     <input type="password" placeholder='Password' />

//                     <div className={styles.checkbox}>
//                         <input type="checkbox" required />
//                         <p>I agree to the <span>Terms of Service</span> & <span>Privacy Policy</span> </p>
//                     </div>
//                     <button className={styles.btn1}>Login In</button>
//                     <button className={styles.btn2}><IoLogoGoogle className={styles.icon} /> Login with Google</button>

//                     <p className={styles['bottom-btn']}>Create a new account? <span onClick={() => setToogle(true)}>Click here</span></p>
//                 </>
//         }
//     </form>
// </div>