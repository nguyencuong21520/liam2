import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center bg-gradient-to-br from-primary-light/5 to-accent-light/5 dark:from-primary-dark/5 dark:to-accent-dark/5">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl sm:text-6xl font-bold text-text-light dark:text-text-dark mb-6">
            Phát Triển Sự Nghiệp Data Cùng Chuyên Gia
          </h1>
          <p className="text-xl text-secondary-light dark:text-secondary-dark mb-8">
            Xin chào, tôi là Lâm. Tôi là một Data Engineer và người đào tạo với
            niềm đam mê giúp đỡ mọi người thành thạo kỹ thuật xử lý dữ liệu. Hãy
            cùng nhau khám phá tiềm năng của bạn trong thế giới dữ liệu.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#courses"
              className="bg-primary-light dark:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors"
            >
              Xem Khoá Học
            </a>
            <a
              href="#contact"
              className="bg-surface-light dark:bg-surface-dark text-primary-light dark:text-primary-dark border border-primary-light dark:border-primary-dark px-6 py-3 rounded-lg font-medium hover:bg-primary-light/10 dark:hover:bg-primary-dark/10 transition-colors"
            >
              Liên Hệ Ngay
            </a>
          </div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-gradient-to-l from-accent-light/10 to-transparent dark:from-accent-dark/10 dark:to-transparent" />
    </section>
  );
};

export default Hero;
