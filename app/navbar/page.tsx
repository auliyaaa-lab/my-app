import Dashboard from "./_components/dashboard";

export default function navbar() {
  return (
    <section className="h-screen bg-yellow-50 flex gap-5 p-2 justify-end items-center text-sm ">
      <div className="bg-gray-900 h-100 w-40 rounded-xl flex flex-col justify-around gap-y-1 p-6 text-gray-400">
        <div></div>
        <div className="flex flex-col gap-5 text-2xl">
          <p>CodingLab</p>
        </div>

        <div className="flex flex-col gap-5">
          <p>Main Menu</p>
        </div>

        <Dashboard img="layout-dashboard.svg" title="Dashboard" />
        <Dashboard img="notes.svg" title="Overview" />
        <Dashboard img="chart-histogram.svg" title="Analytic" />

        <div className="flex flex-col gap-5">
          <p>General</p>
        </div>

        <Dashboard img="folder.svg" title="Projects" />
        <Dashboard img="users-group.svg" title="Groups" />
        <Dashboard img="flag.svg" title="Report" />

        <div className="flex flex-col gap-5">
          <p>Account</p>
        </div>

        <Dashboard img="user-circle.svg" title="Profile" />
        <Dashboard img="settings.svg" title="Settings" />
      </div>
    </section>
  );
}
