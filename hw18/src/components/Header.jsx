import Button from "./common/Button";
import backSVG from "../images/chevron-left.svg";

const Header = ({ title, children: buttons, onBack }) => {
  return (
    <header className='fixed top-0 left-0 right-0 flex justify-between items-center p-5 bg-dark'>
      {onBack && <Button onClick={onBack} icon={backSVG}></Button>}

      <h1 className='text-4xl font-bold'>{title}</h1>

      <div className='flex gap-5'>{buttons}</div>
    </header>
  );
};

export default Header;
