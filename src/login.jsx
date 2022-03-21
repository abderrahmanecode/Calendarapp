import {Component, useRef} from "react";
import { Link } from 'react-router-dom'
//import bdd from './Firebase/firebase';
import  './signin'
import './wwelcome'
//import React,{useState} from 'react'

//const [username, setusername] = useState("");
//const [password, setpassword] = useState("");



class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        /*let tst =() =>{

            bdd.child("patient").push({
                email:username,
                password:password,
            })
        }*/
        let check = () => {


            if (document.querySelector('.login-user') !== null && document.querySelector('.login-password') !== null) {
                if (document.querySelector('.login-user').value !== "" && document.querySelector('.login-password').value !== "") {


                    return (<Link to='/wwelcome'>
                        <button /*onClick={tst}*/ className="btn fas fa-arrow-right"></button>
                    </Link>)
                } else {
                    return (<button className="btn fas fa-arrow-right"></button>)
                }
            }
            else {
                return (<button className="btn fas fa-arrow-right"></button>)
            }
        }

        let changeColor = () => {
            let username = document.querySelector('.login-user').value;
            let password = document.querySelector('.login-password').value;
            if (username !== "" && password !== "") {
                let btn = document.querySelector('.btn');
                btn.style.backgroundColor = "red";
            }
            else {
                let btn = document.querySelector('.btn');
                btn.style.backgroundColor = "grey";
            }
        }

        return (

            <div>
                <form action="#" className="login-form">
                    <h1>Sign In</h1>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css" />
                    <link rel="stylesheet" href="style.css" />
                    <div className="textb">
                        <input type="email" id="test" onChange={changeColor} /*onChange={(e) => setusername(e.target.value)}*/ className="login-user" />
                        <div className="placeholder">Email</div>
                    </div>
                    <div className="textb">
                        <input type="password"  onChange={changeColor} /*onChange={(e) => setpassword(e.target.value)} */className="login-password" /><br/>
                        <div className="placeholder">Password</div>
                        <div className="show-password fas fa-eye-slash" />
                    </div>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <div className="fas fa-check" />
                        Stay signed in
                    </div>
                    <Link to='inscription'> <p className="fas fa-sign-in-alt">create account</p></Link>

                    {check()}
                </form>
            </div>

        )
    }



}

export default Login