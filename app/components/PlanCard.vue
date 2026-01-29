<template>
    <div class="bg-zinc-900 border border-zinc-800 rounded-sm p-6 relative group">
        <!-- Actions -->
        <div class="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-white" @click="$emit('edit')">
                <UIcon name="i-lucide-pen" class="flex w-4 h-4" />
            </button>
            <button class="p-2 bg-zinc-800 hover:bg-red-900/50 hover:text-red-500 rounded-full text-white"
                @click="$emit('delete')">
                <UIcon name="i-lucide-trash-2" class="flex w-4 h-4" />
            </button>
        </div>

        <!-- Title -->
        <h3 class="text-xl font-bold text-white uppercase mb-2">
            {{ title }}
        </h3>

        <!-- Price -->
        <div class="text-2xl font-black text-white mb-4">
            ₱{{ typeof price === 'number' ? price.toLocaleString() : price }}
            <span class="text-sm font-normal text-zinc-500">/{{ billing || 'month' }}</span>
        </div>

        <!-- Description -->
        <p class="text-zinc-400 text-sm mb-6 h-10">
            {{ description }}
        </p>

        <!-- Features -->
        <div class="space-y-2">
            <div v-for="(feature, index) in features" :key="index" class="text-xs text-zinc-500 flex items-center">
                <span class="w-1.5 h-1.5 bg-zinc-700 rounded-full mr-2"></span>
                {{ feature }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    price: string | number
    description: string
    features: string[]
    billing?: string
}>()

defineEmits(['edit', 'delete'])
</script>