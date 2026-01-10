# Java / SpringBoot 演習（MVP）

## 概要
マスタープラン「Java基礎の見直しとSpringBootコーディング」に従った短期演習（MVP）。
この演習では、最小限の CRUD REST API を Spring Boot で実装し、JPA を用いた DB 連携、最小限の単体テスト、README による起動手順を完成させます。

## 学習ゴール
- Spring Boot プロジェクトの初期構築と自動設定を理解する
- RESTful API の設計と実装（CRUD）を行えるようになる
- JPA/Hibernate を使った基本的なエンティティ設計と DB 操作を理解する
- 単体テスト（JUnit）と簡易的な Docker 化（任意）を経験する

## 期待する成果物
- ソースコード（Spring Boot プロジェクト）
- 最低限の単体テスト（JUnit）
- `README.md` によるローカル起動手順

## 最小 API 仕様（例）
- GET /items          - 全件取得
- GET /items/{id}     - 単一取得
- POST /items         - 作成（JSON ボディ）
- PUT /items/{id}     - 更新（JSON ボディ）
- DELETE /items/{id}  - 削除

### Item モデル（例）
- id: Long
- name: String
- description: String (optional)

## 前提環境
- Java 11/17/21 のいずれか
- Maven または Gradle
- Docker（任意、Docker 化を行う場合）

## セットアップ（最小手順の例）
1. リポジトリをクローン
2. `cd` してビルド（Maven の場合: `./mvnw spring-boot:run`）
3. ブラウザまたは curl でエンドポイントにアクセス

## テスト要件
- 基本的な CRUD フローを検証する単体テスト（Controller と Service の一部）を含む

## 完了条件
- [ ] 実装がローカルで起動し、上記 API が動作する
- [ ] 最低 3 件程度の JUnit テストが成功する
- [ ] `README.md` にセットアップ手順と API 仕様が記載されている

## 推定所要時間
- 仕様作成（既に完了）: 4〜8 時間
- 実装（スターターコードを使わない場合）: 10〜20 時間

## 備考
- Docker 化、CI（GitHub Actions）連携は別タスクとする
- スターターコードを用意する場合は別 Issue を作成して実装を進める

