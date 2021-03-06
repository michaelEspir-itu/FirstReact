import React from "react";

export default class Navigation extends React.Component{
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li>
                            <a className="nav-link" href="#home">
                                HOME
                            </a>
                        </li>
                        <li>
                        <a className="nav-link" href="#home">
                                ABOUT US
                            </a>
                        </li>
                        <li>
                        <a className="nav-link" href="#home">
                                CONTACT
                            </a>
                        </li>
                        <li>
                        <a href="#login" className="nav-link active" id="login">
                                LOGIN
                            </a>
                        </li>
                    </ul>
                </nav>
                <br/>
            </div>
        );
    }
}