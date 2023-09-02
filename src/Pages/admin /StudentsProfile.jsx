import React, { useState } from 'react';


const StudentsProfile = () => {

    const [students, setStudents] = useState([
        {
          id: 1,
          fullname: "Nonso",
          phone: "09072516736",
          course: "Full stack web development",
          email: "nonin@example.com",
        },
        {
          id: 2,
          fullname: "Jahmiebi",
          phone: "09072516736",
          course: "Cinematography",
          email: "jah@example.com",
        },
        // Add more student objects as needed
      ]);
    
      const handleDelete = (id) => {
        // Implement your logic to delete the student with the given ID
        // For now, let's just remove it from the UI
        setStudents(students.filter((student) => student.id !== id));
      };




  return (
    <div className='overflow-x-auto'>
       <div className="space-y-8  mx-3">
      <div className="font-bold text-2xl flex justify-center my-6 text-white tracking-wider ">
        View All Students
      </div>
      <table className="min-w-full">
        <thead>
          <tr>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              ID
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Full Name
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Phone
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Course
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white overflow-x-auto">
          {students.map((student) => (
            <tr key={student.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.id}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.fullname}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.phone}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.course}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {student.email}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200">
                <button
                  onClick={() => handleDelete(student.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default StudentsProfile
