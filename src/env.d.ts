/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
	// 添加您的環境變量類型定義（如果有的話）
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}

// 添加這個接口定義
interface StarlightRouteData {
	hidden?: boolean;
}
