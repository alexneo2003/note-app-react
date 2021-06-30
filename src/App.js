import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.scss';
import Table from './components/Table';
import Modal from './components/Modal';
import NewNoteForm from './components/Modal/newNoteForm';
import { notes } from './notes';
import { initNotes, selectNotes } from './redux/notesSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const [isShowingAddNewNote, setIsShowingAddNewNote] = useState(false);
  const [modalTitle, setModalTitle] = useState('Add New Note');
  const dispatch = useDispatch();

  const notesState = useSelector(selectNotes);

  useEffect(() => {
    dispatch(initNotes(notes));
  }, []);

  return (
    <div className="container">
      {notesState.rows && (
        <Table
          data={notesState}
          setIsShowingAddNewNote={setIsShowingAddNewNote}
          setModalTitle={setModalTitle}
        />
      )}
      <div className="row-end">
        <button id="create-note" onClick={() => setIsShowingAddNewNote(true)}>
          Create Note
        </button>
      </div>
      {/* <Table /> */}
      {isShowingAddNewNote && (
        <Modal setIsShowingAddNewNote={setIsShowingAddNewNote}>
          <NewNoteForm title={modalTitle} />
        </Modal>
      )}
    </div>
  );
}

export default App;
