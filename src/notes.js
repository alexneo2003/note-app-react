export const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-xxxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export let notes = {
  columns: {
    categoryIcon: '',
    name: 'Name',
    created: 'Created',
    category: 'Category',
    content: 'Content',
    dates: 'Dates',
    actionButtons: '',
  },
  rows: [
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
  ],
};
