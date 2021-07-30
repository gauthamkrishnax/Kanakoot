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
            "#adb93e",
            "#bf73cb",
            "#43c29e",
            "#677fd8",
            "#659830",
            "#a63a6e",
            "#42c87f",
            "#8f8035",
            "#3b6d22",
            "#d1972c",
            "#d0b059",
            "#d16aab",
            "#36dee6",
            "#be4a5b",
            "#5a388b",
            "#99432a",
            "#c57537",
            "#d45645",
            "#90c767",
            "#67b271",
          ],
          hoverOffset: 4,
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
