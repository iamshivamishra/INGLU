"use client";

import { Search, Funnel } from "lucide-react";
import { useState } from "react";

type Props = {
  search: string;
  setSearch: (value: string) => void;
  departmentFilter: string;
  setDepartmentFilter: (value: string) => void;
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  workModeFilter: string;
  setWorkModeFilter: (value: string) => void;
};

export default function SearchSection({
  search,
  setSearch,
  departmentFilter,
  setDepartmentFilter,
  typeFilter,
  setTypeFilter,
  workModeFilter,
  setWorkModeFilter,
}: Props) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="px-4 pt-10 sm:px-8 lg:px-20 xl:px-34.25 xl:pt-14.25">
      <div className="flex w-full flex-col items-stretch gap-4 rounded-[14.45px] border-[1.2px] border-gray-200 bg-[#F4F7FE] p-4 sm:p-6 lg:h-[121.06px] lg:flex-row lg:items-center">

        {/* Search Bar */}
        <div className="flex w-full items-center justify-between rounded-full border-[1.22px] border-gray-200 bg-white px-4 py-3 sm:px-5.5 sm:py-4 lg:h-18.25 lg:max-w-937">
          <div className="flex w-full items-center gap-3">
            <Search className="h-5 w-5 text-gray-400" />

            <input
              type="text"
              placeholder="Search for role by title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-600 outline-none placeholder:text-gray-400 sm:text-base"
            />
          </div>

          <button className="ml-2 flex items-center justify-center rounded-full bg-[#155DFC] px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:opacity-90 sm:h-12 sm:px-6 sm:text-base lg:h-15 lg:w-46.75">
            <Search className="mr-1 h-5 w-5 sm:h-6 sm:w-6" />
            Search
          </button>
        </div>

        {/* Filter Button */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center justify-center gap-2 rounded-[37px] border-[1.5px] border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50 sm:text-base lg:h-15 lg:w-41.25"
        >
          <Funnel className="h-5 w-5 sm:h-6 sm:w-6" />
          Filter
        </button>
      </div>

      {/* Filter Dropdown */}
      {showFilters && (
        <div className="mt-4 flex flex-wrap gap-4 rounded-lg border bg-white p-4 shadow-sm">

          <select
            value={departmentFilter}
            onChange={(e) => setDepartmentFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="All">All Departments</option>
            <option value="Engineering">Engineering</option>
            <option value="Design">Design</option>
            <option value="Marketing">Marketing</option>
            <option value="Analytics">Analytics</option>
          </select>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="All">All Types</option>
            <option value="Job">Job</option>
            <option value="Internship">Internship</option>
          </select>

          <select
            value={workModeFilter}
            onChange={(e) => setWorkModeFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="All">All Modes</option>
            <option value="Remote">Remote</option>
            <option value="Hybrid">Hybrid</option>
            <option value="On-site">On-site</option>
          </select>

        </div>
      )}
    </div>
  );
}