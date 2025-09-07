<template>
  <div class="register-public">
    <!-- 🔙 Circle Arrow Navigation -->
    <div class="back-nav">
      <router-link to="/register" class="back-link">
        <span class="circle-arrow">←</span>
      </router-link>
    </div>

    <!-- ✨ Border wrapper -->
    <div class="border-wrapper">
      <div class="form-card">
        <form @submit.prevent="handleSubmit">
          <!-- First Name -->
          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type="text" id="firstName" v-model="form.firstName" required />
          </div>

          <!-- Surname -->
          <div class="form-group">
            <label for="surname">Surname</label>
            <input type="text" id="surname" v-model="form.surname" required />
          </div>

          <!-- Email -->
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="form.email" required />
          </div>

          <!-- Age -->
          <div class="form-group">
            <label for="age">Age</label>
            <input type="number" id="age" v-model="form.age" min="1" required />
          </div>

          <!-- Passwords side by side -->
          <div class="form-row">
            <div class="form-group">
              <label for="password">Password</label>
              <input type="password" id="password" v-model="form.password" required />
            </div>

            <div class="form-group">
              <label for="confirmPassword">Confirm</label>
              <input type="password" id="confirmPassword" v-model="form.confirmPassword" required />
              <small v-if="passwordMismatch" class="error">Mismatch</small>
            </div>
          </div>

          <!-- Submit -->
          <button type="submit" class="submit-btn">Register</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const form = reactive({
  firstName: '',
  surname: '',
  email: '',
  age: '',
  password: '',
  confirmPassword: '',
})

const passwordMismatch = computed(
  () => form.password && form.confirmPassword && form.password !== form.confirmPassword,
)

function handleSubmit() {
  if (passwordMismatch.value) {
    alert('Passwords do not match!')
    return
  }
  console.log('Registering public user:', form)
  alert(`Public user ${form.firstName} registered successfully!`)
}
</script>

<style scoped>
.register-public {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #f4f8f4;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  position: relative;
}

/* 🔙 Circle arrow navigation */
.back-nav {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

.back-link {
  text-decoration: none;
  color: inherit;
}

.circle-arrow {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  background: #2e7d32;
  color: white;
  font-size: 20px;
  font-weight: bold;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s;
}

.circle-arrow:hover {
  background: #256528;
}

.border-wrapper {
  padding: 3px; /* thickness of the border */
  border-radius: 16px;
  background: linear-gradient(270deg, #2e7d32, #4caf50, #81c784, #2e7d32);
  background-size: 600% 600%;
  animation: glowingBorder 6s ease infinite;
}

/* Inner card (plain white) */
.form-card {
  background: white;
  border-radius: 14px;
  padding: 1.5rem;
  width: 340px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  text-align: center;
}

@keyframes glowingBorder {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.form-card h2 {
  margin-bottom: 1rem;
  color: #2e7d32;
  font-size: 1.2rem;
}

/* Form styling */
.form-group {
  text-align: left;
  margin-bottom: 0.8rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.2rem;
  font-weight: bold;
  font-size: 0.85rem;
}

.form-group input {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;
  font-size: 0.9rem;
}

.form-group input:focus {
  border-color: #2e7d32;
  box-shadow: 0 0 5px rgba(46, 125, 50, 0.4);
}

.form-row {
  display: flex;
  gap: 0.6rem;
}

.form-row .form-group {
  flex: 1;
}

.error {
  color: red;
  font-size: 0.7rem;
}

.submit-btn {
  margin-top: 0.8rem;
  background: #2e7d32;
  color: white;
  border: none;
  padding: 0.7rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: background 0.3s;
  width: 100%;
}

.submit-btn:hover {
  background: #256528;
}
</style>
