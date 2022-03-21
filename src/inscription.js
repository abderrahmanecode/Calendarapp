import React from 'react'
import './wwelcome'
import {Link} from "react-router-dom";

function Inscription() {

    let cchangeColor = () => {
        let email = document.querySelector('.mail-user').value;
        let lastname = document.querySelector('.firstname').value;
        let firstname = document.querySelector('.lastname').value;
        let phone = document.querySelector('.phone').value;
        let password = document.querySelector('.login-password').value;
        if (document.querySelector('.mail-user') !== null && document.querySelector('.firstname') !== null && document.querySelector('.lastname') !== null && document.querySelector('.login-password') !== null && document.querySelector('.phone') !== null) {
            if (email !== "" && lastname !== "" && firstname !== "" && password !== "" && phone !== "") {
                let btn = document.querySelector('.btn');
                btn.style.backgroundColor = "red";
            } else {

                let btn = document.querySelector('.btn');
                btn.style.backgroundColor = "grey";
            }
        }
        else {

            let btn = document.querySelector('.btn');
            btn.style.backgroundColor = "grey";
        }
    }
    let ccheck = () => {
        if (document.querySelector('.mail-user') !== null && document.querySelector('.firstname') !== null && document.querySelector('.lastname') !== null && document.querySelector('.phone') !== null  && document.querySelector('.login-password') !== null){
            if (document.querySelector('.mail-user').value !== "" && document.querySelector('.firstname').value !== "" && document.querySelector('.lastname').value !== "" && document.querySelector('.phone').value !== ""  && document.querySelector('.login-password').value !== ""){
                return (
                    <Link to='/wwelcome'> <button className="btn fas fa-arrow-right"/> </Link>)
            } else {
                return (<button className="btn fas fa-arrow-right"/>)
            }
        } else {
            return (<button className="btn fas fa-arrow-right"/>)
        }
    }
    return (
        <div>
            <form action="#" className="login-form">
                <h1>Creat account</h1>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.0-2/css/all.min.css"/>
                <link rel="stylesheet" href="style.css"/>
                <div className="textb">
                    <input type="mail" id="test" onChange={cchangeColor} className="mail-user"/>
                    <div className="placeholder">Email</div>
                </div>
                <div className="textb">
                    <input type="text" id="test" onChange={cchangeColor} className="firstname"/>
                    <div className="placeholder">firstname</div>
                </div>
                <div className="textb">
                    <input type="text" id="test" onChange={cchangeColor} className="lastname"/>
                    <div className="placeholder">lastname</div>
                </div>

                <div className="textb">
                    <input type="text" id="test" onChange={cchangeColor} className="phone"/>
                    <div className="placeholder">telephone</div>
                </div>
                <div className="textb">
                    <input type="password" onChange={cchangeColor} className="login-password"/><br/>
                    <div className="placeholder">Password</div>
                    <div className="show-password fas fa-eye-slash"/>
                </div>
                {ccheck()}
            </form>

        </div>
    )

}
export default Inscription
