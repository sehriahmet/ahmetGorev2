before_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>output</title>
</head>
<body>
<div class="main-container">
<div class="contact_left terms"></div>
<div class= "contact_right terms"> 
"""

after_content = """
</div>
</div>
<script src="script.js"></script>
</body>
</html>
"""

with open('test.html', 'r') as file:
    test_html_content = file.read()

final_html_content = before_content + test_html_content + after_content

with open('test.html', 'w') as file:
    file.write(final_html_content)

print("Success")
