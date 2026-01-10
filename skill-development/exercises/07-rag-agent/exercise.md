# RAG 型エージェントAPI 演習（MVP）

## 概要
マスタープラン「RAG型エージェントAPIの設計・開発」に従った実装演習。
LangChain と ベクトルDB を組み合わせた検索強化生成（RAG）パイプラインを構築し、複数のデータソース（Web 検索、ローカルDB）から情報を取得して LLM に統合する API を実装する。

## 学習ゴール
- LangChain の基本コンポーネント（Chains, Tools, Agents）を理解して使用できる
- ベクトルDB（Chroma 等）を用いてテキスト埋め込みと検索ができる
- RAG パイプラインの基本フロー（ドキュメント取得 -> ベクトル化 -> 検索 -> LLM 生成）を実装できる
- Google Search API （またはローカル検索）を統合できる

## 期待する成果物
- RAG パイプラインの Python 実装（LangChain 使用）
- ベクトルDB（Chroma 等）の初期化・運用スクリプト
- テスト用データセット（例: JSON や CSV）
- `README.md` に構築手順と API 仕様を記載

## RAG アーキテクチャ（最小例）
```
[Data Sources] 
    -> [Vector DB (Chroma)] 
    -> [Semantic Search] 
    -> [LLM (Local or API)] 
    -> [Response]
```

### コンポーネント
- LangChain: Chains, Agents, Tools
- Chroma: ベクトルDB
- Embeddings: OpenAI API または ローカルモデル
- LLM: Local (Ollama) または OpenAI API
- Tool: Google Custom Search API（任意）

## 前提環境
- Python 3.9+
- LangChain, LangGraph, Chroma, (Ollama または OpenAI API)
- Google Custom Search API キー（任意）

## セットアップ手順（最小例）
1. 依存ライブラリをインストール（requirements.txt）
2. ローカルLLM（Ollama）またはAPI キーを準備
3. ベクトルDB（Chroma）を初期化
4. テストデータセットをロード
5. RAG クエリを実行

## テスト要件
- ベクトルDB へのドキュメント登録が成功する
- セマンティック検索が動作する
- LLM への統合フローが完成して回答が生成される

## 完了条件
- [ ] RAG パイプラインがローカルで動作する
- [ ] ベクトルDB にドキュメントが正常に登録されている
- [ ] クエリに対して LLM が回答を生成する
- [ ] `README.md` に構築手順と使用例を記載されている

## 推定所要時間
- 仕様作成: 4〜8 時間（既に完了）
- 実装: 12〜20 時間

## 備考
- Web 検索の統合は初期段階ではオプション
- ローカル LLM（Ollama）での動作を優先し、API キー不要を目指す
- 高度なプロンプト最適化（Prompt Engineering）は別タスク
