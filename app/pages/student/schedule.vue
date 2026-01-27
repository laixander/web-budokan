<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <StudentNav />
        <main class="flex-grow pt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Header title="Class Schedule" subtitle="Find your next training session" />
                <div class="space-y-8">
                    <ScheduleCard
                        v-for="(day, index) in schedule"
                        :key="index"
                        :day="day.day"
                        :classes="day.classes"
                    />
                </div>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
const schedule = [
  {
    day: 'Monday',
    classes: [
      {
        title: 'Brazilian Jiu-Jitsu (Gi)',
        description: 'Fundamentals of grappling with Gi.',
        time: '18:00',
        location: 'Main Mat',
        instructor: 'Master Ken'
      },
      {
        title: 'Muay Thai Kickboxing',
        description: 'Striking techniques using 8 limbs.',
        time: '19:30',
        location: 'Main Mat',
        instructor: 'Kru Sarah'
      }
    ]
  },
  {
    day: 'Tuesday',
    classes: [
      {
        title: 'No-Gi Grappling',
        description: 'Submission wrestling without Gi.',
        time: '18:00',
        location: 'Main Mat',
        instructor: 'Coach Mike'
      }
    ]
  },
  {
    day: 'Wednesday',
    classes: [
      {
        title: 'Kids Self Defense',
        description: 'Building confidence and discipline.',
        time: '16:00',
        location: 'Main Mat',
        instructor: 'Sensei Dave'
      }
    ]
  },
  {
    day: 'Thursday',
    classes: [
      {
        title: 'Advanced MMA',
        description: 'Mixed Martial Arts sparring and drills.',
        time: '19:00',
        location: 'Main Mat',
        instructor: 'Coach Steve'
      }
    ]
  }
]
</script>