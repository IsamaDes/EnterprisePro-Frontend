import { Link } from 'react-router-dom';


function CompanySettings() {
  return (
    <div className=" bg-blue-100 min-h-screen p-8 shadow-md">
        <h3 className="text-lg  text-center  text-[30px] bg-blue-500 font-bold mb-4">Account Settings</h3>
        <ul>
          <li><Link to="/kyc" className="btn btn-outline-secondary w-full mb-2">KYC</Link></li>
          <li><Link to="/director-details" className="btn btn-outline-secondary w-full mb-2">Details of Director</Link></li>
          <li><Link to="/admin-details" className="btn btn-outline-secondary w-full mb-2">Details of Admin</Link></li>
        </ul>
      </div>
      
  )
}

export default CompanySettings