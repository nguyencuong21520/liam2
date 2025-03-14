import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const Contact = () => {
  const contactInfo = [
    {
      icon: EnvelopeIcon,
      label: "Email",
      value: "contact@datapro.com",
      href: "mailto:contact@datapro.com",
    },
    {
      icon: PhoneIcon,
      label: "Điện thoại",
      value: "+84 (123) 456-789",
      href: "tel:+84123456789",
    },
    {
      icon: MapPinIcon,
      label: "Địa chỉ",
      value: "Hà Nội, Việt Nam",
      href: "https://maps.google.com/?q=Ha+Noi,+Vietnam",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section
      id="contact"
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
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto">
            Bạn có thắc mắc về các khoá học hoặc dịch vụ tư vấn? Hãy liên hệ để
            chúng tôi có thể giúp bạn đạt được mục tiêu của mình.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center p-4 rounded-lg bg-background-light dark:bg-background-dark hover:bg-primary-light/5 dark:hover:bg-primary-dark/5 transition-colors duration-200"
              >
                <item.icon className="h-6 w-6 text-primary-light dark:text-primary-dark" />
                <div className="ml-4">
                  <div className="text-sm text-secondary-light dark:text-secondary-dark">
                    {item.label}
                  </div>
                  <div className="text-text-light dark:text-text-dark font-medium">
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-secondary-light dark:text-secondary-dark mb-1"
              >
                Họ và tên
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Nhập họ và tên của bạn"
                className="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-secondary-light/20 dark:border-secondary-dark/20 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-secondary-light dark:text-secondary-dark mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Nhập địa chỉ email của bạn"
                className="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-secondary-light/20 dark:border-secondary-dark/20 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-secondary-light dark:text-secondary-dark mb-1"
              >
                Nội dung tin nhắn
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Nhập nội dung tin nhắn của bạn"
                className="w-full px-4 py-2 rounded-lg bg-background-light dark:bg-background-dark border border-secondary-light/20 dark:border-secondary-dark/20 text-text-light dark:text-text-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark transition-colors"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary-light dark:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-light/90 dark:hover:bg-primary-dark/90 transition-colors"
            >
              Gửi Tin Nhắn
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
