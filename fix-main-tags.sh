#!/bin/bash

# Fix duplicate main tags in page components

files=(
  "app/page.tsx"
  "app/about/page.tsx"
  "app/admin/page.tsx"
  "app/contact/page.tsx"
  "app/lumion/page.tsx"
  "app/portfolio/page.tsx"
  "app/project/[slug]/page.tsx"
  "app/services/page.tsx"
)

for file in "${files[@]}"; do
  if [ -f "$file" ]; then
    # Replace opening main tag with fragment
    sed -i '' 's/^        <main>$/        <>/g' "$file"
    # Replace closing main tag with fragment
    sed -i '' 's/^        <\/main>$/        </>/g' "$file"
    echo "Fixed $file"
  fi
done
