<link rel="stylesheet" type="text/css" href="style/style.css">

<p> Replace all files in folder using regex </p>
<br>
<input id="reg" placeholder="pattern"><br>
<input id="reg2" placeholder="subject" value="new word"><br>
<input id="reg3" value="$&"><br>
<button id="replacename">Replace names</button>


<?php


$folder = "folder";


if( !is_dir("$folder") )
		mkdir("$folder");	
$folder2 = scandir($folder);

echo "<div id=\"list\">";

foreach ($folder2 as $key => $value) {
	if($value != "." && $value != "..")
		echo "<p>$value</p><br><br>";
}
echo "</div>";

if(isset($_GET['aa'])){
	$aa = $_GET['aa'];
	$bb = $_GET['bb'];
	
	
	
	rename("folder/$aa", "folder/$bb");

}

?>

<div id="lists">
	<div id="list2"></div>
	<div id="list3"></div>
</div>

<script src="js/js.js"></script>
<script src="js/jquery.js"></script>
