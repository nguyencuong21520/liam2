import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Nguyễn Thị Hương",
      role: "Kỹ sư dữ liệu tại Tech Corp",
      content:
        "Các khoá học rất toàn diện và thực tế. Tôi đã có thể áp dụng ngay những gì học được vào các dự án công việc của mình.",
      image: "/testimonials/sarah.jpg",
    },
    {
      name: "Trần Minh Tuấn",
      role: "Trưởng nhóm phân tích tại DataCo",
      content:
        "Chuyên môn và phương pháp giảng dạy của giảng viên giúp các khái niệm phức tạp trở nên dễ hiểu. Đây là khoản đầu tư tốt nhất cho sự phát triển nghề nghiệp của tôi.",
      image: "/testimonials/michael.jpg",
    },
    {
      name: "Lê Thị Mai Anh",
      role: "Kiến trúc sư dữ liệu tại Enterprise Solutions",
      content:
        "Các dự án thực hành và ví dụ thực tế rất có giá trị. Tôi đã học được những kỹ năng thiết thực giúp tôi thăng tiến trong công việc.",
      image: "/testimonials/emily.jpg",
    },
  ];

  return (
    <section
      id="testimonials"
      className="bg-background-light dark:bg-background-dark transition-colors duration-200 py-20"
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
            Câu Chuyện Thành Công
          </h2>
          <p className="text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto">
            Lắng nghe chia sẻ từ các chuyên gia đã thay đổi sự nghiệp thông qua
            các chương trình đào tạo của chúng tôi.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-surface-light dark:bg-surface-dark rounded-lg p-6 transition-colors duration-200"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <h3 className="font-semibold text-text-light dark:text-text-dark">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-secondary-light dark:text-secondary-dark">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="text-secondary-light dark:text-secondary-dark">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
