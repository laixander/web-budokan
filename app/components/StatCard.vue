<template>
    <div class="bg-zinc-900 p-6 rounded-xl border border-zinc-800 flex items-center h-full relative overflow-hidden group">
        <div class="mr-4 p-3 bg-zinc-950 rounded-lg border border-zinc-800 relative z-10 group-hover:scale-110 transition-transform flex-shrink-0">
            <UIcon :name="icon" class="flex w-8 h-8" :class="iconColor" />
        </div>

        <div class="relative z-10 min-w-0">
            <p class="text-sm text-zinc-400 font-medium uppercase tracking-wider truncate">
                {{ label }}
            </p>
            <p class="text-2xl font-black text-white">
                {{ value }}
            </p>
        </div>

        <div class="absolute inset-0 bg-gradient-to-br from-zinc-800/0 to-zinc-800/30 opacity-0 group-hover:opacity-100 transition-opacity">
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    icon: string
    iconColor?: string
    label: string
    value: string | number
}>()
</script>