import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers } from "../redux/features/user-list.feature";

const Users = () => {
  let dispatch = useDispatch();

  // Dispatch an action
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Get Data from Redux Store
  const userState = useSelector((store) => {
    return store["users"];
  });

  let { loading, users, errorMessage } = userState;

  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="h3 text-primary">User List</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              laboriosam, dolor quaerat neque excepturi, cum veritatis ipsum
              modi atque ducimus fuga! Tenetur velit beatae ea.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            {loading && <h2 className="fw-bold">Loading...</h2>}
            {!loading && errorMessage !== null && (
              <h3 className="text-danger">{errorMessage}</h3>
            )}
            {!loading && users.length > 0 && (
              <table className="table table-striped table-hover text-center">
                <thead>
                  <tr>
                    <th>SNO</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Website</th>
                    <th>Company</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => {
                    return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.website}</td>
                        <td>{user.company.name}</td>
                        <td>{user.address.city}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Users;
