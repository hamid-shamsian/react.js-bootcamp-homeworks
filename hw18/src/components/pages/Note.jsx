import Header from "../Header";
import Button from "../common/Button";
import trashSVG from "../../images/trash.svg";

const Note = ({ note: { title, desc }, onBack }) => {
  return (
    <>
      <Header onBack={onBack}>
        <Button icon={trashSVG} />
      </Header>

      <main className='text-color'>
        <h2 className='text-4xl mb-10'>{title}</h2>
        <p className='text-xl'>{desc}</p>
      </main>
    </>
  );
};

export default Note;
