<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Login - Jogo da Velha</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="login-container">
    <h2>Login</h2>
    <form id="loginForm">
      <input type="text" id="playerName" placeholder="Seu nome" required><br>
      <button type="submit">Jogar contra o Robô</button>
    </form>
  </div>

  <script>
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('playerName').value;
      localStorage.setItem('playerName', name);
      window.location.href = 'game.html';
    });
  </script>
</body>
</html>
