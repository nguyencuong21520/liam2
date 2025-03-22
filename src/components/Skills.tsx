import { motion } from "framer-motion";
import { Card } from "./ui/card";
import { GradientText } from "./ui/gradient-text";

const Skills = () => {
  const skills = [
    {
      category: "Kỹ Thuật Dữ Liệu",
      items: ["SQL", "Python", "Apache Spark", "Airflow", "dbt", "Snowflake"],
    },
    {
      category: "Điện Toán Đám Mây",
      items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Git"],
    },
    {
      category: "Phân Tích Dữ Liệu",
      items: [
        "Mô Hình Hoá Dữ Liệu",
        "ETL",
        "Kho Dữ Liệu",
        "BI",
        "Chất Lượng Dữ Liệu",
        "Quản Trị Dữ Liệu",
      ],
    },
  ];

  return (
    <section
      id="skills"
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
          <h2 className="text-3xl font-bold mb-4">
            <GradientText as="span">Chuyên Môn Kỹ Thuật</GradientText>
          </h2>
          <p className="text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto">
            Với kiến thức chuyên sâu về kỹ thuật và phân tích dữ liệu hiện đại,
            tôi có thể giải quyết các thách thức phức tạp và đưa ra giải pháp
            toàn diện trong lĩnh vực dữ liệu.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card gradient hover className="p-6 h-full">
                <h3 className="text-xl font-semibold mb-4">
                  <GradientText>{skillGroup.category}</GradientText>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full text-sm bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
