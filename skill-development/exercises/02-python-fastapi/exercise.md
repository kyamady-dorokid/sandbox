# Python / FastAPI 演習（MVP）

## 概要
マスタープラン「Python基礎とFastAPIを使ったAPI構築」に従った実装演習。
FastAPI を用いた REST API の実装、Pydantic によるバリデーション、SQLAlchemy による DB 連携、pytest によるテストを含める。

## 学習ゴール
- FastAPI でシンプルな API ルートを定義・実装できる
- Pydantic スキーマでリクエスト/レスポンス検証ができる
- SQLAlchemy ORM で DB アクセスができる
- async/await パターンを理解し非同期エンドポイントを書ける

## 期待する成果物
- FastAPI アプリケーション（メインスクリプト、DB モデル、ルート定義等）
- pytest による最低 3 つ以上のテストケース
- `README.md` にセットアップ・実行手順を記載

## 最小 API 仕様（例）
- GET /items            - 全件取得
- GET /items/{item_id}  - 単一取得
- POST /items           - 作成（JSON ボディ）
- PUT /items/{item_id}  - 更新（JSON ボディ）
- DELETE /items/{item_id} - 削除

### Item モデル（例）
- id: int
- name: str
- description: str (optional)

## 前提環境
- Python 3.10+
- venv または conda
- FastAPI, Uvicorn, SQLAlchemy, pytest（pip でインストール可）

## セットアップ手順（最小例）
1. Python 仮想環境を作成・有効化
2. 依存ライブラリをインストール（requirements.txt または pip）
3. DB を初期化（SQLite でよい）
4. `uvicorn main:app --reload` で起動
5. ブラウザで `http://localhost:8000/docs` にアクセス（Swagger UI が表示される）

## テスト要件
- 基本的な CRUD フローを検証する pytest ケースを含む
- 例: CREATE -> READ -> UPDATE -> DELETE の一連の操作が成功することを確認

## 完了条件
- [ ] FastAPI アプリが起動し、Swagger UI でエンドポイントが表示される
- [ ] 最低 3 つ以上の pytest テストが成功する
- [ ] `README.md` にセットアップ手順と API 仕様が記載されている
- [ ] requirements.txt に必要ライブラリが列挙されている

## 推定所要時間
- 仕様作成: 3〜6 時間（既に完了）
- 実装（スターターコードを使わない場合）: 8〜15 時間

## 備考
- Docker 化は別タスクとする
- 非同期処理（async/await）は最低 1 つはエンドポイントに組み込むこと
