<template>
    <div class="p-8 rounded-sm border" :class="[
        variant === 'default'
            ? 'bg-zinc-900 border-zinc-800'
            : 'bg-red-900/10 border-red-900/30'
    ]">
        <!-- Header -->
        <h3 class="text-white font-bold uppercase mb-6 flex items-center">
            <UIcon v-if="icon" :name="icon" class="w-5 h-5 mr-2"
                :class="variant === 'default' ? 'text-red-700' : 'text-red-600'" />
            {{ title }}
        </h3>

        <!-- Content -->
        <div class="text-zinc-400 text-sm leading-relaxed">
            <slot />
        </div>

        <!-- Footer / Action -->
        <div v-if="$slots.footer" class="mt-6">
            <slot name="footer" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        default: null,
    },
    variant: {
        type: String,
        default: 'default', // default | alert
    },
})
</script>