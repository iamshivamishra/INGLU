"use client"
import CTASection from "./_components/CTASection";
import SearchSection from "./_components/SearchSection";
// import StatsSection from "./_components/StatsSection";
import ActiveListingsSection from "./_components/ActiveListingsSection";
import { useState } from "react";
// import ClosedListingsSection from "./_components/ClosedListingsSection";

export default function Jobs() {
  const [search, setSearch] = useState("");
const [departmentFilter, setDepartmentFilter] = useState("All");
const [typeFilter, setTypeFilter] = useState("All");
const [workModeFilter, setWorkModeFilter] = useState("All");
  return (
    <div>
      <CTASection />
      {/* <StatsSection /> */}
<SearchSection
  search={search}
  setSearch={setSearch}
  departmentFilter={departmentFilter}
  setDepartmentFilter={setDepartmentFilter}
  typeFilter={typeFilter}
  setTypeFilter={setTypeFilter}
  workModeFilter={workModeFilter}
  setWorkModeFilter={setWorkModeFilter}
/>

<ActiveListingsSection
  search={search}
  departmentFilter={departmentFilter}
  typeFilter={typeFilter}
  workModeFilter={workModeFilter}
/>      
      {/* <ClosedListingsSection /> */}
    </div>
  );
}
