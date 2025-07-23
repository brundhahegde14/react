function TableList()
{
    const students=[
         {id:111,name:"ajay",city:"mangalore"},
     {id:112,name:"ajy",city:"mangalore"},
      {id:113,name:"aay",city:"mangalore"},
       {id:114,name:"jay",city:"mangalore"}]
    return(
        <div>
            <h2>Student Table:</h2>
            <table border="2" cellPadding="10" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.city}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default  TableList;