import os
import re
from collections import defaultdict
from datetime import datetime

BASE_DIR = '.'
TARGET_DIRS = ['백준', '프로그래머스']
README_FILE = 'README.md'
PROBLEM_EXTENSIONS = ('.py', '.cpp', '.js', '.java')
RESULT_EXTENSION = '.md'

def extract_submission_date(readme_path):
    try:
        with open(readme_path, encoding='utf-8') as f:
            content = f.read()

        # 줄바꿈 포함한 유연한 매칭
        match = re.search(r'### 제출 일자\s*\n\s*(\d{4}년 \d{1,2}월 \d{1,2}일 \d{1,2}:\d{2}:\d{2})', content)
        if match:
            date_str = match.group(1).replace('년 ', '-').replace('월 ', '-').replace('일', '').strip()
            return datetime.strptime(date_str, '%Y-%m-%d %H:%M:%S')
    except Exception:
        pass
    return None

def extract_info(folder, problem_dir, file_dict):
    parts = os.path.relpath(problem_dir, BASE_DIR).split(os.sep)

    if folder == '백준' and len(parts) >= 3:
        level = parts[1]
        number_title = parts[2]
    elif folder == '프로그래머스' and len(parts) >= 3:
        level = parts[1]
        number_title = parts[2]
    else:
        level = 'Unknown'
        number_title = '000000.제목없음'

    try:
        number, raw_title = number_title.split('.', 1)
    except ValueError:
        number = '000000'
        raw_title = number_title

    title = raw_title.replace('_', ' ').strip().capitalize()

    submission_dt = None
    if 'result' in file_dict:
        readme_path = os.path.join(problem_dir, file_dict['result'][0])
        submission_dt = extract_submission_date(readme_path)

    return level, number.strip(), title, submission_dt

def generate_readme():
    lines = ['# 📘 알고리즘 문제 풀이\n']
    recent_list = []

    for folder in TARGET_DIRS:
        path = os.path.join(BASE_DIR, folder)
        if not os.path.isdir(path):
            continue

        problem_map = defaultdict(dict)

        for root, _, files in os.walk(path):
            for file in files:
                ext = os.path.splitext(file)[1]
                if ext not in PROBLEM_EXTENSIONS + (RESULT_EXTENSION,):
                    continue

                full_path = os.path.join(root, file)
                relative_path = os.path.relpath(full_path, BASE_DIR)

                if ext in PROBLEM_EXTENSIONS:
                    problem_map[root]['problem'] = (file, relative_path)
                elif ext == RESULT_EXTENSION:
                    problem_map[root]['result'] = (file, relative_path)

        # 문제 정렬: level → 번호
        sorted_problems = sorted(problem_map.items(), key=lambda item: (
            extract_info(folder, item[0], item[1])[0],  # level
            int(extract_info(folder, item[0], item[1])[1])  # number
        ))

        lines.append(f"## 📂 {folder}\n")
        lines.append('| 레벨 | 번호 | 문제 | 결과 |')
        lines.append('|------|------|--------|--------|')

        for problem_dir, file_dict in sorted_problems:
            level, number, title, submission_dt = extract_info(folder, problem_dir, file_dict)

            problem_link = f"[{title}]({file_dict['problem'][1]})" if 'problem' in file_dict else ''
            result_link = f"[README]({file_dict['result'][1]})" if 'result' in file_dict else ''

            lines.append(f'| {level} | {number} | {problem_link} | {result_link} |')

            # 최근 풀이 목록 저장
            if submission_dt:
                recent_list.append((submission_dt, folder, level, number, title, file_dict['problem'][1]))

        lines.append('')  # 줄바꿈

    # 최근 풀이 Top 5
        # 최근 풀이 Top 5
    lines.insert(1, '## 🕘 최근 풀이한 문제 Top 5\n')
    lines.insert(2, '| 날짜 | 플랫폼 | 레벨 | 번호 | 문제 | 결과 |')
    lines.insert(3, '|--------|----------|--------|--------|--------|--------|')

    for item in sorted(recent_list, reverse=True)[:5]:
        dt, folder, level, number, title, problem_path = item
        date_str = dt.strftime('%Y-%m-%d %H:%M:%S')

        # 결과 파일 경로 찾기
        result_path = ''
        # 문제 경로: 프로그래머스/0/120802. 두 수의 합 구하기/두 수의 합 구하기.py
        problem_dir = os.path.dirname(problem_path)
        readme_path = os.path.join(problem_dir, 'README.md')
        if os.path.exists(readme_path):
            result_path = os.path.relpath(readme_path, BASE_DIR)

        problem_link = f"[{title}]({problem_path})"
        result_link = f"[README]({result_path})" if result_path else ''

        lines.insert(4, f'| {date_str} | {folder} | {level} | {number} | {problem_link} | {result_link} |')

    with open(README_FILE, 'w') as f:
        f.write('\n'.join(lines))


if __name__ == "__main__":
    generate_readme()
