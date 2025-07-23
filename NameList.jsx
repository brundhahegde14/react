function NameList(){
    
const students=[
    {id:111,name:"ajay"},
     {id:112,name:"ananya"},
      {id:113,name:"ankitha"},
       {id:114,name:"jaykar"},
      {id:115,name:"jay"},
      {id:116,name:"karthik"},
      {id:117,name:"ritika"}]
         return(
        <div>
<h2>Student  Name List:</h2>
{
    students.map((student)=>
        <p key={student.id}>Name:<b>{student.name}</b> </p>
    )
}
        </div>
    )
}
export default NameList
