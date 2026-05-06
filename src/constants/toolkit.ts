import astroIcon from "../assets/icons/astro.svg";
import codexIcon from "../assets/icons/codex.svg";
import dockerIcon from "../assets/icons/docker.svg";
import fastapiIcon from "../assets/icons/fastapi.svg";
import githubIcon from "../assets/icons/github.svg";
import linuxIcon from "../assets/icons/linux.svg";
import mongoIcon from "../assets/icons/mongo.svg";
import nestIcon from "../assets/icons/nest.svg";
import nextIcon from "../assets/icons/next.svg";
import playwrightIcon from "../assets/icons/playwrigth.svg";
import postgresIcon from "../assets/icons/postgres.svg";
import pythonIcon from "../assets/icons/python.svg";
import typescriptIcon from "../assets/icons/typescript.svg";
import zedIcon from "../assets/icons/zed.svg";

export const toolkit = [
	{ name: "Next.js", icon: nextIcon },
	{ name: "Astro", icon: astroIcon },
	{ name: "TypeScript", icon: typescriptIcon },
	{ name: "NestJS", icon: nestIcon },
	{ name: "FastAPI", icon: fastapiIcon },
	{ name: "Postgres", icon: postgresIcon },
	{ name: "MongoDB", icon: mongoIcon },
	{ name: "Python", icon: pythonIcon },
	{ name: "Docker", icon: dockerIcon },
	{ name: "Playwright", icon: playwrightIcon },
	{ name: "GitHub", icon: githubIcon },
	{ name: "Linux", icon: linuxIcon },
	{ name: "Zed", icon: zedIcon },
	{ name: "Codex", icon: codexIcon },
] as const;
