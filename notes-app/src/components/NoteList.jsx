/* eslint-disable react/prop-types */
import Note from './Note';
import AddNote from './AddNote';

const NoteList = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
		<div className='notes-list'>
			{notes.map((note) => (
				// eslint-disable-next-line react/jsx-key
				<Note
					id={note.id}
					text={note.text}
					date={note.date}
					handleDeleteNote={handleDeleteNote}
				/>
			))}
			<AddNote handleAddNote={handleAddNote} />
		</div>
	);
}

export default NoteList
