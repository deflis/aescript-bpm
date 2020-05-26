# BPM Marker(AfterEffects スクリプト)

AfterEffectsで音楽PV等を作るときに便利なBPMマーカーを設置するスクリプトです。

[https://github.com/lian-wired/AE-Scripts/tree/master/bpmMarker] を参考に、ScriptUIの実装やオフセットの実装等を行いました。

![Window](https://user-images.githubusercontent.com/206113/82857310-98043e80-9f4b-11ea-809a-97868797611e.png)

![timeline](https://user-images.githubusercontent.com/206113/82857359-ba965780-9f4b-11ea-952c-1fe2214a142c.png)


## Getting Started / スタートガイド

### Prerequisites / 必要条件

Windows10 上での Adobe AfterEffects 2020(17.1.0) にて動作確認をしています。

### Installing / インストール

[https://github.com/deflis/aescript-bpm/releases] よりJSXファイルをダウンロードしてください。

"ファイル" メニューにあるスクリプトより実行できます。

### ScriptUIとして利用する

下記のディレクトリにスクリプトを配置します。

* Windows： C/Program Files/Adobe/Adobe After Effects 2020/Support Files/Scripts/Script UI Panels/
* Mac： /Applications/Adobe After Effects 2020/Scripts/Script UI Panels/

すると、ウィンドウメニューより `BPM.Marker.jsx` が利用可能になり使えるようになります。

詳しくは、 [FlashBackの解説ページ](https://flashbackj.com/aescripts-scripts-install) などをご覧ください。

## Built With

masterにpushされると自動的にリリースが生成されます。

* Node.js (v12系列で開発しています)
* TypeScript
* Parcel
  * ParcelにGlobalThisを追加する修正を `./packager` で行っています。
  * GlobalThisにthisが入りScriptUIのPanelとして利用できます。

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **deflis** - *Initial work* - [deflis](https://github.com/deflis)

See also the list of [contributors](https://github.com/deflis/arscript-bpm/contributors) who participated in this project.

## License

This project is licensed under the ISC License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* 偉大なる先人 lilian-wired 様
  * [https://github.com/lian-wired/AE-Scripts/tree/master/bpmMarker]
* [Types for Adobe](https://github.com/pravdomil/Types-for-Adobe)
