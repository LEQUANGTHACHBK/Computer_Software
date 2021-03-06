import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getPurchaseHistory } from "./apiUser";
import moment from "moment";
import {numberWithComma} from "../core/apiCore";

const Dashboard = () => {
    const [history, setHistory] = useState([]);

    const {
        user: { _id, name, email, role }
    } = isAuthenticated();
    const token = isAuthenticated().token;

    const init = (userId, token) => {
        getPurchaseHistory(userId, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setHistory(data);
            }
        });
    };

    useEffect(() => {
        init(_id, token);
    }, []);

    const userLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">Người dùng</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link text-primary" to="/cart">
                            Giỏ hàng
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link text-primary" to={`/profile/${_id}`}>
                            Cập nhật hồ sơ
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const userInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Thông tin người dùng</h3>
                <ul className="list-group">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">
                        {role === 1 ? "Admin" : "Registered User"}
                    </li>
                </ul>
            </div>
        );
    };

    const purchaseHistory = history => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">Lịch sử mua hàng</h3>
                <ul className="list-group">
                    <li className="list-group-item">
                        {history.map((h, i) => {
                            return (
                                <div>
                                    <hr />
                                    {h.status}
                                    {h.products.map((p, i) => {
                                        return (
                                            <div key={i}>
                                                <h6>Tên sản phẩm: {p.name}</h6>
                                                <h6>
                                                    Giá sản phẩm: {numberWithComma(p.price)} VNĐ
                                                </h6>
                                                <h6>
                                                    Ngày mua:{" "}
                                                    {moment(
                                                        p.createdAt
                                                    ).format("DD/MM/YYYY")}
                                                </h6>
                                            </div>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </li>
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="Dashboard"
            description={`Xin chào ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3">{userLinks()}</div>
                <div className="col-9">
                    {userInfo()}
                    {purchaseHistory(history)}
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
