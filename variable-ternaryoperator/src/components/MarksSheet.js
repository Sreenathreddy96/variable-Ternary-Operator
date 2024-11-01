import React from 'react'

function MarksSheet(props) {

    let engMarks = Number(props.engMarks);
    let telMarks = Number(props.telMarks);
    let hindiMarks = Number(props.hindiMarks);
    let scienceMarks = Number(props.scienceMarks);
    let socialMarks = Number(props.socialMarks);
    let mathsMarks = Number(props.mathsMarks);
    let totalMarks = engMarks+telMarks+hindiMarks+scienceMarks+socialMarks+mathsMarks
    let perc = (totalMarks/600)*100
  return (
    <div className="school">
        <table>
            <caption>{props.studentName}</caption>
            <thead>
                <tr>
                    <th>Subject</th>
                    <th>Max.Marks</th>
                    <th>Mraks Obtained</th>
                    <th>Result</th>
                    <th>Remarks</th>
                </tr>
            </thead>
        <tbody>
            <tr>
                <td>English</td>
                <td>100</td>
                <td>{engMarks}</td>
                <td>{engMarks >=35? "Pass" : "Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Telugu</td>
                <td>100</td>
                <td>{telMarks}</td>
                <td>{telMarks >=35? "Pass" : "Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Hindi</td>
                <td>100</td>
                <td>{hindiMarks}</td>
                <td>{hindiMarks >=35? "Pass" : "Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Science</td>
                <td>100</td>
                <td>{scienceMarks}</td>
                <td>{scienceMarks >=35? "Pass" : "Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Social</td>
                <td>100</td>
                <td>{socialMarks}</td>
                <td>{socialMarks >=35? "Pass" : "Fail"}</td>
                <td>Excellent</td>
            </tr>
            <tr>
                <td>Maths</td>
                <td>100</td>
                <td>{mathsMarks}</td>
                <td>{mathsMarks >=35? "Pass" : "Fail"}</td>
                <td>Excellent</td>
            </tr>
        </tbody>
    <tfoot>
        <tr>
            <td>Total</td>
            <td>600</td>
            <td>{totalMarks}({perc.toFixed(2)}%)</td>
            <td>Pass</td>
            <td>Excellent</td>
        </tr>
    </tfoot>

        </table>
    </div>
    
  )
}

export default MarksSheet