import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateSelect } from "../redux/features/employees.feature";

const Employees = () => {
  let employeesState = useSelector((store) => {
    return store["employees"];
  });
  let dispatch = useDispatch();

  let updateSelected = (empId) => {
    dispatch(updateSelect(empId));
  };
  let { employees } = employeesState;
  return (
    <React.Fragment>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <p className="h3 text-primary">Employee</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              deleniti porro nisi maxime veniam eum, eveniet recusandae, sunt
              delectus dolorem animi praesentium voluptate, unde non! Facere
              iure nam doloremque voluptatum!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <ul className="list-group">
              {employees.length > 0 &&
                employees.map(({ id, name, username, email }) => {
                  return (
                    <li key={id} className="list-group-item">
                      <input
                        type="checkbox"
                        onChange={() => updateSelected(id)}
                        className="form-check-input me-2"
                      />
                      {name}
                    </li>
                  );
                })}
            </ul>
          </div>
          <div className="col-md-6">
            {employees.length > 0 &&
              employees
                .filter((emp) => emp.isSelected)
                .map(({ id, name, username, email }) => {
                  return (
                    <div key={id} className="card my-2">
                      <div className="card-body">
                        <ul className="list-group">
                          <li className="list-group-item">
                            Name : <span className="fw-bold">{name}</span>
                          </li>
                          <li className="list-group-item">
                            Email : <span className="fw-bold">{email}</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Employees;
