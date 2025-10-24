"use client";

import AnalyticsCards from "./components/AnalyticsCards";
import AnalyticsCharts from "./components/AnalyticsCharts";

export default function AnalyticsPage() {
  const metrics = {
    visitors: 1023,
    leads: 45,
    orders: 27,
    projects: 12,
    tickets: 8,
    visitorsTrend: [
      { value: 120 },
      { value: 150 },
      { value: 180 },
      { value: 160 },
      { value: 200 },
      { value: 190 },
      { value: 210 },
    ],
    leadsTrend: [
      { value: 5 },
      { value: 6 },
      { value: 7 },
      { value: 5 },
      { value: 8 },
      { value: 9 },
      { value: 10 },
    ],
    ordersTrend: [
      { value: 3 },
      { value: 5 },
      { value: 4 },
      { value: 6 },
      { value: 5 },
      { value: 7 },
      { value: 8 },
    ],
    projectsTrend: [
      { value: 2 },
      { value: 3 },
      { value: 2 },
      { value: 3 },
      { value: 4 },
      { value: 3 },
      { value: 4 },
    ],
    ticketsTrend: [
      { value: 1 },
      { value: 2 },
      { value: 1 },
      { value: 1 },
      { value: 2 },
      { value: 2 },
      { value: 1 },
    ],
  };

  const visitorsData = [
    { day: "Mon", visitors: 120 },
    { day: "Tue", visitors: 200 },
    { day: "Wed", visitors: 150 },
    { day: "Thu", visitors: 220 },
    { day: "Fri", visitors: 180 },
    { day: "Sat", visitors: 90 },
    { day: "Sun", visitors: 130 },
  ];

  const ordersData = [
    { day: "Mon", orders: 5 },
    { day: "Tue", orders: 8 },
    { day: "Wed", orders: 6 },
    { day: "Thu", orders: 10 },
    { day: "Fri", orders: 7 },
    { day: "Sat", orders: 4 },
    { day: "Sun", orders: 3 },
  ];

  const leadsData = [
    { name: "Website", value: 20 },
    { name: "Social Media", value: 15 },
    { name: "Referral", value: 10 },
  ];

  const insights = [
    "Orders increased by 15% this week",
    "Most popular service: Web Development",
    "Pending tickets: 8",
  ];

  return (
    <div className="space-y-6 p-6">
      <AnalyticsCards data={metrics} />
      <AnalyticsCharts
        visitorsData={visitorsData}
        ordersData={ordersData}
        leadsData={leadsData}
      />

      {/* Insights Section */}
      <div className="bg-white dark:bg-[#0b2545] rounded-2xl shadow-lg p-5">
        <h3 className="text-lg font-semibold mb-3">Insights</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
          {insights.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
