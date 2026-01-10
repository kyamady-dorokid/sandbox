# クラウド WEB サービス公開 演習（MVP）

## 概要
マスタープラン「パブリッククラウドでのWEBサービス公開基礎」に従った実装演習。
AWS または GCP を選択し、シンプルな Web アプリケーションをデプロイ・公開する手順を習得する。

## 学習ゴール
- クラウドサービスの基本（Compute, Storage, Database）を理解できる
- IAM（認証・認可）の基本設定ができる
- Web アプリケーションをクラウドにデプロイできる
- デプロイ後のモニタリング・ログ確認ができる

## 期待する成果物
- デプロイ手順書（AWS または GCP）
- インフラストラクチャ定義（例: CloudFormation, Terraform, または gcloud コマンド集）
- Web アプリケーション（Java Spring Boot または Python FastAPI）
- `README.md` に公開 URL とセットアップ手順を記載

## デプロイ対象アーキテクチャ（最小例）

### AWS を選択した場合
- Compute: EC2 または Elastic Beanstalk
- Database: RDS (PostgreSQL または MySQL)
- Storage: S3（任意）

### GCP を選択した場合
- Compute: Cloud Run または Compute Engine
- Database: Cloud SQL
- Storage: Cloud Storage（任意）

## 前提環境
- AWS または GCP のアカウント（無料枠で対応可）
- CLI ツール（AWS CLI または gcloud）
- 対象アプリケーション（Java/Python）

## セットアップ手順（最小例）
1. クラウド環境の認証・初期化
2. DB インスタンスを作成
3. アプリケーションをコンテナ化（Docker）
4. コンテナをレジストリにプッシュ
5. コンピュート環境にデプロイ
6. セキュリティグループ/ファイアウォール設定
7. 外部 IP でアクセス確認

## テスト要件
- デプロイしたアプリケーションが外部からアクセス可能であること
- DB への読み書きが正常に動作すること
- ログが正常に記録されていること

## 完了条件
- [ ] クラウド上でアプリケーションが起動している
- [ ] 外部 URL でアプリにアクセス可能である
- [ ] DB に接続してデータを操作できる
- [ ] モニタリング/ログが表示される
- [ ] `README.md` に手順が記載されている

## 推定所要時間
- 仕様作成: 3〜6 時間（既に完了）
- 実装: 6〜12 時間

## 備考
- コスト最適化（Reserved Instances、Auto Scaling）は別タスク
- SSL/TLS 設定（HTTPS）も後で実装
- 本番環境への移行は別プロジェクトとして扱う
