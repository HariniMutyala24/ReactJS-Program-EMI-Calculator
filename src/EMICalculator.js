import React, { useState } from "react";

export default function EMICalculator() {
  const [loan, setLoan] = useState(0);
  const [tenure, setTenure] = useState(0);
  const [rate, setRate] = useState(0);
  const [emi, setEMIValue] = useState(0);
  const [total, setTotal] = useState(0);
  const calculateEMI = (e) => {
    e.preventDefault();
    var em = loan * (rate/12.0) * ((Math.pow((1+rate/12.0),tenure/12)/(Math.pow((1+rate/12),tenure/12)-1)));
    const t = parseInt(loan) + em;
    setEMIValue(Math.floor(em).toFixed(2));
    setTotal(Math.floor(t).toFixed(2));
  };
  return (
    <div>
      <h1>EMI Calculator</h1>
      <table border="0px" style={{ width: "100%" }}>
        <tr>
          <td> <label>Loan Amount: Rs </label></td>
          <td> <input type="text" name="loan" value={loan} onChange={(e) => {setLoan(e.target.value);}}/></td>
        </tr>
        <tr>
          <td><label> Loan Tenure: </label></td>
          <td><input type="text" name="name" value={tenure} onChange={(e) => {setTenure(e.target.value)}} /></td>
        </tr>
        <tr>
          <td><label> Interest Rate : </label> </td>
          <td> <input type="text" name="rate" value={rate} onChange={(e)=>{setRate(e.target.value)}}/></td>
        </tr>
        <tr>
          <td><button onClick={() =>{}}>Clear</button></td>
          <td><button onClick={calculateEMI}>Calculate</button>
          </td>
        </tr>
      </table>
      <h3 >EMI to be paid : {emi}</h3>
      <h3 >Total Amount Payable : {total}</h3>
    </div>
  );
}
