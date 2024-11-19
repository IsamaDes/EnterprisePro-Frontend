import CompanySettings from '../../components/CompanyDashboard/CompanySettings'

import Sidebar from '../../components/CompanyDashboard/Sidebar'
import NavBar from '../../components/CompanyDashboard/Navbar'

function SettingsPage() {
  return (


    <div className="flex  ">
      <Sidebar/>

      <div className="flex flex-col w-full ">
        <NavBar/>
        <CompanySettings/>
        </div>
    </div>
  )
}

export default SettingsPage