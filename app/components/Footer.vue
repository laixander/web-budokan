<template>
    <footer class="bg-zinc-950 text-gray-400 py-12 border-t border-zinc-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div class="col-span-1 md:col-span-1">
                    <span class="text-white text-2xl font-black tracking-tighter uppercase block mb-6">
                        Budokan <span class="text-red-700">PH</span>
                    </span>
                    <p class="text-sm leading-relaxed mb-6 text-zinc-500 font-mono">
                        Traditional. Functional. Rare.
                        <br>Preserving authentic combat systems.
                    </p>
                    <div class="flex space-x-4">
                        <a href="#" class="text-zinc-600 hover:text-white transition-colors">
                            <UIcon name="i-lucide-instagram" class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-zinc-600 hover:text-white transition-colors">
                            <UIcon name="i-lucide-facebook" class="w-5 h-5" />
                        </a>
                        <a href="#" class="text-zinc-600 hover:text-white transition-colors">
                            <UIcon name="i-lucide-twitter" class="w-5 h-5" />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 class="text-white font-bold uppercase mb-4 tracking-widest text-xs">
                        Systems
                    </h3>
                    <ul class="space-y-2 text-sm text-zinc-500 font-medium">
                        <li>
                            <a class="hover:text-red-700 transition-colors" href="/">
                                Iwama-Style Aikido
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-red-700 transition-colors" href="/">
                                Luta Livre (No-Gi)
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-red-700 transition-colors" href="/">
                                Dekiti Tirsi Siradas Arnis
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white font-bold uppercase mb-4 tracking-widest text-xs">
                        Information
                    </h3>
                    <ul class="space-y-2 text-sm text-zinc-500 font-medium">
                        <li>
                            <a class="hover:text-red-700 transition-colors" href="/#about">
                                About The Dojo
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-red-700 transition-colors" href="/#training-details">
                                Instructor Lineage
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-red-700 transition-colors" href="/#training-details">
                                Student Expectations
                            </a>
                        </li>
                        <li>
                            <a class="hover:text-red-700 transition-colors" href="/schedule">
                                Class Schedule
                            </a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 class="text-white font-bold uppercase mb-4 tracking-widest text-xs">
                        Inquiries
                    </h3>
                    <ul class="space-y-4 text-sm text-zinc-500">
                        <li class="flex items-start">
                            <UIcon name="i-lucide-map-pin" class="w-5 h-5 mr-3 text-red-700 flex-shrink-0" />
                            <span>Manila, Philippines</span>
                        </li>
                        <li class="flex items-center">
                            <UIcon name="i-lucide-mail" class="w-5 h-5 mr-3 text-red-700 flex-shrink-0" />
                            <span>inquiry@budokanph.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="border-t border-zinc-900 mt-12 pt-8 text-center text-xs text-zinc-700 uppercase tracking-widest font-mono">
                &copy; 2026 Budokan Philippines. All rights reserved.
            </div>
        </div>
    </footer>
</template>