import UpdateInformation from '../components/UpdateInfo/UpdateInfo'
import Sidebar from '../components/CompanyDashboard/Sidebar'
import NavBar from '../components/CompanyDashboard/Navbar'

function UpdateInfoPage() {
  return (
   
    <div className="flex  ">
      <Sidebar/>

      <div className="flex flex-col w-full ">
        <NavBar/>
        <UpdateInformation/>
        </div>
    </div>
  )
}

export default UpdateInfoPage