
// function CourseList(){
//     const[course,setCourse]=useState([
//         {id:100,name:'javascript'},
//         {id:200,name:'react'},
//         {id:300,name:'python'},
//         {id:400,name:'java'},
//         {id:500,name:'angular'}

//     ])
//     const handleDeleteButton=(id)=>{
//         const newCourse=courses.filter((c)=>c.id!==id);
//         setCourses(newCourse);
//     }
//     return(
//         <div>
//             <h2>Course List:</h2>
//             {
//                 courses.map((c)=>(
//                 <div key={c.id}>{c.name}
//                 <button onClick={()=>handleDeleteButton(c.id)}>Delete</button>
//                 </div>
//                 ))
//             }
//     </div>
//     )
// }
// export default CourseList;

import React, { useState } from 'react';

function CourseList() {
    const [courses, setCourses] = useState([
        { id: 100, name: 'javascript' },
        { id: 200, name: 'react' },
        { id: 300, name: 'python' },
        { id: 400, name: 'java' },
        { id: 500, name: 'angular' }
    ]);

    const handleDeleteButton = (id) => {
        const newCourse = courses.filter((c) => c.id !== id);
        setCourses(newCourse);
    };

    return (
        <div>
            <h2>Course List:</h2>
            {
                courses.map((c) => (
                    <div key={c.id}>
                        {c.name}
                        <button onClick={() => handleDeleteButton(c.id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default CourseList;
