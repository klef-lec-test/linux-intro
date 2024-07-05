# Linux入門研修用リポジトリ

## timetable-frontend-next

### 概要

このリポジトリは，クラス内で課題や連絡事項を共有しようというものである．
これは Web 版のフロントエンドリポジトリである．

### 参加方法

[この](./manual/onboarding.md)ページを参照されたし．

### 技術選定

#### フロントエンドフレームワーク

フロントエンドフレームワークには[Next.js](https://nextjs.org/)を採用する．  
Next.jsはReactベースのフロントエンドフレームワークであり、JSX/TSX記法およびTypeScriptを用いる。

#### CSSフレームワーク

CSSフレームワークにはTailwind CSSを採用する。
設定するCSSに対応したクラスを設定することによりCSS
が適用されるため、効率よく開発することが可能である。今回は可能な範囲でTailWind CSSを用いた。

#### バックエンド

バックエンドはVercelのServerless FunctionsまたはEdge Functionsを用いる。

#### デプロイ先

デプロイ先にはVercelを採用する。
VercelはNext.jsの開発元の公式の静的ホスティングサービスである。
Vercelはデプロイが簡単であり、CI/CDがほぼ設定なしで利用できる。
