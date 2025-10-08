<template>
  <div class="transaction">
    <!-- Header -->
    <header class="header">
      <h1>📦 Transactions</h1>
    </header>

    <!-- Add Transaction Form -->
    <div class="form-section">
      <h2>Add Transaction</h2>
      <form @submit.prevent="addTransaction">
        <div class="form-grid">
          <div class="form-group">
            <label>Farmer Name</label>
            <input v-model="newTransaction.farmer" type="text" required />
          </div>

          <div class="form-group">
            <label>Produce</label>
            <select v-model="newTransaction.produce" required>
              <option disabled value="">Select Produce</option>
              <option>Banana</option>
              <option>Mango</option>
              <option>Tomato</option>
            </select>
          </div>

          <div class="form-group">
            <label>Date</label>
            <input v-model="newTransaction.date" type="date" required />
          </div>

          <div class="form-group">
            <label>Quantity</label>
            <input v-model.number="newTransaction.quantity" type="number" min="1" required />
          </div>
        </div>

        <button type="submit" class="add-btn">Add Transaction</button>
      </form>
    </div>

    <!-- Transaction Table -->
    <div class="table-section">
      <h2>Ongoing Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Farmer</th>
            <th>Produce</th>
            <th>Date</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(tx, index) in transactions" :key="index">
            <td>{{ tx.farmer }}</td>
            <td>{{ tx.produce }}</td>
            <td>{{ tx.date }}</td>
            <td>{{ tx.quantity }}</td>
            <td>
              <span
                :class="{
                  'status-pending': tx.status === 'Processing',
                  'status-success': tx.status === 'Completed',
                  'status-failed': tx.status === 'Rejected',
                }"
              >
                {{ tx.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const newTransaction = ref({
  farmer: '',
  produce: '',
  date: '',
  quantity: null,
})

const transactions = ref([
  {
    farmer: 'Juan Dela Cruz',
    produce: 'Banana',
    date: '2025-10-08',
    quantity: 20,
    status: 'Processing',
  },
  {
    farmer: 'Maria Santos',
    produce: 'Mango',
    date: '2025-10-07',
    quantity: 15,
    status: 'Completed',
  },
])

const addTransaction = () => {
  if (
    newTransaction.value.farmer &&
    newTransaction.value.produce &&
    newTransaction.value.date &&
    newTransaction.value.quantity
  ) {
    transactions.value.push({
      ...newTransaction.value,
      status: 'Processing',
    })

    // Reset form
    newTransaction.value = { farmer: '', produce: '', date: '', quantity: null }
  }
}
</script>

<style scoped>
.transaction-page {
  padding: 0;
  background-color: #f9fafb;
  min-height: 100vh;
}

/* Header */
.header {
  background-color: #2fa266;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  border-bottom: 3px solid #238752;
}

/* Form Section */
.form-section {
  background: #fff;
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.form-section h2 {
  color: #2fa266;
  margin-bottom: 1rem;
}
.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}
.form-group label {
  display: block;
  font-weight: 600;
  margin-bottom: 0.3rem;
}
.form-group input,
.form-group select {
  width: 100%;
  padding: 0.4rem;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.add-btn {
  margin-top: 1rem;
  background: #2fa266;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;
}
.add-btn:hover {
  background: #238752;
}

/* Table Section */
.table-section {
  background: #fff;
  margin: 1.5rem;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
.table-section h2 {
  color: #2fa266;
  margin-bottom: 1rem;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border-bottom: 1px solid #ddd;
  text-align: center;
  padding: 0.6rem;
}
th {
  background: #f1f1f1;
  color: #333;
}
.status-pending {
  color: #ffb300;
  font-weight: bold;
}
.status-success {
  color: #2fa266;
  font-weight: bold;
}
.status-failed {
  color: #d9534f;
  font-weight: bold;
}
</style>
