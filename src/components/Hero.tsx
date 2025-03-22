import { motion } from "framer-motion";
import { ButtonLink } from "./ui/button-link";
import { GradientText } from "./ui/gradient-text";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full">
          <iframe
            src="https://www.youtube.com/embed/N66gJJss2as?autoplay=1&mute=1&loop=1&playlist=N66gJJss2as&controls=0&showinfo=0&rel=0"
            title="Background Video"
            className="absolute w-full h-full object-cover"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Gradient overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-slate-900/90" />
        </div>
      </div>

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl backdrop-blur-sm p-8 rounded-2xl bg-slate-900/20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl font-bold mb-6"
          >
            <GradientText className="text-shadow-lg">
              Phát Triển Sự Nghiệp Data Cùng Chuyên Gia
            </GradientText>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-slate-200 mb-8 text-shadow-sm"
          >
            Xin chào, tôi là Lâm. Tôi là một Data Engineer và người đào tạo với
            niềm đam mê giúp đỡ mọi người thành thạo kỹ thuật xử lý dữ liệu. Hãy
            cùng nhau khám phá tiềm năng của bạn trong thế giới dữ liệu.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <ButtonLink
              size="lg"
              href="#courses"
              className="bg-primary-light hover:bg-primary-light/90 text-white shadow-lg hover:shadow-primary-light/25 backdrop-blur-sm"
            >
              Xem Khoá Học
            </ButtonLink>
            <ButtonLink
              size="lg"
              variant="outline"
              href="#contact"
              className="border-slate-200 text-slate-200 hover:bg-slate-200/10 backdrop-blur-sm"
            >
              Liên Hệ Ngay
            </ButtonLink>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-gradient-to-l from-accent-light/10 to-transparent dark:from-accent-dark/10 dark:to-transparent blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.5, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-primary-light/10 dark:bg-primary-dark/10 rounded-full blur-3xl"
      />
    </section>
  );
};

export default Hero;
