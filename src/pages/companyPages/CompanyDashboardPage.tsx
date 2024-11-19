import Sidebar from '../../components/CompanyDashboard/Sidebar'
import CompanyDashboard from '../../components/CompanyDashboard/CompanyDashboard'
import NavBar from '../../components/CompanyDashboard/Navbar'

function CompanyDashboardPage() {
  return (




    <div className="flex  ">
      <Sidebar/>

      <div className="flex flex-col w-full ">
        <NavBar/>
        <CompanyDashboard/>
        </div>
    </div>
  )
}

export default CompanyDashboardPage