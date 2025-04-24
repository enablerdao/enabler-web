# Enabler Web

このプロジェクトは、Enablerのウェブサイトのソースコードを含んでいます。ViteとjQueryを使用して構築されています。

## 技術スタック

- Vite
- jQuery
- Slick Carousel

## セットアップ

1. 依存関係のインストール:
```bash
npm install
```

2. 開発サーバーの起動:
```bash
npm run dev
```

3. プロダクションビルド:
```bash
npm run build
```

## プロジェクト構造

```
├── public/
│   ├── common/
│   │   ├── css/      # スタイルシート
│   │   ├── js/       # JavaScriptファイル
│   │   ├── images/   # 画像ファイル
│   │   └── fonts/    # フォントファイル
│   ├── favicon.ico
│   └── apple-touch-icon.png
├── index.html        # メインのHTMLファイル
├── package.json      # プロジェクト設定
└── vite.config.mjs   # Vite設定
```

## 開発ガイドライン

- 静的アセット（画像、フォント、CSS、JS）は `public/common` ディレクトリに配置します
- メインのHTMLファイルは `index.html` です
- CSSの変更は `public/common/css/style.css` で行います
- JavaScriptの変更は `public/common/js/common.js` で行います

## デプロイ

このプロジェクトはVercelにデプロイされています。mainブランチへのプッシュで自動的にデプロイが開始されます。

## ライセンス

All rights reserved. 