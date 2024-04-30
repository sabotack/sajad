import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { navigation } from '@/constants';
import { Button } from './ui/Button';
import { LuSun, LuMoon } from 'react-icons/lu';
import { useTheme } from '@/hooks/useTheme';

const Navbar = () => {
    const pathName = useLocation();
    const theme = useTheme();

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
            <Button
                variant="ghost"
                size="icon"
                onClick={() => {
                    theme.theme === 'dark'
                        ? theme.setTheme('light')
                        : theme.setTheme('dark');
                }}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
            >
                {theme.theme === 'dark' ? (
                    <LuSun size={18} />
                ) : (
                    <LuMoon size={18} />
                )}
            </Button>
        </nav>
    );
};

export default Navbar;
