---
title: "RAG 型エージェントAPI: 演習作成（作成タスク）"
labels: enhancement, exercise, llm, rag, ai
---

## 概要
このIssueは「RAG型エージェントAPIの設計・開発」項目の演習仕様を作成するタスクです。LangChain 等を使った RAG パイプラインの構築手順を定義します。

## 学習ゴール
- LangChain の基本コンポーネント（Chains, Tools, Agents）を理解する
- ベクトル DB と LLM を統合した検索強化生成（RAG）の基本設計を学ぶ
- ローカル LLM の簡易デプロイと API 経由での呼び出しパターンを理解する

## 前提条件
- Python と基本的なパッケージ管理ができること
- ローカルで LLM を動かすための環境（検討段階で可）

## 成果物（Acceptance Criteria）
- `exercise.md` を作成し、このIssue に添付/リンクすること
- RAG パイプライン設計（データ取得 -> ベクトル化 -> 検索 -> LLM 統合）を明示すること

## スコープ（MVP）
- 最低限: ベクトルDB（Chroma 等）と LLM（ローカルまたは API）の連携を示すサンプル構成を提示

## 作業タスク
1. `exercise.md` をテンプレートから作成
2. 必要なコンポーネントとライブラリ（LangChain, Chroma, HTTP クライアント等）を列挙
3. サンプルアーキテクチャ図と API フローを記載

## 推定作業時間
- 仕様作成: 4〜8 時間

## チェックリスト
- [ ] `exercise.md` を作成して添付/リンクする
- [ ] サンプルアーキテクチャとコンポーネント一覧を記載する
