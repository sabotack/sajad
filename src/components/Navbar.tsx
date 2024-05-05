import { useLocation } from 'react-router-dom';
import { navigation } from '@/constants';
import { Button } from './ui/Button';
import { LuSun, LuMoon } from 'react-icons/lu';
import { useTheme } from '@/hooks/useTheme';
import { enablePageScroll } from 'scroll-lock';

const Navbar = ({
    openNavigation,
    setOpenNavigation,
}: {
    openNavigation: boolean;
    setOpenNavigation: (arg0: boolean) => void;
}) => {
    const pathName = useLocation();
    const theme = useTheme();

    const handleClick = () => {
        if (!openNavigation) return;

        (enablePageScroll as () => void)();
        setOpenNavigation(false);
    };

    return (
        <nav
            className={`${openNavigation ? 'flex flex-col w-full h-[calc(100vh-4rem)]' : 'hidden'} fixed top-[4rem] left-0 right-0 bottom-0 bg-background md:static md:bg-transparent md:flex items-center`}
        >
            <div className="relative z-2 flex flex-col items-center justify-center m-auto md:flex-row gap-4 text-sm md:gap-6">
                {navigation.map((item) => (
                    <a
                        key={item.id}
                        href={item.url}
                        onClick={handleClick}
                        className={`block relative transition-colors hover:text-foreground/80 ${item.url === pathName.hash ? 'text-foreground' : 'text-foreground/60'} `}
                    >
                        {item.title}
                    </a>
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
            </div>
        </nav>
    );
};

export default Navbar;
