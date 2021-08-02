import { ChartData } from "chart.js";
import * as React from "react";
import { Doughnut } from "react-chartjs-2";
import { ReportInterface } from "../utils/types";
const PieGraph = ({
  report,
}: {
  report: {
    stateData: ReportInterface;
    setStateFunction: React.Dispatch<React.SetStateAction<ReportInterface>>;
  };
}) => {
  if (report.stateData) {
    const data: ChartData = {
      labels: report.stateData.individualExpenseReport.map((e) => e.name),
      datasets: [
        {
          label: "Expense Report",
          data: report.stateData.individualExpenseReport.map((e) => e.amount),
          backgroundColor: [
            "#a9316a",
            "#5fc97a",
            "#52328d",
            "#9bbb46",
            "#6573db",
            "#caa331",
            "#ad74d6",
            "#618931",
            "#bf4da5",
            "#4dc29a",
            "#dc4b8b",
            "#36dee6",
            "#d84f48",
            "#6794df",
            "#c77f30",
            "#4557a1",
            "#b9ac55",
            "#6e2e73",
            "#428344",
            "#c83c63",
            "#ae7a3d",
            "#cf87d0",
            "#b65026",
            "#dd77a3",
            "#83281f",
            "#db6f81",
            "#812854",
            "#d2745b",
            "#8d2a41",
            "#d35760",
          ],
          borderWidth: 0,
        },
      ],
    };
    return (
      <Doughnut
        aria-label="DataGraph"
        data={data}
        fallbackContent="Cannot Render Graph"
      />
    );
  }
};

export default PieGraph;
