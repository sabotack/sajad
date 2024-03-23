import { NavLink } from 'react-router-dom';
import { AiFillHome, AiFillInfoCircle } from 'react-icons/ai';
import { SiPolymerproject } from 'react-icons/si';
import Logo from '../assets/logo_circle.svg';

const Navbar = () => {
    return (
        <header className="fixed w-full h-header px-32 bg-primary flex items-center justify-between z-20">
            <div className="flex items-center">
                <div
                    className="w-10 h-10 mr-4 bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url("${Logo}")` }}
                />
                <div className="text-2xl font-bold text-white">
                    ALI SAJAD KHORAMI
                </div>
            </div>
            <nav className="flex">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `text-primary-light px-2 py-3 mr-4 flex items-center ${isActive ? 'text-white border-b-accent' : ''}`
                    }
                    end
                >
                    <AiFillHome />
                    <span className="ml-1">HOME</span>
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `text-primary-light px-2 py-3 ml-4 mr-4 flex items-center ${isActive ? 'text-white' : ''}`
                    }
                    end
                >
                    <SiPolymerproject />
                    <span className="ml-1">PROJECTS</span>
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `text-primary-light px-2 py-3 ml-4 flex items-center ${isActive ? 'text-white' : ''}`
                    }
                    end
                >
                    <AiFillInfoCircle />
                    <span className="ml-1">ABOUT</span>
                </NavLink>
            </nav>
        </header>
    );
};

export default Navbar;
