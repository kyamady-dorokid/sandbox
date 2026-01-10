---
title: "Kubernetes: 演習作成（作成タスク）"
labels: enhancement, exercise, kubernetes, devops
---

## 概要
このIssueは「Kubernetes基礎知識と環境構築」項目の演習仕様を作成するタスクです。ローカル環境でのクラスタ構築から、簡易的な Web アプリ公開までのハンズオンを想定します。

> 実装（YAML 作成やアプリのコンテナ化）は別Issueで扱います。本Issueは演習の設計（手順、チェックリスト、検証基準）を作成することが目的です。

## 学習ゴール
- Docker イメージのビルドと最小限の Dockerfile を書けること
- Kubernetes の基本リソース（Pod/Deployment/Service/ConfigMap）を理解すること
- ローカルクラスター（minikube または Docker Desktop）の立ち上げと基本操作ができること
- マニフェストを書いて簡易 Web アプリを公開できること

## 前提条件
- Docker の基本操作ができること
- ローカルマシンに minikube または Docker Desktop をインストールできること

## 成果物（Acceptance Criteria）
- `exercise.md` を作成し、このIssue に添付/リンクすること
- 演習手順（環境構築、アプリのコンテナ化、デプロイ手順、検証手順）を明記すること

## スコープ（MVP）
- ローカル環境で Web アプリが公開されるまでの最小手順を完了できること
- 必要最小限の YAML（Deployment, Service）の例を提示すること

## 作業タスク
1. `exercise.md` をテンプレートから作成
2. 推奨ツールとバージョン（minikube, kubectl, Docker）を指定
3. 簡易マニフェスト例を設計（Deployment + Service）
4. 検証手順（curl またはブラウザで確認）を記載

## 推定作業時間
- 仕様作成: 3〜6 時間

## チェックリスト
- [ ] `exercise.md` を作成して添付/リンクする
- [ ] マニフェストの最小例を記載する
- [ ] 環境構築手順を記載する

## 備考
- ネットワーク設定や権限周りの注意点を補足してください（ローカル環境差異に注意）。
