import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Menu = ({ history }) => (
    <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <div className="container">
                <a href="#" className="navbar-brand"></a>
                {/*<ul className="navbar-nav">*/}
                {/*    <li className="nav-item">*/}
                {/*        <a href="#" className="nav-link">Home</a>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <a href="#" className="nav-link">About</a>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <a href="#" className="nav-link">Services</a>*/}
                {/*    </li>*/}
                {/*    <li className="nav-item">*/}
                {/*        <a href="#" className="nav-link">Contact</a>*/}
                {/*    </li>*/}
                {/*</ul>*/}
                <ul className="navbar-nav ">
                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/")}
                            to="/"
                        >
                            Trang chủ
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/shop")}
                            to="/shop"
                        >
                            Mua hàng
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            className="nav-link"
                            style={isActive(history, "/cart")}
                            to="/cart"
                        >
                            Giỏ hàng{" "}
                            <sup>
                                <small className="cart-badge">{itemTotal()}</small>
                            </sup>
                        </Link>
                    </li>

                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/user/dashboard")}
                                to="/user/dashboard"
                            >
                                Dashboard
                            </Link>
                        </li>
                    )}

                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                style={isActive(history, "/admin/dashboard")}
                                to="/admin/dashboard"
                            >
                                Dashboard
                            </Link>
                        </li>
                    )}

                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/signin")}
                                    to="/signin"
                                >
                                    Đăng nhập
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="nav-link"
                                    style={isActive(history, "/signup")}
                                    to="/signup"
                                >
                                    Đăng ký
                                </Link>
                            </li>
                        </Fragment>
                    )}

                    {isAuthenticated() && (
                        <li className="nav-item">
                    <span
                        className="nav-link"
                        style={{ cursor: "pointer", color: "#ffffff" }}
                        onClick={() =>
                            signout(() => {
                                history.push("/");
                            })
                        }
                    >
                        Đăng xuất
                    </span>
                        </li>
                    )}
                </ul>

            </div>
        </nav>
    </div>
);

export default withRouter(Menu);
