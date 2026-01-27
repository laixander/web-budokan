<template>
    <div class="p-6 flex flex-col sm:flex-row sm:items-center justify-between
           hover:bg-zinc-800/50 transition-colors gap-4">
        <!-- Left -->
        <div class="flex items-center">
            <div class="h-10 w-10 rounded-full flex-shrink-0 flex items-center justify-center mr-4"
                :class="[iconBg, iconColor]">
                <UIcon :name="icon" class="w-5 h-5" />
            </div>

            <div>
                <h4 class="font-bold text-white">{{ title }}</h4>
                <p class="text-sm text-zinc-500">{{ subtitle }}</p>
            </div>
        </div>

        <!-- Right -->
        <div class="text-left sm:text-right pl-14 sm:pl-0">
            <p class="text-sm font-medium text-white">{{ date }}</p>
            <p class="text-xs text-zinc-500">{{ time }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string
    subtitle: string
    date: string
    time: string
    icon?: string
    iconColor?: string
    iconBg?: string
}>()
</script>