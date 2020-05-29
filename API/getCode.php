<?php
header("Access-Control-Allow-Origin: *");
//echo('http://localhost:8000/API/getCode.php');
//echo('hello i will help get it done');
$br="<br/>";
$output=new stdClass();
try{
    $files=explode(',',$_REQUEST['files']);
//print_r($files);
    $basePath='./codes/';
    foreach($files as $f){
        $fn="$basePath$f.js";
//        echo("$fn$br");
        $myfile = fopen($fn, "r") or die("Unable to open file!-$fn");
        $contents=fread($myfile,filesize($fn));
//        $contents=file_get_contents($fn);
        $output->{$f}=$f.'====>'.$contents;
//        echo("$fn $br $contents");
        fclose($myfile);
    }
    echo json_encode($output, JSON_PRETTY_PRINT);
}catch(Exception $e){
    $output->error=$e->getMessage();
    echo json_encode($output, JSON_PRETTY_PRINT);
}

?>