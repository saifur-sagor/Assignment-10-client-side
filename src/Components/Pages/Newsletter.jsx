import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-7xl mx-auto px-4 my-20"
    >
      <div className="bg-[#6366f1] rounded-[2rem] p-8 md:p-16 text-center text-white relative overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Journey Today!</h2>
        <div className="flex flex-col md:flex-row max-w-md mx-auto gap-3 mt-8">
          <input type="email" placeholder="Email address" className="input w-full text-black rounded-xl" />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn bg-black text-white border-none rounded-xl px-8"
          >
            Subscribe
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
};
export default Newsletter;