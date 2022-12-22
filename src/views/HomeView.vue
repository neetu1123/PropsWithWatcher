<script setup lang="ts">
import { ref } from 'vue'
import PropsInfo from './PropsInfo.vue'
const name = ref ('neetu')
const count = ref(0)
const changeData = () => {
  count.value++
}
import { useCounterStore } from "@/stores/counter";
const storeCounter = useCounterStore();
// const count = ref(0);
// const increaseCount = () => {
//   count.value++;
// };

// const decreaseCount = () => {
//   count.value--;
// };

// const oddOrEven = computed(() => {
//   if (count.value % 2 === 0 && count.value != 0) return "even";
//   else if (count.value === 0) {
//     return alert("please perform the action  value is zero yet");
//   }
//   return "odd";
// });

</script>

<template>

  <p>home components</p>
  <div class="home">
    <div class="count">
      {{ storeCounter.count }}
    </div>
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">--</button>
      <button @click="storeCounter.increaseCount">++</button>
    </div>
    <hr />
    <div>This counter is : {{ storeCounter.oddOrEven }}</div>
  </div>
  <hr>
  <div>
    <button  @click="storeCounter.show = !storeCounter.show">change the name</button>
   
  <h1 v-if="storeCounter.show"> {{ storeCounter.name }} </h1>
  <h1 v-else> {{ storeCounter.name1 }} </h1>
  </div>
  <hr>
 <!-- for double increament with pinia -->
 <div>
  <h2>{{ storeCounter.counter }}</h2>
 </div>
 <!-- click event with doubleincreament -->
<div>
  <button @click="storeCounter.doubleIncrease">Double increament</button>
</div>
<hr>
<button @click="storeCounter.randomizeCounter">click me</button>
<PropsInfo name="neetu" :count="count" :changeData="changeData"></PropsInfo>

</template>

<style scoped>
.count {
  font-size: 80px;
  text-align: center;
}
.buttons button {
  text-align: center;
  font-size: 60px;
  margin: 10px;
}
</style>
