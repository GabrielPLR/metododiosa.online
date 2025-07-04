<?php
header('Content-Type: application/json');
require 'conexao.php';

$cpf = $_GET['cpf'] ?? '';
$cep = $_GET['cep'] ?? null;

$cpf = preg_replace('/\D/', '', $cpf);
$cep = $cep ? preg_replace('/\D/', '', $cep) : null;

if (!$cpf) {
  echo json_encode(['status' => 400, 'message' => 'CPF é obrigatório.']);
  exit;
}

try {
  $stmt = $pdo->prepare("INSERT INTO visitantes (cpf, cep) VALUES (?, ?)");
  $stmt->execute([$cpf, $cep]);

  $resumo = [
    'cpf' => $cpf,
    'cep' => $cep ?: 'Não informado',
    'status_entrega' => 'Aguardando liberação',
    'prazo' => $cep ? 'Entrega hoje até 22h' : 'Rota indefinida',
    'valor_entrega' => 'R$ 11,39'
  ];

  echo json_encode(['status' => 200, 'data' => $resumo]);

} catch (PDOException $e) {
  echo json_encode(['status' => 500, 'message' => 'Erro ao salvar no banco.']);
}
?>