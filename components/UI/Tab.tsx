const Tab = (props) => {
    return (
        <div className="border-b border-gray-300">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                {props.tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => props.onTabClick(index)}
                        className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                            props.activeTab === index
                                ? 'border-blue-500 text-blue-600'
                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </nav>
        </div>
    );

};

export default Tab;