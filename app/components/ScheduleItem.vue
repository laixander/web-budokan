<template>
    <div class="p-6 hover:bg-zinc-800/30 transition-colors
           flex flex-col md:flex-row md:items-center
           justify-between gap-4">
        <!-- Left -->
        <div>
            <h3 class="text-lg font-bold text-white mb-1">
                {{ title }}
            </h3>
            <p class="text-sm text-zinc-400">
                {{ description }}
            </p>
        </div>

        <!-- Right -->
        <div class="flex flex-col sm:flex-row sm:items-center
             gap-3 sm:space-x-6 text-sm text-zinc-300 flex-shrink-0">
            <div class="flex items-center">
                <UIcon name="i-lucide-clock" class="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                {{ time }}
            </div>

            <div class="flex items-center">
                <UIcon name="i-lucide-map-pin" class="w-4 h-4 mr-2 text-red-500 flex-shrink-0" />
                {{ location }}
            </div>

            <div class="flex items-center text-zinc-500">
                Instructor: {{ instructor }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    description: string
    time: string
    location: string
    instructor: string
}>()
</script>