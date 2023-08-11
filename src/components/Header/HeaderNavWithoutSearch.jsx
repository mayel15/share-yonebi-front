import React from "react";
import './HeaderNav.css';
import { Link } from "react-router-dom";

export default function HeaderNavWithoutSearch() {
    return (
        <nav className="navbar bg-body-tertiary top content-section" id="top">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">yonebi. <i class="fa-solid fa-signs-post"></i></a>
                <div className="icons-header">
                    <div>
                        <Link to="/infos"><i className="fa-solid fa-circle-info"></i></Link>
                    </div>
                    <div>
                        <Link to="/admin/login"><i className="fa-solid fa-right-to-bracket"></i></Link>
                    </div>
                </div>

            </div>
        </nav>

    )
}