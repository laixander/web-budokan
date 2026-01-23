<template>
    <nav class="bg-zinc-950 border-b border-zinc-900 fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <!-- Logo -->
                <a class="flex items-center flex-shrink-0" href="/">
                    <span class="text-white text-2xl font-black tracking-tighter uppercase">
                        Budokan <span class="text-red-700">PH</span>
                    </span>
                </a>

                <!-- Desktop menu -->
                <div class="hidden md:flex ml-10 items-baseline space-x-4">
                    <NuxtLink v-for="item in navItems" :key="item.hash" :to="item.to" :class="linkClass(item.hash)">
                        {{ item.label }}
                    </NuxtLink>

                    <NuxtLink to="/login"
                        class="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center border border-red-700 hover:border-red-500">
                        Login
                    </NuxtLink>
                </div>

                <!-- Mobile toggle -->
                <button
                    class="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800"
                    @click="isOpen = !isOpen">
                    <UIcon :name="isOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="h-6 w-6" />
                </button>
            </div>
        </div>

        <!-- Mobile menu -->
        <div v-show="isOpen" class="md:hidden bg-zinc-950 border-b border-zinc-900">
            <div class="px-2 pt-2 pb-3 space-y-1">
                <NuxtLink v-for="item in navItems" :key="item.hash" :to="item.to" @click="close"
                    :class="mobileLinkClass(item.hash)">
                    {{ item.label }}
                </NuxtLink>

                <NuxtLink to="/login"
                    class="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-widest flex justify-center border border-red-700 hover:border-red-500">
                    Login
                </NuxtLink>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { watch, ref } from 'vue'
import { useHead, useRoute } from '#imports'

// Active State
type NavItem = {
    label: string
    hash: string
    to: string
}

const route = useRoute()
const isOpen = ref(false)

const close = (): void => {
    isOpen.value = false
}

const navItems: NavItem[] = [
    { label: 'Home', hash: '#top', to: '/#top' },
    { label: 'About the Dojo', hash: '#about', to: '/#about' },
    { label: 'Training Systems', hash: '#training', to: '/#training' },
    { label: 'Other Details', hash: '#details', to: '/#details' },
    { label: 'FAQ', hash: '#faq', to: '/#faq' },
    { label: 'Contact', hash: '#contact', to: '/#contact' }
]

const isActiveHash = (hash: string): boolean => route.hash === hash

const linkClass = (hash: string): string =>
    [
        'px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors',
        isActiveHash(hash)
            ? 'text-red-700'
            : 'text-zinc-400 hover:text-white'
    ].join(' ')

const mobileLinkClass = (hash: string): string =>
    [
        'block px-3 py-2 text-base font-bold uppercase tracking-widest',
        isActiveHash(hash)
            ? 'text-red-700'
            : 'text-gray-300 hover:text-white'
    ].join(' ')


// SEO
const SITE_NAME = 'Budokan PH'

const sectionTitles: Record<string, string> = {
  '#top': SITE_NAME,
  '#about': 'About the Dojo',
  '#training': 'Training Systems',
  '#details': 'Other Details',
  '#faq': 'FAQ',
  '#contact': 'Contact'
}

watch(
  () => route.hash,
  (hash) => {
    const sectionTitle = sectionTitles[hash] ?? SITE_NAME

    useHead({
      title: sectionTitle === SITE_NAME
        ? SITE_NAME
        : `${sectionTitle} · ${SITE_NAME}`
    })
  },
  { immediate: true }
)
</script>
