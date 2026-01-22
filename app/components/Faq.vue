<template>
    <section id="faq" class="py-24 bg-zinc-950">
        <div class="max-w-3xl mx-auto px-4">
            <div class="text-center mb-16">
                <UIcon name="i-lucide-circle-help" class="w-12 h-12 text-zinc-700 mx-auto mb-6" />
                <h2 class="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4 text-white">
                    Frequent <span class="text-red-700">Questions</span>
                </h2>
            </div>

            <div class="w-full space-y-4">
                <div v-for="(item, index) in items" :key="index"
                    class="border border-zinc-800 bg-zinc-900/50 px-6">
                    <h3 class="flex">
                        <button type="button" @click="toggle(index)"
                            class="focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md text-sm transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 text-white hover:text-red-500 hover:no-underline font-bold uppercase text-left py-6">
                            {{ item.question }}

                            <UIcon name="i-lucide-chevron-down"
                                class="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200"
                                :class="{ 'rotate-180': activeIndex === index }" />
                        </button>
                    </h3>

                    <!-- Animated Answer -->
                    <div ref="panels" class="overflow-hidden text-sm" :style="panelStyle(index)">
                        <div class="pt-0 text-zinc-400 pb-6 text-lg" v-html="item.answer" />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, nextTick } from 'vue'

const activeIndex = ref(null)
const panels = ref([])

const toggle = async (index) => {
    activeIndex.value = activeIndex.value === index ? null : index
    await nextTick()
}

const panelStyle = (index) => {
    if (activeIndex.value !== index) {
        return {
            maxHeight: '0px',
            transition: 'max-height 300ms ease',
        }
    }

    const el = panels.value[index]
    return {
        maxHeight: el ? el.scrollHeight + 'px' : '0px',
        transition: 'max-height 300ms ease',
    }
}

const items = [
    {
        question: 'Is this Aikido soft?',
        answer: '<span class="text-red-600 font-bold">No.</span>',
    },
    {
        question: 'Is Luta Livre the same as BJJ?',
        answer:
            '<span class="text-red-600 font-bold">No.</span> It focuses on pressure and direct submissions without reliance on sport rules.',
    },
    {
        question: 'Is Dekiti Arnis for competition?',
        answer:
            '<span class="text-red-600 font-bold">No.</span> It is a blade-first martial art preserving combat logic.',
    },
    {
        question: 'Do I need prior experience?',
        answer:
            'No, but <span class="text-red-600 font-bold">seriousness is required.</span>',
    },
]
</script>