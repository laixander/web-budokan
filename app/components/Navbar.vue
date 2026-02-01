<template>
    <nav :class="[
        'fixed top-0 w-full z-50 transition-all duration-300 border-b',
        isScrolled
            ? 'bg-zinc-950/90 backdrop-blur border-zinc-800 h-16'
            : 'bg-zinc-950 border-zinc-900 h-20'
    ]">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div class="flex items-center justify-between h-full">

                <!-- Brand -->
                <NuxtLink :to="brandLink" class="flex items-center">
                    <span :class="[
                        'font-black uppercase tracking-tighter transition-all',
                        isScrolled ? 'text-xl' : 'text-2xl'
                    ]">
                        {{ brand }}
                        <span v-if="brandAccent" class="text-red-700">
                            {{ brandAccent }}
                        </span>
                    </span>
                </NuxtLink>

                <!-- Desktop Nav -->
                <div class="hidden lg:flex items-center space-x-6">
                    <NuxtLink v-for="item in items" :key="item.label" :to="item.to"
                        class="px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors" :class="isActive(item.to)
                            ? 'text-red-600'
                            : 'text-zinc-400 hover:text-white'">
                        {{ item.label }}
                    </NuxtLink>

                    <!-- Auth Actions -->
                    <template v-if="user">
                        <slot name="authenticated" />
                    </template>
                    <template v-else>
                        <slot name="guest" />
                    </template>
                </div>

                <!-- Mobile Toggle -->
                <button class="lg:hidden p-2 rounded-md text-zinc-400 hover:text-white hover:bg-zinc-800"
                    @click="isOpen = !isOpen">
                    <UIcon :name="isOpen ? 'i-lucide-x' : 'i-lucide-menu'" class="flex h-6 w-6" />
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-show="isOpen" class="lg:hidden bg-zinc-950 border-b border-zinc-900">
            <div class="px-4 py-4 space-y-2">
                <NuxtLink v-for="item in items" :key="item.label" :to="item.to" @click="isOpen = false"
                    class="block px-3 py-2 text-sm font-bold uppercase tracking-widest" :class="isActive(item.to)
                        ? 'text-white'
                        : 'text-zinc-400 hover:text-white'">
                    {{ item.label }}
                </NuxtLink>

                <template v-if="user">
                    <slot name="mobile-authenticated" />
                </template>
                <template v-else>
                    <slot name="mobile-guest" />
                </template>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

interface NavItem {
    label: string
    to: string
}

const props = defineProps<{
    brand: string
    brandAccent?: string
    brandLink?: string
    items: NavItem[]
    user?: any | null
}>()

const route = useRoute()
const isOpen = ref(false)
const isScrolled = ref(false)

const isActive = (path: string) => route.path === path

const onScroll = () => {
    isScrolled.value = window.scrollY > 10
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>
