import React, { useEffect, useState } from 'react';
import './App.scss';
import Table from './components/Table';
import StatsTable from './components/Table/StatsTable';
import Modal from './components/Modal';
import NewNoteForm from './components/Modal/NewNoteForm';
import { notes } from './notes';
import { initNotes, selectNotes } from './redux/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import ArchivedTable from './components/Table/ArchivedTable';

function App() {
  const [isShowingAddNewNote, setIsShowingAddNewNote] = useState(false);
  const [isShowingArchivedNotes, setIsShowingArchivedNotes] = useState(false);
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
      {notesState.rows && (
        <StatsTable
          data={notesState}
          setIsShowing={setIsShowingArchivedNotes}
          setModalTitle={setModalTitle}
        />
      )}
      {isShowingAddNewNote && (
        <Modal setIsShowing={setIsShowingAddNewNote}>
          <NewNoteForm title={modalTitle} />
        </Modal>
      )}
      {isShowingArchivedNotes && (
        <Modal setIsShowing={setIsShowingArchivedNotes}>
          <ArchivedTable data={notesState} title="Archived Notes" />
        </Modal>
      )}
    </div>
  );
}

export default App;
