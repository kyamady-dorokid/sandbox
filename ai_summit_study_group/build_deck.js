const pptxgen = require("pptxgenjs");
const A = "assets/";

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.33 x 7.5
pres.author = "AI学習会";
pres.title = "AI時代の要件定義と仕様駆動開発";
const W = 13.33, H = 7.5;

// palette
const NAVY = "1F3A5F", TEAL = "0E7C86", INK = "23282D", MUTE = "6B7280",
      LIGHT = "F2F5F7", WHITE = "FFFFFF", AMBER = "C2410C",
      AMBERBG = "FBEDE3", TEALBG = "E7F1F2", LINE = "DDE3E8";
const HEAD = "Hiragino Sans", BODY = "Hiragino Sans";
const sh = () => ({ type: "outer", color: "000000", blur: 9, offset: 2, angle: 135, opacity: 0.13 });

function header(slide, no, title, kicker) {
  slide.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 0.5, w: 0.16, h: 0.66, fill: { color: TEAL }, line: { type: "none" } });
  if (kicker) {
    slide.addText(kicker, { x: 0.95, y: 0.44, w: 11.6, h: 0.32, fontFace: BODY, fontSize: 13, color: TEAL, bold: true, margin: 0, charSpacing: 1 });
    slide.addText(title, { x: 0.95, y: 0.76, w: 11.6, h: 0.5, fontFace: HEAD, fontSize: 23, color: NAVY, bold: true, margin: 0 });
  } else {
    slide.addText(title, { x: 0.95, y: 0.5, w: 11.6, h: 0.66, fontFace: HEAD, fontSize: 28, color: NAVY, bold: true, margin: 0, valign: "middle" });
  }
  slide.addText(String(no).padStart(2, "0"), { x: 12.35, y: 0.5, w: 0.65, h: 0.5, fontFace: HEAD, fontSize: 13, color: MUTE, align: "right", margin: 0 });
}
function rcard(slide, x, y, w, h, fill, opts = {}) {
  slide.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y, w, h, rectRadius: 0.08, fill: { color: fill }, line: opts.line || { type: "none" }, shadow: opts.shadow ? sh() : undefined });
}
function sqPhoto(slide, path, x, y, s) {
  rcard(slide, x - 0.04, y - 0.04, s + 0.08, s + 0.08, WHITE, { shadow: true });
  slide.addImage({ path, x, y, w: s, h: s, sizing: { type: "cover", w: s, h: s }, rounding: false });
}

// =========================================================
// S1 TITLE
// =========================================================
let s = pres.addSlide(); s.background = { color: WHITE };
s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.3, h: H, fill: { color: NAVY }, line: { type: "none" } });
// summit logo (1001x158 -> w5.2 h0.82)
s.addImage({ path: A + "summit-logo-black.png", x: 1.0, y: 0.85, w: 5.2, h: 0.82 });
s.addText("社内AI学習会", { x: 1.0, y: 2.35, w: 11, h: 0.4, fontFace: BODY, fontSize: 16, color: TEAL, bold: true, charSpacing: 2, margin: 0 });
s.addText("AI時代の要件定義と\n仕様駆動開発（SDD）", { x: 1.0, y: 2.8, w: 11.5, h: 1.9, fontFace: HEAD, fontSize: 42, color: NAVY, bold: true, lineSpacingMultiple: 1.05, margin: 0 });
s.addText([
  { text: "結論：", options: { bold: true, color: AMBER } },
  { text: "AIが速いほど、起点の要件定義が効く。", options: { color: INK } },
], { x: 1.0, y: 4.95, w: 11.5, h: 0.5, fontFace: HEAD, fontSize: 19, margin: 0 });
s.addShape(pres.shapes.LINE, { x: 1.0, y: 5.85, w: 6.5, h: 0, line: { color: LINE, width: 1 } });
s.addText("AI要件定義サミット 2026 レポート（2026年6月11日 / TODA HALL & CONFERENCE TOKYO・主催 ROUTE06）より", { x: 1.0, y: 6.0, w: 11.5, h: 0.4, fontFace: BODY, fontSize: 13, color: MUTE, margin: 0 });

// =========================================================
// S2 GOAL & FLOW
// =========================================================
s = pres.addSlide(); s.background = { color: WHITE };
header(s, 2, "本日のゴールと流れ");
s.addText("本日のゴール", { x: 0.95, y: 1.4, w: 6, h: 0.4, fontFace: HEAD, fontSize: 16, color: TEAL, bold: true, margin: 0 });
s.addText([
  { text: "AI時代こそ「要件定義」の重要性が増していることを腹落ちする", options: { bullet: { code: "2022" }, breakLine: true, paraSpaceAfter: 8 } },
  { text: "だから当社は「仕様駆動開発（SDD）」に取り組む、という方向性を理解する", options: { bullet: { code: "2022" } } },
], { x: 0.95, y: 1.85, w: 11.4, h: 1.0, fontFace: BODY, fontSize: 16, color: INK });
const acts = [
  ["① 事実", "サミット レポート", "大企業ですら苦戦。全講演に共通する\n「曖昧な要件定義」という課題", TEAL],
  ["② 主張", "だから仕様駆動開発", "生産性を上げるAI駆動開発には、\n精度の高い要件定義が前提になる", NAVY],
  ["③ 提案", "SDDを一枚絵で", "壁打ち / フェーズゲート / 確実な\nドキュメント化 = 引き継ぎとトレース", AMBER],
];
const cw = 3.85, gap = 0.18, cy = 3.35, ch = 2.65;
acts.forEach((a, i) => {
  const x = 0.95 + i * (cw + gap);
  rcard(s, x, cy, cw, ch, LIGHT, { shadow: true });
  s.addShape(pres.shapes.RECTANGLE, { x, y: cy, w: cw, h: 0.12, fill: { color: a[3] }, line: { type: "none" } });
  s.addText(a[0], { x: x + 0.25, y: cy + 0.3, w: cw - 0.5, h: 0.35, fontFace: HEAD, fontSize: 14, color: a[3], bold: true, margin: 0 });
  s.addText(a[1], { x: x + 0.25, y: cy + 0.72, w: cw - 0.5, h: 0.5, fontFace: HEAD, fontSize: 19, color: NAVY, bold: true, margin: 0 });
  s.addText(a[2], { x: x + 0.25, y: cy + 1.45, w: cw - 0.5, h: 1.0, fontFace: BODY, fontSize: 12.5, color: INK, margin: 0, lineSpacingMultiple: 1.12 });
  if (i < 2) s.addText("▶", { x: x + cw - 0.02, y: cy + ch / 2 - 0.2, w: gap + 0.04, h: 0.4, fontFace: BODY, fontSize: 14, color: MUTE, align: "center", margin: 0 });
});
s.addText("説明 約20分 ＋ 質疑 約10分　／　今日は概要と要点まで。具体的な導入・運用は別途「実践回」で。", { x: 0.95, y: 6.45, w: 11.4, h: 0.4, fontFace: BODY, fontSize: 12, color: MUTE, italic: true, margin: 0 });

// =========================================================
// S3 SUMMIT OVERVIEW
// =========================================================
s = pres.addSlide(); s.background = { color: WHITE };
header(s, 3, "AI要件定義サミット 2026 とは", "サミットレポート");
s.addText([
  { text: "テーマ：", options: { bold: true, color: NAVY } },
  { text: "「AI要件定義が支える、カスタマイズ大国・日本のシステム設計の未来」", options: { color: INK } },
], { x: 0.95, y: 1.45, w: 11.4, h: 0.45, fontFace: BODY, fontSize: 15, margin: 0 });
const orgs = [
  ["官・公的機関", "内閣府 / IPA", NAVY],
  ["大手IT・SIer", "NTTデータ / 日立 / IBM", TEAL],
  ["事業会社・ベンチャー", "DeNA / イオン / LayerX 他", AMBER],
];
orgs.forEach((o, i) => {
  const x = 0.95 + i * (cw + gap);
  rcard(s, x, 2.05, cw, 1.45, LIGHT, { shadow: true });
  s.addShape(pres.shapes.RECTANGLE, { x, y: 2.05, w: 0.12, h: 1.45, fill: { color: o[2] }, line: { type: "none" } });
  s.addText(o[0], { x: x + 0.3, y: 2.25, w: cw - 0.5, h: 0.4, fontFace: HEAD, fontSize: 14, color: o[2], bold: true, margin: 0 });
  s.addText(o[1], { x: x + 0.3, y: 2.7, w: cw - 0.5, h: 0.6, fontFace: BODY, fontSize: 15, color: INK, margin: 0 });
});
rcard(s, 0.95, 3.95, 11.75, 2.0, NAVY, { shadow: true });
s.addText("現地レポート", { x: 1.3, y: 4.2, w: 4, h: 0.35, fontFace: HEAD, fontSize: 14, color: "9FC3C9", bold: true, margin: 0 });
s.addText("会場はキャパオーバーの超満員。立ち見・廊下もすし詰め。", { x: 1.3, y: 4.6, w: 11, h: 0.55, fontFace: HEAD, fontSize: 23, color: WHITE, bold: true, margin: 0 });
s.addText("＝ それだけ世の企業の「AIと要件定義」への関心が高いことの裏返し。", { x: 1.3, y: 5.25, w: 11, h: 0.45, fontFace: BODY, fontSize: 15, color: "CADCFC", margin: 0 });
s.addText("2026年6月11日（木）／ 後援：日本経済団体連合会", { x: 0.95, y: 6.1, w: 11.4, h: 0.35, fontFace: BODY, fontSize: 11.5, color: MUTE, italic: true, margin: 0 });

// =========================================================
// S4 聴講した講演 overview (thumbnails)
// =========================================================
s = pres.addSlide(); s.background = { color: WHITE };
header(s, 4, "私が聴いた講演（基調＋5セッション）", "サミットレポート");
const lineup = [
  ["nanba.png", "南場 智子", "DeNA｜基調講演", AMBER],
  ["umiura.png", "海浦 隆一", "NTTデータ", TEAL],
  ["hirose.png", "広瀬 雄二", "日立製作所", TEAL],
  ["ohira.png", "大平 利幸", "内閣府", NAVY],
  ["fujimaki.png", "藤巻・木下", "日本IBM", TEAL],
  ["hiramoto.png", "平本 健二", "IPA", NAVY],
];
const tw = 1.8, tgap = (11.4 - tw * 6) / 5, ty = 1.95, ps = 1.55;
lineup.forEach((l, i) => {
  const x = 0.95 + i * (tw + tgap);
  sqPhoto(s, A + l[0], x + (tw - ps) / 2, ty, ps);
  s.addText(l[1], { x: x - 0.1, y: ty + ps + 0.18, w: tw + 0.2, h: 0.32, fontFace: HEAD, fontSize: 14, color: NAVY, bold: true, align: "center", margin: 0 });
  s.addText(l[2], { x: x - 0.1, y: ty + ps + 0.52, w: tw + 0.2, h: 0.3, fontFace: BODY, fontSize: 11, color: l[3], bold: true, align: "center", margin: 0 });
});
rcard(s, 0.95, 4.95, 11.75, 1.35, TEALBG);
s.addText([
  { text: "読み解き方： ", options: { bold: true, color: TEAL } },
  { text: "各講演を ", options: { color: INK } },
  { text: "「概要 → 気づき → 示唆」", options: { bold: true, color: NAVY } },
  { text: " の3点で整理。大手・官公庁の生の声から、要件定義の重要性を確認していく。", options: { color: INK } },
], { x: 1.3, y: 5.0, w: 11.1, h: 1.25, fontFace: BODY, fontSize: 15, valign: "middle", lineSpacingMultiple: 1.1 });

// =========================================================
// talk slide template (概要 / 気づき / 示唆)
// =========================================================
function talk(no, kicker, title, photos, name, role, overview, awareness, insight, srcNote) {
  const sl = pres.addSlide(); sl.background = { color: WHITE };
  header(sl, no, title, kicker);
  // photo column
  const px = 0.95;
  if (photos.length === 1) {
    sqPhoto(sl, A + photos[0], px + 0.15, 1.6, 2.1);
  } else {
    sqPhoto(sl, A + photos[0], px, 1.6, 1.35);
    sqPhoto(sl, A + photos[1], px + 1.5, 1.6, 1.35);
  }
  sl.addText(name, { x: px - 0.05, y: 3.95, w: 2.55, h: 0.4, fontFace: HEAD, fontSize: 16, color: NAVY, bold: true, margin: 0 });
  sl.addText(role, { x: px - 0.05, y: 4.35, w: 2.6, h: 1.0, fontFace: BODY, fontSize: 11, color: MUTE, margin: 0, lineSpacingMultiple: 1.1 });
  if (srcNote) sl.addText(srcNote, { x: px - 0.05, y: 6.35, w: 2.6, h: 0.5, fontFace: BODY, fontSize: 9.5, color: MUTE, italic: true, margin: 0, lineSpacingMultiple: 1.05 });
  // content column
  const cx = 3.75, cwid = 8.9;
  // 概要
  sl.addShape(pres.shapes.RECTANGLE, { x: cx, y: 1.6, w: 0.7, h: 0.34, fill: { color: NAVY }, line: { type: "none" } });
  sl.addText("概要", { x: cx, y: 1.6, w: 0.7, h: 0.34, fontFace: HEAD, fontSize: 12, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });
  sl.addText(overview, { x: cx + 0.85, y: 1.58, w: cwid - 0.85, h: 1.1, fontFace: BODY, fontSize: 13.5, color: INK, margin: 0, valign: "top", lineSpacingMultiple: 1.12 });
  // 気づき
  const ay = 2.95;
  sl.addShape(pres.shapes.RECTANGLE, { x: cx, y: ay, w: 0.7, h: 0.34, fill: { color: TEAL }, line: { type: "none" } });
  sl.addText("気づき", { x: cx, y: ay, w: 0.7, h: 0.34, fontFace: HEAD, fontSize: 11, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });
  sl.addText(awareness.map(t => ({ text: t, options: { bullet: { code: "2022" }, breakLine: true, paraSpaceAfter: 6 } })),
    { x: cx + 0.85, y: ay - 0.02, w: cwid - 0.85, h: 1.7, fontFace: BODY, fontSize: 13, color: INK, margin: 0, valign: "top", lineSpacingMultiple: 1.05 });
  // 示唆 (highlight)
  const iy = 4.85;
  rcard(sl, cx, iy, cwid, 1.95, AMBERBG);
  sl.addShape(pres.shapes.RECTANGLE, { x: cx + 0.25, y: iy + 0.25, w: 0.7, h: 0.34, fill: { color: AMBER }, line: { type: "none" } });
  sl.addText("示唆", { x: cx + 0.25, y: iy + 0.25, w: 0.7, h: 0.34, fontFace: HEAD, fontSize: 12, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });
  sl.addText(insight.map(t => ({ text: t, options: { bullet: { code: "2022" }, breakLine: true, paraSpaceAfter: 6 } })),
    { x: cx + 1.1, y: iy + 0.22, w: cwid - 1.35, h: 1.55, fontFace: BODY, fontSize: 13.5, color: "7C2D12", bold: false, margin: 0, valign: "top", lineSpacingMultiple: 1.08 });
  return sl;
}

// S5 DeNA keynote
talk(5, "基調講演｜DeNA 南場 智子", "AIで「時間」は浮く。問題はその使い道",
  ["nanba.png"], "南場 智子",
  "DeNA 代表取締役会長 ／ デライト・ベンチャーズ マネージングパートナー",
  "AIエージェントで業務量を従来の約6割まで圧縮。浮いた時間を新規事業に振り向ける狙いだった。",
  ["だが実際には、浮いた時間の約9割が既存業務に吸われてしまった。", "効率化そのものは進んでも、それが新しい価値の創出には自動的につながらない。"],
  ["「新規に充てろ」とルールで縛らざるを得なかった。", "＝ 効率化を価値に変えるには、仕組み・ルールで方向づけが要る（後段のSDDへの伏線）。"],
  "※ 現地聴講メモより（本講演はインタビュー記事なし）");

// S6 NTT Data
talk(6, "14:00-14:40｜NTTデータ 海浦 隆一", "「AIネイティブ開発」：人とAIの作業が逆転する",
  ["umiura.png"], "海浦 隆一",
  "NTTデータグループ 技術革新統括本部 AI技術部 部長",
  "AIが成果物を生成し、人が品質と説明責任を担う「AIネイティブ開発」へ移行。人とAIの役割が逆転していく。",
  ["効率化はコーディングが中心。AI出力をどのフェーズで確認すれば品質を担保できるか、標準が未確立。", "AI最適化テキストは承認者に伝わりにくく、説明資料の作り替え工数はむしろ増える。"],
  ["「コード先行」は品質が出ず断念。人間中心プロセスの流れは維持し、上流で“暗黙知の言語化”が最大のギャップ。", "要件定義の段階で何を準備するかが、後工程の品質を決める。"]);

// S7 Hitachi
talk(7, "14:50-15:30｜日立製作所 広瀬 雄二", "動くアプリで「合意を前倒し」する（AI×ローコード）",
  ["hirose.png"], "広瀬 雄二",
  "日立製作所 デジタルシステム＆サービス AI＆ソフトウェアサービスBU 担当本部長",
  "生成AI×ローコードで「開始30分で動くアプリ」を生成。仕様推論→ドキュメント→定義ファイルを段階的に作る。",
  ["「こういうものを作る」という合意形成に時間がかかる。メンバー増で認識を揃え続けるのが大変。", "作り手と顧客の認識ギャップは、AI登場前から繰り返される構造的課題。"],
  ["「動く成果物」を見せれば合意を前倒しできる（テキスト説明より実装物が解像度を上げる）。", "ドキュメントは「人が読む前提」から「AIも理解・活用する前提」へ発想転換。"]);

// S8 Cabinet Office
talk(8, "15:40-16:20｜内閣府 大平 利幸", "政府調達の“負のループ”をAI駆動で断ち切る",
  ["ohira.png"], "大平 利幸",
  "内閣府 規制改革推進室 参事官（デジタル・AI担当）",
  "政府情報システム調達へのAI駆動開発の導入促進。構造的課題の解決に向けた方向性を提示。",
  ["ベンダーロックイン・知識の非対称・スパゲッティコードという「負のループ」。", "調達ガイドラインにAIの記載がほぼなく、現場は「使っていいか分からない」。"],
  ["最初からAIレディな環境を（脱Excel＝Markdown／JSONなどテキストベース）。標準・ルールを明文化。", "ロードマップを引き、失敗してもいいから「まずやってみる（Move Fast）」。"],
  "※ 現地聴講メモより（本講演はインタビュー記事なし）");

// S9 IBM
talk(9, "16:30-17:10｜日本IBM 藤巻 智彦・木下 智文", "AI開発をブラックボックスにしない",
  ["fujimaki.png", "kinoshita.png"], "藤巻 智彦／木下 智文",
  "日本アイ・ビー・エム（テクニカルセールス／Agentic AI 変革リード）",
  "要件→設計→コード→テストをAIで貫く構想（ELM／Engineering AI HUB／IBM Bob）。社内9,000名で約45%の効率化。",
  ["要件・設計・実装・テストが別事業体に分断し、全体を見通せる人がいない。", "ツール分散で変更の影響範囲の把握が困難。外注ではAI生成物の信用基準・ガイドラインが未成熟。"],
  ["「デジタルスレッド」で要件〜テストを追跡可能に＝途中で立ち止まって確認できる。", "「人が説明できなければ発注元は受け入れられない」。トレーサビリティと要求品質を押さえつつ加速。"]);

// S10 IPA
talk(10, "17:20-18:00｜IPA 平本 健二", "「要件定義は社会常識である」要求工学のすすめ",
  ["hiramoto.png"], "平本 健二",
  "IPA デジタル基盤センター長 ／ AIセーフティ・インスティテュート 副所長",
  "プロンプトもAI駆動開発も本質は要件定義。要求工学とモデリングの標準化で、AI時代のものづくりを支える。",
  ["自動車・建築は「モデル＆シミュレーション前提」。ソフトだけ要件の出力が“揺らぎのある文章”のまま。", "日本のマニュアルは行間が広く、AIには理解困難。明示的な記述への転換が要る。"],
  ["モデリングで構造・判断ロジックを追跡可能に＝説明責任・トレース（プロベナンス）の確保。", "要求工学の型（ゴール／制約／ステークホルダー）で抜け漏れを潰し、AIへ的確に指示する。"]);

// =========================================================
// S11 共通キーワード (highlight, dark)
// =========================================================
s = pres.addSlide(); s.background = { color: NAVY };
s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.3, h: H, fill: { color: AMBER }, line: { type: "none" } });
s.addText("基調から官公庁まで、全講演に共通したキーワード", { x: 1.0, y: 1.5, w: 11, h: 0.5, fontFace: BODY, fontSize: 18, color: "9FC3C9", bold: true, margin: 0 });
s.addText("「曖昧な要件定義」", { x: 1.0, y: 2.2, w: 11.5, h: 1.2, fontFace: HEAD, fontSize: 52, color: WHITE, bold: true, margin: 0 });
s.addText([
  { text: "従来工程でも ", options: {} },
  { text: "AI活用でも", options: { bold: true, color: WHITE } },
  { text: "、曖昧な要件は手戻り・曖昧な出力を生む。", options: {} },
], { x: 1.0, y: 3.75, w: 11.5, h: 0.6, fontFace: BODY, fontSize: 20, color: "CADCFC", margin: 0 });
rcard(s, 1.0, 4.75, 11.3, 1.35, "16314F");
s.addText([
  { text: "AIは増幅器。", options: { bold: true, color: "F9C784" } },
  { text: " 入力（要件）が曖昧なら、出力もより速く・大量に曖昧になる。", options: { color: WHITE } },
], { x: 1.4, y: 4.75, w: 10.6, h: 1.35, fontFace: HEAD, fontSize: 20, valign: "middle", margin: 0 });

// =========================================================
// S12 BRIDGE / 前半まとめ
// =========================================================
s = pres.addSlide(); s.background = { color: WHITE };
header(s, 12, "前半まとめ：だから「仕様駆動開発」", "サミットレポート → 当社の方針");
rcard(s, 0.95, 1.65, 11.4, 1.5, LIGHT, { shadow: true });
s.addText([
  { text: "AIで速く作れる時代だからこそ、", options: { color: INK } },
  { text: "起点の要件定義の精度", options: { bold: true, color: AMBER } },
  { text: "がアウトプットの質を決める。", options: { color: INK } },
], { x: 1.3, y: 1.9, w: 10.8, h: 1.0, fontFace: HEAD, fontSize: 23, valign: "middle", margin: 0, lineSpacingMultiple: 1.1 });
const map = [
  ["効率化の時間を価値に（DeNA）", "仕組み・ルールで方向づける"],
  ["要件定義で何を準備するかが品質を決める（NTT）", "上流で暗黙知を言語化して残す"],
  ["動く成果物で合意を前倒し（日立）", "壁打ち→仕様化のフェーズを置く"],
  ["AIレディ環境・標準の明文化（内閣府）", "テキストベースで仕様を管理"],
  ["ブラックボックス化を防ぐ／説明責任（IBM）", "合意・履歴のトラッキング"],
  ["要件定義は社会常識・要求工学（IPA）", "人の承認ゲートで抜け漏れを潰す"],
];
s.addText("サミットの学び", { x: 0.95, y: 3.5, w: 5.6, h: 0.35, fontFace: HEAD, fontSize: 13, color: MUTE, bold: true, margin: 0 });
s.addText("SDDで実現する打ち手", { x: 7.4, y: 3.5, w: 5.3, h: 0.35, fontFace: HEAD, fontSize: 13, color: TEAL, bold: true, margin: 0 });
map.forEach((m, i) => {
  const y = 3.9 + i * 0.5;
  s.addText(m[0], { x: 0.95, y, w: 5.65, h: 0.45, fontFace: BODY, fontSize: 13, color: INK, valign: "middle", margin: 0 });
  s.addText("→", { x: 6.65, y, w: 0.6, h: 0.45, fontFace: HEAD, fontSize: 15, color: MUTE, align: "center", valign: "middle", margin: 0 });
  s.addText(m[1], { x: 7.4, y, w: 5.3, h: 0.45, fontFace: BODY, fontSize: 13, color: NAVY, bold: true, valign: "middle", margin: 0 });
});

// =========================================================
// S13 SDD ONE-PAGER
// =========================================================
s = pres.addSlide(); s.background = { color: WHITE };
header(s, 13, "仕様駆動開発（SDD）の全体像", "一枚絵で理解する");
const phases = [
  ["フェーズ0", "把握・プランニング", "壁打ちで合意形成", TEAL],
  ["フェーズ1", "仕様化", "要件 → 設計 → タスク", NAVY],
  ["フェーズ2", "実装（TDD）", "テスト先行 RED→GREEN", NAVY],
  ["仕上げ", "結合試験（人間）", "→ コミット提案", TEAL],
];
const px = 0.95, pw = 2.78, pgap = 0.35, py = 1.7, ph = 1.6;
phases.forEach((p, i) => {
  const x = px + i * (pw + pgap);
  rcard(s, x, py, pw, ph, i % 3 === 0 ? TEALBG : LIGHT, { shadow: true });
  s.addShape(pres.shapes.RECTANGLE, { x, y: py, w: pw, h: 0.1, fill: { color: p[3] }, line: { type: "none" } });
  s.addText(p[0], { x: x + 0.18, y: py + 0.2, w: pw - 0.36, h: 0.3, fontFace: BODY, fontSize: 12, color: p[3], bold: true, margin: 0 });
  s.addText(p[1], { x: x + 0.18, y: py + 0.5, w: pw - 0.36, h: 0.5, fontFace: HEAD, fontSize: 17, color: NAVY, bold: true, margin: 0 });
  s.addText(p[2], { x: x + 0.18, y: py + 1.02, w: pw - 0.36, h: 0.5, fontFace: BODY, fontSize: 12.5, color: INK, margin: 0 });
  if (i < phases.length - 1) s.addText("▶", { x: x + pw + 0.02, y: py + ph / 2 - 0.22, w: pgap - 0.04, h: 0.45, fontFace: BODY, fontSize: 16, color: MUTE, align: "center", valign: "middle", margin: 0 });
});
const gates = ["承認ゲート① 要件", "承認ゲート② 設計", "承認ゲート③ 実装前確認"];
const gx = px + 1 * (pw + pgap) - 0.1, gw = 2 * pw + pgap + 0.2;
s.addText("人間の承認なしに次へ進まない（フェーズゲート）", { x: gx, y: py + ph + 0.12, w: gw, h: 0.3, fontFace: BODY, fontSize: 12, color: AMBER, bold: true, align: "center", margin: 0 });
gates.forEach((g, i) => {
  const cwid = (gw - 0.3) / 3, x = gx + i * (cwid + 0.15);
  rcard(s, x, py + ph + 0.45, cwid, 0.48, AMBERBG);
  s.addText(g, { x, y: py + ph + 0.45, w: cwid, h: 0.48, fontFace: BODY, fontSize: 11.5, color: AMBER, bold: true, align: "center", valign: "middle", margin: 0 });
});
const ly = 4.9;
rcard(s, 0.95, ly, 11.75, 1.55, NAVY);
s.addText("SDDルールによる確実なドキュメント化（全工程を通じて常時更新）", { x: 1.25, y: ly + 0.2, w: 11.2, h: 0.4, fontFace: HEAD, fontSize: 15, color: WHITE, bold: true, margin: 0 });
const docs = ["agreement-log.md\n合意・決定・理由・日付", "requirements / design / tasks\n仕様（EARS・Mermaid）", "test-results.md\n検証の記録", "→ 引き継ぎ・トレース容易"];
docs.forEach((d, i) => {
  const dw = (11.75 - 0.5 - 0.45) / 4, x = 1.25 + i * (dw + 0.15);
  rcard(s, x, ly + 0.7, dw, 0.7, "16314F");
  s.addText(d, { x: x + 0.1, y: ly + 0.7, w: dw - 0.2, h: 0.7, fontFace: BODY, fontSize: 11, color: "CADCFC", align: "center", valign: "middle", margin: 0 });
});
s.addText("参考：cyclox2_docker の SDDワークフロー（cc-sdd / kiro-* ＋ 当社オーバーレイ）", { x: 0.95, y: 6.65, w: 11.4, h: 0.35, fontFace: BODY, fontSize: 11, color: MUTE, italic: true, margin: 0 });

// =========================================================
// essence 14-16
// =========================================================
function essence(no, n, title, points, link) {
  const sl = pres.addSlide(); sl.background = { color: WHITE };
  header(sl, no, title, "SDDのエッセンス " + n);
  sl.addText(points.map(p => ({ text: p, options: { bullet: { code: "2022" }, breakLine: true, paraSpaceAfter: 12 } })),
    { x: 0.95, y: 1.7, w: 7.2, h: 4.2, fontFace: BODY, fontSize: 17, color: INK, valign: "top", lineSpacingMultiple: 1.1 });
  rcard(sl, 8.5, 1.7, 4.2, 4.5, TEALBG, { shadow: true });
  sl.addText("サミットとの接続", { x: 8.8, y: 1.95, w: 3.7, h: 0.4, fontFace: HEAD, fontSize: 14, color: TEAL, bold: true, margin: 0 });
  sl.addText(link, { x: 8.8, y: 2.45, w: 3.65, h: 3.5, fontFace: BODY, fontSize: 15, color: INK, valign: "top", margin: 0, lineSpacingMultiple: 1.2 });
  return sl;
}
essence(14, "①", "壁打ち → 仕様化", [
  "人間とAIで壁打ちし、合意形成してから仕様に落とす。",
  "決めたことは agreement-log.md に「決定・理由・日付」で記録。",
  "“なんとなく”でなく、要件→設計→タスクへ段階的に具体化。",
], "IPAの指摘（AIは抜け漏れる）への回答。\n\n人が判断し、合意をその場で文書化することで精度を担保する。");
essence(15, "②", "フェーズゲート", [
  "要件・設計・タスク分解の各段で、人間の承認なしに次へ進まない。",
  "「ドキュメント完成 ≠ 実装開始の許可」。必ず“進めてよい”を確認。",
  "暴走を防ぎ、手戻りを上流で止める（後工程の事故を減らす）。",
], "DeNAの「ルールで縛る」と同じ発想。\n\n仕組みで方向づけ、速さと品質を両立する。");
essence(16, "③", "確実なドキュメント化 → 引き継ぎ・トレース", [
  "agreement-log / requirements / design / tasks / test-results を常時更新。",
  "テキストベース（Markdown）で差分管理・AIとの相性が良い。",
  "コーディングを伴わない作業でも、記録義務は省略しない。",
], "IBM・IPAが問題視した「意思決定のブラックボックス化」を解消。\n\n誰でも経緯を辿れ、引き継ぎが容易になる。");

// =========================================================
// S17 対応表
// =========================================================
s = pres.addSlide(); s.background = { color: WHITE };
header(s, 17, "サミットの学び ↔ SDDの対応", "全体の接続を一望");
const rows = [
  [{ text: "サミットでの気づき", options: { bold: true, color: WHITE, fill: { color: NAVY } } },
   { text: "SDDでの打ち手", options: { bold: true, color: WHITE, fill: { color: TEAL } } }],
  ["曖昧な要件定義（全講演共通）", "フェーズゲート＋要件の明文化（EARS）"],
  ["AIレディ環境＝テキストベース（内閣府）", "Markdownで仕様を管理"],
  ["意思決定のブラックボックス化（IBM）", "agreement-log / 壁打ち履歴のトラッキング"],
  ["AIは壁打ちで抜け漏れる（IPA）", "人の承認ゲートで判断を担保"],
  ["効率化の時間を価値に（DeNA）", "仕組み・ルールで方向づけ"],
];
s.addTable(rows, {
  x: 0.95, y: 1.75, w: 11.4, colW: [5.7, 5.7], rowH: [0.55, 0.7, 0.7, 0.7, 0.7, 0.7],
  fontFace: BODY, fontSize: 15, color: INK, valign: "middle",
  border: { type: "solid", pt: 1, color: LINE }, fill: { color: WHITE }, margin: [4, 10, 4, 10],
});

// =========================================================
// S18 まとめ (dark)
// =========================================================
s = pres.addSlide(); s.background = { color: NAVY };
s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.3, h: H, fill: { color: TEAL }, line: { type: "none" } });
s.addText("まとめ", { x: 1.0, y: 1.35, w: 11, h: 0.5, fontFace: BODY, fontSize: 18, color: "9FC3C9", bold: true, charSpacing: 2, margin: 0 });
s.addText("AIが速いほど、起点の要件定義が効く。", { x: 1.0, y: 1.95, w: 11.5, h: 1.0, fontFace: HEAD, fontSize: 33, color: WHITE, bold: true, margin: 0, lineSpacingMultiple: 1.1 });
s.addText([
  { text: "精度の高い要件定義を土台にしたAI駆動開発のスキーム", options: { bold: true, color: "F9C784" } },
  { text: "＝仕様駆動開発（SDD）。", options: { color: "CADCFC" } },
], { x: 1.0, y: 3.3, w: 11.5, h: 0.6, fontFace: BODY, fontSize: 18, margin: 0 });
s.addText([
  { text: "壁打ちで合意 → フェーズゲートで判断 → 確実なドキュメント化で引き継ぎ・トレース。", options: { breakLine: true, color: "CADCFC", paraSpaceAfter: 8 } },
  { text: "大手が慎重な今こそ、小回りの利く我々が要件定義からAIを取り込み先行できる。", options: { color: "CADCFC" } },
], { x: 1.0, y: 4.3, w: 11.5, h: 1.3, fontFace: BODY, fontSize: 16, lineSpacingMultiple: 1.15, margin: 0 });
rcard(s, 1.0, 5.85, 11.3, 0.85, "16314F");
s.addText("今日は概要と要点まで。具体的な導入・運用ルールは、次回の「実践回」で。", { x: 1.0, y: 5.85, w: 11.3, h: 0.85, fontFace: HEAD, fontSize: 16, color: WHITE, bold: true, align: "center", valign: "middle" });

// =========================================================
// S19 次の一歩
// =========================================================
s = pres.addSlide(); s.background = { color: WHITE };
header(s, 19, "次の一歩", "Move Fast");
const steps = [
  ["まず小さく試す", "ロードマップを引き、失敗してもいいから早く着手する（内閣府）。"],
  ["自由に試せる環境", "AIレディ環境（テキストベースの仕様）を最初から整える。"],
  ["客先との合意", "受託では、AI利用について客先と合意・標準を明文化する。"],
];
steps.forEach((st, i) => {
  const y = 1.8 + i * 1.45;
  rcard(s, 0.95, y, 11.4, 1.2, LIGHT, { shadow: true });
  s.addShape(pres.shapes.OVAL, { x: 1.25, y: y + 0.3, w: 0.6, h: 0.6, fill: { color: TEAL }, line: { type: "none" } });
  s.addText(String(i + 1), { x: 1.25, y: y + 0.3, w: 0.6, h: 0.6, fontFace: HEAD, fontSize: 22, color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });
  s.addText(st[0], { x: 2.1, y: y + 0.2, w: 10, h: 0.45, fontFace: HEAD, fontSize: 19, color: NAVY, bold: true, margin: 0 });
  s.addText(st[1], { x: 2.1, y: y + 0.68, w: 10, h: 0.45, fontFace: BODY, fontSize: 14.5, color: INK, margin: 0 });
});
s.addText("ご清聴ありがとうございました。― 質疑応答へ", { x: 0.95, y: 6.5, w: 11.4, h: 0.4, fontFace: BODY, fontSize: 14, color: MUTE, italic: true, margin: 0 });

// =========================================================
// S20 Appendix Q&A
// =========================================================
s = pres.addSlide(); s.background = { color: WHITE };
header(s, 20, "想定質疑（Appendix）", "Q&A");
const qa = [
  ["既存のExcel仕様書と何が違う？", "テキスト(Markdown/JSON)ベースでAI・差分管理に強く、合意の履歴まで残る。"],
  ["ドキュメント作成のコストが増えない？", "フェーズゲートで手戻りが減り、下書きはAIが生成。コスト増でなく前倒し。"],
  ["客先がAI利用NGの受託案件は？", "AI利用の合意・標準の明文化（内閣府の論点）を客先合意とセットで進める。"],
  ["小さな改修でも全フェーズ回す？", "非コーディング作業はゲート省略可。ただし記録は省略しない（runbook化）。"],
  ["使うツールは？", "cc-sdd（/kiro-*）＋当社オーバーレイ。詳細は実践回で。"],
];
qa.forEach((q, i) => {
  const y = 1.6 + i * 1.0;
  s.addText("Q", { x: 0.95, y, w: 0.5, h: 0.45, fontFace: HEAD, fontSize: 18, color: TEAL, bold: true, margin: 0 });
  s.addText(q[0], { x: 1.5, y, w: 11, h: 0.45, fontFace: HEAD, fontSize: 16, color: NAVY, bold: true, margin: 0 });
  s.addText("A", { x: 0.95, y: y + 0.45, w: 0.5, h: 0.45, fontFace: HEAD, fontSize: 15, color: AMBER, bold: true, margin: 0 });
  s.addText(q[1], { x: 1.5, y: y + 0.45, w: 11, h: 0.45, fontFace: BODY, fontSize: 14, color: INK, margin: 0 });
});

pres.writeFile({ fileName: "ai_study_sdd.pptx" }).then(f => console.log("written:", f));
