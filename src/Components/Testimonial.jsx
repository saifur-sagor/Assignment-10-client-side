import React from 'react';
import { motion } from "framer-motion";

const Testimonial = () => {
    const reviews = [
    { id: 1, name: "Samiul Islam", role: "Web Learner", feedback: "LearnHub-এর কোর্সগুলো একদম রুট লেভেল থেকে শুরু করা।", img: "https://i.pravatar.cc/150?u=1" },
    { id: 2, name: "Farhana Akter", role: "UI Designer", feedback: "সবচেয়ে ভালো লাগে সাপোর্ট সিস্টেম। মেন্টরদের পাশে পাওয়া যায়।", img: "https://i.pravatar.cc/150?u=2" },
    { id: 3, name: "Tanvir Hasan", role: "Full Stack Dev", feedback: "তাদের সিলেবাসগুলো খুব আপ-টু-ডেট। যা দরকার তাই শেখানো হয়।", img: "https://i.pravatar.cc/150?u=3" }
  ];
    return (
<section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h4 className="text-indigo-600 dark:text-indigo-400 font-bold tracking-widest uppercase text-sm">Testimonials</h4>
          <h2 className="text-4xl font-extrabold text-slate-800 dark:text-white mt-2">What Our Students Say</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <motion.div
              key={rev.id}
              whileHover={{ y: -10 }}
              className="p-8 rounded-3xl border border-indigo-100 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl shadow-indigo-100/50 dark:shadow-none"
            >
              <div className="flex text-yellow-400 mb-4 text-sm">★★★★★</div>
              <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed">"{rev.feedback}"</p>
              <div className="flex items-center gap-4 mt-8 pt-6 border-t border-slate-100 dark:border-slate-700">
                <img src={rev.img} className="w-12 h-12 rounded-full ring-2 ring-indigo-500" alt="" />
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-white">{rev.name}</h4>
                  <p className="text-xs text-indigo-500 dark:text-indigo-400">{rev.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default Testimonial;