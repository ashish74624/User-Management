import React, { useState } from "react";
import UserTable from "../components/UserManagement/UserTable";
import RoleTable from "../components/RoleManagement/RoleTable";

const activeClass="bg-white text-black"
const inActiveClass="bg-zinc-900 text-white"

function Dashboard() {
  const [activeTab, setActiveTab] = useState("users");

  return (
    <div className="dashboard">
      <nav className="dashboard-nav flex justify-between bg-black border-b-[0.5px] border-slate-100 py-4 px-8">
        <div>
          <h1 className="text-white text-xl">RBAC</h1>
        </div>
        <div>
            <button
              className={`mx-2 px-4 py-1.5 rounded-md font-semibold border ${
                activeTab === "users"
                ? activeClass
                : inActiveClass
              }`}
              onClick={() => setActiveTab("users")}
              >
              Users
            </button>
            <button
              className={`mx-2 px-6 py-2 rounded-md font-semibold border ${
                activeTab === "roles"
                ? activeClass
                : inActiveClass
              }`}
              onClick={() => setActiveTab("roles")}
              >
              Roles
            </button>
          </div>
      </nav>

      <div className="dashboard-content p-6 bg-black">
        {activeTab === "users" ? <UserTable /> : <RoleTable />}
      </div>
    </div>
  );
}

export default Dashboard;
