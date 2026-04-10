# API de Autenticação (PHP + MySQL) para React/Next.js com Swagger

Este guia descreve uma API completa de autenticação para as páginas:

- `/login`
- `/signup`
- `/forgot-password`

A ideia é que você consiga:

1. Implementar a API em PHP + MySQL.
2. Documentar e **testar todos os endpoints no Swagger** antes de integrar no React/Next.js.
3. Ter fluxo completo de recuperação de senha com envio de e-mail HTML/CSS.

---

## 1) Arquitetura recomendada

### Stack sugerida

- **PHP 8.2+**
- **MySQL 8+**
- **Composer**
- **JWT** para sessão stateless (opcional, mas recomendado)
- **PHPMailer** (ou SMTP provider) para envio de e-mail
- **swagger-php** para gerar OpenAPI + Swagger UI

### Estrutura de pastas (exemplo)

```txt
/api
  /public
    index.php
  /src
    /Controllers
      AuthController.php
      PasswordController.php
    /Services
      AuthService.php
      PasswordResetService.php
      EmailService.php
      JwtService.php
    /Repositories
      UserRepository.php
      PasswordResetRepository.php
    /Middleware
      AuthMiddleware.php
    /Config
      database.php
      mail.php
    /Docs
      OpenApi.php
  /templates
    forgot_password_email.html
  composer.json
```

---

## 2) Banco de dados (MySQL)

### Tabela `users`

```sql
CREATE TABLE users (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(120) NOT NULL,
  email VARCHAR(190) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  is_email_verified TINYINT(1) NOT NULL DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Tabela `password_resets`

```sql
CREATE TABLE password_resets (
  id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  user_id BIGINT UNSIGNED NOT NULL,
  token_hash VARCHAR(255) NOT NULL,
  expires_at DATETIME NOT NULL,
  used_at DATETIME NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_password_resets_user FOREIGN KEY (user_id) REFERENCES users(id),
  INDEX idx_user_id (user_id),
  INDEX idx_expires_at (expires_at)
);
```

> **Importante:** nunca salve token de reset em texto puro. Gere token randômico, envie o token puro por e-mail, e salve apenas o hash no banco.

---

## 3) Endpoints da API (para login/signup/forgot-password)

Base URL sugerida: `Veja qual é a melhor porta para colocar a API`

### 3.1 Auth

#### `POST /auth/signup`
Cria usuário novo.

**Request**

```json
{
  "name": "Maria Silva",
  "email": "maria@email.com",
  "password": "SenhaForte@123",
  "confirmPassword": "SenhaForte@123"
}
```

**Response 201**

```json
{
  "message": "Usuário criado com sucesso",
  "user": {
    "id": 10,
    "name": "Maria Silva",
    "email": "maria@email.com"
  }
}
```

**Erros comuns**
- `409` e-mail já cadastrado
- `422` validação inválida

---

#### `POST /auth/login`
Autentica usuário e retorna token.

**Request**

```json
{
  "email": "maria@email.com",
  "password": "SenhaForte@123"
}
```

**Response 200**

```json
{
  "accessToken": "jwt_token_aqui",
  "tokenType": "Bearer",
  "expiresIn": 3600,
  "user": {
    "id": 10,
    "name": "Maria Silva",
    "email": "maria@email.com"
  }
}
```

**Erros comuns**
- `401` credenciais inválidas
- `422` validação inválida

---

#### `GET /auth/me`
Retorna usuário autenticado (header `Authorization: Bearer <token>`).

**Response 200**

```json
{
  "id": 10,
  "name": "Maria Silva",
  "email": "maria@email.com"
}
```

---

#### `POST /auth/logout`
Invalida sessão/token (dependendo da estratégia adotada).

**Response 200**

```json
{ "message": "Logout realizado com sucesso" }
```

---

### 3.2 Forgot Password

#### `POST /auth/forgot-password`
Valida se o e-mail existe e dispara e-mail de recuperação.

**Request**

```json
{ "email": "maria@email.com" }
```

**Response 200 (sempre genérica por segurança)**

```json
{ "message": "Se o e-mail existir, enviaremos instruções para redefinição." }
```

> Boa prática: retornar sempre a mesma mensagem para não expor se o e-mail está cadastrado (evita enumeração de usuários).

---

#### `POST /auth/reset-password`
Recebe token + nova senha e conclui troca.

**Request**

```json
{
  "token": "token_recebido_no_email",
  "newPassword": "NovaSenha@123",
  "confirmPassword": "NovaSenha@123"
}
```

**Response 200**

```json
{ "message": "Senha alterada com sucesso" }
```

**Erros comuns**
- `400` token inválido/expirado/usado
- `422` senha fora da política

---

#### `GET /auth/reset-password/validate?token=...`
Endpoint opcional para validar token antes de exibir formulário no front.

**Response 200**

```json
{ "valid": true }
```

**Response 400**

```json
{ "valid": false, "message": "Token inválido ou expirado" }
```

---

## 4) Contrato OpenAPI (Swagger)

Você pode documentar com anotações `swagger-php` e publicar em `/docs`.

### Instalação

```bash
composer require zircote/swagger-php
```

### Exemplo mínimo de definição OpenAPI

```php
<?php

/**
 * @OA\Info(
 *   title="Auth API",
 *   version="1.0.0",
 *   description="API de autenticação em PHP/MySQL"
 * )
 *
 * @OA\Server(
 *   url="https://api.seudominio.com/v1",
 *   description="Produção"
 * )
 *
 * @OA\Post(
 *   path="/auth/forgot-password",
 *   tags={"Auth"},
 *   summary="Solicita recuperação de senha",
 *   @OA\RequestBody(
 *     required=true,
 *     @OA\JsonContent(
 *       required={"email"},
 *       @OA\Property(property="email", type="string", format="email", example="maria@email.com")
 *     )
 *   ),
 *   @OA\Response(response=200, description="Resposta genérica de sucesso")
 * )
 */
```

### Gerar arquivo OpenAPI

```bash
./vendor/bin/openapi ./src -o ./public/openapi.json
```

### Subir Swagger UI

Opções:

- Usar pacote Swagger UI estático apontando para `openapi.json`.
- Ou servir o JSON no endpoint `/openapi.json` e abrir Swagger UI localmente.

Assim você consegue testar todos os endpoints antes da integração com Next.js.

---

## 5) Integração com React/Next.js

No frontend (`/login`, `/signup`, `/forgot-password`), a integração é via HTTP:

- `POST /auth/signup` no submit do signup
- `POST /auth/login` no submit do login
- `POST /auth/forgot-password` no submit do forgot-password
- `POST /auth/reset-password` na tela de nova senha

### Exemplo de chamada (fetch)

```ts
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
});

const data = await res.json();
```

---

## 6) Fluxo completo do forgot-password (com e-mail HTML/CSS)

1. Usuário envia e-mail em `/forgot-password`.
2. API procura e-mail na tabela `users`.
3. Se existir:
   - cria token randômico (ex.: 32 bytes)
   - salva hash em `password_resets` com expiração (ex.: 30 min)
   - envia e-mail com link: `https://seusite.com/reset-password?token=...`
4. API responde mensagem genérica.
5. Usuário clica no link do e-mail.
6. Front abre tela de redefinir senha.
7. Front envia `token + newPassword` para `/auth/reset-password`.
8. API valida token/hash/expiração/uso e altera senha no `users.password_hash`.
9. Marca token como usado (`used_at`).

---

## 7) Template HTML/CSS de e-mail (forgot-password)

Crie o arquivo `templates/forgot_password_email.html` e injete variáveis (`{{name}}`, `{{reset_link}}`).

```html
<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Redefinir senha</title>
  <style>
    body { margin:0; padding:0; background:#f3f4f6; font-family:Arial, sans-serif; }
    .container { max-width:600px; margin:24px auto; background:#ffffff; border-radius:12px; overflow:hidden; }
    .header { background:#111827; color:#fff; padding:24px; text-align:center; }
    .content { padding:24px; color:#111827; line-height:1.6; }
    .btn {
      display:inline-block; padding:12px 20px; background:#2563eb; color:#fff !important;
      text-decoration:none; border-radius:8px; font-weight:bold;
    }
    .footer { padding:16px 24px; color:#6b7280; font-size:12px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Troca de senha</h1>
    </div>
    <div class="content">
      <p>Olá, {{name}}!</p>
      <p>Recebemos uma solicitação para redefinir sua senha.</p>
      <p>
        <a href="{{reset_link}}" class="btn">Redefinir minha senha</a>
      </p>
      <p>Este link expira em 30 minutos.</p>
      <p>Se você não solicitou, ignore este e-mail com segurança.</p>
    </div>
    <div class="footer">
      © Nexora. Todos os direitos reservados.
    </div>
  </div>
</body>
</html>
```

---

## 8) Segurança (obrigatório)

- Hash de senha com `password_hash(..., PASSWORD_ARGON2ID)`.
- Rate limit em login/forgot-password.
- Token de reset com expiração curta (15–30 min).
- Invalidar token após uso.
- Não revelar se e-mail existe (mensagem neutra).
- HTTPS obrigatório.
- CORS restrito ao domínio do front.
- Logs sem dados sensíveis.

---

## 9) Checklist de implementação

- [ ] Criar tabelas `users` e `password_resets`
- [ ] Implementar endpoints `/auth/signup`, `/auth/login`, `/auth/me`, `/auth/logout`
- [ ] Implementar `/auth/forgot-password`, `/auth/reset-password`, `/auth/reset-password/validate`
- [ ] Implementar envio de e-mail HTML
- [ ] Gerar `openapi.json`
- [ ] Publicar Swagger UI e validar todos os fluxos
- [ ] Integrar com páginas Next.js

---

## 10) Exemplo de respostas de erro padronizadas

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Dados inválidos",
    "details": {
      "email": ["Formato inválido"]
    }
  }
}
```

Padronizar erros facilita muito no consumo via React/Next.js.
