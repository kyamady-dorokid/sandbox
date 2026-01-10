# GitHub 機能一覧・実践演習（MVP）

## 概要
マスタープラン「GitHub機能の一覧リスティングと概要把握」に従った実践演習。
Pull Request、Code Review、Issues、GitHub Actions を組み合わせた実践的なワークフローを体験する。

## 学習ゴール
- GitHub の主要機能（PR、Issues、Projects）を使い分けできる
- ブランチ戦略とマージワークフローを理解・実行できる
- Code Review の文化と基本マナーを習得する
- GitHub Actions を使ったワークフロー自動化の全体像を把握する

## 期待する成果物
- 実践的なワークフロー設計ドキュメント（PR フロー、レビュー基準等）
- 複数の GitHub 機能を組み合わせた実装例（例: Issue -> PR -> Review -> Action -> Merge）

## 実践ワークフロー（最小例）
1. Issue を作成（タスク定義）
2. ブランチを切って実装（例: `feature/xxx`）
3. Commit を重ねる
4. Pull Request を作成
5. Code Review リクエスト
6. GitHub Actions が自動テストを実行
7. Approve 後に Merge
8. Issue をクローズ

## 前提環境
- GitHub リポジトリへのアクセス
- Git の基本操作ができること

## セットアップ手順（最小例）
1. Issue を 1 つ作成
2. 関連するブランチを切る
3. コミットと push
4. PR を作成
5. レビューコメントを追加（自分で行ってもよい）
6. Approve と Merge

## テスト要件
- 上記ワークフローを実践し、各ステップが正常に実行されることを確認

## 完了条件
- [ ] Issue を作成できる
- [ ] ブランチから PR を作成できる
- [ ] GitHub Actions がワークフロー内で実行される
- [ ] PR をマージできる
- [ ] Issue がクローズできる

## 推定所要時間
- 仕様作成: 2〜4 時間（既に完了）
- 実践: 2〜4 時間

## 備考
- ブランチ保護ルール、状態チェック（required status checks）などは別で学習
