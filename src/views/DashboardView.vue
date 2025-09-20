<template>
  <div class="dashboard">
    <!-- Header -->
    <header class="header">
      <!-- Left: Logo -->
      <div class="logo">
        <img src="@/assets/images/logo.png" alt="AniHan Logo" />
        <h1>AniHan</h1>
      </div>

      <!-- Right: Profile + Notifications -->
      <div class="profile">
        <i class="fas fa-bell notif"></i>
        <img src="@/assets/images/avatar.png" alt="Profile" class="avatar" />
      </div>
    </header>

    <!-- Main Layout -->
    <div class="main-layout">
      <!-- Sidebar -->
      <aside class="sidebar">
        <ul>
          <li><i class="fas fa-home"></i><span>Overview</span></li>
          <li><i class="fas fa-seedling"></i><span>Produce</span></li>
          <li><i class="fas fa-box"></i><span>Orders</span></li>
          <li><i class="fas fa-chart-line"></i><span>Reports</span></li>
        </ul>
      </aside>

      <!-- Content -->
      <main class="content">
        <h2>Dashboard Overview</h2>
        <p>Welcome to AniHan's farmer/vendor dashboard! 🚜🌱</p>
      </main>

      <!-- Right Panel -->
      <aside class="right-panel">
        <h3>Latest Updates</h3>
        <ul>
          <li><span>2 hours ago</span> - New order placed</li>
          <li><span>1 day ago</span> - Market prices updated</li>
          <li><span>2 days ago</span> - System maintenance scheduled</li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup>
// UI only
</script>

<style scoped>
.dashboard {
  height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: #f6f8fa;
}

/* HEADER */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #025b2d, #057f42, #43a047);
  color: white;
  padding: 0.6rem 1rem;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.logo img {
  height: 28px;
}

.logo h1 {
  font-size: 1.1rem;
  font-weight: 600;
}

.search-bar input {
  width: 320px;
  padding: 0.4rem 0.6rem;
  border-radius: 6px;
  border: none;
  outline: none;
  font-size: 0.9rem;
}

.profile {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.profile .notif {
  font-size: 1.2rem;
  cursor: pointer;
}

.profile img {
  height: 36px;
  width: 36px;
}

.avatar {
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid #ddd;
}

/* MAIN LAYOUT */
.main-layout {
  flex: 1;
  display: flex;
  overflow: hidden;
}

/* SIDEBAR */
.sidebar {
  width: 220px;
  background: #fff;
  border-right: 1px solid #e1e4e8;
  padding: 1rem 0;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 0.7rem 1rem;
  cursor: pointer;
  color: #24292e;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.95rem;
  border-radius: 6px;
  transition: background 0.2s;
}

.sidebar li:hover {
  background: #f3f4f6;
}

.sidebar li i {
  font-size: 18px;
}

/* CONTENT */
.content {
  flex: 1;
  padding: 1.5rem;
  background: #fefefe;
  overflow-y: auto;
}

/* RIGHT PANEL */
.right-panel {
  width: 260px;
  background: #fff;
  border-left: 1px solid #e1e4e8;
  padding: 1rem;
  font-size: 0.9rem;
}

.right-panel h3 {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 600;
}

.right-panel ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.right-panel li {
  margin-bottom: 1rem;
  color: #444;
}

.right-panel li span {
  color: #6a737d;
  font-size: 0.8rem;
  display: block;
}
</style>
