// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "水土曜來了筆記",
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
					items: [{ label: "Welcome", slug: "guides/welcome" }],
				},
				{
					label: "Reference",
					autogenerate: { directory: "reference" },
				},
			],
		}),
	],
});
