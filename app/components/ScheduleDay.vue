<template>
    <div class="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
        <!-- Day Header -->
        <div class="bg-zinc-800/50 px-6 py-3 border-b border-zinc-800">
            <h3 class="text-white font-bold uppercase tracking-wider">
                {{ day }}
            </h3>
        </div>

        <!-- Classes -->
        <div class="divide-y divide-zinc-800/50">
            <div v-for="(item, index) in classes" :key="index" class="p-6 hover:bg-zinc-800/30 transition-colors
               flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div class="flex items-start gap-4">
                    <div class="flex-shrink-0 mt-1">
                        <UIcon name="i-lucide-clock" class="w-5 h-5"
                            :class="item.closed ? 'text-zinc-600' : 'text-red-700'" />
                    </div>

                    <div>
                        <span class="text-white font-bold block text-lg uppercase">
                            {{ item.title }}
                        </span>
                        <span class="text-zinc-500 text-sm uppercase tracking-wide">
                            {{ item.subtitle }}
                        </span>
                    </div>
                </div>

                <div class="text-zinc-400 font-mono text-sm sm:text-right pl-9 sm:pl-0">
                    {{ item.time }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    day: {
        type: String,
        required: true,
    },
    classes: {
        type: Array,
        required: true,
    },
})
</script>