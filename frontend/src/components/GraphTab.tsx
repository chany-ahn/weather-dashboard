import "./styles/GraphTab.css";

function GraphTab({ tabName, activeTab, setActiveTab }) {
  const handleClick = () => {
    setActiveTab(tabName);
  };
  return (
    <div
      className={"col graph-tab " + (activeTab === tabName ? "active" : "")}
      onClick={handleClick}
    >
      {tabName.charAt(0).toUpperCase() + tabName.substr(1).toLowerCase()}
    </div>
  );
}

export default GraphTab;
