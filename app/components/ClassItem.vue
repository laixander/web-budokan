<template>
    <div class="p-6 hover:bg-zinc-800/50 transition-colors
           flex flex-col lg:flex-row lg:items-center
           justify-between gap-4">
        <!-- Left content -->
        <div class="flex-grow">
            <h3 class="text-xl font-bold text-white mb-1">
                {{ title }}
            </h3>

            <div class="flex flex-wrap gap-2 sm:gap-4 text-sm text-zinc-400">
                <span class="flex items-center">
                    <span class="text-zinc-600 mr-2">Instructor:</span>
                    {{ instructor }}
                </span>

                <span class="hidden sm:inline text-zinc-700">|</span>

                <span class="flex items-center">
                    <span class="text-zinc-600 mr-2">When:</span>
                    {{ day }} @ {{ time }}
                </span>
            </div>

            <p class="mt-2 text-sm text-zinc-500 max-w-2xl">
                {{ description }}
            </p>
        </div>

        <!-- Action -->
        <div class="flex items-center space-x-3 pt-4 lg:pt-0">
            <button class="flex-1 lg:flex-none justify-center flex items-center
               bg-zinc-800 hover:bg-zinc-700 text-white
               px-4 py-2 rounded-md font-medium text-sm
               transition-colors border border-zinc-700" @click="$emit('qr')">
                <UIcon name="i-lucide-qr-code" class="w-4 h-4 mr-2" />
                QR Code
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    instructor: string
    day: string
    time: string
    description: string
}>()

const emit = defineEmits<{
    (e: 'qr'): void
}>()
</script>