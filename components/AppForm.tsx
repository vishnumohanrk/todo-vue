import * as React from 'react';

interface AppFormProps {
  submitCallback: (value: string) => void;
}

const AppForm = ({ submitCallback }: AppFormProps) => {
  const [value, setValue] = React.useState('');

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.currentTarget.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) {
      submitCallback(value);
    }
    setValue('');
  };

  return (
    <form className="flex flex-col sm:flex-row mb-7" onSubmit={handleSubmit}>
      <input
        aria-label="Enter New Task"
        type="text"
        placeholder="add details"
        className="w-full sm:w-4/5 rounded-md"
        value={value}
        onChange={handleInput}
      />
      <button className="select-none text-white rounded-md transition-colors sm:w-1/5 ml-0 mt-3 sm:mt-0 sm:ml-4 px-4 py-2 bg-blue-600 hover:bg-blue-500 focus:ring-blue-600 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-white">
        ADD
      </button>
    </form>
  );
};

export default AppForm;
