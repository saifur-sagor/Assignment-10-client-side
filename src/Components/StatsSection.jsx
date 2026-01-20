import React from "react";
import { motion } from "framer-motion";

const StatsSection = () => {
  const stats = [
    {
      label: "Active Students",
      value: "15K+",
      color: "from-purple-500 to-indigo-600",
    },
    {
      label: "Expert Mentors",
      value: "120+",
      color: "from-blue-500 to-cyan-600",
    },
    {
      label: "Premium Courses",
      value: "200+",
      color: "from-indigo-500 to-purple-600",
    },
    {
      label: "Success Rate",
      value: "98%",
      color: "from-violet-500 to-fuchsia-600",
    },
  ];
  return (
    <section className="py-16 px-4">
      <h1 className="text-6xl font-bold text-center uppercase my-8">
        Our <span className="text-blue-600">Statistics</span>
      </h1>
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative overflow-hidden p-6 rounded-2xl bg-gradient-to-br ${item.color} shadow-lg shadow-indigo-200 dark:shadow-none`}
          >
            {/* Background Decorative Circle */}
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>

            <h2 className="text-3xl md:text-4xl font-black text-white">
              {item.value}
            </h2>
            <p className="text-white/80 font-medium mt-1 text-sm md:text-base">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
