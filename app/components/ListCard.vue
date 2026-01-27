<template>
    <div class="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
        <!-- Header -->
        <div class="p-6 border-b border-zinc-800 flex justify-between items-center">
            <h2 class="text-xl font-bold text-white flex items-center">
                <UIcon :name="icon" class="w-5 h-5 mr-2 text-zinc-500" />{{ title }}
            </h2>

            <slot name="extra"></slot>
        </div>

        <!-- Items -->
        <div class="divide-y divide-zinc-800">
            <slot />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    icon?: string
}>()
</script>