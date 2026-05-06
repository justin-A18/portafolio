export const experiments = [
	{
		title: "Linux workstation",
		type: "setup",
		description:
			"Capturas, configuraciones y decisiones de mi entorno Linux para trabajar rapido, reproducible y sin friccion.",
		tags: ["linux", "zsh", "docker"],
		variant: "terminal",
	},
	{
		title: "Desktop studies",
		type: "visual",
		description:
			"Exploraciones de escritorio, ventanas, barras, temas y pequenos detalles visuales del workspace diario.",
		tags: ["rice", "ui", "workflow"],
		variant: "desktop",
	},
	{
		title: "Pixel sketches",
		type: "art",
		description:
			"Pequenos ejercicios visuales: pixel art, interfaces retro y assets que mezclan software con estetica personal.",
		tags: ["pixel", "retro", "art"],
		variant: "pixel",
	},
] as const;
