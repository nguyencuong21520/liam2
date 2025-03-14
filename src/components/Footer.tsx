import { motion } from "framer-motion";

const Footer = () => {
  const communities = [
    {
      name: "Kỹ Thuật Dữ Liệu",
      description:
        "Tìm hiểu về Data Pipeline, ETL và các kỹ thuật xử lý dữ liệu hiện đại",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      name: "Xử Lý Luồng Dữ Liệu",
      description:
        "Khám phá Apache Kafka và các công nghệ xử lý dữ liệu thời gian thực",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      name: "Trí Tuệ Nhân Tạo",
      description:
        "Chia sẻ kiến thức về ML, AI và các ứng dụng trong thực tiễn",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  const socialLinks = [
    {
      name: "Fanpage Facebook",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
        </svg>
      ),
    },
    {
      name: "Kênh Instagram",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "Mạng LinkedIn",
      href: "#",
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-50 dark:bg-[#080B1B] text-gray-900 dark:text-white py-16 lg:py-24 transition-colors duration-200">
      <div className="section-container">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Title - Centered */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Tham Gia Cộng Đồng Data
            </h2>
            <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Cùng nhau học hỏi, chia sẻ và phát triển trong lĩnh vực công nghệ
              dữ liệu
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Communities - 3 columns */}
            <div className="lg:col-span-3 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {communities.map((community) => (
                <motion.a
                  key={community.name}
                  href="#"
                  className="group block p-6 rounded-xl bg-white dark:bg-[#0F1429] hover:bg-gray-50 dark:hover:bg-[#161B38] shadow-sm dark:shadow-none transition-all duration-200"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <community.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {community.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {community.description}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* Social Links - 2 columns */}
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div className="space-y-4">
                {socialLinks.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-between p-4 rounded-lg bg-white dark:bg-[#0F1429] hover:bg-gray-50 dark:hover:bg-[#161B38] shadow-sm dark:shadow-none group transition-all duration-200"
                    whileHover={{ x: 10 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <item.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <span className="text-lg font-medium">{item.name}</span>
                    </div>
                    <svg
                      className="w-6 h-6 text-gray-400 transform transition-transform group-hover:translate-x-2 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </motion.a>
                ))}
              </div>

              {/* Username */}
              <div className="mt-8 text-right">
                <p className="text-gray-600 dark:text-gray-400">@LamTechTalk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
