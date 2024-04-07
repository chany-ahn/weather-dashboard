import Graph from "./Graph.tsx";

function GraphTabContents({ tabName, units, activeTab, chartData }) {
  return tabName === activeTab ? (
    <Graph tabName={tabName} units={units} chartData={chartData} />
  ) : null;
}

export default GraphTabContents;
