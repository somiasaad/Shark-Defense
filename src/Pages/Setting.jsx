import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { FaCog } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


// import Logo from '../imgs/logo2.jpg'
import Logo from '../imgs/logo3.jpg'
import { useSelector } from "react-redux";
const Portfolio = () => {
  const { user } = useSelector(state => state.user)
  return (
    <section className=" w-[100%] h-[fit-content] flex items-center justify-between gap-2" style={{
      position: "relative",
      backgroundColor: "#fff"
    }}>
      <aside className="relative h-screen sidebar" style={{

        backgroundColor: "#030649"
      }}>

        <div className="logo" style={{
          backgroundColor: "#030649",
          width: "200px",
          height: "150px"
        }}>
          <img src={Logo} style={{
            width: "100%",
            height: "100%"
          }} />
        </div>
        <ul style={{
          margin: "30px",
          padding: "20px"
        }}>
          <div className="dev " style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "36px" }}>
            <span style={{ color: "#fff" }} ><FaUser /></span>
            <span>  <li style={{ margin: "10px" }}> <NavLink to="/dashboard">Portfolio</NavLink> </li></span>
          </div>
          <div className="dev " style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "-49px" }}>
            <span style={{ color: "#fff", marginLeft: " -33px" }} ><FaCog /></span>
            <span>  <li style={{ margin: "10px", }}>  <NavLink to="/setting">Setting</NavLink> </li></span>
          </div>
          <div className="dev " style={{ display: "flex", justifyContent: "center", alignItems: "center", marginRight: "47px" }}>
            <span style={{ color: "#fff", marginLeft: " -33px" }} ><FaHome /></span>
            <span>  <li style={{ margin: "10px", }}>  <NavLink to="/">Home</NavLink></li></span>
          </div>

        </ul>
      </aside>

      <div className="w-[90%] m-auto">

        <div className="user-data w-[100%]  h-[100%] p-2 m-auto flex flex-col justify-center items-center" style={{ backgroundColor: "#fff" }}>
          <div className="header w-[200px] h-[200px] p-2 flex flex-col items-center justify-center">
            <img className="h-[80px] w-[80px] rounded-full object-cover  text-center shadow-md shadow-blue-400" src={user?.profile_picture} alt="" />
            <div className="flex flex-col items-center justify-center gap-1 mt-2">
              <h3 className="text-base w-full font-bold leading-7 text-center text-[30px] tracking-tight text-blue-500">{user?.name}</h3>
              <p className="text-sm  leading-6  rounded-full text-center text-gray-500 text-[17px]">{user?.email}</p>
            </div>
          </div>



          <div className="ring-2 ring-blue-400 w-[80%] h-[fit-content]  rounded-lg m-auto flex flex-col mb-5 p-3 gap-3">
            <div className="flex items-center gap-1 icon">
              <i className="p-1 text-blue-400 fa-solid fa-gear "></i>
              <p className="text-blue-400 font-bold text-[18px] sm:text-[20px] ">General information</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-3 setting sm:flex-row md:justify-start">
              <img className="h-[80px] w-[80px] rounded-full object-cover  shadow-md shadow-blue-400" src={user?.profile_picture} alt="" />
              <div className="flex flex-col items-center gap-1 upload">
                <label htmlFor="File"
                  title="Upload File"
                  className="ring-1 
      hover:bg-blue-500 hover:text-white transition-all duration-150
      cursor-pointer ring-blue-500 p-1 w-[120px] rounded-lg text-blue-600 font-semibold">Upload Image</label>
                <input type="file" id="File"

                  aria-label="Upload file " className="hidden" />
                <p className="text-gray-500 text-[14px]"> Max size 2mb. Formats: JPG, PNG.</p>
              </div>
            </div>
            <div className="inputs w-[100%] flex flex-wrap gap-5">
              {/* <input type="text" aria-label="Name" placeholder="UserName" className="w-[90%]  md:w-[45%] p-1 rounded-md ring-1 ring-blue-400" /> */}
              <input type="text" aria-label="Name" placeholder="Fullname"
                value={user?.name}
                className="w-[90%]  md:w-[45%] p-1 rounded-md ring-1 ring-blue-400" />
              <input type="email" aria-label="Name"
                value={user?.email}
                placeholder="EmailAdress" className="w-[90%] md:w-[45%]  p-1 rounded-md ring-1 ring-blue-400" />
              <div className="w-[100%] ">
                <button className="ring-1
        hover:bg-blue-500 hover:text-white transition-all duration-150
        ring-blue-500 rounded-xl p-2 w-[150px] text-blue-600 font-semibold">Save Changes</button>
              </div>
            </div>
          </div>





          <div className="ring-2
        ring-blue-400 w-[80%] h-[fit-content] rounded-lg m-auto flex flex-col p-3 gap-3
          mb-[50px]
        ">
            <div className="flex items-center gap-1 mb-5 icon">
              <i className="p-1 text-blue-400 fa-solid fa-gear "></i>
              <p className="text-blue-400 font-bold text-[20px] sm:">Social information</p>
            </div>
            <div className="inputs w-[100%] flex  flex-wrap gap-5  m-auto ">
              <span className="w-[100%] md:w-[45%] flex items-center gap-2">
                <FaXTwitter size={26} />
                <input
                  value={user?.twitter}
                  type="text" aria-label="Name" placeholder="Twitter Link" className="w-[100%] md:w-[90%] p-1 rounded-md ring-1 ring-blue-400" />
              </span>

              <span className="w-[100%] md:w-[45%] flex items-center gap-2">
                <FaLinkedinIn size={26} color="#0A66C2" />
                <input
                  value={user?.linkedin}
                  type="text" aria-label="Name" placeholder="Twitter Link" className="w-[100%] md:w-[90%] p-1 rounded-md ring-1 ring-blue-400" />
              </span>

              <span className="w-[100%] md:w-[45%] flex items-center gap-2">
                <FaInstagram size={26} />
                <input type="text"
                  value={user?.instagram}
                  aria-label="Name" placeholder="Instagram Link" className="w-[100%] md:w-[90%] p-1 rounded-md ring-1 ring-blue-400" />
              </span>


              <span className="w-[100%] md:w-[45%] flex items-center gap-2">
                <IoEarth size={26} color="#EA4C89" />
                <input type="text" aria-label="Name"
                  value={user?.website}
                  placeholder="Personal Website" className="w-[100%] md:w-[90%] p-1 rounded-md ring-1 ring-blue-400" />
              </span>

              <span className="w-[100%] md:w-[45%] flex items-center gap-2">
                <FaFacebookF size={26} color="#1877F2" />
                <input type="text"
                  value={user?.facebook}
                  aria-label="Name" placeholder="FaceBook Link" className="w-[100%] md:w-[90%] p-1 rounded-md ring-1 ring-blue-400" />
              </span>

              <div className="w-[100%] ">
                <button className="ring-1
        hover:bg-blue-500 hover:text-white transition-all duration-150
        ring-blue-500 rounded-xl p-2 w-[150px] text-blue-600 font-semibold">Save Changes</button>
              </div>
            </div>
          </div>

        </div>

      </div>


    </section>
  )
}

export default Portfolio

