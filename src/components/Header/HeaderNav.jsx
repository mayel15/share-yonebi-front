import React from "react";
import './HeaderNav.css';
import { Link } from "react-router-dom";
import Search from "../Search";

export default function HeaderNav(props) {
    return (
        <nav className="navbar bg-body-tertiary top content-section" id="top">
            <div className="container-fluid">
                <a href="/" className="navbar-brand">share.yonebi. <i class="fa-solid fa-signs-post"></i></a>
                {
                    (props.search) ? <Search /> : null
                }
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