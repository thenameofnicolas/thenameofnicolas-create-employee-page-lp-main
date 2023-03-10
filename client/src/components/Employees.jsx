import { useParams, } from "react-router-dom";
import { useEmployeeData } from "./repository";

export const  Employees = () => {
    const { employeeID } = useParams();
    return useEmployeeData(employeeID);
  };

  




















