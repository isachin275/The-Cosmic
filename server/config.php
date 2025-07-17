<?php
ob_start();
session_start();

//database credentials
define('db_host','localhost');
define('db_user','root');
define('db_pass','');
define('db_name','meetverse_bot');

$db = new PDO("mysql:host=".db_host.";port=3306;dbname=".db_name, db_user, db_pass);
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

//set timezone
date_default_timezone_set('Asia/Kolkata');

//load classes as needed
// function init($class) {  
//    $class = strtolower($class);

//    $classpath = 'server/sa_core/class.'.$class . '.php';
//    echo ("<script>console.log('PHP: " . $classpath . "');</script>");

//    if ( file_exists($classpath)) {
//       require_once $classpath;
//    }  

//    $classpath = 'sa_core/class.'.$class . '.php';
//    echo ("<script>console.log('PHP: " . $classpath . "');</script>");

//    if ( file_exists($classpath)) {
//       require_once $classpath;
//    }  
// }
// spl_autoload_register('init');

// $user = new User($db); 

// include('functions.php');
