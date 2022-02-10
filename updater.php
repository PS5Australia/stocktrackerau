<?php
$jsonString = file_get_contents('livestock.json');
$data = json_decode($jsonString, true);
$data["AmazonDisc"] = "In Stock";
$newJsonString = json_encode($data);
file_put_contents('livestock.json', $newJsonString);
?>
