# media-delivery-preflight-suite

メディア納品前チェックスイート の MVP リポジトリです。

## 概要

画像、動画、ZIPなどの納品前メタデータとチェック項目を確認し、レポート化する。

## 現在の範囲

- 入力データを検査し、必須項目の不足と注意状態をレポート化する。
- 自動テストで正常系と必須項目不足を検証する。
- 手動テスト手順は `docs/manual-test.md` にまとめる。
- 公開前チェックは `docs/release-checklist.md` を基準にする。

## 検証

```powershell
npm test
```

Unity パッケージの場合は `tools/test-package-structure.ps1` が構造検証を実行します。
