const NoteCard = ({ note, onClick }) => {
  return (
    <article className='bg-yellow-300 px-10 py-5 rounded-xl text-black' onClick={() => onClick(note)}>
      <h2 className='font-bold text-xl'>{note.title}</h2>
      <p className='w-72 overflow-hidden whitespace-nowrap overflow-ellipsis'>{note.desc}</p>
    </article>
  );
};

export default NoteCard;
