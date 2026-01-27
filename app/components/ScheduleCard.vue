<template>
    <div class="bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden">
        <!-- Day header -->
        <div class="p-4 bg-zinc-950 border-b border-zinc-800">
            <h2 class="text-xl font-bold text-red-500 uppercase italic">
                {{ day }}
            </h2>
        </div>

        <!-- Classes -->
        <div class="divide-y divide-zinc-800">
            <ScheduleItem v-for="(item, index) in classes" :key="index" v-bind="item" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    day: string
    classes: Array<{
        title: string
        description: string
        time: string
        location: string
        instructor: string
    }>
}>()
</script>