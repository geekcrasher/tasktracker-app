import Copyright from './Copyright/Copyright'
import Contact from './Contact/Contact'
import Logo from './Logo/Logo';

const Footer = () => {
  return (
    <footer className="footer bg-[#262C39] w-full flex justify-between items-center py-3 px-4 h-auto text-xs mt-auto">
      <Logo />
      <Copyright />
      <Contact />
    </footer>
  );
};

export default Footer;
