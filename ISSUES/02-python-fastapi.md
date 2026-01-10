---
title: "Python / FastAPI: 演習作成（作成タスク）"
labels: enhancement, exercise, python, fastapi
---

## 概要
このIssueは「Python基礎とFastAPIを使ったAPI構築」項目の演習仕様（MVP）を設計するタスクです。
対象は FastAPI を用いた小規模 REST API の構築で、非同期処理・バリデーション・DB 連携を含めた運用レベルの理解を目的とします。

> 実装作業は別Issueとして管理します。本Issueは演習仕様（`exercise.md`）の作成が目的です。

## 学習ゴール
- FastAPI による API ルート設計とバリデーション（Pydantic）を理解する
- 非同期エンドポイント（async/await）と同期エンドポイントの違いを扱える
- SQLAlchemy/Databases を用いた DB 接続とマイグレーションの基礎を理解する
- 簡易的なテスト（pytest）とローカル起動手順を整備できる

## 前提条件
- Python の基礎（関数、クラス、仮想環境）を理解していること
- 開発環境: Python 3.10+、venv、pip

## 成果物（Acceptance Criteria）
- `exercise.md` を作成し、このIssue に添付/リンクすること
- 演習のMVP定義（期待機能、エンドポイント、入力/出力仕様、セットアップ手順、完了条件）を明確にすること
- 推奨ライブラリと最低バージョン（FastAPI, Uvicorn, SQLAlchemy 等）を明示すること

## スコープ（MVP）
- 最低限: FastAPI で CRUD API が動作すること、Pydantic によるバリデーションがあること、pytest による基本テストがあること

## 作業タスク
1. `exercise.md` をテンプレートから作成
2. 最小エンドポイント設計（例: /items）と入出力スキーマを定義
3. 利用する DB と ORM の方針を決定（SQLite + SQLAlchemy を推奨）
4. テスト要件（pytest サンプル）を記載
5. 完了条件チェックリストを作成

## 推定作業時間
- 仕様作成: 3〜6 時間

## チェックリスト
- [ ] `exercise.md` を作成して添付/リンクする
- [ ] エンドポイントと Pydantic スキーマを定義する
- [ ] テスト要件を明記する

## 備考
- 本Issue で定義した内容を基に実装用 Issue を別途作成してください。
