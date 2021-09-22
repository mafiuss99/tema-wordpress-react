import React from "react";

export default class Header extends React.Component{
    render(){
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src="https://seox.com.br/wp-content/uploads/2020/10/03-seox-logo.svg" alt="Logo"/>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}