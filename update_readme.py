import os

BASE_DIR = '.'
TARGET_DIRS = ['baekjoon', 'programmers']
README_FILE = 'README.md'

def generate_readme():
    lines = ['# 📘 알고리즘 문제 풀이\n']

    for folder in TARGET_DIRS:
        path = os.path.join(BASE_DIR, folder)
        if not os.path.isdir(path):
            continue

        lines.append(f"## 📂 {folder.capitalize()}\n")
        for file in sorted(os.listdir(path)):
            if file.endswith(('.py', '.cpp', '.js', '.java')):
                title = file.rsplit('.', 1)[0].replace('_', ' ').capitalize()
                lines.append(f"- [{title}]({folder}/{file})")
        lines.append('')

    with open(README_FILE, 'w') as f:
        f.write('\n'.join(lines))

if __name__ == "__main__":
    generate_readme()