import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { listOrders, getStatusValues, updateOrderStatus } from "./apiAdmin";
import moment from "moment";
import {numberWithComma} from "../core/apiCore";

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [statusValues, setStatusValues] = useState([]);

    const { user, token } = isAuthenticated();

    const loadOrders = () => {
        listOrders(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setOrders(data);
            }
        });
    };

    const loadStatusValues = () => {
        getStatusValues(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setStatusValues(data);
            }
        });
    };

    useEffect(() => {
        loadOrders();
        loadStatusValues();
    }, []);

    const showOrdersLength = () => {
        if (orders.length > 0) {
            return (
                <h1 className="text-danger display-2">
                    Tổng số lượng: {orders.length}
                </h1>
            );
        } else {
            return <h1 className="text-danger">Không có đơn hàng</h1>;
        }
    };

    const showInput = (key, value) => (
        <div className="input-group mb-2 mr-sm-2">
            <div className="input-group-prepend">
                <div className="input-group-text">{key}</div>
            </div>
            <input
                type="text"
                value={value}
                className="form-control"
                readOnly
            />
        </div>
    );

    const handleStatusChange = (e, orderId) => {
        updateOrderStatus(user._id, token, orderId, e.target.value).then(
            data => {
                if (data.error) {
                    console.log("Status update failed");
                } else {
                    loadOrders();
                }
            }
        );
    };

    const showStatus = o => (
        <div className="form-group">
            <h3 className="mark mb-4">Trạng thái: {o.status}</h3>
            <select
                className="form-control"
                onChange={e => handleStatusChange(e, o._id)}
            >
                <option>Cập nhật trạng thái</option>
                {statusValues.map((status, index) => (
                    <option key={index} value={status}>
                        {status}
                    </option>
                ))}
            </select>
        </div>
    );

    return (
        <Layout
            title="Đơn hàng"
            description="Bách Khoa Computer - Nơi mua sắm đáng tin cậy, bạn của mọi nhà"
            className="container"
        >
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    {showOrdersLength()}

                    {orders.map((o, oIndex) => {
                        return (
                            <div
                                className="mt-5"
                                key={oIndex}
                                style={{ borderBottom: "5px solid indigo" }}
                            >
                                <h2 className="mb-5">
                                    <span className="bg-primary">
                                        Mã đơn hàng: {o._id}
                                    </span>
                                </h2>

                                <ul className="list-group mb-2">
                                    <li className="list-group-item">
                                        {showStatus(o)}
                                    </li>
                                    <li className="list-group-item">
                                        Mã đơn hàng: {o.transaction_id}
                                    </li>
                                    <li className="list-group-item">
                                        Giá tiền: {numberWithComma(o.amount)} VNĐ
                                    </li>
                                    <li className="list-group-item">
                                        Được đặt bởi: {o.user.name}
                                    </li>
                                    <li className="list-group-item">
                                        Được đặt vào:{" "}
                                        {moment(o.createdAt).format("DD/MM/YYYY")}
                                    </li>
                                    <li className="list-group-item">
                                        Địa chỉ vận chuyển: {o.address}
                                    </li>
                                </ul>

                                <h3 className="mt-4 mb-4 font-italic">
                                    Tổng số sản phẩm trong đơn hàng:{" "}
                                    {o.products.length}
                                </h3>

                                {o.products.map((p, pIndex) => (
                                    <div
                                        className="mb-4"
                                        key={pIndex}
                                        style={{
                                            padding: "20px",
                                            border: "1px solid indigo"
                                        }}
                                    >
                                        {showInput("Tên sản phẩm", p.name)}
                                        {showInput("Giá sản phẩm", numberWithComma(p.price) + " VNĐ")}
                                        {showInput("Tổng số lượng", p.count)}
                                        {showInput("Mã sản phẩm", p._id)}
                                    </div>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </Layout>
    );
};

export default Orders;
