<?php
$host = 'localhost';
$db   = 'sistema_encomendas';
$user = 'root'; // Altere conforme o seu ambiente
$pass = '';     // Altere conforme o seu ambiente

try {
  $pdo = new PDO("mysql:host=$host;dbname=$db;charset=utf8", $user, $pass);
  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
  echo json_encode(['status' => 500, 'message' => 'Erro na conexão com o banco.']);
  exit;
}
?>