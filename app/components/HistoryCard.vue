<template>
    <div class="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
        <!-- Day header -->
        <div class="py-4 px-6 bg-zinc-950 border-b border-zinc-800">
            <h2 class="text-xl font-bold text-red-500 uppercase italic">
                {{ month }}
            </h2>
        </div>

        <!-- Classes -->
        <div class="divide-y divide-zinc-800">
            <AttendanceItem v-for="(item, index) in items" :key="index" v-bind="item" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    month: string
    items: Array<{
        title: string
        subtitle: string
        date: string
        time: string
        icon?: string
        iconColor?: string
        iconBg?: string
    }>
}>()
</script>