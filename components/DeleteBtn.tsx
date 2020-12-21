interface DelBtnProps {
  onPress: () => void;
  shouldDisable: boolean;
}

const DelBtn = ({ onPress, shouldDisable }: DelBtnProps) => (
  <div className="flex justify-end mt-5">
    <button
      onClick={onPress}
      disabled={shouldDisable}
      className={`select-none text-white rounded-md transition-colors px-4 py-2.5 bg-red-600 hover:bg-red-500 focus:ring-red-600 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-white ${
        shouldDisable ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      Delete All
    </button>
  </div>
);

export default DelBtn;
