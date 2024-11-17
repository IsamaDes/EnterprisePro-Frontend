import React from 'react';
import { Link } from 'react-router-dom';

const CompanyDashboard: React.FC = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/4 bg-blue-400 p-8 shadow-md">
        <h3 className="text-lg font-bold mb-4">Account Settings</h3>
        <ul>
          <li><Link to="/kyc" className="btn btn-outline-secondary w-full mb-2">KYC</Link></li>
          <li><Link to="/director-details" className="btn btn-outline-secondary w-full mb-2">Details of Director</Link></li>
          <li><Link to="/admin-details" className="btn btn-outline-secondary w-full mb-2">Details of Admin</Link></li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="w-3/4 p-8">
        <h2 className="text-2xl font-bold mb-6">Company Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-200 p-4 rounded">
            <h3 className="text-lg font-bold">Registered Companies</h3>
            <p>List of companies will be displayed here.</p>
          </div>
          {/* Other sections can be added as needed */}
        </div>
      </div>
    </div>
  );
};

export default CompanyDashboard;
