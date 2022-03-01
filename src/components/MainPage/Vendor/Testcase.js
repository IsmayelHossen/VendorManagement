import { Table } from "antd";
import "antd/dist/antd.css";
import { itemRender, onShowSizeChange } from "../paginationfunction";
import "../antdstyle.css";
import React, { useEffect, useState } from "react";

const Testcase = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getUsers = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then((res) => {
          // You have to send it, as I have done below
          if (res.status >= 400) {
            throw new Error("Server responds with error!");
          }
          return res.json();
        })
        .then(
          (users) => {
            setData(users);
          },

          (err) => {}
        );
    };
    getUsers();
  }, []);

  // table data

  const columns = [
    {
      title: "userId",
      dataIndex: "userId",
    },
    {
      title: "id",
      dataIndex: "id",
    },

    {
      title: "title",
      dataIndex: "title",
    },

    {
      title: "body",
      dataIndex: "body",
    },
  ];
  return (
    <div className="page-wrapper">
      <div className="row">
        <div className="col-md-12">
          <div className="table-responsive">
            <Table
              className="table-striped"
              pagination={{
                total: data.length,
                showTotal: (total, range) =>
                  `Showing ${range[0]} to ${range[1]} of ${total} entries`,
                showSizeChanger: true,
                onShowSizeChange: onShowSizeChange,
                itemRender: itemRender,
              }}
              style={{ overflowX: "auto" }}
              columns={columns}
              // bordered
              dataSource={data}
              rowKey={(record) => record.id}
              onChange={console.log("chnage")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testcase;
