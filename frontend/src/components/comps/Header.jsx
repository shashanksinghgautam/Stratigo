import { useState, useEffect } from "react";
import logo from "../../assets/logo-shade.png";
import {
    Menu, SquareX
} from "lucide-react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

const ButtonSection = ({ isMenuOpen, toggleMenu }) => {

    return (
        <div className={`absolute mt-4 
            ${isMenuOpen ? 'flex flex-col mt-[0px] mr-[0px] gap-2' : 'opacity-0'} 
            transition-transform duration-300 ease-in-out 
            md:flex top-22 mr-4 right-0 w-[140px] sm:w-auto h-auto sm:space-x-4 
            ${isMenuOpen && 'bg-gradient-to-br from-[#1e1f33ce] via-[#3d5c4f] to-[#293252] p-4'}
            sm:transform-none
            sm:opacity-100
            ${isMenuOpen ? 'transform translate-x-0 opacity-100' : 'transform translate-x-full opacity-0'}
            `}
        >
            {isMenuOpen && <SquareX className="text-red-400 cursor-pointer" onClick={toggleMenu} />}
            <LoginPage />
            <RegisterPage location={"header"} />
        </div>
    );
}

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Effect to close the menu when screen size is larger than 'sm'
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 773) {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    return (
        <>
            <nav className="flex justify-between fixed top-0 left-0 w-full z-50 bg-gradient-to-r 
                        from-[#1e1f33ce] via-[#3d5c4f] to-[#293252] h-22">
                <div className="mx-6 py-2">
                    <img
                        src={logo}
                        alt="Trakz logo"
                        className="h-14"
                    />
                </div>

                {/* Hamburger Menu (visible only on small screens) */}
                <div className="flex items-center lg:hidden md:hidden mr-4">
                    {!isMenuOpen && <Menu className="text-blue-400 cursor-pointer" onClick={toggleMenu} />}
                </div>

                <ButtonSection isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </nav>

        </>
    );
}

export default Header;
