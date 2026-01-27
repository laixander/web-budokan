<template>
    <div class="p-4 flex flex-col sm:flex-row sm:items-center
           justify-between hover:bg-zinc-800/50
           transition-colors gap-2">
        <!-- Left -->
        <div class="flex items-center space-x-4">
            <!-- Avatar -->
            <div class="w-10 h-10 rounded-full bg-zinc-800 flex-shrink-0
               flex items-center justify-center text-zinc-400
               font-bold uppercase">
                {{ initial }}
            </div>

            <!-- Info -->
            <div>
                <p class="text-white font-medium">
                    {{ name }}
                </p>
                <p class="text-xs text-zinc-500 flex flex-wrap items-center">
                    Checked into
                    <span class="text-zinc-300 ml-1">
                        {{ className }}
                    </span>
                </p>
            </div>
        </div>

        <!-- Right -->
        <div class="text-left sm:text-right text-xs text-zinc-400
             pl-14 sm:pl-0">
            {{ timestamp }}
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
    className: string
    timestamp: string
    initial?: string
}>()
</script>