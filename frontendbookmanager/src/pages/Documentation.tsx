import IsError from "@/components/IsError";
import IsLoading from "@/components/IsLoading";
import { Button } from "@/components/ui/button";
import { getReport } from "@/services/reportService";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

interface Report {
  identifier: string;
  grossSales: number;
  netSales: number;
  ordersCount: number;
  productsCount: number;
  categories: number;
}

interface Series {
  name: string;
  data: number[];
}

function Documentation() {
  const [period, setPeriod] = useState<string>("last_7_days");
  const [series, setSeries] = useState<Series[]>([]);
  const [options, setOptions] = useState({
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      categories: [],
    },
  });

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["report", period],
    queryFn: () => getReport(period),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    retry: 2,
    refetchOnReconnect: true,
  });

  useEffect(() => {
    // Options
    setOptions({
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: data?.data.map((r: Report) => r.identifier),
      },
    });

    // data
    setSeries([
      {
        name: "Doanh thu",
        data: data?.data.map((r: Report) => r.grossSales),
      },
      {
        name: "Lợi Nhuận",
        data: data?.data.map((r: Report) => r.netSales),
      },
      {
        name: "Sản phẩm bán",
        data: data?.data.map((r: Report) => r.productsCount),
      },
    ]);
  }, [data]);

  if (isLoading) return <IsLoading />;
  if (isError) return <IsError />;
  return (
    <div className="container mt-10">
      <div className="flex gap-8">
        <Button onClick={() => setPeriod("last_7_days")}>7 ngày trước</Button>
        <Button onClick={() => setPeriod("last_28_days")}>28 ngày trước</Button>
        <Button onClick={() => setPeriod("last_12_months")}>1 năm</Button>
      </div>
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
}

export default Documentation;
