import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter' , () => {
  const count = ref(0);
   const name = ref('Neetu')
   const name1 = ref('laxmi')
   const show = ref(true)
   const counter = ref(2)
  // for action 
  const increaseCount = () => count.value++ ;

  //for setter or perform an action 
  const decreaseCount = () => count.value-- ;

  //for getter or computed properties used

  const oddOrEven = computed(() => {
    if(count.value%2===0) return 'even'
    return 'odd'
  })
 const randomizeCounter = () => {
    count.value = Math.round(100 * Math.random())
  }
  const doubleIncrease = () => counter.value += 2;
  
  return {count , increaseCount , decreaseCount , oddOrEven , name ,name1,show , doubleIncrease, counter, randomizeCounter}

}
)
