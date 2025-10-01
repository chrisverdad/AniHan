<template>
  <div class="surplus-page">
    <!-- Header -->
    <header class="header">
      <h1>🍃 Submit My Produce</h1>
    </header>

    <!-- Card Grid -->
    <div class="card-grid">
      <div
        v-for="(item, index) in produce"
        :key="index"
        class="produce-card"
        @click="toggleDetails(index)"
      >
        <!-- Hover swap image -->
        <img
          :src="hoveredIndex === index ? item.bruised : item.overripe"
          :alt="item.name"
          class="produce-image"
          @mouseenter="hoveredIndex = index"
          @mouseleave="hoveredIndex = null"
        />

        <h3 class="produce-title">{{ item.name }}</h3>

        <!-- Details -->
        <div v-if="activeIndex === index" class="details">
          <p><strong>Classification:</strong> {{ item.classification }}</p>
          <p class="definition">{{ item.definition }}</p>

          <label>Choose Quantity:</label>
          <select v-model="item.selectedQuantity" class="quantity-select">
            <option v-for="option in item.quantities" :key="option.value" :value="option.value">
              {{ option.label }}
            </option>
          </select>

          <p class="amount">💰 Amount: ₱{{ calculateAmount(item) }}</p>
          <button class="submit-btn">Submit Waste</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// ✅ Import your images
import bananaOverripe from '@/assets/images/surplus/banana.png'
import bananaBruised from '@/assets/images/surplus/bananabruised.png'
import mangoOverripe from '@/assets/images/surplus/mango.png'
import mangoBruised from '@/assets/images/surplus/mangobruised.png'
import tomatoOverripe from '@/assets/images/surplus/tomato.png'
import tomatoBruised from '@/assets/images/surplus/tomatobruised.png'

const hoveredIndex = ref(null)
const activeIndex = ref(null)

const produce = ref([
  {
    name: 'Banana',
    overripe: bananaOverripe,
    bruised: bananaBruised,
    classification: 'Overripe & Bruised',
    definition: 'Overripe bananas are soft and brownish, bruised bananas have damaged skin.',
    quantities: [
      { label: '5-10', value: 50 },
      { label: '11-15', value: 100 },
      { label: '16-20', value: 150 },
      { label: '21+', value: 200 },
    ],
    selectedQuantity: 50,
  },
  {
    name: 'Mango',
    overripe: mangoOverripe,
    bruised: mangoBruised,
    classification: 'Overripe & Bruised',
    definition: 'Overripe mangoes are too soft, bruised mangoes show dark patches.',
    quantities: [
      { label: '5-10', value: 60 },
      { label: '11-15', value: 120 },
      { label: '16-20', value: 180 },
      { label: '21+', value: 250 },
    ],
    selectedQuantity: 60,
  },
  {
    name: 'Tomato',
    overripe: tomatoOverripe,
    bruised: tomatoBruised,
    classification: 'Overripe & Bruised',
    definition: 'Overripe tomatoes are mushy, bruised tomatoes have damaged spots.',
    quantities: [
      { label: '5-10', value: 40 },
      { label: '11-15', value: 80 },
      { label: '16-20', value: 120 },
      { label: '21+', value: 160 },
    ],
    selectedQuantity: 40,
  },
])

// Toggle details
const toggleDetails = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

// Compute amount
const calculateAmount = (item) => {
  return item.selectedQuantity
}
</script>

<style scoped>
/* Page */
.surplus-page {
  padding: 0;
  background: #f9fafb;
  min-height: 100vh;
}

/* Header */
.header {
  background-color: #2fa266; /* Same as Dashboard */
  color: white;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  border-bottom: 3px solid #238752;
}

/* Grid */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  padding: 1.5rem;
}

/* Card */
.produce-card {
  background: #fff;
  border-radius: 12px;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}
.produce-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.15);
}

/* Image */
.produce-image {
  width: 100%;
  height: 140px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

/* Title */
.produce-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2fa266;
  margin-bottom: 0.5rem;
}

/* Details */
.details {
  margin-top: 1rem;
  font-size: 0.9rem;
  text-align: left;
}
.definition {
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 0.8rem;
}
.quantity-select {
  margin-top: 0.3rem;
  padding: 0.3rem;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 8px;
}

/* Amount + Button */
.amount {
  font-weight: bold;
  color: #2fa266;
  margin-top: 0.6rem;
}
.submit-btn {
  margin-top: 0.8rem;
  width: 100%;
  background: #2fa266;
  color: white;
  border: none;
  padding: 0.6rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.submit-btn:hover {
  background: #238752;
}
</style>
