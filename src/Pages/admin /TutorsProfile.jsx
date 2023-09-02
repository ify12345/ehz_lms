import React, { useState } from "react";

const TutorsProfile = () => {
 
  const [tutors, setTutors] = useState([
    {
      id: 1,
      fullname: "Emmanuel",
      phone: "09072516736",
      course: "Python",
      email: "nonin@example.com",
    },
    {
      id: 2,
      fullname: "Ifeanyi",
      phone: "09072516736",
      course: "React.js",
      email: "jah@example.com",
    },
    
  ]);

  const handleDelete = (id) => {
    // Implement your logic to delete the tutors with the given ID
    // For now, let's just remove it from the UI
    setTutors(tutors.filter((tutor)=> tutor.id !==id ))
  };

  return (
    <div className="space-y-8  mx-3">
      <div className="font-bold text-2xl flex justify-center my-6 text-white tracking-wider">
        Tutors Profile
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
        <tbody className="bg-white">
          {tutors.map((tutor) => (
            <tr key={tutor.id}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {tutor.id}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {tutor.fullname}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {tutor.phone}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {tutor.course}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                {tutor.email}
              </td>
              <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200">
                <button
                  onClick={() => handleDelete(tutor.id)}
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
  );
};

export default TutorsProfile;
