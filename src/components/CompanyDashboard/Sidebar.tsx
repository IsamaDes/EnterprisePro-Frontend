




import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle navigation
  const handleNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <div className="flex">
      <div className="w-[45px] bg-[#121638] col-auto justify-items-center">
        {/* Add icons here if needed */}
      </div>
      <div className="bg-white w-[230px] border min-h-screen justify-center items-center">
        <img
          src="SmallLogo.svg"
          alt=""
          className="justify-items-center mt-8 ml-10"
        />
        <div
          className="mt-14 flex px-10 cursor-pointer hover:bg-[#C61531] p-2 text-black rounded"
          onClick={() => handleNavigate("/company-Dashboard")}
        >
          <img src="Dashboard.svg" alt="" />
          <p className="ml-2">Dashboard</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer  hover:bg-[#C61531] p-2 text-black rounded"
          onClick={() => handleNavigate("/register-business")}
        >
          <img src="carbon_hospital-bed@3x.svg" alt="" />
          <p className="ml-2">Register Business</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer  hover:bg-[#C61531] p-2 text-black rounded"
          onClick={() => handleNavigate("/qc-module")}
        >
          <img src="people-group@3x.svg" alt="" />
          <p className="ml-2">QC Module</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer  hover:bg-[#C61531] p-2 text-black rounded"
          onClick={() => handleNavigate("/agents-dashboard")}
        >
          <img src="uil_invoice@3x.svg" alt="" />
          <p className="ml-2">Agents Dashboard</p>
        </div>
        <div
          className="mt-2 flex px-10 cursor-pointer hover:bg-[#C61531] p-2 text-black rounded"
          onClick={() => handleNavigate("/company-settings")}
        >
          <img src="Report.svg" alt="" />
          <p className="ml-2">Settings</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
