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

        <!-- Header -->
        <div class="flex items-center mb-4">
            <!-- Avatar -->
            <div
                class="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center mr-4 border border-zinc-700 overflow-hidden">
                <img v-if="avatar" :src="avatar" alt="Instructor avatar" class="w-full h-full object-cover" />
                <UIcon v-else name="i-lucide-user" class="w-6 h-6 text-zinc-500" />
            </div>
            <div>
                <h3 class="text-lg font-bold text-white uppercase">
                    {{ name }}
                </h3>
                <div class="text-xs text-zinc-500">
                    {{ email }}
                </div>
            </div>
        </div>

        <!-- Bio -->
        <p class="text-zinc-400 text-sm mb-6 flex-1 italic">
            “{{ bio }}”
        </p>

        <!-- Tags -->
        <div class="flex flex-wrap gap-2">
            <span v-for="(tag, index) in specialties" :key="index"
                class="text-xs font-bold uppercase bg-red-900/20 text-red-500 px-2 py-1 rounded-sm border border-red-900/30">
                {{ tag }}
            </span>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
    email: string
    bio: string
    specialties: string[]
    avatar?: string | null
}>()

defineEmits(['edit', 'delete'])
</script>
