<script setup>
  const showingResult = ref(false)
  const challenge = ref()
  const loading = ref(false)

  const getChallenge = async () => {
    loading.value = true
    const {data, error} = await useFetch('/api/getResults')
    if (error.value) {
      console.log(error.value)
      loading.value = false
    } else {
      challenge.value = data.value
      loading.value = false
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
      @click="getChallenge()"
      :loading="loading"
      :class="{
        'animate-pulse border-purple-600': loading
      }" />
  </div>
</template>
