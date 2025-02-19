# travel_app_test Webサイト立ち上げマイルストーン

## フェーズ 1: 基礎知識の習得（1～2週間）

- Webの仕組みを理解する

Webサイトとは何か、基本的な動作（HTML, CSS, JavaScriptの役割）
ドメイン・サーバー・ホスティングの概念

- HTML & CSSの基礎

HTMLの基本構造（タグ、属性、リスト、テーブル、フォーム）
CSSの基礎（セレクタ、プロパティ、レイアウト）
CSSフレックスボックスとグリッドの使い方

- JavaScriptの基礎

変数、データ型、関数、条件分岐、ループ
DOM操作（ボタンをクリックしたら表示を変える）

- Git/GitHubの基本

Gitの仕組み、基本コマンド（commit, push, pull）
GitHubでリポジトリを作成・管理

## フェーズ 2: 実践的なサイト作成（3～4週間）

- シンプルな静的Webサイトを作成

ポートフォリオサイトや簡単なブログデザインを作る
画像・動画の埋め込み、レスポンシブデザイン

- 基本的なデプロイ

GitHub Pagesを使ってサイトを公開
NetlifyやVercelを試す

- CSSフレームワークの活用

BootstrapやTailwind CSSを使ってデザインを改善

- JavaScriptで動きをつける

フォームのバリデーション（入力チェック）
クリックでメニューを開閉するナビゲーション

## フェーズ 3: 動的な機能の追加（4～6週間）

- 簡単なバックエンドの学習

JavaScript (Node.js + Express) or Python (Flask/Django)
フォームのデータをサーバーに送る処理

- データベースの基礎

Firebase（簡単なクラウドDB） or MySQL / PostgreSQL
データの保存・取得の基本操作（CRUD）

- お問い合わせフォームを作成

フォームを作成し、入力内容をメールで送信

- ログイン・ユーザー管理機能の学習

Firebase Authenticationで簡単なログインシステムを試す
JWTを使った認証の理解

## フェーズ 4: 本番サイトの開発と公開（4～8週間）

- サーバー・ドメインの準備

レンタルサーバー（さくらのレンタルサーバー、Xserverなど） or
クラウド（AWS, GCP, Vercel, Netlify）
独自ドメインの取得（お名前.com, Google Domainsなど）

- 本番環境でのデプロイ

FTP or CI/CDを使ったデプロイ
SSL設定（https化）

- SEO & パフォーマンス最適化

メタタグ、OGP設定、サイトの速度改善

- サイトの運用と改善

Google Analyticsを導入し、アクセス解析
定期的に記事やコンテンツを更新
ゴール：自分のWebサイトを運営！
このマイルストーンを達成すれば、自前のWebサイトを作成・運用できるようになります！
最初はシンプルなサイトから始めて、徐々に機能を追加すると良いですね。

💡 次のステップとして、ReactやNext.jsを学んでモダンな開発環境に進むのもアリです！

## CSS の基本

```css
/* 1. リセット / ノーマライズ（デフォルトのブラウザスタイルを統一） */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 2. 基本のスタイル（body, html など） */
body {
  font-family: Arial, sans-serif;
  color: #333;
  background-color: #f8f9fa;
  line-height: 1.6;
}

/* 3. レイアウト（コンテナ、フレックスボックスなど） */
.container {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 4. 共通パーツ（ボタン、リンクなど） */
button {
  padding: 10px 20px;
  background: blue;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background: darkblue;
}

/* 5. コンテンツごとのスタイル */
.header {
  background: #333;
  color: white;
  padding: 20px;
}

.footer {
  background: #222;
  color: #fff;
  text-align: center;
  padding: 10px;
}

/* 6. メディアクエリ（レスポンシブ対応） */
@media screen and (max-width: 768px) {
  .container {
    flex-direction: column;
  }
}
```

```css
.selector {
  /* 1. レイアウト (boxモデル) */
  display: flex;
  width: 100%;
  height: 50px;
  margin: 10px;
  padding: 20px;
  border: 1px solid #ddd;
  
  /* 2. 背景・色 */
  background-color: #f8f9fa;
  color: #333;

  /* 3. テキスト関連 */
  font-size: 16px;
  font-weight: bold;
  text-align: center;

  /* 4. その他（アニメーションなど） */
  transition: all 0.3s ease;
}
```

## Next.js

### 