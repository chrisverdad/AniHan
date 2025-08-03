<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

function handleLogin() {
  router.push('/home')
}
</script>

<template>
  <div class="login-container">
    <!-- Header -->
    <header class="header">
      <h1>AniHan Platform</h1>
    </header>

    <!-- Login Card -->
    <main class="login-card">
      <h2>Login to Your Account</h2>
      <form @submit.prevent="handleLogin">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="password" v-model="password" placeholder="Password" required />

        <!-- ✅ Updated router-link for Register -->
        <div class="login-links">
          <router-link to="/register">Register</router-link> | <a href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>
      </form>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 AniHan. All rights reserved.</p>
    </footer>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #e8f5e9, #c8e6c9);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  background-color: #388e3c;
  color: white;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);
}

.login-card {
  background: white;
  max-width: 400px;
  width: 90%;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  text-align: center;
}

.login-card h2 {
  margin-bottom: 1.5rem;
  color: #2e7d32;
}

input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 0.75rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border-color 0.3s;
}

input:focus {
  outline: none;
  border-color: #66bb6a;
}

.login-links {
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.login-links a {
  color: #2e7d32;
  text-decoration: none;
}

.login-links a:hover {
  text-decoration: underline;
}

button {
  background-color: #43a047;
  color: white;
  padding: 0.75rem;
  width: 100%;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}

button:hover {
  background-color: #388e3c;
}

.footer {
  margin-top: auto;
  padding: 1rem;
  text-align: center;
  background-color: #f1f8e9;
  font-size: 0.9rem;
  color: #4e4e4e;
}
</style>
