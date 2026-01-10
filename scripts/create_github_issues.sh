#!/usr/bin/env bash
# creates GitHub issues from files in ISSUES/ using GitHub CLI (gh)
# Requires: gh (GitHub CLI) authenticated, jq

set -euo pipefail

REPO_OWNER="kyamady-dorokid"
REPO_NAME="sandbox"

for f in ISSUES/*.md; do
  # read frontmatter-like title line if present
  title_line=$(grep -m1 '^title:' "$f" || true)
  if [[ -n "$title_line" ]]; then
    title=$(echo "$title_line" | sed -E 's/^title:\s*"?(.*)"?$/\1/')
  else
    title=$(head -n1 "$f")
  fi

  body=$(sed -n '1,200p' "$f")

  echo "Creating issue: $title"
  gh issue create --repo "$REPO_OWNER/$REPO_NAME" --title "$title" --body "$body" || true
done

echo "Done."
