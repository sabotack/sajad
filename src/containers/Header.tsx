import Logo from '@/assets/logo_circle.svg';
import { Navbar } from '@/components';
import { useState } from 'react';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

const Header = () => {
    const [openNavigation, setOpenNavigation] = useState(false);

    const toggleNavigation = () => {
        if (openNavigation) {
            (enablePageScroll as () => void)();
            setOpenNavigation(false);
        } else {
            (disablePageScroll as () => void)();
            setOpenNavigation(true);
        }
    };

    return (
        <header className="fixed w-full h-16 px-4 lg:px-32 py-3 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between border-border/40 border-b z-20">
            <div className="flex items-center">
                <div
                    className="w-10 h-10 mr-4 bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url("${Logo}")` }}
                />
                <div className="text-2xl font-bold text-foreground">SAJAD</div>
            </div>
            <Navbar
                openNavigation={openNavigation}
                setOpenNavigation={setOpenNavigation}
            />
            <button
                type="button"
                className={`${openNavigation ? 'opened' : ''} bg-transparent border-none cursor-pointer flex md:hidden p-0 w-10 h-10`}
                onClick={toggleNavigation}
                aria-label="Main Menu"
                aria-expanded={openNavigation ? 'true' : 'false'}
            >
                <svg viewBox="0 0 100 100">
                    <path
                        className="line line1"
                        d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                    />
                    <path className="line line2" d="M 20,50 H 80" />
                    <path
                        className="line line3"
                        d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                    />
                </svg>
            </button>
        </header>
    );
};

export default Header;
