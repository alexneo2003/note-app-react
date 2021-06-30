import { createSlice } from '@reduxjs/toolkit';
import { uuidv4 } from '../notes';
import { notes } from '../notes';

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
  },
});

export const { initNotes, addNote } = notesSlice.actions;

export const selectNotes = (state) => state.notes;

export default notesSlice.reducer;
