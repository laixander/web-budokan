<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <NavbarAdmin />
        <main class="flex-grow pt-16">

            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Header title="Manage Membership Plans" subtitle="Create and edit subscription packages.">
                    <button @click="addNewPlan"
                        class="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-lg w-full lg:w-auto">
                        <UIcon name="i-lucide-plus" class="w-5 h-5 mr-2" />
                        Add New Plan
                    </button>
                </Header>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" v-if="!showNewPlanForm">
                    <PlanCard 
                        v-for="plan in plans" 
                        :key="plan.id" 
                        v-bind="plan" 
                        @edit="() => editPlan(plan.id)"
                        @delete="() => deletePlan(plan.id)" 
                    />
                </div>

                <!-- New Plan Form -->
                <div v-if="showNewPlanForm" class="bg-zinc-900 border border-zinc-800 p-8 rounded-sm max-w-2xl mx-auto">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-xl font-bold text-white uppercase">
                          {{ editingPlanId ? 'Edit Plan' : 'New Plan' }}
                        </h2><button
                            class="text-zinc-500 hover:text-white" @click="closeNewPlan"><UIcon name="i-lucide-x" class="w-6 h-6" /></button>
                    </div>
                    <form class="space-y-6" @submit.prevent="savePlan">
                        <div class="grid grid-cols-2 gap-6">
                            <div class="col-span-2"><label
                                    class="block text-xs font-bold text-zinc-500 uppercase mb-2">Plan Name</label><input
                                    type="text"
                                    v-model="newPlan.title"
                                    class="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-700"
                                    placeholder="e.g. Premium Fighter"
                                    /></div>
                            <div><label class="block text-xs font-bold text-zinc-500 uppercase mb-2">Price (PHP)</label>
                                <div class="relative">
                                    <UIcon name="i-lucide-philippine-peso" class="absolute left-4 top-4 w-4 h-4 text-zinc-600" />
                                    <input
                                        type="number"
                                        v-model="newPlan.price"
                                        class="w-full bg-zinc-950 border border-zinc-800 rounded pl-10 pr-4 py-3 text-white focus:outline-none focus:border-red-700"
                                        placeholder="0.00"
                                    /></div>
                            </div>
                            <div><label class="block text-xs font-bold text-zinc-500 uppercase mb-2">Billing
                                    Cycle</label><select
                                    v-model="newPlan.billing"
                                    class="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-700 appearance-none"
                                >
                                    <option value="month">Monthly</option>
                                    <option value="year">Yearly</option>
                                </select></div>
                            <div class="col-span-2"><label
                                    class="block text-xs font-bold text-zinc-500 uppercase mb-2">Description</label><textarea
                                    v-model="newPlan.description"
                                    class="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-700 h-24 resize-none"
                                    placeholder="Short description of who this plan is for..."
                                    ></textarea></div>
                            <div class="col-span-2"><label
                                    class="block text-xs font-bold text-zinc-500 uppercase mb-2">Features</label>
                                <div class="space-y-3">
                                    <div
                                        v-for="(feature, index) in newPlan.features"
                                        :key="index"
                                        class="flex gap-2"
                                    >
                                        <input
                                            type="text"
                                            v-model="newPlan.features[index]"
                                            class="flex-1 bg-zinc-950 border border-zinc-800 rounded px-4 py-2 text-sm text-white focus:outline-none focus:border-red-700"
                                            placeholder="Feature description"
                                        />
                                        <button
                                            type="button"
                                            class="text-zinc-600 hover:text-red-500 p-2"
                                            @click="removeFeature(index)"
                                        >
                                            <UIcon name="i-lucide-x" class="w-4 h-4" />
                                        </button>
                                    </div><button
                                        type="button"
                                        @click="addFeature"
                                        class="text-xs font-bold text-red-600 hover:text-red-500 uppercase tracking-wide flex items-center mt-2"
                                    ><svg
                                            xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round"
                                            class="lucide lucide-plus w-3 h-3 mr-1"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5v14"></path>
                                        </svg> Add Feature</button>
                                </div>
                            </div>
                        </div>
                        <div class="pt-6 border-t border-zinc-800 flex justify-end gap-4"><button type="button" @click="closeNewPlan"
                                class="px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white">Cancel</button><button
                                type="submit"
                                class="bg-white text-black hover:bg-zinc-200 px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-wider">Save
                                Plan</button></div>
                    </form>
                </div>

            </div>

        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showNewPlanForm = ref(false)
const editingPlanId = ref<string | null>(null)

const newPlan = ref({
  title: '',
  price: '',
  billing: 'month',
  description: '',
  features: ['']
})

const addNewPlan = () => {
  // Clear inputs for new plan
  newPlan.value = {
    title: '',
    price: '',
    billing: 'month',
    description: '',
    features: ['']
  }
  editingPlanId.value = null
  showNewPlanForm.value = true
}

const closeNewPlan = () => {
  showNewPlanForm.value = false
  editingPlanId.value = null
}

const addFeature = () => {
  newPlan.value.features.push('')
}

const removeFeature = (index: number) => {
  newPlan.value.features.splice(index, 1)
}

const plans = ref([
    {
        id: 'beginner',
        title: 'Beginner',
        price: 2500,
        billing: 'month',
        description: 'Ideal for new starters',
        features: ['2 Classes per week', 'Basics coverage']
    },
    {
        id: 'intermediate',
        title: 'Intermediate',
        price: 4000,
        billing: 'month',
        description: 'For committed learners',
        features: ['4 Classes per week', 'Multiple disciplines']
    },
    {
        id: 'advanced',
        title: 'Advanced',
        price: 6000,
        billing: 'month',
        description: 'For serious students',
        features: ['Unlimited classes', 'Advanced techniques']
    }
])

const savePlan = () => {
  const payload = {
    id: editingPlanId.value
        ? editingPlanId.value
        : newPlan.value.title.toLowerCase().replace(/\s+/g, '-'),
    title: newPlan.value.title,
    price: Number(newPlan.value.price),
    billing: newPlan.value.billing,
    description: newPlan.value.description,
    features: newPlan.value.features.filter(f => f.trim() !== '')
    }

  if (editingPlanId.value) {
    const index = plans.value.findIndex(p => p.id === editingPlanId.value)
    if (index !== -1) {
      plans.value[index] = payload
    }
  } else {
    plans.value.push(payload)
  }

  newPlan.value = {
    title: '',
    price: '',
    billing: 'month',
    description: '',
    features: ['']
  }

  editingPlanId.value = null
  showNewPlanForm.value = false
}

const editPlan = (planId: string) => {
  const plan = plans.value.find(p => p.id === planId)
  if (!plan) return

  newPlan.value = {
  title: plan.title,
  price: String(plan.price),
  billing: plan.billing || 'month', // <-- keep current billing
  description: plan.description,
  features: [...plan.features]
}

  editingPlanId.value = planId
  showNewPlanForm.value = true
}

const deletePlan = (planId: string) => {
  const confirmed = confirm('Are you sure you want to delete this plan?')
  if (!confirmed) return

  plans.value = plans.value.filter(plan => plan.id !== planId)
}
</script>