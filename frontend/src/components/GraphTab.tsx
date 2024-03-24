function GraphTab({ tabName, activeTab, setActiveTab }) {
  const handleClick = () => {
    setActiveTab(tabName);
  };

  return (
    <li className="nav-item" role="presentation" key={tabName}>
      <button
        className={"nav-link " + (activeTab === tabName ? "active" : "")}
        id={tabName + "-tab"}
        data-bs-toggle="tab"
        data-bs-target={"#" + tabName + "-tab-pane"}
        type="button"
        role="tab"
        aria-controls={tabName + "-tab-pane"}
        aria-selected="true"
        onClick={handleClick}
      >
        {tabName.charAt(0).toUpperCase() + tabName.substr(1).toLowerCase()}
      </button>
    </li>
  );
}

export default GraphTab;
