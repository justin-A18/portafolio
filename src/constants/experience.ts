import alfinLogo from "../assets/imgs/companies/alfin-logo.webp";
import devdatepLogo from "../assets/imgs/companies/devdatep-logo.webp";
import fractalupLogo from "../assets/imgs/companies/fractalup-logo.webp";
import openlabLogo from "../assets/imgs/companies/openlab-logo.webp";

export const experiences = [
	{
		name: "OpenLab Latam",
		role: "Frontend Developer · Plataformas enterprise y e-commerce",
		period: "Ene 2024 - Mayo 2026",
		mark: "OL",
		logo: openlabLogo,
		description:
			"Interfaces escalables con React, Next.js, Tailwind, Material UI y Zustand. Integracion de APIs REST/WebSocket y arquitectura modular por dominio.",
	},
	{
		name: "Alfin Banco",
		role: "Frontend Engineer · Arquitectura Frontend, BFF y seguridad",
		period: "Nov 2025 - Feb 2026",
		mark: "AB",
		logo: alfinLogo,
		description:
			"Aplicacion de apertura digital de cuentas con Next.js, React y TypeScript en entorno bancario regulado. BFF, formularios complejos, reglas de negocio y tests E2E con Playwright.",
	},
	{
		name: "FractalUp",
		role: "Frontend Developer · UI Systems & Web Components",
		period: "Oct - Dic 2024",
		mark: "FU",
		logo: fractalupLogo,
		description:
			"Rediseño de modulos clave y libreria UI con Lit, React y Storybook, con foco en reutilizacion visual, i18n y documentacion.",
	},
	{
		name: "DEVDATEP Consulting",
		role: "Frontend Developer · Next.js, TypeScript, Clean Architecture, Performance",
		period: "Ago - Sept 2024",
		mark: "DP",
		logo: devdatepLogo,
		description:
			"Desarrollo frontend con React, TypeScript y React Query, estableciendo TypeScript como estandar del proyecto y aplicando Clean Architecture, SOLID y DDD para fortalecer escalabilidad, calidad de codigo y performance.",
	},
] as const;
