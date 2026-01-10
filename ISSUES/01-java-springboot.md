## Java / SpringBoot: 演習作成（作成タスク）

### 概要
このIssueは「Java基礎の見直しとSpringBootコーディング」項目のための演習コンテンツを設計するタスクです。
本Issueの目的は、マスタープランに沿った学習演習（MVP）を仕様化し、`.github/ISSUE_TEMPLATE/exercise.md` テンプレートに落とし込むことです。

> ※ 実際の実装（コード作成・レビュー・CI 設定等）は別Issueで管理します。本Issueは演習仕様（ドキュメント）作成が目的です。

### 学習ゴール
- Java のモダンな言語機能（Java 17/21 等）を短時間で復習できること
- Spring Boot を使った RESTful API の設計・実装フローを理解し、簡易 CRUD アプリケーションを実装できること
- JPA/Hibernate による DB 統合・エンティティ設計の基礎を理解すること
- ビルド（Maven/Gradle）、単体テスト（JUnit）、および Docker コンテナ化の基本を体験すること

### 前提条件
- Java の基本構文・オブジェクト指向の基礎を理解していること（本計画の前提）
- 開発環境: Java（11/17/21 任意）、Maven または Gradle、Docker（任意）

### 成果物（Acceptance Criteria）
- `exercise.md`（`.github/ISSUE_TEMPLATE/exercise.md` 準拠）を作成し、このIssue に添付またはリンクすること
- 演習のMVPとして下記が明確に定義されていること:
	- 期待する機能（例: REST API による CRUD）
	- 必要なエンドポイントと入出力仕様（簡易 API 仕様）
	- 前提環境とセットアップ手順（ローカルでの起動手順）
	- 完了条件（動作確認手順、最低限のテスト、README の記載など）
	- 推定所要時間（例: 10〜20 時間）
- 任意: スターターコードの格納場所（リポジトリ内パス）を指定する

### スコープ（MVP）
- 最低限: CRUD が動作すること、最小限の単体テストが存在すること、README に起動手順があること
- 追加オプション（Docker 化、GitHub Actions による CI）は別タスクで扱う

### 作業タスク（分割）
1. `.github/ISSUE_TEMPLATE/exercise.md` をコピーし、各セクション（概要・目的・入出力・前提・制約・完了条件）を埋める
2. 最小エンドポイント一覧を設計（例: GET /items, POST /items, GET /items/{id}, PUT /items/{id}, DELETE /items/{id}）
3. 利用する技術スタックとバージョンを明記（Java, Spring Boot, JPA, DB 種類）
4. テスト要件（JUnit のサンプルケース）を定義
5. 完了条件チェックリストを Issue に追加

### 推定作業時間
- 仕様作成（このIssue）: 4〜8 時間
- スターターコード作成（任意、別Issue）: 6〜12 時間

### チェックリスト
- [ ] `exercise.md` を作成して添付/リンクする
- [ ] API エンドポイント一覧を定義する
- [ ] 前提環境とセットアップ手順を記載する
- [ ] 完了条件（テスト、README）を定義する

### 備考
- 本Issue は演習仕様作成が目的です。実装作業は別Issueで管理してください。
