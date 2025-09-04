<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

function handleLogin() {
  // Test: go directly to HomepageView
  router.push('/home')
}
</script>

<template>
  <div class="login-container">
    <!-- Left side (background image) -->
    <div class="login-image"></div>

    <!-- Right side (login form) -->
    <div class="login-form">
      <div class="form-box">
        <!-- Replace heading + paragraph with logo -->
        <img src="@/assets/images/logo.png" alt="AniHan Logo" class="login-logo" />
        <p>Login to Your Account</p>
        <form @submit.prevent="handleLogin">
          <input type="text" v-model="username" placeholder="Username" required />
          <input type="password" v-model="password" placeholder="Password" required />

          <div class="login-links">
            <router-link to="/register">Register</router-link> |
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.login-container {
  display: flex;
  height: 100vh;
  width: 100%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

/* Left side: background image (70%) */
.login-image {
  flex: 0 0 70%;
  background: url('@/assets/images/farmer.png') no-repeat center center;
  background-size: cover;
}

/* Right side: form (30%) */
.login-form {
  flex: 0 0 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f5f5f5ff;
}

.login-logo {
  max-width: 180px;
  margin: 0 auto 1.5rem auto;
  display: block;
}

.form-box {
  width: 100%;
  max-width: 300px;
  padding: 2rem;
}

.form-box h2 {
  margin-bottom: 2rem;
  color: #2e7d32;
  text-align: center;
}

input {
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
  text-align: center;
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
</style>
