import alfinLogo from "../assets/imgs/companies/alfin-logo.webp";
import fractalupLogo from "../assets/imgs/companies/fractalup-logo.webp";
import openlabLogo from "../assets/imgs/companies/openlab-logo.webp";

export const experiences = [
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
		name: "OpenLab Latam",
		role: "Frontend Developer · Plataformas enterprise y e-commerce",
		period: "2024 - 2025",
		mark: "OL",
		logo: openlabLogo,
		description:
			"Interfaces escalables con React, Next.js, Tailwind, Material UI y Zustand. Integracion de APIs REST/WebSocket y arquitectura modular por dominio.",
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
] as const;
