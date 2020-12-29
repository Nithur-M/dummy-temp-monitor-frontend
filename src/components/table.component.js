import React, { useState, useEffect } from 'react';

const Table = ({ data }) => {
    const [alertDetails, setAlertDetails] = useState([]);

    useEffect(() => {
        setAlertDetails(data);
    }, []);

    return (
      <table className="table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          { (alertDetails.length > 0) ? data.map( (alert, index) => {
             return (
              <tr key={ index }>
                <td>{ alert.date }</td>
                <td>{ alert.description }</td>
              </tr>
            )
           }) : <tr><td colSpan="5">Loading...</td></tr> }
        </tbody>
      </table>
    );
  }

  export default Table;
