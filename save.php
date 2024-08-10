<?php

$content = $_POST['content'];
$file = ('test.html');

if (file_put_contents($file, $content)) {
    echo "Content saved";
} else {
    echo "Error occured";
}
