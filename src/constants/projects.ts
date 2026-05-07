export const projects = [
	{
		name: "Sistema de gestión de sorteos",
		role: "Frontend · React, TypeScript, Shadcn, TanStack Query, Zustand",
		period: "Code Quest 2024",
		mark: "CQ",
		description:
			"Aplicación colaborativa de sorteos construida durante hackathon, con arquitectura por capas, fetching eficiente y estado global mantenible.",
		githubUrl: "https://github.com/admoisesdev/frontend-app-sorteo",
	},
	{
		name: "Generador de recetas con IA",
		role: "Fullstack · React, Shadcn, NestJS, TypeORM, MongoDB",
		period: "Vercel Hackathon",
		mark: "AI",
		description:
			"Aplicacion impulsada por IA para generar recetas personalizadas, con autenticacion JWT y backend NestJS.",
		githubUrl: "https://github.com/RecetIA",
	},
] as const;
