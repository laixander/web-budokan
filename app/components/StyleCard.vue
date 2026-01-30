<template>
    <div class="bg-zinc-900 border border-zinc-800 rounded-sm p-6 relative group flex flex-col">
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

        <!-- Content -->
        <div class="mb-4">
            <div
                class="w-12 h-12 bg-zinc-950 rounded-lg border border-zinc-800 flex items-center justify-center text-red-700 mb-4">
                <UIcon :name="icon" class="w-6 h-6" />
            </div>

            <h3 class="text-xl font-bold uppercase tracking-tight text-white mb-2">
                {{ name }}
            </h3>

            <p class="text-zinc-400 text-sm leading-relaxed">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
    description: string
    icon?: string
}>()

const emit = defineEmits(['edit', 'delete'])
</script>
