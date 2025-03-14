import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  AcademicCapIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

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

  return (
    <section
      id="about"
      className="bg-surface-light dark:bg-surface-dark transition-colors duration-200"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-6">
              Kết Nối Dữ Liệu và Thành Công
            </h2>
            <p className="text-secondary-light dark:text-secondary-dark mb-6">
              Với hơn 8 năm kinh nghiệm trong lĩnh vực kỹ thuật dữ liệu và phân
              tích, tôi đã giúp nhiều tổ chức chuyển đổi hoạt động dữ liệu của
              họ và đào tạo hàng trăm chuyên gia về các phương pháp xử lý dữ
              liệu hiện đại.
            </p>
            <p className="text-secondary-light dark:text-secondary-dark mb-6">
              Phương pháp của tôi kết hợp kinh nghiệm thực tế trong ngành với
              phương pháp giảng dạy hiệu quả, đảm bảo bạn không chỉ học được lý
              thuyết mà còn có thể áp dụng chúng hiệu quả trong thực tế.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg bg-background-light dark:bg-background-dark transition-colors duration-200"
              >
                <stat.icon className="h-8 w-8 mx-auto mb-4 text-primary-light dark:text-primary-dark" />
                <div className="text-3xl font-bold text-text-light dark:text-text-dark mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-light dark:text-secondary-dark">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
