<script setup>
    const props = defineProps(['challenge'])
</script>

<template>
    <div class="w-full max-w-xl space-y-2">
        <div class="flex flex-col justify-center items-center text-center p-2 space-y-2 w-full border rounded border-neutral-600 bg-gradient-to-br from-neutral-900 to-neutral-800 h-96">
            <div class="w-full rounded p-2 text-3xl font-bold">
                {{ challenge.reps }} Reps
            </div>
            <div class="text-7xl w-full rounded p-2 text-4xl font-bold">
                {{ challenge.task }}
            </div>
            <div class="w-full rounded p-2 text-3xl font-bold">
                {{ challenge.time }} minutes
            </div>
        </div>
        <DisplayTimer
            :initialMinutes="challenge.time"
            @reset="$emit('reset')" />
        <ButtonReset @click="$emit('reset')" />
    </div>
</template>