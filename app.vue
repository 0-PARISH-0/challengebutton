<script setup>
  const showingResult = ref(false)
  const challenge = ref()
  const getChallenge = async () => {
    const {data, error} = await useFetch('/api/getResults')
    if (error.value) {
      console.log(error.value)
    } else {
      challenge.value = data.value
      showingResult.value = true
    }
  }

</script>

<template>
  <div class="flex justify-center items-center p-4 text-white bg-gradient-to-br from-neutral-900 to-neutral-800 h-screen">
    <DisplayResult
      v-if="showingResult"
      @reset="showingResult = false"
      :challenge="challenge" />
    <ButtonMain v-else
      @click="getChallenge()" />
  </div>
</template>
