---
title: "Java / SpringBoot: 演習作成（作成タスク）"
labels: enhancement, exercise, java, springboot
---

## 概要
このIssueは「Java基礎の見直しとSpringBootコーディング」項目のための演習コンテンツを作成するタスクです。
本Issueの目的は、マスタープランに沿った学習演習（MVP）を設計し、`exercise.md` テンプレートに落とし込み、必要な成果物・採点基準・実施手順を明確化することです。

※ 実際の演習（コード実装）は別Issue/別タスクで行います。本Issueは「演習内容（仕様）」を作るための作業になります。

## 目的（Learning Goals）
- Java のモダンな言語機能（Java 17/21 等）を短時間で復習できること。
- Spring Boot を使った RESTful API の設計・実装フローを理解し、簡易 CRUD アプリケーションを実装できること。
- JPA/Hibernate による DB 統合・エンティティ設計の基礎を理解すること。
- ビルド（Maven/Gradle）、単体テスト（JUnit）、および Docker コンテナ化の基本を体験すること。

## 前提条件
- Java の基本構文・オブジェクト指向の基礎を既に理解していること（本計画受講者は前提習得済みとする）。
- 開発環境：Java（11/17/21 任意）、Maven or Gradle、Docker（任意）

## 成果物（Acceptance Criteria）
- `exercise.md`（`.github/ISSUE_TEMPLATE/exercise.md` に従ったドキュメント）を作成し、このIssue に添付/リンクすること。
- 演習のMVPとして下記が明示されていること：
	- 期待する機能（例：REST APIでのCRUD）
	- 必要なエンドポイントと入力/出力の仕様（簡易なAPI仕様）
	- 前提環境とセットアップ手順（ローカルで動かす手順）
	- 採点/完了条件（動作確認、テスト、READMEの整備等）
	- 推定所要時間（例：10〜20時間）
- optional: スターターコードの場所（リポジトリ内に用意する場合はパスを記載）

## スコープ（MVP）
- 最低限で「CRUD API が動作すること」「最小限の単体テストが存在すること」「README に起動手順が書かれていること」を満たす。
- 追加オプション（Docker 化、GitHub Actions による CI）は別のタスクとして明示する。

## タスク（作業の分割）
1. `exercise.md` テンプレートをコピーして各セクション（概要、目的、入出力/成果物、前提、制約、完了条件、備考）を埋める。
2. API のエンドポイント一覧（最小セット）を設計する（例：GET /items, POST /items, GET /items/{id}, PUT /items/{id}, DELETE /items/{id}）。
3. 必要な技術スタックとバージョンを明示する（Java, Spring Boot, JPA, DB 種類）。
4. テスト要件（JUnit のサンプルテストケース）を明記する。
5. 完了条件チェックリストを作成する（Issue のチェックリストとして登録）。

## 推定作業時間
- 仕様作成（このIssue の内容作成）: 4〜8時間
- スターターコード作成（任意、別Issue）: 6〜12時間

## チェックリスト
- [ ] `exercise.md` を作成し、このIssue に添付/リンクする
- [ ] API エンドポイント一覧を定義する
- [ ] 前提環境 + セットアップ手順を記載する
- [ ] 完了条件（テスト、README）を定義する

## 備考
- 本Issue は「演習内容の仕様作成」が目的です。実装タスク（コードの作成・レビュー・CI 設定等）は別Issueで管理してください。
