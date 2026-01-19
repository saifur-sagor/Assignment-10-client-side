import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="white"></path>
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-black text-white mb-6"
          >
            Empowering Minds with <br /> <span className="text-indigo-200">LearnHub</span>
          </motion.h1>
          <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
            We are dedicated to providing world-class education accessible to everyone, everywhere. 
            Our mission is to bridge the gap between skills and opportunities.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-6">Our Vision</h2>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              LearnHub-এর মূল লক্ষ্য হলো প্রযুক্তির মাধ্যমে শিক্ষার প্রসার ঘটানো। আমরা বিশ্বাস করি যে সঠিক দিকনির্দেশনা এবং মানসম্মত কন্টেন্ট থাকলে যে কেউ নিজের ক্যারিয়ারে সফল হতে পারে। আমরা এমন একটি প্ল্যাটফর্ম তৈরি করছি যেখানে শেখা হবে আনন্দদায়ক এবং ফলপ্রসূ।
            </p>
            <div className="mt-8 space-y-4">
              {['Expert Led Courses', 'Lifetime Access', 'Global Community'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                    <span className="text-indigo-600 dark:text-indigo-400 text-sm">✓</span>
                  </div>
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
             initial={{ opacity: 0, scale: 0.8 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f" 
              alt="Team Work" 
              className="rounded-[2.5rem] shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl hidden md:block border border-slate-100 dark:border-slate-700">
              <p className="text-indigo-600 font-bold text-2xl">5+ Years</p>
              <p className="text-slate-500 text-sm">Of Academic Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-800 dark:text-white">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Inclusivity", desc: "Education for everyone, regardless of background.", icon: "🌍" },
              { title: "Innovation", desc: "Teaching with the latest tools and technologies.", icon: "💡" },
              { title: "Integrity", desc: "We value transparency and honest learning.", icon: "🤝" }
            ].map((value, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-slate-800 p-10 rounded-3xl text-center shadow-lg shadow-indigo-100/20 dark:shadow-none border border-slate-100 dark:border-slate-700"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-400">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;