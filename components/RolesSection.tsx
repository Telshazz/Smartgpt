"use client";
import { RoleCard } from "./RoleCard";

const roles = [
  {
    title: "AI Engineering",
    description: "Develop cutting-edge AI models and applications. Work on natural language processing, computer vision, and more.",
    typeformId: "01JD1BJTWZXR1VG0G1Q3YYCPAP",
  },
  {
    title: "Machine Learning",
    description: "Design and implement advanced machine learning algorithms. Focus on data analysis, model optimization, and scalable solutions.",
    typeformId: "01JD0DR79GR9KASDK18189Q4R4",
  },
  {
    title: "Full Stack Development",
    description: "Build modern web applications and robust APIs. Work with cutting-edge technologies and best practices.",
    typeformId: "01JD0E24XAHKM54Q871GRZV8BE",
  },
];

export function RolesSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {roles.map((role, index) => (
          <RoleCard key={role.title} {...role} index={index} />
        ))}
      </div>
    </section>
  );
}