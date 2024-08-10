<?php

$content = $_POST['content'];
$file = ('test.html');

if (file_put_contents($file, $content)) {
    echo "Content saved<br>";

    $output = shell_exec("python3 add-html.py 2>&1");

    echo "<pre>$output</pre>";
} else {
    echo "Error occured";
}
