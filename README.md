# react-webpack-tdd
ReactとJestを使ってTDDするサンプルプロジェクト

下記記事の写景になっています。React16だと動かなかったので、微妙にセットアップとか変えてます。
(ついでに、chaiをpower-assertに変えました。)

React16仕様なのですが、React15で動かしたい場合は、[enzyme公式DOC](http://airbnb.io/enzyme/docs/installation/index.html)を見てください。

[ReactでTDD（テスト駆動開発）を始めよう : 環境構築からテスト作成、機能実装までの詳解ガイド](http://postd.cc/getting-started-with-tdd-in-react/)

# run run run

## テスト実行（単発）

```bash
npm t
```

## テスト実行（watch）

```bash
npm run watch
```

## ビルド＆Webサーバー起動

テスト時には必要なしです。画面で確認したい場合にどうぞ。

```bash
npm run quik
```
