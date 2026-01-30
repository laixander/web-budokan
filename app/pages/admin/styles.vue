<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <NavbarAdmin />
        <main class="flex-grow pt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Header title="Training Styles" subtitle="Manage the martial art disciplines offered at the dojo.">
                    <button @click="addStyle"
                        class="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-lg w-full lg:w-auto">
                        <UIcon name="i-lucide-plus" class="w-5 h-5 mr-2" />
                        Add Training Style
                    </button>
                </Header>





                <div v-if="!showStyleForm" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <StyleCard v-for="style in styles" :key="style.id" :name="style.name"
                        :description="style.description" :icon="style.icon" @edit="editStyle(style.id)"
                        @delete="deleteStyle(style.id)" />
                </div>


                <!-- Form -->
                <div v-if="showStyleForm" class="bg-zinc-900 border border-zinc-800 p-8 rounded-sm max-w-2xl mx-auto">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-xl font-bold text-white uppercase">
                            {{ editingStyleId ? 'Edit Style' : 'Add Style' }}
                        </h2>
                        <button @click="closeStyleForm" class="text-zinc-500 hover:text-white">
                            <UIcon name="i-lucide-x" class="w-6 h-6" />
                        </button>
                    </div>

                    <form class="space-y-4" @submit.prevent="saveStyle">
                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                                Style Name
                            </label>
                            <input v-model="styleForm.name" type="text"
                                class="w-full bg-zinc-950 border border-zinc-800 text-white rounded px-4 py-2 focus:outline-none focus:border-red-900"
                                placeholder="e.g. Judo" />
                        </div>

                        <div>
                            <label class="block text-xs font-bold uppercase tracking-wider text-zinc-500 mb-1">
                                Description
                            </label>
                            <textarea v-model="styleForm.description" rows="4"
                                class="w-full bg-zinc-950 border border-zinc-800 text-white rounded px-4 py-2 focus:outline-none focus:border-red-900 resize-none"
                                placeholder="Brief description of the martial art..." />
                        </div>

                        <div class="pt-6 border-t border-zinc-800 flex justify-end gap-4">
                            <button type="button" @click="closeStyleForm"
                                class="px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white">
                                Cancel
                            </button>

                            <button type="submit"
                                class="bg-white text-black hover:bg-zinc-200 px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-wider">
                                {{ editingStyleId ? 'Save Changes' : 'Create Style' }}
                            </button>
                        </div>
                    </form>
                </div>




            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showStyleForm = ref(false)
const editingStyleId = ref<string | null>(null)

const styleForm = ref({
    name: '',
    description: '',
    icon: 'i-lucide-sword'
})

const addStyle = () => {
    styleForm.value = {
        name: '',
        description: '',
        icon: 'i-lucide-sword'
    }
    editingStyleId.value = null
    showStyleForm.value = true
}

const closeStyleForm = () => {
    showStyleForm.value = false
    editingStyleId.value = null
}

const saveStyle = () => {
    const payload = {
        id:
            editingStyleId.value ??
            styleForm.value.name.toLowerCase().replace(/\s+/g, '-'),
        name: styleForm.value.name,
        description: styleForm.value.description,
        icon: styleForm.value.icon
    }

    if (editingStyleId.value) {
        const index = styles.value.findIndex(s => s.id === editingStyleId.value)
        if (index !== -1) styles.value[index] = payload
    } else {
        styles.value.push(payload)
    }

    closeStyleForm()
}

const editStyle = (id: string) => {
    const style = styles.value.find(s => s.id === id)
    if (!style) return

    styleForm.value = {
        name: style.name,
        description: style.description,
        icon: style.icon
    }

    editingStyleId.value = id
    showStyleForm.value = true
}

const deleteStyle = (id: string) => {
    if (!confirm('Delete this training style?')) return
    styles.value = styles.value.filter(s => s.id !== id)
}

const styles = ref([
    {
        id: 'iwama',
        name: 'Iwama-Style Aikido',
        description:
            'Traditional Aikido focusing on basics (kihon), sword (ken), and staff (jo).',
        icon: 'i-lucide-sword'
    },
    {
        id: 'luta-livre',
        name: 'Luta Livre',
        description:
            'Brazilian submission wrestling art known for its effective ground game and leg locks.',
        icon: 'i-lucide-sword'
    },
    {
        id: 'arnis',
        name: 'Arnis',
        description:
            'Filipino martial art emphasizing weapon-based fighting with sticks, knives, and improvised weapons.',
        icon: 'i-lucide-sword'
    }
])
</script>