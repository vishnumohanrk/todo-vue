import { IToDo } from '../utils';

interface ToDoItemProps extends IToDo {
  toggleOne: (id: number) => void;
  deleteOne: (id: number) => void;
  shouldShowDelBtn: boolean;
}

const ToDoItem = ({ toggleOne, isDone, taskName, id, shouldShowDelBtn, deleteOne }: ToDoItemProps) => {
  const handleChange = () => toggleOne(id);
  const handleDelete = () => deleteOne(id);

  return (
    <div className={`flex items-center justify-between ${shouldShowDelBtn && 'mt-2'}`}>
      <label className="flex items-center cursor-pointer w-full">
        <input type="checkbox" className="p-2 rounded cursor-pointer" checked={isDone} onChange={handleChange} />
        <span className={`select-none ml-2 text-xl font-medium w-full ${isDone ? 'line-through opacity-70' : ''}`}>
          {taskName}
        </span>
      </label>
      {shouldShowDelBtn ? (
        <button aria-label="Delete" title="Delete" onClick={handleDelete}>
          <svg
            className="w-6 h-6 text-gray-700"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      ) : null}
    </div>
  );
};

export default ToDoItem;
