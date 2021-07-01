import React from 'react';
import { setEditNote, unarchiveNote } from '../../redux/notesSlice';
import { useDispatch } from 'react-redux';
import { getCategoryIcon } from '.';

import { ReactComponent as UnarchiveIcon } from '../../assets/icons/unarchiveIcon.svg';

const ArchivedTable = ({ data, setIsShowing, title }) => {
  const dispatch = useDispatch();

  const onUnarchiveClick = (id) => {
    dispatch(unarchiveNote(id));
    setIsShowing(true);
  };

  const unarchiveButtonElement = (id) => (
    <button
      data-id={id}
      id="unarchive-button"
      onClick={() => onUnarchiveClick(id)}
    >
      <UnarchiveIcon />
    </button>
  );

  const onCloseClick = () => {
    dispatch(setEditNote());
    setIsShowing(false);
  };

  return (
    <div>
      <h2>{title}</h2>
      <button className="modal-close modal-exit" onClick={() => onCloseClick()}>
        X
      </button>
      <table id="notes-table">
        <thead className="table-header">
          <tr>
            {/* <Header columns={data.columns} /> */}
            <th id="table-category-icon"></th>
            <th id="table-name">Name</th>
            <th id="table-created">Created</th>
            <th id="table-category">Category</th>
            <th id="table-content">Content</th>
            <th id="table-dates">Dates</th>
            <th id="table-action-buttons"></th>
          </tr>
        </thead>
        <tbody id="notes-list">
          {data &&
            data.rows
              .filter((note) => note.archived)
              .map((note, index) => {
                return (
                  <tr key={index}>
                    <td id="table-category-icon">
                      <span>{getCategoryIcon(note.category)}</span>
                    </td>
                    <td id="table-name">{note.name}</td>
                    <td id="table-created">{note.created}</td>
                    <td id="table-category">{note.category}</td>
                    <td id="table-content">{note.content}</td>
                    <td id="table-dates">{note.dates}</td>
                    <td id="table-action-buttons">
                      {unarchiveButtonElement(note.id)}
                    </td>
                  </tr>
                );
              })}
        </tbody>
      </table>
    </div>
  );
};

export default ArchivedTable;
