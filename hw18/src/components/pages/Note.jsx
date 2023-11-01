import { useState } from "react";
import Header from "../Header";
import Button from "../common/Button";
import DeleteModal from "../DeleteModal";
import trashSVG from "../../images/trash.svg";

const Note = ({ note, onBack, onDelete }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCancel = () => setShowDeleteModal(false);

  return (
    <>
      <Header onBack={onBack}>
        <Button icon={trashSVG} onClick={() => setShowDeleteModal(true)} />
      </Header>

      <main className='text-color'>
        <h2 className='text-4xl mb-10'>{note.title}</h2>
        <p className='text-xl'>{note.desc}</p>
      </main>

      {showDeleteModal && <DeleteModal onCancel={handleCancel} onDelete={() => onDelete(note)} />}
    </>
  );
};

export default Note;
