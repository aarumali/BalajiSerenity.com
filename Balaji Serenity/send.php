<?php  


if (isset($_POST['name']) && isset($_POST['email']) && isset($_POST['phone'])) {
	include 'db_conn.php';

	function validate($data){
       $data = trim($data);
	   $data = stripslashes($data);
	   $data = htmlspecialchars($data);
	   return $data;
	}

	$name = validate($_POST['name']);
	$email = validate($_POST['email']);
	$phone = validate($_POST['phone']);

	if (empty($name) || empty($email) || empty($phone)) {
		header("Location: index.php");
	}else {

		$sql = "INSERT INTO balajiserenity(name, email,phone) VALUES('$name','$email',$phone)";
		$res = mysqli_query($conn, $sql);

		if ($res) {
			echo "Your message was sent successfully!";
		}else {
			echo "Your message could not be sent!";
		}
	}

}else {
	header("Location: index.php");
}