<template>
  <div class="register-container">
    <!-- Header -->
    <header class="header">
      <h1>AniHan Platform</h1>
    </header>

    <!-- Register Card -->
    <main class="register-card">
      <h2>Create an Account</h2>
      <form @submit.prevent="handleRegister">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <input type="password" v-model="confirmPassword" placeholder="Confirm Password" required />
        <p class="login-link">
          Already have an account? <router-link to="/">Login here</router-link>
        </p>
        <button type="submit">Register</button>
      </form>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; 2025 AniHan. All rights reserved.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter()

function handleRegister() {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match.')
    return
  }

  // Replace with real registration logic
  alert('Registration successful!')
  router.push('/')
}
</script>

<style scoped>
.register-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #f1f8e9, #c5e1a5);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.header {
  background-color: #388e3c;
  color: white;
  padding: 1rem;
  text-align: center;
}

.register-card {
  background: white;
  max-width: 450px;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.register-card h2 {
  margin-bottom: 1.5rem;
  color: #2e7d32;
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

.login-link {
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

.login-link a {
  color: #2e7d32;
  text-decoration: none;
}

.login-link a:hover {
  text-decoration: underline;
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
