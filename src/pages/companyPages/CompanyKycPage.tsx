import Kyc from '../../components/KYC/Kyc.tsx'

import Sidebar from '../../components/CompanyDashboard/Sidebar'
import NavBar from '../../components/CompanyDashboard/Navbar'

function CompanyKycPage() {
  return (


    <div className="flex  ">
      <Sidebar/>

      <div className="flex flex-col w-full ">
        <NavBar/>
        <Kyc/>
        </div>
    </div>
  )
}

export default CompanyKycPage