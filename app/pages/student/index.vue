<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <StudentNav />
        <main class="flex-grow pt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Header title="Student Dashboard" subtitle="Welcome back, Daniel LaRusso">
                    <div class="flex flex-col sm:flex-row gap-4">
                        <a class="flex items-center justify-center bg-zinc-800 hover:bg-zinc-700 text-white px-6 py-3 rounded-md font-bold transition-colors border border-zinc-700 w-full sm:w-auto"
                            href="/student/schedule" data-discover="true">
                            <UIcon name="i-lucide-calendar" class="w-5 h-5 mr-2" />View Schedule
                        </a>
                        <button
                            class="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-transform hover:scale-105 shadow-lg w-full sm:w-auto">
                            <UIcon name="i-lucide-qr-code" class="w-5 h-5 mr-2" />Scan to Check-In
                        </button>
                    </div>
                </Header>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
                    <StatCard v-for="(stat, index) in stats" :key="index" v-bind="stat" />
                </div>
                <ListCard title="Attendance History">
                    <template #extra>
                        <a class="text-xs text-red-500 font-bold uppercase hover:underline flex items-center"
                            href="/student/schedule" data-discover="true">Find a class
                            <UIcon name="i-lucide-arrow-right" class="w-3 h-3 ml-1" />
                        </a>
                    </template>
                    <AttendanceItem v-for="(item, index) in items" :key="index" v-bind="item" />
                </ListCard>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
const stats = [
    {
        label: 'Membership Plan',
        value: 'Platinum',
        icon: 'i-lucide-crown',
        iconColor: 'text-amber-500'
    },
    {
        label: 'Total Classes',
        value: 4,
        icon: 'i-lucide-shield-check',
        iconColor: 'text-emerald-500'
    },
    {
        label: 'Last Session',
        value: 'Jan 25',
        icon: 'i-lucide-calendar',
        iconColor: 'text-blue-500'
    },
    {
        label: 'Total Credits',
        value: '100',
        icon: 'i-lucide-coins',
        iconColor: 'text-purple-500'
    }
]

const items = [
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
</script>