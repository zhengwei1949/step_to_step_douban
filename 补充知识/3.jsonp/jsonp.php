<?php
//注意：这个代码必须要在服务器环境下面使用
// print_r($_GET);
// die();
$arr = array("school"=>"heima","subject"=>'frontend');
$cbName = $_GET['callback'];
echo $cbName.'('.json_encode($arr).')';
?>