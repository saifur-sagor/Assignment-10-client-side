import { motion } from "framer-motion";

const FAQSection = () => {
  const faqs = [
    { q: "কোর্সগুলো কি অফলাইনে দেখার সুযোগ আছে?", a: "বর্তমানে আমাদের সব কোর্স অনলাইন ভিত্তিক।" },
    { q: "পেমেন্ট করার কতক্ষণ পর কোর্স এক্সেস পাবো?", a: "পেমেন্ট সাকসেসফুল হওয়ার সাথে সাথেই এক্সেস পাবেন।" },
    { q: "আমি কি কোনো ডিসকাউন্ট কুপন পাবো?", a: "নিউজলেটার সাবস্ক্রাইব করে রাখুন, কুপন ইমেইল করা হবে!" }
  ];

  return (
    <section className="max-w-4xl mx-auto py-20 px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.3 } }
        }}
        className="space-y-4"
      >
        {faqs.map((faq, i) => (
          <motion.div 
            key={i}
            variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
            className="collapse collapse-plus bg-base-200 rounded-2xl"
          >
            <input type="radio" name="faq-acc" /> 
            <div className="collapse-title text-xl font-medium">{faq.q}</div>
            <div className="collapse-content text-gray-600">{faq.a}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
export default FAQSection;