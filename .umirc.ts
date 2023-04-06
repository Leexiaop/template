import { defineConfig } from 'umi';
import { resolve } from "path";
import routers from "./src/routers";

export default defineConfig({
	title: '模版',
	nodeModulesTransform: {
		type: 'none',
	},
	history: {
		type: "hash",
	},
	routes: routers,
	define: {
	  	CESIUM_BASE_URL: "",
	},
	publicPath: "./",
	base: "/",
	runtimePublicPath: true,
	dva: {
	  	immer: true,
	},
	fastRefresh: {},
	proxy: {},
	alias: {
		"@": resolve(__dirname, "./src"),
	}
});
