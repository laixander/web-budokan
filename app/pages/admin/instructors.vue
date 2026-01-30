<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <NavbarAdmin />
        <main class="flex-grow pt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Header title="Manage Instructors" subtitle="Add and edit instructor profiles.">
                    <button @click="addInstructor"
                        class="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-lg w-full lg:w-auto">
                        <UIcon name="i-lucide-plus" class="w-5 h-5 mr-2" />
                        Add Instructor
                    </button>
                </Header>

                <div v-if="!showInstructorForm" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <InstructorCard v-for="instructor in instructors" :key="instructor.id" :name="instructor.name"
                        :email="instructor.email" :bio="instructor.bio" :specialties="instructor.specialties"
                        :avatar="instructor.avatar" @edit="editInstructor(instructor.id)"
                        @delete="deleteInstructor(instructor.id)" />

                </div>

                <!-- Form -->
                <div v-if="showInstructorForm"
                    class="bg-zinc-900 border border-zinc-800 p-8 rounded-sm max-w-2xl mx-auto">
                    <div class="flex justify-between items-center mb-6">
                        <h2 class="text-xl font-bold text-white uppercase">
                            {{ editingInstructorId ? 'Edit Instructor' : 'New Instructor' }}
                        </h2>
                        <button @click="closeInstructorForm" class="text-zinc-500 hover:text-white">
                            <UIcon name="i-lucide-x" class="w-6 h-6" />
                        </button>
                    </div>
                    <form class="space-y-6" @submit.prevent="saveInstructor">
                        <div>
                            <div>
                                <label class="block text-xs font-bold text-zinc-500 uppercase mb-2">
                                    Avatar
                                </label>

                                <div class="flex items-center gap-4">
                                    <div
                                        class="w-16 h-16 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center overflow-hidden">
                                        <img v-if="instructorForm.avatar" :src="instructorForm.avatar"
                                            class="w-full h-full object-cover" />
                                        <UIcon v-else name="i-lucide-user" class="w-6 h-6 text-zinc-500" />
                                    </div>

                                    <div class="flex flex-col gap-2">
                                        <input ref="avatarInput" type="file" accept="image/*" @change="onAvatarChange"
                                            class="text-xs text-zinc-400" />

                                        <button v-if="instructorForm.avatar" type="button" @click="removeAvatar"
                                            class="text-xs font-bold uppercase tracking-wide text-red-500 hover:text-red-400 flex items-center gap-1">
                                            <UIcon name="i-lucide-trash-2" class="w-3 h-3" />
                                            Remove avatar
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div><label class="block text-xs font-bold text-zinc-500 uppercase mb-2">Full Name</label><input
                                v-model="instructorForm.name" type="text"
                                class="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-700"
                                placeholder="e.g. Sensei Hiro"></div>
                        <div><label class="block text-xs font-bold text-zinc-500 uppercase mb-2">Email
                                Address</label><input v-model="instructorForm.email" type="email"
                                class="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-700"
                                placeholder="e.g. hiro@budokhan.com"></div>
                        <div><label class="block text-xs font-bold text-zinc-500 uppercase mb-2">Bio</label><textarea
                                v-model="instructorForm.bio"
                                class="w-full bg-zinc-950 border border-zinc-800 rounded px-4 py-3 text-white focus:outline-none focus:border-red-700 h-32 resize-none"
                                placeholder="Short biography and qualifications..."></textarea></div>
                        <div><label class="block text-xs font-bold text-zinc-500 uppercase mb-2">Specialties</label>
                            <div class="space-y-3">
                                <div v-for="(tag, index) in instructorForm.specialties" :key="index" class="flex gap-2">
                                    <input v-model="instructorForm.specialties[index]"
                                        class="flex-1 bg-zinc-950 border border-zinc-800 rounded px-4 py-2 text-sm text-white"
                                        placeholder="e.g. Aikido" />
                                    <button type="button" class="text-zinc-600 hover:text-red-500 p-2"
                                        @click="removeSpecialty(index)">
                                        <UIcon name="i-lucide-x" class="w-4 h-4" />
                                    </button>
                                </div>

                                <button type="button" @click="addSpecialty"
                                    class="text-xs font-bold text-red-600 hover:text-red-500 uppercase tracking-wide flex items-center mt-2">
                                    <UIcon name="i-lucide-plus" class="w-3 h-3 mr-1" />
                                    Add Specialty
                                </button>

                            </div>
                        </div>
                        <div class="pt-6 border-t border-zinc-800 flex justify-end gap-4"><button
                                @click="closeInstructorForm" type="button"
                                class="px-6 py-3 rounded-sm text-sm font-bold uppercase tracking-wider text-zinc-400 hover:text-white">Cancel</button><button
                                type="submit"
                                class="bg-white text-black hover:bg-zinc-200 px-8 py-3 rounded-sm text-sm font-bold uppercase tracking-wider">Save
                                Instructor</button></div>
                    </form>
                </div>

            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showInstructorForm = ref(false)
const editingInstructorId = ref<string | null>(null)
const avatarInput = ref<HTMLInputElement | null>(null)

const instructorForm = ref({
    name: '',
    email: '',
    bio: '',
    avatar: null as string | null, // base64 preview
    specialties: ['']
})

const addInstructor = () => {
    instructorForm.value = {
        name: '',
        email: '',
        bio: '',
        avatar: null,
        specialties: ['']
    }
    editingInstructorId.value = null
    showInstructorForm.value = true
}

const closeInstructorForm = () => {
    showInstructorForm.value = false
    editingInstructorId.value = null
}

const onAvatarChange = (e: Event) => {
    const file = (e.target as HTMLInputElement).files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
        instructorForm.value.avatar = reader.result as string
    }
    reader.readAsDataURL(file)
}

const removeAvatar = () => {
    instructorForm.value.avatar = null

    // reset file input so the same image can be re-uploaded
    if (avatarInput.value) {
        avatarInput.value.value = ''
    }
}

const addSpecialty = () => {
    instructorForm.value.specialties.push('')
}

const removeSpecialty = (index: number) => {
    instructorForm.value.specialties.splice(index, 1)
}

const saveInstructor = () => {
    const payload = {
        id: editingInstructorId.value
            ?? instructorForm.value.name.toLowerCase().replace(/\s+/g, '-'),
        name: instructorForm.value.name,
        email: instructorForm.value.email,
        bio: instructorForm.value.bio,
        avatar: instructorForm.value.avatar,
        specialties: instructorForm.value.specialties.filter(s => s.trim() !== '')
    }

    if (editingInstructorId.value) {
        const index = instructors.value.findIndex(i => i.id === editingInstructorId.value)
        if (index !== -1) instructors.value[index] = payload
    } else {
        instructors.value.push(payload)
    }

    closeInstructorForm()
}

const editInstructor = (id: string) => {
    const instructor = instructors.value.find(i => i.id === id)
    if (!instructor) return

    instructorForm.value = {
        name: instructor.name,
        email: instructor.email,
        bio: instructor.bio,
        avatar: instructor.avatar ?? null,
        specialties: [...instructor.specialties]
    }

    editingInstructorId.value = id
    showInstructorForm.value = true
}

const deleteInstructor = (id: string) => {
    if (!confirm('Delete this instructor?')) return
    instructors.value = instructors.value.filter(i => i.id !== id)
}

const instructors = ref([
    {
        id: 'hiro',
        name: 'Sensei Hiro',
        email: 'hiro@budokhan.com',
        bio: '5th Dan Aikikai, studying under Saito Sensei’s lineage for 20 years. Specializes in Bokken and Jo.',
        specialties: ['Iwama-Style Aikido', 'Weapons']
    },
    {
        id: 'emily',
        name: 'Coach Emily',
        email: 'emily@budokhan.com',
        bio: 'Former professional MMA fighter with a background in Catch Wrestling and Luta Livre.',
        specialties: ['Luta Livre', 'Submission Grappling']
    },
    {
        id: 'dan',
        name: 'Guro Dan',
        email: 'dan@budokhan.com',
        bio: 'Senior instructor in Dekiti Tirsi Siradas Arnis, focusing on blade mechanics and flow.',
        specialties: ['Arnis', 'Knife Defense']
    }
])
</script>