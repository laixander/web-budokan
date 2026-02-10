<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <NavbarAdmin />
        <main class="flex-grow pt-16">

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <div class="mb-8">
                    <NuxtLink to="/admin/members" class="flex items-center text-zinc-400 hover:text-white mb-4 transition-colors">
                        <UIcon name="i-lucide-arrow-left" class="w-4 h-4 mr-2" />Back to Members
                    </NuxtLink>
                    <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div class="flex items-center gap-4">
                            <div
                                class="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-zinc-500 font-bold text-2xl border border-zinc-700">
                                    {{ student ? student.name.charAt(0) : '' }}
                            </div>
                            <div>
                                    <h1 class="text-3xl font-black text-white uppercase tracking-tighter">
                                        {{ student ? student.name : '' }}
                                    </h1>
                                    <div class="flex items-center gap-2 mt-1">
                                        <span
                                            class="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold uppercase tracking-wider"
                                            :class="student && student.status === 'active' ? 'bg-green-900/20 text-green-500 border border-green-900/30' : 'bg-zinc-800 text-zinc-500 border border-zinc-700'">
                                            {{ student ? (student.status === 'active' ? 'active' : 'inactive') : '' }}
                                        </span>
                                        <span class="text-zinc-500 text-sm">Joined {{ student ? formatDate(student.createdAt) : '' }}</span>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div class="lg:col-span-1 space-y-8">
                        <div class="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
                            <h2 class="text-lg font-bold text-white uppercase tracking-tight mb-4 flex items-center">
                                <UIcon name="i-lucide-user" class="size-4 mr-2 text-red-600" />
                                Student Details
                            </h2>
                            <div class="space-y-4 text-sm">
                                <div class="flex items-start gap-3">
                                    <UIcon name="i-lucide-mail" class="size-4 text-zinc-500 mt-0.5" />
                                    <div>
                                        <div class="text-zinc-500 text-xs uppercase font-bold">Email</div>
                                        <div class="text-white">{{ student ? student.email : '' }}</div>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <UIcon name="i-lucide-phone" class="size-4 text-zinc-500 mt-0.5" />
                                    <div>
                                        <div class="text-zinc-500 text-xs uppercase font-bold">Phone</div>
                                        <div class="text-white">{{ student ? student.phone : '' }}</div>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <UIcon name="i-lucide-calendar" class="size-4 text-zinc-500 mt-0.5" />
                                    <div>
                                        <div class="text-zinc-500 text-xs uppercase font-bold">Date of Birth</div>
                                        <div class="text-white">{{ student ? formatDate(student.birthDate) : '' }}</div>
                                    </div>
                                </div>
                                <div class="flex items-start gap-3">
                                    <UIcon name="i-lucide-map-pin" class="size-4 text-zinc-500 mt-0.5" />
                                    <div>
                                        <div class="text-zinc-500 text-xs uppercase font-bold">Address</div>
                                        <div class="text-white">{{ student ? student.address : '' }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-zinc-900 border border-zinc-800 rounded-sm p-6">
                            <h2 class="text-lg font-bold text-white uppercase tracking-tight mb-4 flex items-center">
                                <UIcon name="i-lucide-shield" class="size-4 mr-2 text-red-600" />
                                Current Membership
                            </h2>
                            <div class="space-y-4">
                                <div class="p-4 bg-zinc-950/50 border border-zinc-800 rounded text-center">
                                    <div class="text-zinc-500 text-xs uppercase font-bold mb-1">Current Plan</div>
                                    <div class="text-xl font-black text-white">{{ currentPlan ? currentPlan.planName : (student ? (student.planId ? student.planId.replace('plan-','').replace('-',' ') : 'No Plan') : '') }}</div>
                                    <div class="text-red-500 font-bold mt-1">{{ student ? planPrice(student.planId) : '' }} / month</div>
                                </div>
                                <div>
                                    <label class="block text-zinc-500 text-xs uppercase font-bold mb-2">Change Plan</label>
                                    <select class="w-full bg-zinc-950 border border-zinc-700 rounded px-3 py-2 text-white text-sm focus:outline-none focus:border-red-700">
                                        <option value="">No Plan</option>
                                        <option value="plan-beginner">Beginner - ₱2500</option>
                                        <option value="plan-intermediate">Intermediate - ₱4000</option>
                                        <option value="plan-advanced">Advanced - ₱6000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lg:col-span-2 space-y-8">
                        <div class="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
                            <div class="p-6 border-b border-zinc-800">
                                <h2 class="text-lg font-bold text-white uppercase tracking-tight flex items-center">
                                    <UIcon name="i-lucide-history" class="size-4 mr-2 text-red-600" />
                                    Plan History
                                </h2>
                            </div>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left text-sm text-zinc-400">
                                    <thead class="bg-zinc-950 text-xs uppercase font-bold text-zinc-500">
                                        <tr>
                                            <th class="px-6 py-3">Plan</th>
                                            <th class="px-6 py-3">Start Date</th>
                                            <th class="px-6 py-3">End Date</th>
                                            <th class="px-6 py-3">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-zinc-800">
                                        <tr v-for="entry in history" :key="entry.id" class="hover:bg-zinc-800/30">
                                            <td class="px-6 py-3 font-medium text-white">{{ entry.planName }}</td>
                                            <td class="px-6 py-3 font-mono text-xs">{{ formatDate(entry.startDate) }}</td>
                                            <td class="px-6 py-3 font-mono text-xs">{{ entry.endDate ? formatDate(entry.endDate) : '-' }}</td>
                                            <td class="px-6 py-3">
                                                <span :class="entry.endDate ? 'inline-flex items-center px-1.5 py-0.5 rounded text-xs font-bold bg-zinc-800 text-zinc-500 border border-zinc-700' : 'inline-flex items-center px-1.5 py-0.5 rounded text-xs font-bold bg-green-900/20 text-green-500 border border-green-900/30'">
                                                    {{ entry.endDate ? 'Past' : 'Active' }}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="bg-zinc-900 border border-zinc-800 rounded-sm overflow-hidden">
                            <div class="p-6 border-b border-zinc-800 flex justify-between items-center">
                                <h2 class="text-lg font-bold text-white uppercase tracking-tight flex items-center">
                                    <UIcon name="i-lucide-clock" class="size-4 mr-2 text-red-600" />
                                    Recent Attendance
                                </h2>
                                <span class="text-xs text-zinc-500 uppercase font-bold">
                                    Last 10 Check-ins
                                </span>
                            </div>
                            <div class="overflow-x-auto">
                                <table class="w-full text-left text-sm text-zinc-400">
                                    <thead class="bg-zinc-950 text-xs uppercase font-bold text-zinc-500">
                                        <tr>
                                            <th class="px-6 py-3">Date</th>
                                            <th class="px-6 py-3">Time</th>
                                            <th class="px-6 py-3">Class</th>
                                        </tr>
                                    </thead>
                                    <tbody class="divide-y divide-zinc-800">
                                        <tr class="hover:bg-zinc-800/30">
                                            <td class="px-6 py-3 font-mono text-xs text-white">2/9/2026</td>
                                            <td class="px-6 py-3 font-mono text-xs">03:01 PM</td>
                                            <td class="px-6 py-3">Iwama-Style Aikido</td>
                                        </tr>
                                        <tr class="hover:bg-zinc-800/30">
                                            <td class="px-6 py-3 font-mono text-xs text-white">2/8/2026</td>
                                            <td class="px-6 py-3 font-mono text-xs">03:01 PM</td>
                                            <td class="px-6 py-3">Luta Livre</td>
                                        </tr>
                                        <tr class="hover:bg-zinc-800/30">
                                            <td class="px-6 py-3 font-mono text-xs text-white">2/2/2026</td>
                                            <td class="px-6 py-3 font-mono text-xs">03:01 PM</td>
                                            <td class="px-6 py-3">Iwama-Style Aikido</td>
                                        </tr>
                                        <tr class="hover:bg-zinc-800/30">
                                            <td class="px-6 py-3 font-mono text-xs text-white">2/1/2026</td>
                                            <td class="px-6 py-3 font-mono text-xs">03:01 PM</td>
                                            <td class="px-6 py-3">Luta Livre</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
        <Footer />
    </div>
</template>


<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { INITIAL_USERS } from '../../../lib/users'

const route = useRoute()

const getId = () => {
    const q = route.query.id
    if (!q) return null
    if (Array.isArray(q)) return q[0]
    return q
}

const student = computed(() => {
    const id = getId()
    if (!id) return INITIAL_USERS.find(u => u.role === 'user')
    return INITIAL_USERS.find(u => u.id === id) || INITIAL_USERS.find(u => u.role === 'user')
})

const formatDate = (iso) => {
    if (!iso) return '-'
    try { return new Date(iso).toLocaleDateString('en-US') } catch (e) { return iso }
}

const planPrice = (planId) => {
    if (planId === 'plan-beginner') return '₱2,500'
    if (planId === 'plan-intermediate') return '₱4,000'
    if (planId === 'plan-advanced') return '₱6,000'
    return '-'
}

const currentPlan = computed(() => {
    const s = student.value
    if (!s) return null
    const ph = s.planHistory || []
    return ph.find(p => !p.endDate) || ph[ph.length - 1] || null
})

const history = computed(() => (student.value && student.value.planHistory) || [])
</script>