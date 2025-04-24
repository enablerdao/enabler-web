# Enabler 公式サイト

![Enabler Logo](./common/images/logo.png)

"Exquisite everyday life" を世界中で提供する Enabler の公式ウェブサイトのリポジトリです。ラグジュアリーなバケーションレンタルを中心に、プロジェクトストーリーやメッセージを紹介しています。

---

## 🚀 このリポジトリで出来ること

| コマンド | 目的 | 詳細 |
|-----------|------|------|
| `npm install` | 依存関係のインストール | 初回クローン後に必ず実行してください |
| `npm run dev` | 開発サーバー起動 | http://localhost:3000 で自動リロード環境が立ち上がります |
| `npm run build` | 本番ビルド | `dist` フォルダに静的ファイルを出力します |
| `npm run preview` | 本番ビルドのローカル確認 | `npm run build` で生成されたファイルをローカルサーバーで確認します |
| `npm run deploy` | Vercel へデプロイ (要ログイン) | コマンドラインから簡単に公開できます |

> **Vite 未経験でも OK** 🎉  
> 上記 3 つのコマンドだけ覚えればローカル開発〜公開まで完結します。

---

## 🏠 サイト概要

| セクション | 説明 |
|------------|------|
| Hero | ブランドロゴ・コンセプトコピーのファーストビュー |
| About | Enabler というブランドの背景を紹介 |
| Property | 日本・ハワイに展開している物件のギャラリー |
| Story | プロジェクトストーリー & ビジョン |
| Message | Founder からのメッセージ |
| Company / Footer | 会社情報・SNS・ページトップボタン |

静的 HTML / CSS / JS で実装しており、画像スライダーには [Slick Carousel](https://kenwheeler.github.io/slick/) を使用しています。

---

## 🛠️ 技術スタック

* [Vite](https://vitejs.dev/) – 超高速ビルドツール兼ローカルサーバー
* HTML5 + SCSS (PostCSS 無しの純粋な CSS)
* jQuery 3 系 – DOM 操作・アニメーション
* Slick Carousel – 物件ギャラリーのカルーセル
* Vercel – ホスティング / CI

> **なぜ Vite?**  
> ESBuild ベースでコンパイルが速く、設定ファイルも最小限で済むため導入ハードルが低いからです。

---

## 📦 必要要件

| ツール | バージョン (推奨) |
|--------|------------------|
| Node.js | ≥ 18.x |
| npm     | ≥ 9.x |

※ `node -v` / `npm -v` で確認できます。

---

## 🔰 ローカル環境構築手順

1. **リポジトリをクローン**
    ```bash
    git clone https://github.com/enablerdao/html-enabler.git
    cd html-enabler
    ```
2. **依存関係をインストール**
    ```bash
    npm install
    ```
3. **開発サーバーを起動**
    ```bash
    npm run dev
    ```
    ブラウザで `http://localhost:3000` を開くとサイトが表示されます。CSS/JS/HTML を保存すると自動リロードされます。

---

## 📁 ディレクトリ構成 (抜粋)

```
html-enabler/
├── common/
│   ├── css/            # スタイルシート
│   ├── images/         # 画像アセット (物件写真・ロゴなど)
│   └── js/             # JavaScript (jQuery / Slick 初期化)
├── index.html          # ルート HTML
├── vite.config.mjs     # Vite 設定 (ほぼデフォルト)
└── vercel.json         # Vercel デプロイ設定
```

> **画像について**  
> 各物件画像・ロゴ等は容量削減のため Git 管理外の場合があります。`common/images/` に配置すると自動で読み込まれます。

---

## 🚚 デプロイ方法 (Vercel)

1. グローバルに Vercel CLI を入れていない場合:
   ```bash
   npm i -g vercel
   ```
2. **初回のみ** ログインしてプロジェクトリンク
   ```bash
   vercel
   ```
3. **本番デプロイ**
   ```bash
   npm run deploy
   ```
   `dist/` が自動的にアップロードされ、`https://{your-project}.vercel.app` に公開されます。

---

## ❓ よくある質問

| Q | A |
|---|---|
| 画像が表示されない | `common/images/` に該当ファイルがあるか確認してください。ビルド時にはそのままコピーされます。 |
| ポート番号を変えたい | `vite.config.mjs` の `server.port` を編集してください。 |
| jQuery を外したい | `common/js/common.js` を Vanilla JS に書き換えても OK です。 |

---

## 📝 ライセンス

本リポジトリのコードは **MIT License** ですが、画像・ロゴなど全てのアセットは Enabler に帰属します。商用利用・転載はご遠慮ください。 