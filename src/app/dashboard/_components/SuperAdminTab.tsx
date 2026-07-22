"use client";

import {
  Search,
  Filter,
  Plus,
  Mail,
  Calendar,
  Pencil,
  Trash2,
  Ban,
  UserPlus,
  CheckCircle,
} from "lucide-react";

export default function SuperAdminTab() {
  const admins = Array.from({ length: 4 });

  return (
    <main className="min-h-screen bg-gray-50 px-8 py-10">
      {/* Header */}
      <h1 className="font-plus-jakarta-sans mb-6 text-3xl font-semibold">
        Super Admin
      </h1>

      {/* Toolbar */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <a className="font-plus-jakarta-sans font-medium text-blue-600 underline">
          All Super Admin
        </a>

        <div className="flex items-center gap-3">
          {/* Search */}
          <div className="flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm text-gray-600">
            <Search size={16} />
            <input
              placeholder="Search super admins..."
              className="outline-none"
            />
          </div>

          {/* Filter */}
          <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm">
            <Filter size={16} />
            Filter
          </button>

          {/* Add */}
          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
            <Plus size={16} />
            Add Super Admin
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="font-plus-jakarta-sans overflow-hidden rounded-xl border bg-white shadow-sm">
        <table className="w-full text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="px-6 py-4 text-left">User</th>
              <th className="px-6 py-4 text-left">Email</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Join Date</th>
              <th className="px-6 py-4 text-left">Permission</th>
              <th className="px-6 py-4 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {Array.from({ length: 4 }).map((_, i) => (
              <tr key={i} className="border-t">
                {/* USER */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm text-white">
                      MA
                    </div>
                    <span className="font-medium">Mr. Ansh</span>
                  </div>
                </td>

                {/* EMAIL */}
                <td className="px-6 py-5 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail size={14} />
                    mr.ansh@example.com
                  </div>
                </td>

                {/* STATUS */}
                <td className="px-6 py-5">
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                    <span className="h-2 w-2 rounded-full bg-green-600" />
                    Active
                  </span>
                </td>

                {/* JOIN DATE */}
                <td className="px-6 py-5 text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar size={14} />
                    Jan 15, 2024
                  </div>
                </td>

                {/* PERMISSION */}
                <td className="px-6 py-5 text-gray-600">Full Access</td>

                {/* ACTIONS */}
                <td className="px-6 py-5">
                  <div className="flex items-center gap-4">
                    <Pencil
                      className="cursor-pointer text-blue-600"
                      size={16}
                    />
                    <Ban className="cursor-pointer text-orange-500" size={16} />
                    <Trash2 className="cursor-pointer text-red-500" size={16} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Recent Activity */}
      <section className="font-plus-jakarta-sans mt-10">
        <h2 className="font-plus-jakarta-sans mb-4 text-lg font-semibold">
          Recent Super Admin Activity
        </h2>

        <div className="space-y-4 rounded-xl bg-white p-6 shadow-md shadow-gray-400">
          {/* Activity 1 */}
          <div className="flex gap-4 rounded-lg bg-blue-50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
              <UserPlus size={18} />
            </div>
            <div>
              <p className="font-medium">New Super Admin Added</p>
              <p className="font-plus-jakarta-sans text-sm text-gray-600">
                Emily Rodriguez was added as a Super Admin
              </p>
              <p className="mt-1 text-xs text-gray-500">2 hours ago</p>
            </div>
          </div>

          {/* Activity 2 */}
          <div className="flex gap-4 rounded-lg bg-gray-50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200">
              <Pencil size={18} />
            </div>
            <div>
              <p className="font-medium">Permission Updated</p>
              <p className="text-sm text-gray-600">
                Michael Chen&apos;s permissions were modified
              </p>
              <p className="mt-1 text-xs text-gray-500">5 hours ago</p>
            </div>
          </div>

          {/* Activity 3 */}
          <div className="flex gap-4 rounded-lg bg-gray-50 p-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-200">
              <CheckCircle size={18} />
            </div>
            <div>
              <p className="font-medium">Login Activity</p>
              <p className="text-sm text-gray-600">
                Sarah Johnson logged in from San Francisco
              </p>
              <p className="mt-1 text-xs text-gray-500">1 day ago</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
