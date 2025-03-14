import { motion } from "framer-motion";
// import {
//   AcademicCapIcon,
//   ClockIcon,
//   UserGroupIcon,
// } from "@heroicons/react/24/outline";

const Courses = () => {
  const courses = [
    {
      title: "Nền Tảng Kỹ Thuật Dữ Liệu",
      description:
        "Làm chủ các kiến thức cơ bản về kỹ thuật dữ liệu, bao gồm quy trình ETL, mô hình hoá và phát triển pipeline.",
      duration: "8 tuần",
      students: "250+",
      level: "Cơ Bản",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
    },
    {
      title: "Kiến Trúc Pipeline Nâng Cao",
      description:
        "Học cách thiết kế và triển khai các pipeline dữ liệu có khả năng mở rộng sử dụng công cụ và nền tảng đám mây hiện đại.",
      duration: "10 tuần",
      students: "180+",
      level: "Nâng Cao",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    },
    {
      title: "Kỹ Thuật Dữ Liệu Đám Mây",
      description:
        "Hướng dẫn toàn diện về xây dựng giải pháp dữ liệu trên các nền tảng đám mây chính (AWS, GCP, Azure).",
      duration: "12 tuần",
      students: "150+",
      level: "Trung Cấp",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    },
  ];

  return (
    <section
      id="courses"
      className="bg-surface-light dark:bg-surface-dark transition-colors duration-200 py-20"
    >
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-text-light dark:text-text-dark mb-4">
            Khoá Học Nổi Bật
          </h2>
          <p className="text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto">
            Các chương trình đào tạo toàn diện được thiết kế để giúp bạn trở
            thành chuyên gia kỹ thuật dữ liệu chuyên nghiệp.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-background-light dark:bg-background-dark rounded-lg overflow-hidden shadow-sm transition-colors duration-200"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-text-light dark:text-text-dark mb-3">
                  {course.title}
                </h3>
                <p className="text-secondary-light dark:text-secondary-dark mb-4">
                  {course.description}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-light dark:text-secondary-dark">
                      Thời gian:
                    </span>
                    <span className="text-text-light dark:text-text-dark font-medium">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-light dark:text-secondary-dark">
                      Trình độ:
                    </span>
                    <span className="text-text-light dark:text-text-dark font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-primary-light dark:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors">
                  Đăng Ký Ngay
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
