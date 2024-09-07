import { useSelector } from "react-redux"
import { sidebarLinks } from "../utils/constant";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
    const isSidebarOpen = useSelector(state => state.sidebar.isSidebarOpen);
    const location = useLocation()
     let classes = 'flex flex-col gap-5 py-5 '
     if(location.pathname==='/watch' && !isSidebarOpen ){
       classes += 'hidden'
     }
     else if(location.pathname==='/watch' && isSidebarOpen){
        classes += 'bg-white h-full absolute'
     }
    return (
        <div className={`${classes} ${isSidebarOpen ? 'w-44 px-6' :'w-24 px-4'}`}>
            {
                sidebarLinks.map(l =>
                    <Link key={l.label} to={l.v!==undefined?'/?v='+l.v:'/'}>
                        <div className={`flex items-center hover:bg-[#0000001f] py-1 px-3 rounded-md ${isSidebarOpen?'gap-4':'flex-col gap-1'}`}>
                            <l.icons className="w-6 h-6" />
                            <span className={isSidebarOpen?'text-lg':''}>{l.label}</span>
                        </div>
                    </Link>
                )
            }
        </div>
    )
}

export default Sidebar
