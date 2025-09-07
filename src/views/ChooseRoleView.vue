<template>
  <div class="choose-role">
    <!-- 🔙 Circle Arrow Navigation -->
    <div class="back-nav">
      <router-link to="/" class="back-link">
        <span class="circle-arrow">←</span>
      </router-link>
    </div>

    <h2>Select Your Role</h2>
    <div class="role-options">
      <!-- Vendor/Farmer -->
      <div class="role-card" @click="selectRole('vendor/farmer')">
        <img src="@/assets/images/farmericon.png" alt="Vendor/Farmer" />
        <p>Vendor / Farmer</p>
      </div>

      <!-- Public User -->
      <div class="role-card" @click="selectRole('public')">
        <img src="@/assets/images/publicusericon.png" alt="Public User" />
        <p>Public User</p>
      </div>

      <!-- Admin -->
      <div class="role-card" @click="selectRole('admin')">
        <img src="@/assets/images/adminicon.png" alt="Admin" />
        <p>Admin</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function selectRole(role) {
  if (role === 'vendor/farmer') {
    router.push('/register-farmer')
  } else if (role === 'public') {
    router.push('/register-public')
  } else if (role === 'admin') {
    router.push('/register-admin')
  }
}
</script>

<style scoped>
.choose-role {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  justify-content: center;
  background: #f9f9f9;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  padding-top: 3rem;
}

/* 🔙 Circle arrow button */
.back-nav {
  position: absolute;
  top: 1rem;
  left: 1rem;
}

/* remove underline & blue color */
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

.choose-role h2 {
  margin-bottom: 2rem;
  color: #2e7d32;
}

.role-options {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.role-card {
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s;
  width: 150px;
}

.role-card:hover {
  transform: translateY(-5px);
}

.role-card img {
  width: 80px;
  height: 80px;
  margin-bottom: 0.5rem;
  image-rendering: pixelated;
  image-rendering: crisp-edges;
}
</style>
