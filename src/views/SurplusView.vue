<template>
  <div class="surplus-page">
    <header class="header">
      <h1>🍃 Submit My Produce</h1>
    </header>

    <div class="card-grid">
      <div
        v-for="(item, index) in produce"
        :key="index"
        class="produce-card"
        @click="toggleDetails(index)"
      >
        <div v-if="activeIndex !== index" class="collapsed-view">
          <img :src="item.main" :alt="item.name" class="produce-image" />
          <h3 class="produce-title">{{ item.name }}</h3>
        </div>

        <div v-else class="expanded-view">
          <h3 class="produce-title">{{ item.name }}</h3>

          <div class="classification-container">
            <div class="classification-card">
              <img :src="item.overripe" :alt="item.name + ' Overripe'" class="produce-image" />
              <h4>Overripe</h4>
              <p class="definition">{{ item.overripeDesc }}</p>

              <div class="quantity-counter">
                <button @click.stop="decrease(item, 'overripe')" class="counter-btn">-</button>
                <span>{{ item.overripeQty }}</span>
                <button @click.stop="increase(item, 'overripe')" class="counter-btn">+</button>
              </div>

              <p class="amount">💰 Amount: ₱{{ calculateAmount(item.overripeQty) }}</p>
            </div>

            <!-- Bruised -->
            <div class="classification-card">
              <img :src="item.bruised" :alt="item.name + ' Bruised'" class="produce-image" />
              <h4>Bruised</h4>
              <p class="definition">{{ item.bruisedDesc }}</p>

              <div class="quantity-counter">
                <button @click.stop="decrease(item, 'bruised')" class="counter-btn">-</button>
                <span>{{ item.bruisedQty }}</span>
                <button @click.stop="increase(item, 'bruised')" class="counter-btn">+</button>
              </div>

              <p class="amount">💰 Amount: ₱{{ calculateAmount(item.bruisedQty) }}</p>
            </div>
          </div>

          <button class="submit-btn">Submit Waste</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// images
import bananaMain from '@/assets/images/surplus/banana.png'
import bananaBruised from '@/assets/images/surplus/bananabruised.png'
import mangoMain from '@/assets/images/surplus/mango.png'
import mangoBruised from '@/assets/images/surplus/mangobruised.png'
import tomatoMain from '@/assets/images/surplus/tomato.png'
import tomatoBruised from '@/assets/images/surplus/tomatobruised.png'

const activeIndex = ref(null)

//  Produce data
const produce = ref([
  {
    name: 'Banana',
    main: bananaMain,
    overripe: bananaMain,
    bruised: bananaBruised,
    overripeDesc: 'Soft and brownish skin — slightly damaged but still usable.',
    bruisedDesc: 'Heavily bruised with dark spots and visible damage.',
    overripeQty: 5,
    bruisedQty: 5,
  },
  {
    name: 'Mango',
    main: mangoMain,
    overripe: mangoMain,
    bruised: mangoBruised,
    overripeDesc: 'Too soft and sweet — ideal for jam or puree.',
    bruisedDesc: 'Dark patches on skin, slightly fermented scent.',
    overripeQty: 5,
    bruisedQty: 5,
  },
  {
    name: 'Tomato',
    main: tomatoMain,
    overripe: tomatoMain,
    bruised: tomatoBruised,
    overripeDesc: 'Mushy texture, still good for sauces.',
    bruisedDesc: 'Cracked or spotted, suitable for fertilizer.',
    overripeQty: 5,
    bruisedQty: 5,
  },
])

// Toggle expanded view
const toggleDetails = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

// Quantity functions (minimum 5)
const increase = (item, type) => {
  if (type === 'overripe') item.overripeQty++
  else item.bruisedQty++
}
const decrease = (item, type) => {
  if (type === 'overripe' && item.overripeQty > 5) item.overripeQty--
  if (type === 'bruised' && item.bruisedQty > 5) item.bruisedQty--
}

// Pricing logic (₱10 per 5 pieces)
const calculateAmount = (qty) => {
  if (qty <= 10) return 10
  else if (qty <= 15) return 20
  else if (qty <= 20) return 30
  else if (qty <= 25) return 40
  else return 50 // keeps increasing if they add more
}
</script>

<style scoped>
.surplus-page {
  padding: 0;
  background: #f9fafb;
  min-height: 100vh;
}

.header {
  background-color: #2fa266;
  color: white;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  border-bottom: 3px solid #238752;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
  padding: 1.5rem;
}

.produce-card {
  background: #fff;
  border-radius: 14px;
  padding: 1.2rem;
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

.collapsed-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.click-note {
  font-size: 0.85rem;
  color: #777;
  margin-top: 0.4rem;
}

.expanded-view {
  cursor: default;
}

.produce-title {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2fa266;
  margin-bottom: 1rem;
}

.classification-container {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}
.classification-card {
  flex: 1;
  background: #f5fdf8;
  border-radius: 10px;
  padding: 0.8rem;
  border: 1px solid #d3f1e0;
}
.classification-card h4 {
  color: #2fa266;
  font-weight: 600;
  margin: 0.5rem 0;
}
.definition {
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 0.8rem;
}
.produce-image {
  width: 100%;
  height: 120px;
  object-fit: contain;
  margin-bottom: 0.5rem;
}

.quantity-counter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
}
.counter-btn {
  background: #2fa266;
  color: white;
  border: none;
  padding: 0.3rem 0.7rem;
  border-radius: 6px;
  font-size: 1.1rem;
  cursor: pointer;
}
.counter-btn:hover {
  background: #238752;
}

/* Amount */
.amount {
  font-weight: bold;
  color: #2fa266;
}

/* Submit Button */
.submit-btn {
  margin-top: 1rem;
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
