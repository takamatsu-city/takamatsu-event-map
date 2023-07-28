# たかまつイベントマップ

高松市で公開されているイベントを地図上で閲覧することができます。

## データ更新方法

1. 「Upload files」 をクリック
![スクリーンショット 2023-07-28 13 40 34](https://github.com/takamatsu-city/takamatsu-event-map/assets/8760841/f3bcf3d0-4161-45f1-bdc6-5617d552b032)

2. 追加するイベントマスターデータのファイル名を `data.xlsm`に変更
3. ファイルをドラッグ&ドロップする
4. 編集内容を記入
5. 下の「Create new brach for this commit and start a pull request」 を選択。
6. 「Propose changes」 をクリック
![スクリーンショット 2023-07-28 13 44 18](https://github.com/takamatsu-city/takamatsu-event-map/assets/8760841/72d5698c-cba6-48d0-a56e-33c40f3d615f)
7. 「Create pull request」 をクリック
![スクリーンショット 2023-07-28 13 44 32](https://github.com/takamatsu-city/takamatsu-event-map/assets/8760841/5aa57557-ffca-4911-9608-237d8660b6af)

## 開発者向け

ローカル環境を立ち上げるは以下の手順を実行してください。 http://localhost:3000 で開発環境が立ち上がります。

```
$ git clone git@github.com:takamatsu-city/takamatsu-event-map.git
$ cd takamatsu-event-map
$ npm install
$ npm start
```
