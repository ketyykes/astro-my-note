// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "水土曜來了筆記",
			defaultLocale: "zh-Hant",
			locales: {
				"zh-Hant": {
					label: "繁體中文",
					lang: "zh-Hant",
				},
			},
			logo: {
				src: "./src/assets/wed_sat_icon.svg",
			},
			favicon: "/favicon.png",
			social: {
				github: "https://github.com/withastro/starlight",
			},
			sidebar: [
				{
					label: "Guides",
					autogenerate: { directory: "guide" },
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
				{
					label: "Learn Note",
					autogenerate: { directory: "learn_note" },
				},
				{
					label: "Tools",
					autogenerate: { directory: "tools" },
				},
			],
		}),
	],
});
