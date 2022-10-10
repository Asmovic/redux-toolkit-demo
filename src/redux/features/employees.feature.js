import { createSlice } from "@reduxjs/toolkit";
import { EmployeeService } from "../../services/employeeService";

const initialState = {
  employees: EmployeeService.getAllEmployees(),
};

let employeesSlice = createSlice({
  name: "employees",
  initialState: initialState,
  reducers: {
    updateSelect: function (state, action) {
      state.employees = state.employees.map((employee) => {
        if (employee.id === action.payload) {
          return {
            ...employee,
            isSelected: !employee.isSelected,
          };
        } else {
          return employee;
        }
      });
    },
  },
});

export const { updateSelect } = employeesSlice.actions;

export default employeesSlice.reducer;
