<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <NavbarAdmin />
        <main class="flex-grow pt-16">

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Header title="Manage Students" subtitle="Oversee student roster and memberships.">
                    <div class="relative w-full md:w-64">
                        <UIcon name="i-lucide-search" class="absolute left-3 top-3 w-4 h-4 text-zinc-500" />
                        <input type="text" placeholder="Search students..."
                            class="w-full bg-zinc-900 border border-zinc-800 rounded-sm pl-10 pr-4 py-2 text-white focus:outline-none focus:border-red-700 text-sm"
                            value="">
                    </div>
                </Header>
                <!-- Table -->
                <div class="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
                    <div class="overflow-x-auto">
                        <table class="w-full text-left text-sm text-zinc-400">
                            <thead class="bg-zinc-950 text-xs uppercase font-bold text-zinc-500">
                                <tr>
                                    <th class="px-6 py-4 tracking-wider">Student</th>
                                    <th class="px-6 py-4 tracking-wider">Status</th>
                                    <th class="px-6 py-4 tracking-wider">Current Plan</th>
                                    <th class="px-6 py-4 tracking-wider">Joined</th>
                                    <th class="px-6 py-4 tracking-wider text-right">Actions</th>
                                </tr>
                            </thead>

                            <tbody class="divide-y divide-zinc-800">
                                <tr v-for="student in students" :key="student.id"
                                    class="hover:bg-zinc-800/30 transition-colors">
                                    <!-- Student -->
                                    <td class="px-6 py-4">
                                        <div class="flex items-center">
                                            <div
                                                class="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center mr-3 text-zinc-500 font-bold text-xs border border-zinc-700">
                                                {{ student.name.charAt(0) }}
                                            </div>
                                            <div>
                                                <div class="font-bold text-white">
                                                    {{ student.name }}
                                                </div>
                                                <div class="text-xs">
                                                    {{ student.email }}
                                                </div>
                                            </div>
                                        </div>
                                    </td>

                                    <!-- Status -->
                                    <td class="px-6 py-4">
                                        <span
                                            class="inline-flex items-center px-2 py-1 rounded text-xs font-bold uppercase tracking-wider border"
                                            :class="student.active
                                                ? 'bg-green-900/20 text-green-500 border-green-900/30'
                                                : 'bg-zinc-800 text-zinc-500 border-zinc-700'">
                                            {{ student.active ? 'Active' : 'Inactive' }}
                                        </span>
                                    </td>

                                    <!-- Plan -->
                                    <td class="px-6 py-4">
                                        <!-- Display mode -->
                                        <div v-if="!student.changingPlan" class="text-white font-medium">
                                            <span v-if="!student.plan" class="text-zinc-600 italic">
                                                No Plan
                                            </span>
                                            <span v-else>
                                                {{ getPlanLabel(student.plan) }}
                                            </span>
                                        </div>

                                        <!-- Edit mode -->
                                        <select v-else v-model="student.plan"
                                            class="mt-1 bg-zinc-950 border border-zinc-700 rounded px-2 py-1 text-white text-xs">
                                            <option :value="null">No Plan</option>
                                            <option value="plan-beginner">Beginner</option>
                                            <option value="plan-intermediate">Intermediate</option>
                                            <option value="plan-advanced">Advanced</option>
                                        </select>
                                    </td>

                                    <!-- Joined -->
                                    <td class="px-6 py-4 font-mono text-xs">
                                        {{ student.joined }}
                                    </td>

                                    <!-- Actions -->
                                    <td class="px-6 py-4 text-right">
                                        <div class="flex items-center justify-end space-x-2">

                                            <!-- Change Plan -->
                                            <button
                                              class="p-1.5 transition-colors"
                                              :class="student.changingPlan
                                                ? 'text-blue-400 hover:text-blue-300'
                                                : student.plan
                                                  ? 'text-amber-400 hover:text-amber-300'
                                                  : 'text-zinc-500 hover:text-white'"
                                              title="Change Plan"
                                              @click="changePlan(student)"
                                            >
                                                <UIcon name="i-lucide-shield" class="flex w-4 h-4" />
                                            </button>

                                            <!-- Activate / Deactivate -->
                                            <button class="p-1.5 transition-colors" :class="student.active
                                                ? 'text-green-500 hover:text-green-400'
                                                : 'text-zinc-500 hover:text-green-500'" title="Activate Student"
                                                @click="toggleStudent(student)">
                                                <UIcon name="i-lucide-user-check" class="flex w-4 h-4" />
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </main>
        <Footer />
    </div>
</template>


<script setup>
import { ref, computed } from 'vue'

const students = ref([
    {
        id: 1,
        name: 'Daniel LaRusso',
        email: 'student@budokhan.com',
        joined: '10/1/2023',
        plan: 'plan-beginner',
        active: true,
        changingPlan: false
    },
    {
        id: 2,
        name: 'Johnny Lawrence',
        email: 'johnny@cobrakai.com',
        joined: '10/2/2023',
        plan: null,
        active: false,
        changingPlan: false
    },
    {
        id: 3,
        name: 'Miguel Diaz',
        email: 'miguel@eaglefang.com',
        joined: '11/15/2023',
        plan: null,
        active: true,
        changingPlan: false
    },
    {
        id: 4,
        name: 'Robby Keene',
        email: 'robby@eaglefang.com',
        joined: '12/1/2023',
        plan: 'plan-advanced',
        active: false,
        changingPlan: false
    },
    {
        id: 5,
        name: 'Hawk',
        email: 'hawk@eaglefang.com',
        joined: '12/15/2023',
        plan: 'plan-intermediate',
        active: true,
        changingPlan: false
    },
    {
        id: 6,
        name: 'Carmen Diaz',
        email: 'carmen@eaglefang.com',
        joined: '12/20/2023',
        plan: 'plan-beginner',
        active: true,
        changingPlan: false
    },
    {
        id: 7,
        name: 'Samantha LaRusso',
        email: 'samantha@eaglefang.com',
        joined: '12/25/2023',
        plan: null,
        active: true,
        changingPlan: false
    },
    {
        id: 8,
        name: 'Tory Nichols',
        email: 'tory@eaglefang.com',
        joined: '1/1/2024',
        plan: null,
        active: false,
        changingPlan: false
    }
])

const getPlanLabel = (plan) => {
    if (!plan) return 'No Plan'

    return plan
        .replace('plan-', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

/* Actions */
const changePlan = (student) => {
    if (student.changingPlan) {
        console.log('Plan saved:', student.name, student.plan)
        // TODO: API call here
    }
    student.changingPlan = !student.changingPlan
}

const toggleStudent = (student) => {
    student.active = !student.active
    console.log('Status toggled:', student.name, student.active)
    // TODO: API call
}
</script>