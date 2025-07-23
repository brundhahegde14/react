import EmployeeCard from "./EmployeeCard"

function EmployeeList({name})
{
    const employees=[
         {id:111,name:"ajay",city:"mangalore"},
     {id:112,name:"ajy",city:"mangalore"},
      {id:113,name:"aay",city:"mangalore"},
       {id:114,name:"jay",city:"mangalore"}]

    return(
        <div>
       <h2>Employee List</h2>
{
    employees.map((employee)=>
    <EmployeeCard key={employee.id}name={employee.name} city={employee.city}/>
)
}
  </div>
) 
}
export default EmployeeList;