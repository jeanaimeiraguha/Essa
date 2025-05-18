import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Report = () => {
  const [report, setReport] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/report')
      .then((res) => {
        setReport(res.data)
      })
      .catch((err) => {
        console.error("Failed to fetch report:", err)
      })
  }, [])

  // Decision function
  const getDecision = (total) => {
    return total >= 70 ? 'Competent' : 'Failed'
  }

  return (
    <div>
      <table className="table table-striped table-responsive container mt-5 table-bordered shadow-sm border">
        <thead className="table-dark">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Formative Assessment</th>
            <th>Summative Assessment</th>
            <th>Total Marks</th>
            <th>Decision</th>
          </tr>
        </thead>
        <tbody>
          {report.map((data) => (
            <tr key={data.tid}>
              <td>{data.fname}</td>
              <td>{data.lname}</td>
              <td>{data.f_assessment}</td>
              <td>{data.s_assessment}</td>
              <td>{data.total}</td>
              <td>{getDecision(data.total)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* <button onSubmit={()=>window.print()}>Print</button>
       */}
       <button onClick={() => window.print()} className='btn btn-success justify-content-center'>Print</button>

    </div>
  )
}

export default Report
