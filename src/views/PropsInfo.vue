<script setup>
import { watch , ref } from 'vue'


const props =defineProps(['name','count','changeData'])
const x= ref(0)
const user = ref(props.name)
console.log('user name',user)
watch(() => props.count, (newX,oldX) => {
   // props.count = newX;
   console.log(`name is ${props.name}`)
  console.log(`x is ${newX}: ${oldX}`)
}
)
function changeName() {
   console.log(user,'change name')
   user.value = 'laxmi'
}
watch(user,(newUser,oldUser) => {
   console.log(user,'newUser',newUser)
   console.log(`old user ${oldUser}`)
})



</script>

<template>
   <h2>student Name is : {{ user}}</h2> 
   <button @click="changeName">change name</button>
   <h1>{{ count }}</h1>
   <button @click="changeData">change Number</button>
   <button @click="x=x+1"> count+1</button>
   {{ x }}
</template>
<style>

</style>