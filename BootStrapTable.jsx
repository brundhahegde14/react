import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
function BootStrapTable(){
    const students=[
         {id:111,name:"ajay",city:"mangalore"},
     {id:112,name:"ajy",city:"mangalore"},
      {id:113,name:"aay",city:"mangalore"},
       {id:114,name:"jay",city:"mangalore"}]
       const handleDeleteButton=(id)=>{
        alert(`delete student with id:${id}`)
       }
return(
    <div className='container mt-4'>
    <h2 className='head3'>Student Table:</h2>
<Table striped bordered hover responsive>
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
                <td>
                                <Button variant="danger" size="em" onClick={()=>handleDeleteButton(s.id)}>Delete</Button>
                           </td> </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default BootStrapTable;