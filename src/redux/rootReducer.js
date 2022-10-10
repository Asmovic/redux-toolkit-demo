import counterReducer from "./features/counter.feature";
import employeesReducer from "./features/employees.feature";
import UserListReducer from "./features/user-list.feature";

const rootReducer = {
  counter: counterReducer,
  employees: employeesReducer,
  users: UserListReducer,
};

export default rootReducer;
