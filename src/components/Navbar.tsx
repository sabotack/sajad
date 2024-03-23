import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { navigation } from '@/constants';

const Navbar = () => {
    const pathName = useLocation();

    return (
        <nav className="flex items-center gap-4 text-sm lg:gap-6">
            {navigation.map((item) => (
                <NavLink
                    key={item.id}
                    to={item.url}
                    className={`transition-colors hover:text-foreground/80 ${item.url === pathName.hash ? 'text-foreground' : 'text-foreground/60'} `}
                >
                    {item.title}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navbar;
