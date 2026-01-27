<template>
    <div class="bg-zinc-900 rounded-xl border border-zinc-800 p-6
           flex flex-col justify-between relative overflow-hidden
           h-full min-h-[300px]">
        <!-- Content -->
        <div class="relative z-10">
            <h2 class="text-xl font-bold text-white mb-4 flex items-center">
                <UIcon name="i-lucide-calendar" class="w-5 h-5 mr-2 text-red-500" />
                {{ title }}
            </h2>

            <div class="space-y-3 mb-6">
                <ActiveScheduleItem v-for="(item, index) in visibleItems" :key="index" v-bind="item" />

                <p v-if="remainingCount > 0" class="text-xs text-zinc-500 italic">
                    + {{ remainingCount }} more classes
                </p>
            </div>
        </div>

        <!-- Action -->
        <NuxtLink :to="actionHref" class="text-red-500 font-bold uppercase text-sm
             flex items-center hover:text-red-400
             relative z-10 mt-auto">
            {{ actionLabel }}
            <UIcon name="i-lucide-arrow-right" class="w-4 h-4 ml-1" />
        </NuxtLink>

        <!-- Glow -->
        <div class="absolute -bottom-10 -right-10 w-40 h-40
             bg-red-900/10 rounded-full blur-3xl
             pointer-events-none" />
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title?: string
    items: Array<{
        title: string
        day: string
        time: string
    }>
    maxVisible?: number
    actionLabel?: string
    actionHref: string
}>()

const maxVisible = computed(() => props.maxVisible ?? 3)

const visibleItems = computed(() =>
    props.items.slice(0, maxVisible.value)
)

const remainingCount = computed(() =>
    Math.max(props.items.length - maxVisible.value, 0)
)
</script>