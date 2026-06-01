#!/bin/bash
# 旧iWebページを一括リニューアルするスクリプト
# 実行場所: Siteフォルダ内

SITE_DIR="/Volumes/SSD2019/書類_202605まで/Site"
cd "$SITE_DIR" || exit 1

# 処理済みファイル数
count=0

for htmlfile in *.html; do
  # menu系・index・pronunciacion・introduccionはスキップ（別途対応）
  [[ "$htmlfile" == "index.html" ]] && continue
  [[ "$htmlfile" == "menu.html" ]] && continue
  [[ "$htmlfile" == "menu02.html" ]] && continue

  # ページタイトルを取得
  title=$(grep -o '<title>[^<]*</title>' "$htmlfile" | sed 's/<[^>]*>//g')

  # すでに更新済みならスキップ
  grep -q 'site-header' "$htmlfile" && continue

  # ページ固有の画像を取得（_filesフォルダ内のjpg/png）
  basename="${htmlfile%.html}"
  filesdir="${basename}_files"
  
  # 画像リスト生成
  imglist=""
  if [ -d "$filesdir" ]; then
    for img in "$filesdir"/*.jpg "$filesdir"/*.png; do
      [ -f "$img" ] || continue
      # shapeimageとlogoなどの装飾画像を除外
      fname=$(basename "$img")
      [[ "$fname" == shapeimage* ]] && continue
      [[ "$fname" == *logo* ]] && continue
      [[ "$fname" == *IE* ]] && continue
      imglist="$imglist<img src=\"$img\" alt=\"\">"
    done
  fi

  # テキストコンテンツを抽出
  textcontent=$(python3 -c "
import sys, re
content = open('$htmlfile').read()
# body_layerのテキストだけ抽出
body = re.search(r'id=\"body_layer\"(.*)', content, re.DOTALL)
if body:
    text = re.sub(r'<script[^>]*>.*?</script>', '', body.group(1), flags=re.DOTALL)
    text = re.sub(r'<[^>]+>', ' ', text)
    text = re.sub(r'\s+', ' ', text).strip()
    # 末尾のcopyright部分を除去
    text = re.sub(r'copyright.*', '', text, flags=re.IGNORECASE)
    print(text[:1000])
")

  # 新しいHTMLを生成
  cat > "$htmlfile" << HTMLEOF
<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title}</title>
<link rel="stylesheet" href="style.css">
</head>
<body>

<header class="site-header">
  <a href="menu.html"><div class="site-title">¡Vamos a aprender español!</div></a>
  <div class="site-subtitle">Curso de español &nbsp;·&nbsp; スペイン語を楽しく覚えよう！</div>
</header>

<nav class="site-nav">
  <a href="introduccion.html">スペイン語とは</a>
  <a href="pronunciacion.html">発音</a>
  <a href="como_se_dice.html">¿Cómo se dice?</a>
</nav>

<main class="site-main">
  <a class="back-link" href="javascript:history.back()">← 戻る</a>
  <h1 class="page-title">${title}</h1>
  <div class="page-description">${textcontent}</div>
  <div class="image-grid">
${imglist}
  </div>
</main>

<footer class="site-footer">
  &copy; Grupo Moreral
</footer>

</body>
</html>
HTMLEOF

  count=$((count + 1))
  echo "Updated: $htmlfile"
done

echo ""
echo "完了: ${count}ファイルを更新しました"
