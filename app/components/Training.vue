<template>
    <section class="py-24 bg-zinc-900 border-y border-zinc-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-20">
                <h2 class="text-4xl md:text-6xl font-black uppercase tracking-tight mb-4 text-white">
                    Training <span class="text-red-700">Systems</span>
                </h2>
                <p class="text-zinc-500 uppercase tracking-widest">
                    Authentic • Combat • Lineage
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div v-for="(system, index) in systems" :key="index"
                    class="group relative bg-zinc-950 border border-zinc-900 hover:border-red-900/50 transition-colors overflow-hidden">
                    <div class="aspect-video w-full overflow-hidden relative">
                        <img :src="system.image" :alt="system.title"
                            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100" />
                        <div class="absolute bottom-4 right-4 p-3 bg-red-700 text-white rounded-sm">
                            <UIcon :name="system.icon" class="w-6 h-6" />
                        </div>
                    </div>

                    <div class="p-8">
                        <h3 class="text-2xl font-black uppercase text-white mb-1">
                            {{ system.title }}
                        </h3>

                        <p v-if="system.subtitle" class="text-zinc-500 font-bold uppercase text-sm mb-4">
                            {{ system.subtitle }}
                        </p>

                        <div class="h-px w-full bg-zinc-800 my-4 group-hover:bg-red-900/50 transition-colors"></div>

                        <p class="text-zinc-400 text-sm leading-relaxed">
                            {{ system.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const systems = [
    {
        title: 'Iwama-Style Aikido',
        image:
            'https://images.unsplash.com/photo-1746960836110-18b23375651c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        icon: 'i-lucide-scale',
        description:
            'This is not soft or compliant Aikido. Training emphasizes solid structure, posture, joint control, and direct integration of weapons. Empty-hand techniques are inseparable from bokken and jo principles.',
    },
    {
        title: 'Luta Livre',
        subtitle: '(No-Gi Grappling)',
        image:
            'https://images.unsplash.com/photo-1644594570314-775ad32be5d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        icon: 'i-lucide-users',
        description:
            'This is not Brazilian Jiu-Jitsu. Luta Livre focuses on pressure, aggressive positional control, and direct submissions without reliance on sport rules or point systems.',
    },
    {
        title: 'Dekiti Tirsi Siradas Arnis',
        image:
            'https://images.unsplash.com/photo-1564452879279-03d854bd2401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
        icon: 'i-lucide-sword',
        description:
            'This is not modern or sport Arnis. Dekiti Tirsi Siradas is a blade-first Filipino martial art preserving continuous offense, close-quarter combat, and classical weapon logic.',
    },
]
</script>