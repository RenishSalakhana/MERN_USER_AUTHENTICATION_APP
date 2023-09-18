import React, { useEffect } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userListAction } from "../../redux/actions/userActions";
import { columns } from "../../constants/Constant";

const UserList : React.FC = () => {
  const dispatch:any = useDispatch();
  const userList = useSelector((state: any) => state.users);

  const userLists = () => {
    dispatch(userListAction());
  };

  useEffect(() => {
    userLists();
  }, [dispatch]);


  return (
    <React.Fragment>
      <div>
        <h2>User List</h2>
        {userList?.users?.length === 0 ? (
          <div>
            <p>User list not available. Please register first.</p>
            <Link to="/register">Register</Link>
          </div>
        ) : (
          userList?.users?.map((value:any, index:number) => (
            <Table
              key={value.id}
              columns={columns}
              dataSource={[value]}
              showHeader={index === 0}
              pagination={false}
            />
          ))
        )}
        <Link to="/profile">Back To Profile</Link>
      </div>
    </React.Fragment>
  );
};

export default UserList;
