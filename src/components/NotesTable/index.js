import React from 'react';
import taskIcon from '../../assets/icons/taskIcon.svg';
import randomIcon from '../../assets/icons/randomIcon.svg';
import ideaIcon from '../../assets/icons/ideaIcon.svg';
import quoteIcon from '../../assets/icons/quoteIcon.svg';
import editIcon from '../../assets/icons/editIcon.svg';
import deleteIcon from '../../assets/icons/deleteIcon.svg';
import archiveIcon from '../../assets/icons/archiveIcon.svg';

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

let notes = [
  {
    id: uuidv4(),
    name: 'Shoping list',
    created: '20/04/2021',
    category: 'Task',
    content: 'Tomatoes, Bread',
    dates: '',
    archived: false,
  },
  {
    id: uuidv4(),
    name: 'The theory of evolution',
    created: '27/04/2021',
    category: 'Random Thought',
    content: 'The evolution...',
    dates: '',
    archived: false,
  },
  {
    id: uuidv4(),
    name: 'New Feature',
    created: '05/05/2021',
    category: 'Idea',
    content: 'Implement new...',
    dates: '5/3/2021, 5/5/2021',
    archived: false,
  },
  {
    id: uuidv4(),
    name: 'William Gaddis',
    created: '07/05/2021',
    category: 'Quote',
    content: "Power doesn't....",
    dates: '',
    archived: false,
  },
  {
    id: uuidv4(),
    name: 'Books',
    created: '15/05/2021',
    category: 'Task',
    content: 'The Lean Startup',
    dates: '',
    archived: false,
  },
  {
    id: uuidv4(),
    name: 'Books',
    created: '15/05/2021',
    category: 'Task',
    content:
      'I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021',
    dates: '',
    archived: true,
  },
];

export const getCategoryIcon = (category) => {
  switch (category) {
    case 'Task':
      return taskIcon;
      break;
    case 'Idea':
      return ideaIcon;
      break;
    case 'Quote':
      return quoteIcon;
      break;
    case 'Random Thought':
      return randomIcon;
      break;

    default:
      break;
  }
};

export const NotesTable = () => {
  const editButtonElement = (id) => (
    <button data-id={id} id="edit-button">
      <img src={editIcon} alt="" />
    </button>
  );
  const archiveButtonElement = (id) => (
    <button data-id={id} id="archive-button">
      <img src={archiveIcon} alt="" />
    </button>
  );
  const deleteButtonElement = (id) => (
    <button data-id={id} id="delete-button">
      <img src={deleteIcon} alt="" />
    </button>
  );

  return (
    <table id="notes-table">
      <thead class="table-header">
        <tr>
          <th id="table-category-icon"></th>
          <th id="table-name">Name</th>
          <th id="table-created">Created</th>
          <th id="table-category">Category</th>
          <th id="table-content">Content</th>
          <th id="table-dates">Dates</th>
          <th id="table-action-buttons">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-file-zip"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 7.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v.938l.4 1.599a1 1 0 0 1-.416 1.074l-.93.62a1 1 0 0 1-1.109 0l-.93-.62a1 1 0 0 1-.415-1.074l.4-1.599V7.5zm2 0h-1v.938a1 1 0 0 1-.03.243l-.4 1.598.93.62.93-.62-.4-1.598a1 1 0 0 1-.03-.243V7.5z" />
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm5.5-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9v1H8v1h1v1H8v1h1v1H7.5V5h-1V4h1V3h-1V2h1V1z" />
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="white"
                class="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
          </th>
        </tr>
      </thead>
      <tbody id="notes-list">
        {notes.map((note, index) => {
          return (
            <tr key={index}>
              <td id="table-category-icon">
                <span>
                  <img src={getCategoryIcon(note.category)} alt="" />
                </span>
              </td>
              <td id="table-name">{note.name}</td>
              <td id="table-created">{note.created}</td>
              <td id="table-category">{note.category}</td>
              <td id="table-content">{note.content}</td>
              <td id="table-dates">{note.dates}</td>
              <td id="table-action-buttons">
                {editButtonElement(note.id)} {archiveButtonElement(note.id)}
                {deleteButtonElement(note.id)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
