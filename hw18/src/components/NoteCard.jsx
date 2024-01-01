const NoteCard = ({ note, onClick }) => {
  return (
    <article className='px-10 py-5 rounded-xl text-black' style={{ backgroundColor: note.color ?? "#bbb" }} onClick={() => onClick(note)}>
      <h2 className='font-bold text-xl'>{note.title}</h2>
      <p className='w-72 overflow-hidden whitespace-nowrap overflow-ellipsis'>{note.desc}</p>
    </article>
  );
};

export default NoteCard;
