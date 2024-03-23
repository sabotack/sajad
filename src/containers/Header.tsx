import Logo from '@/assets/logo_circle.svg';
import { Navbar } from '@/components';

const Header = () => {
    return (
        <header className="fixed w-full h-header px-32 py-3 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between border-border/40 border-b z-20">
            <div className="flex items-center">
                <div
                    className="w-10 h-10 mr-4 bg-no-repeat bg-cover"
                    style={{ backgroundImage: `url("${Logo}")` }}
                />
                <div className="text-2xl font-bold text-foreground">SAJAD</div>
            </div>
            <Navbar />
        </header>
    );
};

export default Header;
