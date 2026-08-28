// import {
//   FaBuilding,
//   FaUserCheck,
//   FaMoneyBillWave,
//   FaBriefcase
// } from "react-icons/fa";

// import "../../styles/Profile.css";

// const ProfileStatus = ({ profile }) => {


//   const stats = [
//     {
//       id: 1,
//       title: "Department",
//       value: profile?.department || "N/A",
//       icon: <FaBuilding />
//     },
//     {
//       id: 2,
//       title: "Designation",
//       value: profile?.designation || "N/A",
//       icon: <FaBriefcase />
//     },
//     {
//       id: 3,
//       title: "Status",
//       value: profile?.status || "N/A",
//       icon: <FaUserCheck />
//     },
//     {
//       id: 4,
//       title: "Salary",
//       value: profile?.salary 
//           ? `₹ ${profile.salary.toLocaleString()}`
//           : "N/A",
//       icon: <FaMoneyBillWave />
//     }
//   ];


//   return (
//     <div className="profile-stats">

//       {stats.map((stat)=>(

//         <div 
//           className="stat-card"
//           key={stat.id}
//         >

//           <div className="stat-icon">
//             {stat.icon}
//           </div>


//           <div className="stat-content">

//             <h3>
//               {stat.value}
//             </h3>

//             <p>
//               {stat.title}
//             </p>

//           </div>


//         </div>

//       ))}

//     </div>
//   );
// };


// export default ProfileStatus;
import {
    FaBuilding,
    FaUserTie,
    FaCalendarAlt,
    FaUserCheck
} from "react-icons/fa";

import "../../styles/Profile.css";

const ProfileStatus = ({ profile }) => {

  const stats = [
    {
        id: 1,
        title: "Department",
        value: profile?.department || "N/A",
        icon: <FaBuilding />
    },
    {
        id: 2,
        title: "Role",
        value: profile?.role || "N/A",
        icon: <FaUserTie />
    },
    {
        id: 3,
        title: "Joining Date",
        value: profile?.joiningDate
            ? new Date(profile.joiningDate).toLocaleDateString()
            : "N/A",
        icon: <FaCalendarAlt />
    },
    {
        id: 4,
        title: "Status",
        value: profile?.status || "N/A",
        icon: <FaUserCheck />
    }
];

    return (

        <div className="profile-stats">

            {stats.map((stat) => (

                <div
                    key={stat.id}
                    className="stat-card"
                >

                    <div className="stat-icon">
                        {stat.icon}
                    </div>

                    <div className="stat-content">

                        <h3>{stat.value}</h3>

                        <p>{stat.title}</p>

                    </div>

                </div>

            ))}

        </div>

    );

};

export default ProfileStatus;