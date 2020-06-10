import React, { Component } from "react";
import './Loader.css';

class Loader extends Component {
    render() {
        return (
            <div className="loader-container">
                <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
        )

    }
}

export default Loader;