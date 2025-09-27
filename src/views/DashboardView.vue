<template>
  <div class="dashboard">
    <!-- Sidebar / Top Navigation -->
    <aside class="sidebar">
      <img src="@/assets/images/anihan.png" alt="AniHan Logo" class="logo" />
      <ul>
        <li><i class="fas fa-home"></i><span>Home</span></li>
        <li><i class="fas fa-chart-line"></i><span>Charts</span></li>
        <li><i class="fas fa-envelope"></i><span>Transaction</span></li>
        <li><i class="fas fa-question-circle"></i><span>Submit My Produce</span></li>
      </ul>
    </aside>

    <!-- Main Content -->
    <main class="main">
      <div class="header">AniHan Dashboard</div>

      <div class="cards">
        <div class="card">Chart 1</div>
        <div class="card">Chart 2</div>
        <div class="card">Chart 3</div>
        <div class="card">Chart 4</div>
      </div>
    </main>
  </div>
</template>

<script setup>
// No logic yet, charts will be added later
</script>

<style scoped>
.dashboard {
  display: flex;
  height: 100vh;
  background: #f5f5f5;
  overflow: hidden;
}

.sidebar {
  width: 70px;
  background: #519974;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem 0;
  transition: width 0.3s;
  flex-shrink: 0;
}
.sidebar:hover {
  width: 200px;
}
.sidebar .logo {
  width: 40px;
  margin: 1rem 0;
}
.sidebar ul {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
}
.sidebar li {
  padding: 1rem;
  color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.3s;
}
.sidebar li:hover {
  background: #038a44;
}
.sidebar i {
  margin-right: 1rem;
  font-size: 1.2rem;
}
.sidebar span {
  display: none;
}
.sidebar:hover span {
  display: inline;
}

/* Main content */
.main {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 1rem;
}

.header {
  background: linear-gradient(90deg, #2fa266, #519974);
  color: white;
  padding: 1rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
}

/* Cards */
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}
.card {
  background: white;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: #444;
}

/* ===== Mobile Styles ===== */
@media (max-width: 768px) {
  .dashboard {
    flex-direction: column;
  }

  /* Sidebar becomes top nav */
  .sidebar {
    flex-direction: row;
    width: 100%;
    height: 60px;
    justify-content: space-around;
    padding: 0 0.5rem;
  }

  .sidebar:hover {
    width: 100%;
  }

  .sidebar .logo {
    display: none;
  }

  .sidebar ul {
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .sidebar li {
    padding: 0.5rem;
    flex-direction: column;
    font-size: 0.8rem;
  }

  .sidebar i {
    margin: 0;
    font-size: 1.5rem;
  }

  .sidebar span {
    display: none !important; /* icons only */
  }

  .main {
    flex: 1;
    overflow-y: auto;
    padding: 0.5rem;
  }
}
</style>
