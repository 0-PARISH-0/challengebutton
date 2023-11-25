<script setup>
    const emit = defineEmits(['reset'])
    const props = defineProps(['initialMinutes'])

    const currentTime = ref(props.initialMinutes * 60);
    const formattedTime = computed(() => {
        const minutes = Math.floor(currentTime.value / 60);
        const seconds = currentTime.value % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    })

    const countdown = () => {
        if (currentTime.value > 0) {
            currentTime.value--;
        } else {
            emit('reset')
        }
    }

    watch(() => props.initialMinutes, () => {
        currentTime.value = props.initialMinutes * 60;
    })

    onMounted(() => {
        const intervalId = setInterval(countdown, 1000);
        onBeforeUnmount(() => {
            clearInterval(intervalId);
        });
    })
</script>

<template>
    <div class="w-full text-center font-extrabold p-2 border border-neutral-600 shadow rounded text-6xl">
        {{ formattedTime }}
    </div>
</template>