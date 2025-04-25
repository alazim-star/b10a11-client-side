import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/1.png";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useTranslation } from "react-i18next";
const Navbar1 = () => {
  const { user, signOutUser, loading } = useContext(AuthContext);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();
  // Handle sign-out
  const handleSignOut = () => {
    signOutUser()
      .then(() => console.log("Sign out successful"))
      .catch((error) => console.error("Error:", error.message));
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const links = (
    <>
    <NavLink to="/" className="hover:text-[#af9556] transition mx-4">
      {t("home")}
    </NavLink>
    <NavLink to="/allRooms" className="hover:text-[#af9556] transition mx-4">
      {t("all_rooms")}
    </NavLink>
   
     {user && (
      <>
        <NavLink to="/myBooking" className="hover:text-[#af9556] transition mx-4">
          {t("my_booking")}
        </NavLink>
      
      </>
    )}
    <NavLink to="/about" className="hover:text-[#af9556] transition mx-4">
      {t("about")}
    </NavLink>
    <NavLink to="/contactUs" className="hover:text-[#af9556] transition mx-4">
      {t("contact_us")}
    </NavLink>
    
  
   
  </>
  
  );

  return (
    <nav
      className={`${
        scrolled
          ? "backdrop-blur-sm bg-white/60 text-black"
          : "bg-[#151515] text-white"
      } w-full sticky top-0 z-50 transition-all duration-300`}
    >
      <div className="flex flex-wrap items-center justify-between px-6 container mx-auto">
        {/* Hamburger Menu for Mobile */}
        <button
          className="sm:hidden block text-white focus:outline-none mr-4"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>

        {/* Logo and Title */}
        <div className=" flex items-center   lg:mr-24  ">
          <h2 className="text-3xl font-bold">THE</h2>
          <img className="lg:w-24 h-24 mx-2" src={logo} alt="Logo" />
          <h2 className="text-3xl font-bold">PALACE</h2>
        </div>

        {/* Navigation Links */}
        <div className="hidden sm:flex items-center">{links}</div>

        {/* Login/Logout Button and User Information */}
        <div className=" items-center ">
          {loading ? (
            <p className="text-white">Loading...</p>
          ) : user ? (
            <div className="flex items-center space-x-2">
              {user.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full border border-white"
                />
              )}
              <p className="text-sm lg:text-md text-white">
               <span className="font-bold">{user.email}</span>
              </p>
              <button
                onClick={handleSignOut}
                 className="px-4 py-2 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white shadow-xl transition duration-300"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <Link to="/login" className=" hover:text-black hover:bg-white bg-primary rounded-full text-white px-8 py-3 ">
              Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[#151515] text-white px-6 py-4">
          <div className="flex flex-col space-y-4">{links}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar1;