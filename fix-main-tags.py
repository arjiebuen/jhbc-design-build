#!/usr/bin/env python3
import re
import os

files = [
    "app/page.tsx",
    "app/about/page.tsx",
    "app/admin/page.tsx",
    "app/contact/page.tsx",
    "app/lumion/page.tsx",
    "app/portfolio/page.tsx",
    "app/project/[slug]/page.tsx",
    "app/services/page.tsx",
]

for file in files:
    if os.path.exists(file):
        with open(file, 'r') as f:
            content = f.read()
        
        # Replace opening main with fragment
        content = re.sub(r'(\s+)<main>', r'\1<>', content)
        # Replace closing main with fragment
        content = re.sub(r'(\s+)</main>', r'\1</>', content)
        
        with open(file, 'w') as f:
            f.write(content)
        print(f"Fixed {file}")
