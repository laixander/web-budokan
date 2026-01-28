<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <NavbarAdmin />
        <main class="flex-grow pt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Header title="Class Management" subtitle="Create, edit, and generate QR codes for classes">
                    <button @click="openNewClass"
                        class="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-lg w-full lg:w-auto">
                        <UIcon name="i-lucide-plus" class="w-5 h-5 mr-2" />
                        Add New Class
                    </button>
                </Header>
                <ListCard title="Active Schedule">
                    <template #extra>
                        <span class="text-xs font-mono bg-zinc-800 px-2 py-1 rounded text-zinc-400">5 classes</span>
                    </template>
                    <ClassItem v-for="(item, index) in classes" :key="index" v-bind="item" @qr="openQr(item)" />
                </ListCard>
            </div>

            <!-- QR Modal -->
            <div v-if="showQrModal" class="fixed inset-0 z-50">
                <!-- Backdrop (fade only) -->
                <Transition appear enter-active-class="transition-opacity ease-out duration-200"
                    enter-from-class="opacity-0" enter-to-class="opacity-100"
                    leave-active-class="transition-opacity ease-in duration-150" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <div v-if="showQrModal" class="absolute inset-0 bg-black/80" @click="closeQr" />
                </Transition>

                <!-- Modal card (scale + fade) -->
                <Transition appear enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95">
                    <div v-if="showQrModal"
                        class="relative flex items-center justify-center min-h-screen p-4 pointer-events-none">
                        <div class="bg-white rounded-xl p-8 max-w-sm w-full text-center relative pointer-events-auto">
                            <button @click="closeQr" class="absolute top-4 right-4 text-gray-400 hover:text-black">
                                ✕
                            </button>

                            <h3 class="text-2xl font-black italic uppercase mb-2 text-black">
                                {{ activeClass?.title }}
                            </h3>

                            <p class="text-gray-500 mb-6">Scan to check in</p>

                            <div class="bg-white p-2 inline-block">
                                <QRcode />
                            </div>

                            <div class="mt-6 text-sm text-gray-400">ID: c1</div>

                            <button @click="closeQr"
                                class="mt-6 w-full bg-zinc-900 text-white py-3 rounded-md font-bold">
                                Close
                            </button>
                        </div>
                    </div>
                </Transition>
            </div>

            <!-- New Class Modal -->
            <div v-if="showNewClassModal" class="fixed inset-0 z-50">
                <!-- Backdrop (fade only) -->
                <Transition appear enter-active-class="transition-opacity ease-out duration-200"
                    enter-from-class="opacity-0" enter-to-class="opacity-100"
                    leave-active-class="transition-opacity ease-in duration-150" leave-from-class="opacity-100"
                    leave-to-class="opacity-0">
                    <div v-if="showNewClassModal" class="absolute inset-0 bg-black/80" @click="closeNewClass" />
                </Transition>

                <!-- Modal card (scale + fade only) -->
                <Transition appear enter-active-class="transition ease-out duration-200"
                    enter-from-class="opacity-0 scale-95" enter-to-class="opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100 scale-100"
                    leave-to-class="opacity-0 scale-95">
                    <div v-if="showNewClassModal"
                        class="relative flex items-center justify-center min-h-screen p-4 pointer-events-none">
                        <div
                            class="bg-zinc-900 border border-zinc-800 rounded-xl p-6 md:p-8 max-w-md w-full relative my-auto pointer-events-auto">
                            <button @click="closeNewClass"
                                class="absolute top-4 right-4 text-zinc-400 hover:text-white">
                                ✕
                            </button>

                            <h3 class="text-2xl font-black italic uppercase mb-6 text-white">
                                Create New Class
                            </h3>

                            <form class="space-y-4">
                                <div>
                                    <label class="block text-sm font-medium text-zinc-400 mb-1">Class Name</label>
                                    <input required
                                        class="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white focus:border-red-600 outline-none"
                                        placeholder="e.g. Advanced MMA" />
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-zinc-400 mb-1">Instructor</label>
                                    <input required
                                        class="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white focus:border-red-600 outline-none"
                                        placeholder="e.g. Coach Steve" />
                                </div>

                                <div class="grid grid-cols-2 gap-4">
                                    <div>
                                        <label class="block text-sm font-medium text-zinc-400 mb-1">Day</label>
                                        <select
                                            class="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white focus:border-red-600 outline-none">
                                            <option value="">Select Day</option>
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                            <option>Saturday</option>
                                            <option>Sunday</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label class="block text-sm font-medium text-zinc-400 mb-1">Time</label>
                                        <input type="time"
                                            class="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white focus:border-red-600 outline-none" />
                                    </div>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-zinc-400 mb-1">Description</label>
                                    <textarea rows="3"
                                        class="w-full bg-black border border-zinc-800 rounded px-3 py-2 text-white focus:border-red-600 outline-none" />
                                </div>

                                <div class="flex flex-col-reverse sm:flex-row gap-3 pt-4">
                                    <button type="button" @click="closeNewClass"
                                        class="flex-1 bg-transparent border border-zinc-700 text-white py-3 rounded-md font-bold hover:bg-zinc-800">
                                        Cancel
                                    </button>
                                    <button type="submit"
                                        class="flex-1 bg-red-600 text-white py-3 rounded-md font-bold hover:bg-red-700">
                                        Create Class
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Transition>
            </div>
        </main>
        <Footer />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const classes = [
    {
        title: 'Brazilian Jiu-Jitsu (Gi)',
        instructor: 'Master Ken',
        day: 'Monday',
        time: '18:00',
        description: 'Fundamentals of grappling with Gi.'
    },
    {
        title: 'Muay Thai Kickboxing',
        instructor: 'Kru Sarah',
        day: 'Monday',
        time: '19:30',
        description: 'Striking techniques using 8 limbs.'
    },
    {
        title: 'No-Gi Grappling',
        instructor: 'Coach Mike',
        day: 'Tuesday',
        time: '18:00',
        description: 'Submission wrestling without Gi.'
    },
    {
        title: 'Kids Self Defense',
        instructor: 'Sensei Dave',
        day: 'Wednesday',
        time: '16:00',
        description: 'Building confidence and discipline.'
    },
    {
        title: 'Advanced MMA',
        instructor: 'Coach Steve',
        day: 'Thursday',
        time: '19:00',
        description: 'Mixed Martial Arts sparring and drills.'
    }
]

const showQrModal = ref(false)
const activeClass = ref<any>(null)

const openQr = (classItem: any) => {
    activeClass.value = classItem
    showQrModal.value = true
}

const closeQr = () => {
    showQrModal.value = false
    activeClass.value = null
}

const showNewClassModal = ref(false)

const openNewClass = () => {
    showNewClassModal.value = true
}

const closeNewClass = () => {
    showNewClassModal.value = false
}
</script>