#!/bin/bash
# como_se_diceサブページの画像を一括修正するスクリプト
# 実行場所: Siteフォルダ内

SITE_DIR="/Volumes/SSD2019/書類_202605まで/Site"
cd "$SITE_DIR" || exit 1

count=0

for htmlfile in *.html; do
  [[ "$htmlfile" == "index.html" ]] && continue
  [[ "$htmlfile" == "menu.html" ]] && continue
  [[ "$htmlfile" == "menu02.html" ]] && continue
  [[ "$htmlfile" == "como_se_dice.html" ]] && continue
  [[ "$htmlfile" == "introduccion.html" ]] && continue
  [[ "$htmlfile" == "pronunciacion.html" ]] && continue
  [[ "$htmlfile" == "mucho_gusto.html" ]] && continue
  [[ "$htmlfile" == "expresiones_en_la_clase.html" ]] && continue

  basename="${htmlfile%.html}"
  filesdir="${basename}_files"

  [ -d "$filesdir" ] || continue

  # タイトルを取得
  title=$(grep -o '<title>[^<]*</title>' "$htmlfile" | sed 's/<[^>]*>//g')
  [ -z "$title" ] && title="$basename"

  imglist=""

  # パターン1: _files/Media/1/1.jpg 形式
  if [ -d "${filesdir}/Media" ]; then
    for subdir in "${filesdir}/Media"/*/; do
      num=$(basename "$subdir")
      [[ "$num" == "dummy" ]] && continue
      img="${filesdir}/Media/${num}/${num}.jpg"
      if [ -f "$img" ]; then
        imglist="${imglist}    <img src=\"${img}\" alt=\"${title} ${num}\">\n"
      fi
    done
  fi

  # パターン2: _files/*.jpg 形式（Media直下にない場合）
  if [ -z "$imglist" ]; then
    for img in "${filesdir}"/*.jpg; do
      [ -f "$img" ] || continue
      fname=$(basename "$img")
      [[ "$fname" == shapeimage* ]] && continue
      imglist="${imglist}    <img src=\"${img}\" alt=\"${title}\">\n"
    done
  fi

  [ -z "$imglist" ] && continue

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
  <a class="back-link" href="como_se_dice.html">← ¿Cómo se dice? に戻る</a>
  <h1 class="page-title">${title}</h1>
  <div class="image-grid">
$(echo -e "$imglist")
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
