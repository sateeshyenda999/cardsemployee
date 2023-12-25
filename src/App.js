import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import EmployeeCard from "./EmployeeCard";
import SubHeader1 from "./SubHeader1";
import  SubHeader2 from "./SubHeader2";

const App = () => {
  const [employeeData, setEmployeeData] = useState([]);

  const fetchusers = async () => {
    axios
      .get("sampledata/employee_data.json")
      .then((result) => {
        const data = result?.data?.data || [];
        setEmployeeData(data);
      })
      .catch((er) => console.log(er));
  };
  useEffect(() => {
    fetchusers();
  }, []);

  return (
    <div>
      <Header />
      <SubHeader1 />
      <SubHeader2 />
      {employeeData.length ? (
        <div className="row mx-0 mt-3 mb-3 g-3">
          {employeeData.map((employee, index) => {
            return <div className="col-xs-12 col-md-6 col-lg-4" key={employee._key}>
              <EmployeeCard employee={employee}  />
              </div>
          })}
        </div>
      ) : null}
    </div>
  );
};

export default App;

