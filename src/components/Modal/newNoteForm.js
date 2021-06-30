import React, { useEffect, useState } from 'react';
import { addNote } from '../../redux/notesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useInputChange } from './useInputChange';

const NewNoteForm = ({ setIsShowingAddNewNote }) => {
  const dispatch = useDispatch();

  const [values, handleInputChange] = useInputChange({
    inputName: '',
    selectCategory: 'Idea',
    inputContent:
      'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
  });

  const onSubmitListener = (e) => {
    e.preventDefault();
    dispatch(addNote(values));
    setIsShowingAddNewNote(false);
  };

  const categories = ['Task', 'Random Thought', 'Idea', 'Quote'];

  return (
    <div>
      <h2>Add New Note</h2>
      <button
        className="modal-close modal-exit"
        onClick={() => setIsShowingAddNewNote(false)}
      >
        X
      </button>
      <form id="add-note-form" onSubmit={onSubmitListener}>
        <div className="row">
          <label htmlFor="inputName">Name</label>
          <input
            type="text"
            name="inputName"
            id="input-name"
            required
            value={values.inputName}
            onChange={handleInputChange}
          />
        </div>
        <div className="row">
          <label htmlFor="selectCategory">Category</label>
          <select
            name="selectCategory"
            id="select-category"
            value={values.selectCategory}
            onChange={handleInputChange}
          >
            {categories.map((category) => (
              <option value={category} key={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="row">
          <label htmlFor="content">Content</label>
        </div>
        <div className="row">
          <textarea
            name="inputContent"
            id="input-content"
            rows="5"
            required
            value={values.inputContent}
            onChange={handleInputChange}
          />
        </div>
        <div className="row-end">
          <button type="submit">Save Note</button>
        </div>
      </form>
    </div>
  );
};

export default NewNoteForm;
