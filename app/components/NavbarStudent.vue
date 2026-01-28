<template>
    <Navbar brand="Budokan" brandAccent="PH" brandLink="/" :items="[
        { label: 'Home', to: '/' },
        { label: 'Schedule', to: '/schedule' },
        { label: 'Dashboard', to: '/student' },
        { label: 'Class Schedule', to: '/student/schedule' }
    ]" :user="user">

        <!-- Authenticated -->
        <template #authenticated>
            <button class="flex items-center text-zinc-400 hover:text-red-500 px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors">
                <UIcon name="i-lucide-log-out" class="w-4 h-4 mr-1" />Logout
            </button>
            <UAvatar :src="user.avatar" size="md" />
        </template>

        <!-- Mobile -->
        <template #mobile-authenticated>
            <NuxtLink to="/login" class="block mt-4 bg-red-700 hover:bg-red-800 text-center text-white px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-widest border border-red-700">
                Logout
            </NuxtLink>
        </template>
    </Navbar>
</template>

<script setup lang="ts">
const user = ref({
    avatar: undefined as string | undefined
})
</script>