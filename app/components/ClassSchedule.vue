<template>
    <div class="bg-zinc-950 min-h-screen py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mb-16 border-l-4 border-red-700 pl-6">
                <h1 class="text-4xl md:text-6xl font-black uppercase text-white mb-4 tracking-tighter">Class <span class="text-red-700">Schedule</span></h1>
                <p class="text-xl text-zinc-400 max-w-2xl leading-relaxed">Consistency is the foundation of mastery. Arrive 15 minutes before class starts. Late entry is not permitted without prior instructor approval.</p>
            </div>
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="lg:col-span-2 space-y-6">
                    <ScheduleDay
                        v-for="(day, index) in schedule"
                        :key="index"
                        :day="day.day"
                        :classes="day.classes"
                    />
                </div>

                <div class="space-y-8">
                    <!-- Important Notes -->
                    <InfoCard title="Important Notes" icon="i-lucide-info">
                        <ul class="space-y-4">
                            <li class="flex items-start">
                                <span class="text-red-700 mr-2">•</span>
                                New students must complete an introductory trial before joining regular group classes.
                            </li>
                            <li class="flex items-start">
                                <span class="text-red-700 mr-2">•</span>
                                Private instruction is available outside of scheduled hours by appointment only.
                            </li>
                            <li class="flex items-start">
                                <span class="text-red-700 mr-2">•</span>
                                Schedule is subject to change for seminars and special events.
                            </li>
                        </ul>
                    </InfoCard>

                    <!-- Trial Session -->
                    <InfoCard title="Trial Session" icon="i-lucide-circle-alert" variant="alert">
                        <p>
                            Interested in joining? We are selective.
                            Submit an inquiry to schedule your evaluation and trial session.
                        </p>
                        <template #footer>
                            <a href="/join"
                                class="w-full block bg-red-700 hover:bg-red-800 text-center text-white font-bold py-3 uppercase tracking-widest text-sm transition-colors rounded-sm">
                                Inquire Now
                            </a>
                        </template>
                    </InfoCard>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const schedule = [
  {
    day: 'Monday',
    classes: [
      {
        title: 'Iwama-Style Aikido',
        subtitle: 'Fundamentals & Weapons',
        time: '18:00 - 19:30',
      },
      {
        title: 'Luta Livre',
        subtitle: 'No-Gi Grappling',
        time: '19:30 - 21:00',
      },
    ],
  },
  {
    day: 'Tuesday',
    classes: [
      {
        title: 'Dekiti Tirsi Siradas Arnis',
        subtitle: 'Blade & Stick Work',
        time: '18:00 - 19:30',
      },
      {
        title: 'Open Mat',
        subtitle: 'Supervised Sparring',
        time: '19:30 - 21:00',
      },
    ],
  },
  {
    day: 'Wednesday',
    classes: [
      {
        title: 'Iwama-Style Aikido',
        subtitle: 'Advanced Techniques',
        time: '18:00 - 19:30',
      },
      {
        title: 'Luta Livre',
        subtitle: 'Submission Wrestling',
        time: '19:30 - 21:00',
      },
    ],
  },
  {
    day: 'Thursday',
    classes: [
      {
        title: 'Dekiti Tirsi Siradas Arnis',
        subtitle: 'Close Quarter Combat',
        time: '18:00 - 19:30',
      },
      {
        title: 'Iwama-Style Aikido',
        subtitle: 'General Practice',
        time: '19:30 - 21:00',
      },
    ],
  },
  {
    day: 'Friday',
    classes: [
      {
        title: 'Luta Livre',
        subtitle: 'Competition Training',
        time: '18:00 - 20:00',
      },
      {
        title: 'Conditioning',
        subtitle: 'Strength & Mobility',
        time: '20:00 - 21:00',
      },
    ],
  },
  {
    day: 'Saturday',
    classes: [
      {
        title: 'Iwama-Style Aikido',
        subtitle: 'Weapons (Bokken / Jo)',
        time: '09:00 - 10:30',
      },
      {
        title: 'Luta Livre',
        subtitle: 'Open Mat',
        time: '10:30 - 12:00',
      },
      {
        title: 'Dekiti Tirsi Siradas Arnis',
        subtitle: 'Scenario Training',
        time: '13:00 - 15:00',
      },
    ],
  },
  {
    day: 'Sunday',
    classes: [
      {
        title: 'Rest Day',
        subtitle: '-',
        time: 'Closed',
        closed: true,
      },
    ],
  },
]
</script>