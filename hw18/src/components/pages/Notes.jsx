import Header from "./../Header";
import Button from "../common/Button";
import searchSVG from "../../images/search.svg";
import infoSVG from "../../images/info.svg";
import noItemsSVG from "../../images/no-items.png";

const Notes = ({ notes }) => {
  return (
    <>
      <Header title='Notes'>
        <Button icon={searchSVG} />
        <Button icon={infoSVG} />
      </Header>

      {notes.length ? (
        notes.map(({ id }) => <div key={id}></div>)
      ) : (
        <div className='flex flex-col justify-center items-center gap-5 h-full'>
          <img src={noItemsSVG} alt='' />
          <p className='text-xl text-color'>Create your first Note!</p>
        </div>
      )}
    </>
  );
};

export default Notes;
