// type PathCardProps = {
//     title: string;
//     description: string;
//   };
  
//   const PathCard: React.FC<PathCardProps> = ({ title, description }) => {
//     return (
//         <button className="Pdiv">
//       <div>
//         <h2>{title}</h2>
//         <p>{description}</p>
//         <button className="Pcard">View Resources</button>
//       </div>
//       </button>
//     );
//   };
  
//   export default PathCard;


import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

type PathCardProps = {
  title: string;
  description: string;
  progress: number;
  completed: number;
  inProgress: number;
  notStarted: number;
};

const PathCard: React.FC<PathCardProps> = ({
  title,
  description,
  progress,
  completed,
  inProgress,
  notStarted,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <button className="PathCard">
    <div className="bg-gray-300 p-4 rounded-2xl shadow-md w-80 relative">
      {/* Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-bold">{title}</h2>
        {/* Dropdown Menu */}
        <p className="text-sm">{description}</p>
        <div className="relative">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <MoreHorizontal />
          </button>
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-20 bg-white shadow-md border rounded-md">
              <button className="block w-full px-2 py-1 text-sm">Edit</button>
              <button className="block w-full px-2 py-1 text-sm text-red-500">Delete</button>
            </div>
            
          )}
        </div>
      </div>

      {/* <p className="text-sm">{description}</p> */}

      {/* Progress Bar */}
      <div className="mt-2">
        <div className="w-full bg-gray-400 h-2 rounded">
          <div className="bg-black h-2 rounded" style={{ width: `${progress}%` }}></div>
        </div>
        <p className="text-right text-xs mt-1">{progress}%</p>
      </div>

      {/* Resources */}
      <div className="mt-3 text-sm">
        <p className="font-bold">Resources</p>
        <p>{completed} Completed</p>
        <p>{inProgress} In Progress</p>
        <p>{notStarted} Not Started</p>
      </div>

      {/* View Resources Button */}
      <button className="mt-3 w-full bg-black text-white p-2 rounded">
        View Resources
      </button>
    </div>
    </button>
  );
};

export default PathCard;



    
    



      
