import React from 'react';
import { ReactComponent as TaskIcon } from '../../assets/icons/taskIcon.svg';
import { ReactComponent as RandomIcon } from '../../assets/icons/randomIcon.svg';
import { ReactComponent as IdeaIcon } from '../../assets/icons/ideaIcon.svg';
import { ReactComponent as QuoteIcon } from '../../assets/icons/quoteIcon.svg';

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

const StatsTable = ({ data, setIsShowing }) => {
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

  const categories = Array.from(
    new Set(data.rows.map((note) => note.category))
  );

  const countByCategory = (notes, category, isArchived) => {
    return notes
      .filter((note) => note.category === category)
      .filter((note) => note.archived === isArchived).length;
  };

  return (
    <table id="notes-stats-table">
      <thead className="table-header">
        <tr>
          <th id="table-stats-category-icon"></th>
          <th id="table-stats-category">Note Category</th>
          <th id="table-stats-active">Active</th>
          <th id="table-stats-archived">Archived</th>
        </tr>
      </thead>
      <tbody id="notes-stats-list">
        {data &&
          categories.sort().map((category) => {
            const countNotArchived = countByCategory(
              data.rows,
              category,
              false
            );
            const countArchived = countByCategory(data.rows, category, true);
            const countArchivedEl =
              countArchived > 0 ? (
                <td id="table-stats-archived">
                  <button onClick={() => setIsShowing(true)}>
                    {countArchived}
                  </button>
                </td>
              ) : (
                <td id="table-stats-archived">{countArchived}</td>
              );
            return (
              <tr key={category}>
                <td id="table-stats-category-icon">
                  <span>{getCategoryIcon(category)}</span>
                </td>
                <td id="table-stats-category">{category}</td>
                <td id="table-stats-active">{countNotArchived}</td>
                {countArchivedEl}
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default StatsTable;
