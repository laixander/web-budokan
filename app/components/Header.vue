<template>
    <div class="flex flex-col lg:flex-row lg:items-center justify-between mb-10 gap-6">
        <div>
            <h1 class="text-3xl font-black uppercase italic text-white">{{ title }}</h1>
            <p class="text-zinc-400">{{ subtitle }}</p>
        </div>
        <slot />
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    title?: string
    subtitle?: string
}>()
</script>