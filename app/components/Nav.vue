<template>
    <nav class="bg-zinc-950 border-b border-zinc-900 fixed w-full z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
                <div class="flex items-center">
                    <a class="flex-shrink-0 flex items-center" href="/">
                        <span class="text-white text-2xl font-black tracking-tighter uppercase">
                            Budokan <span class="text-red-700">PH</span>
                        </span>
                    </a>
                </div>

                <!-- Desktop menu -->
                <div class="hidden md:block">
                    <div class="ml-10 flex items-baseline space-x-4">
                        <a class="text-zinc-400 hover:text-white px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
                            href="/#top">
                            Home
                        </a>
                        <a class="text-zinc-400 hover:text-white px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
                            href="/#about">
                            About the Dojo
                        </a>
                        <a class="text-zinc-400 hover:text-white px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
                            href="/#training">
                            Training Systems
                        </a>
                        <a class="text-zinc-400 hover:text-white px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
                            href="/#details">
                            Other Details
                        </a>
                        <a class="text-zinc-400 hover:text-white px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
                            href="/#faq">
                            FAQ
                        </a>
                        <a class="text-zinc-400 hover:text-white px-3 py-2 text-sm font-bold uppercase tracking-widest transition-colors"
                            href="/#contact">
                            Contact
                        </a>

                        <a class="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center border border-red-700 hover:border-red-500" href="/login">
                            Login
                        </a>
                    </div>
                </div>

                <!-- Mobile button -->
                <div class="-mr-2 flex md:hidden">
                    <button @click="isOpen = !isOpen"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none">
                        <!-- Menu icon -->
                        <UIcon name="i-lucide-menu" v-if="!isOpen" class="block h-6 w-6" />
                        <!-- Close icon -->
                        <UIcon name="i-lucide-x" v-if="isOpen" class="block h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>

        <!-- Mobile menu -->
        <div v-show="isOpen" class="md:hidden bg-zinc-950 border-b border-zinc-900">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">

                <a @click="close" class="text-gray-300 hover:text-white block px-3 py-2 text-base font-bold uppercase tracking-widest"
                    href="/">
                    Home
                </a>
                <a @click="close" class="text-gray-300 hover:text-white block px-3 py-2 text-base font-bold uppercase tracking-widest"
                    href="/#about">
                    About the Dojo
                </a>
                <a @click="close" class="text-gray-300 hover:text-white block px-3 py-2 text-base font-bold uppercase tracking-widest"
                    href="/#training">
                    Training Systems
                </a>
                <a @click="close" class="text-gray-300 hover:text-white block px-3 py-2 text-base font-bold uppercase tracking-widest"
                    href="/#details">
                    Other Details
                </a>
                <a @click="close" class="text-gray-300 hover:text-white block px-3 py-2 text-base font-bold uppercase tracking-widest"
                    href="/#faq">
                    FAQ
                </a>
                <a @click="close" class="text-gray-300 hover:text-white block px-3 py-2 text-base font-bold uppercase tracking-widest"
                    href="/#contact">
                    Contact
                </a>
                <a class="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-sm text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center border border-red-700 hover:border-red-500" href="/login">
                    Login
                </a>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
const close = () => (isOpen.value = false)
</script>