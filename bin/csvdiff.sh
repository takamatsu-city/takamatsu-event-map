#!/usr/bin/env bash

set -eu

DIRNAME="$(dirname -- "$0")"
PROJECT_ROOT="${DIRNAME}/.."
TMP="$(mktemp --directory)"

PR_ID=$(echo $GITHUB_REF | sed -e 's/[^0-9]//g')

if [[ -z "${PR_ID}" ]]; then
  echo "Generating CSV diff skipped because this action is not triggered by Pull Request."
fi

curl -sS --output "${TMP}/current.csv" https://geolonia.github.io/takamatsu-area-map/data.csv
cp "${PROJECT_ROOT}/public/data.csv" "${TMP}/new.csv"

cd "${TMP}"

cat <<__COMMENT1__ > "${TMP}/comment.txt"
今回更新されたデータの CSV 差分は以下の通りです:

\`\`\`diff
$(diff --unified "./current.csv" "./new.csv")
\`\`\`

※現行のデータから、赤の行が削除され、緑の行が追加されます。
__COMMENT1__

if [[ -n "$(diff "./current.csv" "./new.csv")" ]]; then
  gh pr comment "${PR_ID}" --body-file="${TMP}/comment.txt" --repo="${REPO}"
else
  echo "No CSV update detected. Skipping CSV diff comment."
fi
