import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  UserGroupIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Card } from "./ui/card";
import { GradientText } from "./ui/gradient-text";
import { GradientBackground } from "./ui/gradient-background";
import { FaLinkedin, FaYoutube, FaTiktok } from "react-icons/fa";

const About = () => {
  const stats = [
    {
      icon: CodeBracketIcon,
      value: "8+",
      label: "Năm Kinh Nghiệm",
    },
    {
      icon: AcademicCapIcon,
      value: "1000+",
      label: "Học Viên Đã Đào Tạo",
    },
    {
      icon: UserGroupIcon,
      value: "50+",
      label: "Doanh Nghiệp Tin Tưởng",
    },
  ];

  const contacts = [
    {
      icon: PhoneIcon,
      label: "Phone",
      value: "+84 123 456 789",
      href: "tel:+84123456789",
    },
    {
      icon: FaLinkedin,
      label: "LinkedIn",
      value: "tunglam",
      href: "https://linkedin.com/in/tunglam",
    },
    {
      icon: FaYoutube,
      label: "YouTube",
      value: "@tunglam",
      href: "https://youtube.com/@tunglam",
    },
    {
      icon: FaTiktok,
      label: "TikTok",
      value: "@tunglam",
      href: "https://tiktok.com/@tunglam",
    },
  ];

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 transition-colors duration-200 py-24 overflow-hidden"
    >
      {/* Background decorations */}
      <GradientBackground
        variant="primary"
        intensity="strong"
        className="top-0 right-0 w-1/3 h-1/2 translate-x-1/4 opacity-30"
      />
      <GradientBackground
        variant="accent"
        intensity="strong"
        className="bottom-0 left-0 w-1/2 h-1/3 -translate-x-1/4 opacity-30"
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card
              gradient
              className="relative aspect-[3/4] overflow-hidden shadow-xl bg-white/80 dark:bg-slate-800/80"
            >
              <img
                src="./images/avatar.png"
                alt="Professional headshot"
                className="w-full h-full object-cover object-center"
              />
            </Card>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-6 grid grid-cols-2 gap-4"
            >
              {contacts.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Card
                    gradient
                    hover
                    className="p-4 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/90 dark:bg-slate-800/90"
                  >
                    <div className="flex items-center gap-3">
                      <contact.icon className="h-5 w-5 text-primary-light dark:text-primary-dark group-hover:scale-110 transition-transform" />
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                          {contact.label}
                        </div>
                        <div className="text-sm font-semibold text-slate-700 dark:text-slate-200 truncate">
                          {contact.value}
                        </div>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <div className="backdrop-blur-sm bg-white/80 dark:bg-slate-800/80 p-8 rounded-2xl shadow-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <GradientText as="span" className="text-shadow">
                  Mr. Nguyễn Bá Tùng Lâm
                </GradientText>
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300">
                <p>
                  Tôi là một chuyên gia về Data, tốt nghiệp xuất sắc từ Đại học
                  Bách Khoa Hà Nội – cái nôi của những tài năng công nghệ hàng
                  đầu. Với nhiều năm kinh nghiệm làm việc tại các công ty nước
                  ngoài, tôi đã từng trực tiếp xây dựng, tối ưu hệ thống dữ liệu
                  và ứng dụng trí tuệ nhân tạo để giải quyết những bài toán phức
                  tạp.
                </p>
                <p>
                  Hiện tại, tôi đảm nhiệm vai trò Trưởng phòng Data tại tập đoàn
                  FPT, dẫn dắt đội ngũ triển khai các giải pháp dữ liệu quy mô
                  lớn, giúp doanh nghiệp tối ưu vận hành và ra quyết định thông
                  minh hơn.
                </p>
                <p className="font-medium text-slate-700 dark:text-slate-100">
                  🔥 Tôi hiểu rõ nhu cầu thị trường và những kỹ năng mà một Data
                  Analyst, Data Engineer hay Data Scientist cần có.
                </p>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 mt-12"
            >
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  gradient
                  className="p-4 text-center shadow-lg bg-white/90 dark:bg-slate-800/90"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-3 text-primary-light dark:text-primary-dark" />
                  <div className="text-2xl font-bold mb-1">
                    <GradientText>{stat.value}</GradientText>
                  </div>
                  <div className="text-sm font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </div>
                </Card>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
