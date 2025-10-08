<template>
  <div class="main-layout">
    <aside class="sidebar">
      <img src="@/assets/images/anihan.png" alt="AniHan Logo" class="logo" />
      <ul>
        <li>
          <router-link to="#"> <i class="fas fa-home"></i><span>Home</span> </router-link>
        </li>
        <li>
          <router-link to="#"> <i class="fas fa-chart-line"></i><span>Charts</span> </router-link>
        </li>
        <li>
          <router-link to="#">
            <i class="fas fa-envelope"></i><span>Transaction</span>
          </router-link>
        </li>
        <li>
          <router-link to="#">
            <i class="fas fa-question-circle"></i><span>Submit My Produce</span>
          </router-link>
        </li>
      </ul>
    </aside>

    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.main-layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 250px;
  background: #3c8c4a;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 1rem;
}

.sidebar .logo {
  width: 120px;
  margin-bottom: 2rem;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  width: 100%;
}

.sidebar ul li {
  width: 100%;
}

.sidebar ul li a {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  padding: 0.8rem 1rem;
}

.sidebar ul li a.router-link-active {
  background: #2a6f38;
}

.content {
  flex: 1;
  background: #f4f4f4;
  padding: 2rem;
  overflow-y: auto;
}
</style>
