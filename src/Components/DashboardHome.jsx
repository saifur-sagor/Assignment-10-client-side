import React, { useContext, useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import { use } from "react";
import { AuthContext } from "./Provider/AuthProvider";
const DashboardHome = () => {
  const { user } = use(AuthContext);
  const [stats, setStats] = useState({ enrollCount: 0, courseCount: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://online-learning-platform-server-tau.vercel.app/myEnroll?email=${user.email}`)
        .then((res) => res.json())
        .then((enrollData) => {
          fetch(`https://online-learning-platform-server-tau.vercel.app/myCourse?email=${user.email}`)
            .then((res) => res.json())
            .then((courseData) => {
              setStats({
                enrollCount: enrollData.length,
                courseCount: courseData.length,
              });
              setLoading(false);
            })
            .catch(() => setLoading(false));
        })
        .catch(() => setLoading(false));
    }
  }, [user?.email]);

  const chartData = [
    { name: "Enrolled Courses", value: stats.enrollCount },
    { name: "My Added Courses", value: stats.courseCount },
  ];

  const COLORS = ["#6366f1", "#a855f7"];

  if (loading) {
    return <div className="p-10 text-center font-bold">Loading Statistics...</div>;
  }

  return (
    <div className="p-4 md:p-10 min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors">
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-800 dark:text-white">
          Welcome back, <span className="text-indigo-600">{user?.displayName || "Learner"}</span>!
        </h1>
        <p className="text-slate-500 dark:text-slate-400 mt-2">Here is your activity overview on LearnHub.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
        <div className="p-8 bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-indigo-100/20 dark:shadow-none border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-4 text-indigo-600">
            <div className="p-3 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl">
              <FaBookOpen className="text-3xl" />
            </div>
            <p className="text-slate-600 dark:text-slate-300 font-bold">Learning Progress</p>
          </div>
          <p className="text-slate-500 text-sm">Courses Enrolled</p>
          <h2 className="text-4xl font-black text-slate-800 dark:text-white">{stats.enrollCount}</h2>
        </div>

        <div className="p-8 bg-white dark:bg-slate-800 rounded-[2rem] shadow-xl shadow-indigo-100/20 dark:shadow-none border border-slate-100 dark:border-slate-700">
          <div className="flex items-center gap-4 mb-4 text-purple-600">
            <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-2xl">
              <FaChalkboardTeacher className="text-3xl" />
            </div>
            <p className="text-slate-600 dark:text-slate-300 font-bold">Teaching Progress</p>
          </div>
          <p className="text-slate-500 text-sm">Courses Added</p>
          <h2 className="text-4xl font-black text-slate-800 dark:text-white">{stats.courseCount}</h2>
        </div>
      </div>

      {/* Chart Section */}
      <div className="bg-white dark:bg-slate-800 p-8 rounded-[2rem] shadow-xl shadow-indigo-100/20 dark:shadow-none border border-slate-100 dark:border-slate-700">
        <h3 className="text-xl font-bold mb-8 text-slate-800 dark:text-white">Learning vs Teaching Ratio</h3>
        <div className="h-[350px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                innerRadius={70}
                outerRadius={110}
                paddingAngle={8}
                dataKey="value"
                stroke="none"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ borderRadius: '15px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
              />
              <Legend verticalAlign="bottom" height={36} iconType="circle" />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;