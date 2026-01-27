<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <Nav />
        <main class="flex-grow pt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Header title="Admin Dashboard" subtitle="Manage your dojo, classes, and students">
                    <a class="flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-lg border border-zinc-700 w-full lg:w-auto"
                        href="/admin/classes" data-discover="true">
                        <UIcon name="i-lucide-calendar" class="w-5 h-5 mr-2" />Manage Schedule
                    </a>
                </Header>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div class="lg:col-span-1">
                        <ActiveScheduleCard title="Active Schedule" :items="activeSchedule" :max-visible="3"
                            action-label="View & Edit Schedule" action-href="/admin/classes" />
                    </div>
                    <div class="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                        <StatCard v-for="(stat, index) in stats" :key="index" v-bind="stat" />
                    </div>
                    <div class="lg:col-span-3 mt-2">
                        <ListCard title="Recent Check-ins" icon="i-lucide-activity">
                            <template #extra>
                                <span class="text-xs text-zinc-500 font-mono">Live Feed</span>
                            </template>
                            <RecentCheckinItem v-for="(item, index) in recentCheckins" :key="index" v-bind="item" />
                        </ListCard>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
const activeSchedule = [
    { title: 'Brazilian Jiu-Jitsu (Gi)', day: 'Mon', time: '18:00' },
    { title: 'Muay Thai Kickboxing', day: 'Mon', time: '19:30' },
    { title: 'No-Gi Grappling', day: 'Tue', time: '18:00' },
    { title: 'Advanced MMA', day: 'Thu', time: '19:00' },
    { title: 'Kids Self Defense', day: 'Wed', time: '16:00' }
]

const stats = [
    {
        label: 'Today\'s Check-ins',
        value: 0,
        icon: 'i-lucide-clock',
        iconColor: 'text-emerald-500'
    },
    {
        label: 'Total Check-ins',
        value: 8,
        icon: 'i-lucide-trending-up',
        iconColor: 'text-blue-500'
    },
    {
        label: 'Total Students',
        value: 3,
        icon: 'i-lucide-users',
        iconColor: 'text-amber-500'
    },
    {
        label: 'Active Classes',
        value: 5,
        icon: 'i-lucide-activity',
        iconColor: 'text-purple-500'
    }
]

const recentCheckins = [
    {
        name: 'Johnny Lawrence',
        className: 'Brazilian Jiu-Jitsu (Gi)',
        timestamp: 'Jan 25, 10:56 AM',
        initial: 'J'
    },
    {
        name: 'Daniel LaRusso',
        className: 'Brazilian Jiu-Jitsu (Gi)',
        timestamp: 'Jan 25, 10:56 AM',
        initial: 'D'
    },
    {
        name: 'Miguel Diaz',
        className: 'Muay Thai Kickboxing',
        timestamp: 'Jan 24, 10:56 AM',
        initial: 'M'
    },
    {
        name: 'Daniel LaRusso',
        className: 'Muay Thai Kickboxing',
        timestamp: 'Jan 23, 10:56 AM',
        initial: 'D'
    },
    {
        name: 'Johnny Lawrence',
        className: 'No-Gi Grappling',
        timestamp: 'Jan 21, 10:56 AM',
        initial: 'J'
    },
    {
        name: 'Daniel LaRusso',
        className: 'Advanced MMA',
        timestamp: 'Jan 19, 10:56 AM',
        initial: 'D'
    },
    {
        name: 'Miguel Diaz',
        className: 'Advanced MMA',
        timestamp: 'Jan 19, 10:56 AM',
        initial: 'M'
    },
    {
        name: 'Daniel LaRusso',
        className: 'No-Gi Grappling',
        timestamp: 'Jan 14, 10:56 AM',
        initial: 'D'
    }
]
</script>