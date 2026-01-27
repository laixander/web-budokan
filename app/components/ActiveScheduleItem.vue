<template>
    <div class="bg-zinc-950/50 p-3 rounded border border-zinc-800/50
           flex justify-between items-center">
        <span class="font-medium text-zinc-200 truncate mr-2">
            {{ title }}
        </span>

        <span class="text-xs text-zinc-500 bg-zinc-900 px-2 py-1 rounded whitespace-nowrap">
            {{ day }} @ {{ time }}
        </span>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    day: string
    time: string
}>()
</script>