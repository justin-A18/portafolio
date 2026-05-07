import personalExpenseImage from "../assets/imgs/projects/personal-expense.png";
import shareItImage from "../assets/imgs/projects/shareit.png";
import signlyImage from "../assets/imgs/projects/signly.png";

export const featuredProjects = [
	{
		title: "Signly",
		stack: "Astro · React · TypeScript · Tailwind CSS · SEO",
		description:
			"Landing educativa para aprender Lengua de Señas con una experiencia visual cálida, navegación clara y enfoque en accesibilidad, performance y comunicación inclusiva.",
		image: signlyImage,
	},
	{
		title: "ShareIT",
		stack: "Astro · React · TypeScript · Tailwind CSS · Community UI",
		description:
			"Landing para comunidad tecnológica con una interfaz oscura, mensaje directo y llamados a la acción orientados a conectar personas, recursos y aprendizaje colaborativo.",
		image: shareItImage,
	},
	{
		title: "Personal Expense Dashboard",
		stack: "Next.js · TypeScript · Tailwind CSS · Zustand",
		description:
			"Dashboard financiero personal para visualizar ingresos, gastos y actividad reciente con una interfaz oscura orientada a lectura rápida.",
		image: personalExpenseImage,
		githubUrl: "https://github.com/justin-A18",
	},
] as const;
