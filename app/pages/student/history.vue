<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <NavbarStudent />
        <main class="flex-grow pt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Header title="Attendance History" subtitle="Complete record of your training sessions.">
                    <div class="flex items-center gap-3">
                        <UIcon name="i-lucide-funnel" class="w-6 h-6 text-zinc-500" />
                        <select
                            class="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:border-red-700 outline-none transition-colors appearance-none">
                            <option value="all">All Time</option>
                            <option value="2026-01">January 2026</option>
                        </select>
                    </div>
                </Header>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
                    <StatCard v-for="(stat, index) in stats" :key="index" v-bind="stat" />
                </div>

                <div class="space-y-8">
                    <HistoryCard v-for="(month, index) in history" :key="index" :month="month.month"
                        :items="month.items" />
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
const stats = [
    {
        label: 'Total Sessions',
        value: 4,
        icon: 'i-lucide-shield-check',
        iconColor: 'text-emerald-500'
    },
    {
        label: 'This Month',
        value: 4,
        icon: 'i-lucide-calendar',
        iconColor: 'text-blue-500'
    },
    {
        label: 'Most Recent',
        value: 'Jan 22, 2026',
        icon: 'i-lucide-shield-check',
        iconColor: 'text-amber-500'
    }
]

const history = [
    {
        month: 'January 2026',
        items: [
            {
                title: 'Brazilian Jiu-Jitsu (Gi)',
                subtitle: 'Checked in via QR',
                date: 'Jan 25, 2026',
                time: '10:56 AM',
                icon: 'i-lucide-shield-check',
                iconColor: 'text-red-500',
                iconBg: 'bg-red-900/20'
            },
            {
                title: 'Muay Thai Kickboxing',
                subtitle: 'Checked in via QR',
                date: 'Jan 23, 2026',
                time: '10:56 AM',
                icon: 'i-lucide-shield-check',
                iconColor: 'text-red-500',
                iconBg: 'bg-red-900/20'
            },
            {
                title: 'Advanced MMA',
                subtitle: 'Checked in via QR',
                date: 'Jan 19, 2026',
                time: '10:56 AM',
                icon: 'i-lucide-shield-check',
                iconColor: 'text-red-500',
                iconBg: 'bg-red-900/20'
            },
            {
                title: 'No-Gi Grappling',
                subtitle: 'Checked in via QR',
                date: 'Jan 14, 2026',
                time: '10:56 AM',
                icon: 'i-lucide-shield-check',
                iconColor: 'text-red-500',
                iconBg: 'bg-red-900/20'
            }
        ]
    }
]
</script>
