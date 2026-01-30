<template>
    <Navbar brand="Budokan" brandAccent="PH" brandLink="/" :items="[
        { label: 'Dashboard', to: '/admin' },
        { label: 'Classes', to: '/admin/classes' },
        { label: 'Members', to: '/admin/members' },
        { label: 'Plans', to: '/admin/plans' },
        { label: 'Instructors', to: '/admin/instructors' },
        { label: 'Styles', to: '/admin/styles' }
    ]" :user="user">

        <!-- Authenticated -->
        <template #authenticated>
            <div ref="dropdownRef" class="ml-4 relative pl-4 border-l border-zinc-900">
                <!-- Trigger -->
                <button @click="toggle" class="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <UAvatar :src="user.avatar" size="lg" />
                    <UIcon name="i-lucide-chevron-down" class="w-4 h-4 text-zinc-500 transition-transform"
                        :class="isOpen ? 'rotate-180' : ''" />
                </button>

                <!-- Dropdown -->
                <Transition enter-active-class="transition ease-out duration-150" enter-from-class="opacity-0 scale-95"
                    enter-to-class="opacity-100 scale-100" leave-active-class="transition ease-in duration-100"
                    leave-from-class="opacity-100 scale-100" leave-to-class="opacity-0 scale-95">
                    <div v-if="isOpen"
                        class="absolute right-0 mt-2 w-56 bg-zinc-900 border border-zinc-800 rounded-lg shadow-xl overflow-hidden z-50 origin-top-right">
                        <div class="px-4 py-3 border-b border-zinc-800">
                            <p class="text-sm font-bold text-white uppercase tracking-wider">
                                Sensei Admin
                            </p>
                            <p class="text-xs text-zinc-500 uppercase tracking-widest mt-1">
                                admin
                            </p>
                        </div>

                        <button @click="logout" class="w-full flex items-center gap-3 px-4 py-3 text-sm font-bold uppercase tracking-widest
                 text-zinc-400 hover:bg-zinc-800 hover:text-red-500 transition-colors">
                            <UIcon name="i-lucide-log-out" class="w-4 h-4" />
                            Logout
                        </button>
                    </div>
                </Transition>
            </div>
        </template>


        <!-- Mobile -->
        <template #mobile-authenticated>
            <NuxtLink to="/login"
                class="text-gray-300 hover:text-red-500 block w-full text-left px-3 py-2 text-base font-bold uppercase tracking-widest">
                Logout
            </NuxtLink>
            <!-- <button
                class="text-gray-300 hover:text-red-500 block w-full text-left px-3 py-2 text-base font-bold uppercase tracking-widest">Logout</button> -->
        </template>
    </Navbar>
</template>

<script setup lang="ts">
import { onClickOutside, onKeyStroke } from '@vueuse/core'

const user = ref({
    avatar: undefined as string | undefined
})

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const toggle = () => {
    isOpen.value = !isOpen.value
}

const close = () => {
    isOpen.value = false
}

// close on outside click
onClickOutside(dropdownRef, close)

// close on ESC
onKeyStroke('Escape', close)

const logout = () => {
    // your logout logic
    // await auth.logout()
    // navigateTo('/login')
}
</script>
