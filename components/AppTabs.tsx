import { TabNames, TTab } from '../utils';

interface AppTabsProps {
  activeTab: TTab;
  setActiveTab: (name: TTab) => void;
}

const AppTabs = ({ activeTab, setActiveTab }: AppTabsProps) => (
  <div className="flex mb-5">
    {TabNames.map(i => (
      <button
        key={i}
        onClick={() => setActiveTab(i)}
        className={`select-none w-full px-4 py-3 border-b-4 ${activeTab === i ? 'border-blue-500' : ''}`}
      >
        {i}
      </button>
    ))}
  </div>
);

export default AppTabs;
