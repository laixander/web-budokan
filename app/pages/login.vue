<template>
    <div class="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl"></div>
        </div>
        <div class="relative z-10 w-full max-w-md">
            <a class="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors" href="/">
                <UIcon name="i-lucide-arrow-left" class="w-4 h-4 mr-2" /> Back to Homepage
            </a>
            <div class="text-center mb-10">
                <h1 class="text-5xl font-black uppercase italic text-white tracking-tighter mb-2">Budokan</h1>
                <p class="text-zinc-400 text-lg">Enter the Dojo</p>
            </div>
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl">
                
                 <!-- Tabs -->
                <div class="grid grid-cols-2 border-b border-zinc-800">
                    <!-- Student Tab -->
                    <button
                        @click="activeTab = 'student'"
                        class="p-4 text-center font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                        :class="activeTab === 'student'
                            ? 'bg-zinc-900 text-red-500'
                            : 'bg-zinc-950 text-zinc-500 hover:text-zinc-300'"
                    >
                        <!-- icon -->
                        <UIcon name="i-lucide-users" class="w-4 h-4" />
                        Student
                    </button>

                    <!-- Admin Tab -->
                    <button
                        @click="activeTab = 'admin'"
                        class="p-4 text-center font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                        :class="activeTab === 'admin'
                            ? 'bg-zinc-900 text-red-500'
                            : 'bg-zinc-950 text-zinc-500 hover:text-zinc-300'"
                    >
                        <!-- icon -->
                        <UIcon name="i-lucide-shield-check" class="w-4 h-4" />
                        Admin
                    </button>
                </div>

                <!-- Student -->
                <div class="p-8" v-show="activeTab === 'student'">
                    <h2 class="text-2xl font-bold text-white mb-6 text-center">Student Portal</h2>
                    <form class="space-y-4">
                        <div class="relative">
                            <UIcon name="i-lucide-mail" class="absolute left-3 top-3.5 w-5 h-5 text-zinc-500" />
                            <input type="email" placeholder="Email Address"
                                class="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-white focus:border-red-600 outline-none transition-colors"
                                value="">
                        </div>
                        <div class="relative">
                            <UIcon name="i-lucide-lock" class="absolute left-3 top-3.5 w-5 h-5 text-zinc-500" />
                            <input type="password" placeholder="Password"
                                class="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-white focus:border-red-600 outline-none transition-colors"
                                value="">
                        </div>
                        
                        <button type="submit"
                            class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors uppercase italic flex items-center justify-center shadow-lg hover:shadow-red-900/20">
                            Sign In <UIcon name="i-lucide-arrow-right" class="lucide-arrow-right" />
                        </button>
                    </form>
                    <div class="mt-6 flex flex-col gap-3">
                        <div class="pt-4 border-t border-zinc-800 text-center">
                            <p class="text-zinc-400 text-sm mb-3">Don't have an account?</p>
                            <a class="inline-block text-red-500 font-bold hover:text-red-400 uppercase text-sm"
                                href="/join">Register Now</a>
                        </div>
                    </div>
                </div>
                
                <!-- Admin -->
                <div class="p-8" v-show="activeTab === 'admin'">
                    <h2 class="text-2xl font-bold text-white mb-6 text-center">Admin Portal</h2>
                    <form class="space-y-4">
                        <div class="relative">
                            <UIcon name="i-lucide-mail" class="absolute left-3 top-3.5 w-5 h-5 text-zinc-500" />
                            <input type="email" placeholder="Email Address" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-white focus:border-red-600 outline-none transition-colors" value="">
                        </div>
                        <div class="relative">
                            <UIcon name="i-lucide-lock" class="absolute left-3 top-3.5 w-5 h-5 text-zinc-500" />
                            <input type="password" placeholder="Password" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-white focus:border-red-600 outline-none transition-colors" value="">
                        </div>
                        <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-colors uppercase italic flex items-center justify-center shadow-lg hover:shadow-red-900/20">
                            Sign In <UIcon name="i-lucide-arrow-right" class="lucide-arrow-right" />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'student' | 'admin'>('student')
</script>