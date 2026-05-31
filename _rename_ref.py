import os
base = r'C:\Users\H16\PycharmProjects\PythonProject1\WORK\Xbotics_dexhand_repo_demo\docs\chapter1\1_2\reference'
mapping = {
    'DexGraspNet项目分析.docx': 'DexGraspNet-analysis.docx',
    'dexgraspnet项目复现.docx': 'DexGraspNet-reproduction.docx',
    'unidexgrasp项目分析.docx': 'UniDexGrasp-analysis.docx',
    'unidexgrasp项目复现.docx': 'UniDexGrasp-reproduction.docx',
}
for old, new in mapping.items():
    old_path = os.path.join(base, old)
    new_path = os.path.join(base, new)
    try:
        os.rename(old_path, new_path)
        print(f'OK: {old} -> {new}')
    except Exception as e:
        print(f'FAIL: {old}: {e}')
