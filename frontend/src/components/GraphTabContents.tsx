import Graph from "./Graph.tsx";

function GraphTabContents({ tabName, activeTab, chartData }) {
  return tabName === activeTab ? (
    <Graph tabName={tabName} chartData={chartData} />
  ) : null;
}

export default GraphTabContents;
