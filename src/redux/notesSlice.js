import { createSlice } from '@reduxjs/toolkit';
import { uuidv4 } from '../notes';

const initialState = {};
const getDatesTextFromContent = (contentText) => {
  const matcher = /\d\/\d\/\d*/gm;
  let found = contentText.match(matcher);
  let dates = '';
  if (found && found.length) {
    dates = found.join(', ');
  }
  return dates;
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    initNotes: (state, action) => {
      Object.assign(state, action.payload);
    },
    addNote: (state, action) => {
      let d = new Date();
      let currDate = d.getDate();
      let currMonth = d.getMonth() + 1;
      let currYear = d.getFullYear();
      const formatedNow = `${currDate}/${currMonth}/${currYear}`;

      const { inputName, selectCategory, inputContent } = action.payload;

      state.rows.push({
        id: uuidv4(),
        name: inputName,
        category: selectCategory,
        content: inputContent,
        dates: getDatesTextFromContent(inputContent),
        created: formatedNow,
        archived: false,
      });
    },
    deleteNote: (state, action) => {
      Object.assign(state, {
        ...state,
        rows: state.rows.filter((note) => note.id !== action.payload),
      });
    },
    archiveNote: (state, action) => {
      state.rows.forEach((note) => {
        if (note.id === action.payload) {
          note.archived = true;
        }
      });
    },
    unarchiveNote: (state, action) => {
      state.rows.forEach((note) => {
        if (note.id === action.payload) {
          note.archived = false;
        }
      });
    },
    editNote: (state, action) => {
      const {
        id,
        values: { inputName, selectCategory, inputContent },
      } = action.payload;
      state.rows.forEach((note) => {
        if (note.id === id) {
          note.name = inputName;
          note.category = selectCategory;
          note.content = inputContent;
          note.dates = getDatesTextFromContent(inputContent);
        }
      });
    },
    setEditNote: (state, action) => {
      Object.assign(state, {
        editNote: action.payload
          ? state.rows.filter((note) => note.id === action.payload)[0]
          : undefined,
      });
    },
  },
});

export const {
  initNotes,
  addNote,
  deleteNote,
  archiveNote,
  unarchiveNote,
  setEditNote,
  editNote,
} = notesSlice.actions;

export const selectNotes = (state) => state.notes;
export const selectEditNotes = (state) => state.notes.editNote;

export default notesSlice.reducer;
