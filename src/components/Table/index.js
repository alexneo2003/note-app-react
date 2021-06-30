import React from 'react';
import { ReactComponent as TaskIcon } from '../../assets/icons/taskIcon.svg';
import { ReactComponent as RandomIcon } from '../../assets/icons/randomIcon.svg';
import { ReactComponent as IdeaIcon } from '../../assets/icons/ideaIcon.svg';
import { ReactComponent as QuoteIcon } from '../../assets/icons/quoteIcon.svg';
import { ReactComponent as EditIcon } from '../../assets/icons/editIcon.svg';
import { ReactComponent as DeleteIcon } from '../../assets/icons/deleteIcon.svg';
import { ReactComponent as ArchiveIcon } from '../../assets/icons/archiveIcon.svg';

export const getCategoryIcon = (category) => {
  switch (category) {
    case 'Task':
      return <TaskIcon />;
    case 'Idea':
      return <IdeaIcon />;
    case 'Quote':
      return <QuoteIcon />;
    case 'Random Thought':
      return <RandomIcon />;

    default:
      break;
  }
};

const Table = ({ data }) => {
  console.log('data', data);
  const editButtonElement = (id) => (
    <button data-id={id} id="edit-button">
      <EditIcon />
    </button>
  );
  const archiveButtonElement = (id) => (
    <button data-id={id} id="archive-button">
      <ArchiveIcon />
    </button>
  );
  const deleteButtonElement = (id) => (
    <button data-id={id} id="delete-button">
      <DeleteIcon />
    </button>
  );

  const Header = ({ columns }) => {
    return Object.keys(columns).map((key) => {
      return <th key={key}>{columns[key]}</th>;
    });
  };

  const Rows = ({ rows }) => {
    return Object.keys(rows).map((key) => {
      return <td key={key}>{rows[key]}</td>;
    });
  };

  return (
    <table id="notes-table">
      <thead className="table-header">
        <tr>
          <Header columns={data.columns} />
          {/* <th id="table-category-icon"></th>
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
                className="bi bi-file-zip"
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
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>
            </button>
          </th> */}
        </tr>
      </thead>
      <tbody id="notes-list">
        {data &&
          data.rows.map((note, index) => {
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

export default Table;
