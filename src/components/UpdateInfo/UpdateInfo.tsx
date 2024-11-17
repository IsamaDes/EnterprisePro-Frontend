import React from 'react';
import { Link } from 'react-router-dom';

const UpdateInformation: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6">Update Information</h2>
        <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 pr-4">
            <h3 className="text-lg font-bold mb-4">Account Settings</h3>
            <ul>
              <li><Link to="/kyc" className="btn btn-outline-secondary w-full mb-2">KYC</Link></li>
              <li><Link to="/director-details" className="btn btn-outline-secondary w-full mb-2">Details of Director</Link></li>
              <li><Link to="/admin-details" className="btn btn-outline-secondary w-full mb-2">Details of Admin</Link></li>
            </ul>
          </div>
          {/* Main Content */}
          <div className="w-3/4">
            <h3 className="text-lg font-bold mb-4">What type of account do you want to create?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-200 p-4 rounded">
                <Link to="/dashboard" className="block text-center font-bold text-lg">Association</Link>
              </div>
              <div className="bg-gray-200 p-4 rounded">
                <Link to="/dashboard" className="block text-center font-bold text-lg">Business Venture</Link>
              </div>
              <div className="bg-gray-200 p-4 rounded">
                <Link to="/dashboard" className="block text-center font-bold text-lg">Co-operative</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateInformation;
