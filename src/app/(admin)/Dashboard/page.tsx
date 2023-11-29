"use client";
import React, { useEffect, useState } from "react";
import styles from "./dashboard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons/faLayerGroup";
import { faTruckFast } from "@fortawesome/free-solid-svg-icons/faTruckFast";
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons/faEarthAmericas";
// import { Table } from "antd";
import Table from "react-bootstrap/Table";
import axios from "axios";
import useSWR from "swr";

interface Item {
  id: number;
  quantity: number;
  itemTitle: string;
  icon: JSX.Element;
}

interface TaskPanelItem {
  id: number;
  task: string;
  icon: JSX.Element;
  time: string;
}

interface MongoDataItem {
  _id: string;
  userName: string;
  password: string;
  email: string;
  createdAt: string;
  role: string;
}
export default function Dashboard() {
  const itemOver = [
    {
      id: 1,
      quantity: 23232,
      itemTitel: "DAILY VISITS",
      icon: (
        <FontAwesomeIcon
          icon={faEye}
          style={{ color: "#ff0000", width: 68, height: 68 }}
        />
      ),
    },
    {
      id: 2,
      quantity: 23232,
      itemTitel: "SALES",
      icon: (
        <FontAwesomeIcon
          icon={faCartShopping}
          style={{ width: 68, height: 68 }}
        />
      ),
    },
    {
      id: 3,
      quantity: 23232,
      itemTitel: "COMMENTS",
      icon: (
        <FontAwesomeIcon icon={faComment} style={{ width: 68, height: 68 }} />
      ),
    },
    {
      id: 4,
      quantity: 23232,
      itemTitel: "PRODUCT SOLD OUT",
      icon: (
        <FontAwesomeIcon
          icon={faLayerGroup}
          style={{ width: 68, height: 68 }}
        />
      ),
    },
  ];
  const TasksPanel = [
    {
      id: 1,
      task: "Bình luận mới nhất",
      icon: <FontAwesomeIcon icon={faComment} />,
      time: "3 phút trước",
    },
    {
      id: 2,
      task: "Đơn hàng 332 đã được giao",
      icon: <FontAwesomeIcon icon={faTruckFast} />,
      time: "3 phút trước",
    },
    {
      id: 3,
      task: "Hóa đơn 446 đã thanh toán",
      icon: <FontAwesomeIcon icon={faEarthAmericas} />,
      time: "3 phút trước",
    },
  ];

  // const [datas, setData] = useState({ users: [] });
  const [datas, setData] = useState<{ users: MongoDataItem[] }>({ users: [] });
  useEffect(() => {
    const fecthData = async () => {
      const { data } = await axios.get("http://localhost:8000/api/users");
      setData(data);
    };
    fecthData();
  }, []);
  const maxNewUsersToShow = 6;
  const newUsers = datas.users.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  // .slice(0, maxNewUsersToShow);
  const newMembers = newUsers.filter(
    (item: MongoDataItem) => item.role === "member"
  );
  return (
    <div className={styles.dashboard}>
      <div className="row">
        {itemOver.map((items, index) => (
          <div className="col-md-3 col-sm-12 col-xs-12" key={index}>
            <div className={styles.board}>
              <div className={`${styles.panel} ${styles.panel__primary}`}>
                <div className={styles.number}>
                  <h3>{items.quantity}</h3>
                  <small>{items.itemTitel}</small>
                </div>
                <div className={styles.icon}>{items.icon}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md-4 col-sm-12 col-xs-12">
          <div className={`${styles.panel_table}  `}>
            <div className={styles.panel_heading}>Bảng thông báo mới nhất</div>
            <div className={styles.panel_body}>
              <ul>
                {TasksPanel.map((task, index) => (
                  <li key={index}>
                    {task.icon} {task.task} {task.time}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-8 col-sm-12 col-xs-12">
          <div className={`${styles.panel_table}  `}>
            <div className={styles.panel_heading}>
              Tài khoản đăng ký gần đây
            </div>
            <div className={styles.panel_body}>
              <Table striped bordered hover variant="dark">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Gmail</th>
                    <th>Times</th>
                    <th>Role</th>
                  </tr>
                </thead>
                {newMembers.map((item: MongoDataItem) => (
                  <tr key={item._id} style={{ color: "black" }}>
                    <td>{item.userName}</td>
                    <td>{item.email}</td>
                    <td>{item.createdAt}</td>
                    <td>{item.role}</td>
                  </tr>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
