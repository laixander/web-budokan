<template>
    <div class="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl"></div>
        </div>
        <div class="relative z-10 w-full max-w-2xl my-10">
            <a class="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors" href="/">
                <UIcon name="i-lucide-arrow-left" class="w-4 h-4 mr-2" /> Back to Homepage
            </a>
            <div class="text-center mb-8">
                <h1 class="text-4xl font-black uppercase italic text-white mb-2">Join Budokan</h1>
                <p class="text-zinc-400">Begin your martial arts journey today</p>
            </div>
            <div class="bg-zinc-900 border border-zinc-800 rounded-sm p-8 shadow-2xl">
                <form class="space-y-6">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="col-span-1 md:col-span-2">
                            <label class="block text-xs font-bold text-zinc-500 uppercase mb-2">
                                Membership Plan
                            </label>
                            <select v-model="selectedPlan" class="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:border-red-700 outline-none transition-colors appearance-none">
                                <option value="">-- Select a Plan (Optional Trial) --</option>
                                <option value="plan-beginner">Beginner - ₱2,500/month</option>
                                <option value="plan-intermediate">Intermediate - ₱4,000/month</option>
                                <option value="plan-advanced">Advanced - ₱6,000/month</option>
                            </select>
                            <div v-if="selectedPlan" class="mt-2 text-xs text-zinc-400 flex items-center">
                                <UIcon name="i-lucide-circle-check-big" class="w-3 h-3 text-red-700 mr-1" />
                                {{ planHelpText }}
                            </div>
                        </div>
                        <div class="col-span-1 md:col-span-2">
                            <label class="block text-xs font-bold text-zinc-500 uppercase mb-2">
                                Full Name
                            </label>
                            <input type="text" class="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:border-red-700 outline-none transition-colors" placeholder="e.g. Daniel LaRusso" value="">
                        </div>
                        <div class="col-span-1 md:col-span-2">
                            <label class="block text-xs font-bold text-zinc-500 uppercase mb-2">
                                Email Address
                            </label>
                            <input type="email" class="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:border-red-700 outline-none transition-colors" placeholder="e.g. daniel@example.com" value="">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-zinc-500 uppercase mb-2">
                                Phone Number
                            </label>
                            <input type="tel" class="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:border-red-700 outline-none transition-colors" placeholder="e.g. 555-0123" value="">
                        </div>
                        <div>
                            <label class="block text-xs font-bold text-zinc-500 uppercase mb-2">
                                Date of Birth
                            </label>
                            <input type="date" class="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:border-red-700 outline-none transition-colors [color-scheme:dark]" value="">
                        </div>
                        <div class="col-span-1 md:col-span-2">
                            <label class="block text-xs font-bold text-zinc-500 uppercase mb-2">
                                Address
                            </label>
                            <textarea class="w-full bg-zinc-950 border border-zinc-800 rounded-sm px-4 py-3 text-white focus:border-red-700 outline-none transition-colors" placeholder="Street, City, State, Zip" rows="2"></textarea>
                        </div>
                    </div>
                    <button type="submit" class="w-full bg-red-700 hover:bg-red-800 text-white font-bold py-4 rounded-sm transition-colors uppercase tracking-widest flex items-center justify-center shadow-lg hover:shadow-red-900/20 text-sm mt-4">
                        <UIcon name="i-lucide-user-plus" class="w-5 h-5 mr-2" />
                        Submit Inquiry / Register
                    </button>
                </form>
                <div class="mt-6 text-center text-xs text-zinc-500">
                    By submitting, you agree to the dojo rules and waiver.
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const selectedPlan = ref('')

const planHelpTextMap = {
    'plan-beginner': 'Ideal for new starters',
    'plan-intermediate': 'For committed learners',
    'plan-advanced': 'For serious students'
}

const planHelpText = computed(() => {
    return planHelpTextMap[selectedPlan.value] || 'Select a plan to get started'
})

onMounted(() => {
    if (route.query.plan && typeof route.query.plan === 'string') {
        selectedPlan.value = route.query.plan
    }
})

watch(
    () => route.query.plan,
    (newPlan) => {
        if (typeof newPlan === 'string') {
            selectedPlan.value = newPlan
        }
    }
)
</script>