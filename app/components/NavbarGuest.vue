<template>
    <Navbar brand="Budokan" brandAccent="PH" brandLink="/" :items="[
        { label: 'Home', to: '/' },
        { label: 'Schedule', to: '/schedule' }
    ]">
        <!-- Guest -->
        <template #guest>
            <NuxtLink to="/login"
                class="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-widest border border-red-700">
                Login
            </NuxtLink>
        </template>

        <!-- Mobile -->
        <template #mobile-guest>
            <NuxtLink to="/login" class="block mt-4 bg-red-700 hover:bg-red-800 text-center text-white px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-widest border border-red-700">
                Login
            </NuxtLink>
        </template>
    </Navbar>
</template>