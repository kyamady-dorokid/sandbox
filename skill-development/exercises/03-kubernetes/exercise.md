# Kubernetes 演習（MVP）

## 概要
マスタープラン「Kubernetes基礎知識と環境構築」に従った実装演習。
ローカル環境でクラスタを構築し、簡易的な Web アプリケーションを Kubernetes でデプロイ・公開する。

## 学習ゴール
- Docker イメージの構築方法を理解し、Dockerfile を書ける
- Kubernetes の基本リソース（Pod, Deployment, Service）の概念を理解できる
- ローカル環境（minikube または Docker Desktop）でクラスタを起動・操作できる
- kubectl コマンドで Pod やリソースを管理できる

## 期待する成果物
- Dockerfile（コンテナイメージ定義）
- Kubernetes マニフェスト（YAML）: Deployment と Service
- `README.md` に環境構築手順と動作確認方法を記載

## 最小 Kubernetes マニフェスト設計（例）
### Deployment
- レプリカ: 2〜3
- イメージ: docker.io/library/（自作イメージまたは公開イメージ）
- ポート: 8000 または 8080

### Service
- Type: LoadBalancer または ClusterIP
- ポートマッピング: 外部ポート 8000 -> コンテナポート 8000 等

## 前提環境
- Docker がインストール済みであること
- minikube または Docker Desktop（Kubernetes 機能有効）
- kubectl

## セットアップ手順（最小例）
1. ローカル環境で minikube または Docker Desktop を起動
2. `kubectl cluster-info` で接続確認
3. Dockerfile をビルド（イメージを作成）
4. Kubernetes マニフェストを適用（`kubectl apply -f deployment.yaml`, `kubectl apply -f service.yaml`）
5. `kubectl get pods`, `kubectl get svc` で動作確認
6. ブラウザまたは curl で外部ポートにアクセス

## テスト要件
- Pod が正常に起動することを確認
- Service 経由で Web アプリにアクセス可能なことを確認

## 完了条件
- [ ] ローカル Kubernetes クラスタが起動している
- [ ] Deployment が正常に動作し、Pod がReady 状態である
- [ ] Service 経由でアプリケーションにアクセス可能である
- [ ] `README.md` に手順が記載されている

## 推定所要時間
- 仕様作成: 3〜6 時間（既に完了）
- 実装: 6〜12 時間

## 備考
- ネットワークポリシーなどの高度な設定は別タスク
- ログ確認（kubectl logs）の基本操作も習得すること
