import { motion } from "framer-motion";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "The Future of Web Development in 2026",
      category: "Technology",
      date: "Jan 15, 2026",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "Learn about the latest trends in React, Next.js, and AI-driven development tools.",
      color: "from-blue-500 to-indigo-600"
    },
    {
      id: 2,
      title: "Mastering UI/UX: Design Principles for Beginners",
      category: "Design",
      date: "Jan 18, 2026",
      img: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c",
      desc: "Understand the core concepts of color theory, spacing, and typography to build better products.",
      color: "from-purple-500 to-fuchsia-600"
    },
    {
      id: 3,
      title: "How to Build a High-Growth Learning Platform",
      category: "Business",
      date: "Jan 20, 2026",
      img: "https://images.unsplash.com/photo-1501504905252-473c47e087f8",
      desc: "Insights into how LearnHub provides expert-led courses to help students grow their careers.",
      color: "from-teal-500 to-emerald-600"
    }
  ];

  return (
    <div className="min-h-screen py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-800 dark:text-white mb-4">
            LearnHub <span className="text-indigo-600">Blog</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Explore industry insights, technical tutorials, and the latest updates from our expert mentors.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog, index) => (
            <motion.div
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-xl shadow-indigo-100/50 dark:shadow-none border border-slate-100 dark:border-slate-700 flex flex-col"
            >
              {/* Image Section */}
              <div className="h-56 relative overflow-hidden">
                <img src={blog.img} alt={blog.title} className="w-full h-full object-cover transform hover:scale-110 transition duration-500" />
                <div className={`absolute top-4 left-4 bg-gradient-to-r ${blog.color} text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase`}>
                  {blog.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col">
                <span className="text-slate-400 text-sm mb-2">{blog.date}</span>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3 hover:text-indigo-600 transition cursor-pointer">
                  {blog.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                  {blog.desc}
                </p>
                
                <div className="mt-auto">
                  <button className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 group">
                    Read More 
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Call-to-action */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-12 rounded-[3rem] bg-gradient-to-r from-indigo-600 to-purple-700 text-white text-center shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4">Want more insights?</h2>
          <p className="mb-8 opacity-90">Join our newsletter to receive the latest blog posts directly in your inbox.</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input type="email" placeholder="Email address" className="bg-white/20 border border-white/30 backdrop-blur-md rounded-2xl px-6 py-3 text-white placeholder:text-indigo-100 outline-none w-full" />
            <button className="bg-white text-indigo-700 font-bold px-8 py-3 rounded-2xl hover:bg-slate-100 transition">Join</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;