<template>
    <div class="bg-zinc-950 min-h-screen py-20">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h1 class="text-4xl md:text-6xl font-black uppercase text-white mb-6 tracking-tighter">
                    Membership <span class="text-red-700">Plans</span>
                </h1>
                <p class="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                    Choose the path that fits your journey. All plans include access to our facilities and core training philosophy.
                </p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div class="flex flex-col p-8 bg-zinc-900/50 transition-all duration-300 relative overflow-hidden group hover:scale-105">
                    <div class="absolute top-0 left-0 w-1 h-full bg-zinc-800 group-hover:bg-red-700 transition-colors">
                    </div>
                    <h3 class="text-2xl font-black uppercase text-white mb-2 tracking-wide">Beginner</h3>
                    <p class="text-zinc-500 text-sm mb-8 h-12 leading-relaxed">Ideal for new starters</p>
                    <div class="text-4xl font-black text-white mb-1 tracking-tight">₱2,500<span class="text-sm font-normal text-zinc-500 ml-2 uppercase tracking-wide">/ month</span></div>
                    <div class="my-8 h-px bg-zinc-800 group-hover:bg-zinc-700 transition-colors"></div>
                    <ul class="space-y-4 mb-8 flex-1">
                        <li class="flex items-start text-sm text-zinc-300">
                            <UIcon name="i-lucide-circle-check-big" class="w-5 h-5 text-red-700 mr-3 flex-shrink-0" /><span>2 Classes per week</span>
                        </li>
                        <li class="flex items-start text-sm text-zinc-300">
                            <UIcon name="i-lucide-circle-check-big" class="w-5 h-5 text-red-700 mr-3 flex-shrink-0" /><span>Basics coverage</span>
                        </li>
                    </ul>
                    <a class="w-full py-4 rounded-sm font-bold uppercase tracking-widest text-sm text-center transition-colors bg-zinc-800 hover:bg-white hover:text-black text-white" href="/join?plan=plan-beginner" data-discover="true">Select Plan</a>
                </div>
                <div class="flex flex-col p-8 bg-zinc-900/50 transition-all duration-300 relative overflow-hidden group hover:scale-105">
                    <div class="absolute top-0 left-0 w-1 h-full bg-zinc-800 group-hover:bg-red-700 transition-colors">
                    </div>
                    <h3 class="text-2xl font-black uppercase text-white mb-2 tracking-wide">Intermediate</h3>
                    <p class="text-zinc-500 text-sm mb-8 h-12 leading-relaxed">For committed learners</p>
                    <div class="text-4xl font-black text-white mb-1 tracking-tight">₱4,000<span class="text-sm font-normal text-zinc-500 ml-2 uppercase tracking-wide">/ month</span></div>
                    <div class="my-8 h-px bg-zinc-800 group-hover:bg-zinc-700 transition-colors"></div>
                    <ul class="space-y-4 mb-8 flex-1">
                        <li class="flex items-start text-sm text-zinc-300">
                            <UIcon name="i-lucide-circle-check-big" class="w-5 h-5 text-red-700 mr-3 flex-shrink-0" /><span>4 Classes per week</span>
                        </li>
                        <li class="flex items-start text-sm text-zinc-300">
                            <UIcon name="i-lucide-circle-check-big" class="w-5 h-5 text-red-700 mr-3 flex-shrink-0" /><span>Multiple disciplines</span>
                        </li>
                    </ul>
                    <a class="w-full py-4 rounded-sm font-bold uppercase tracking-widest text-sm text-center transition-colors bg-zinc-800 hover:bg-white hover:text-black text-white" href="/join?plan=plan-intermediate" data-discover="true">Select Plan</a>
                </div>
                <div class="flex flex-col p-8 bg-zinc-900/50 transition-all duration-300 relative overflow-hidden group hover:scale-105">
                    <div class="absolute top-0 left-0 w-1 h-full bg-zinc-800 group-hover:bg-red-700 transition-colors">
                    </div>
                    <h3 class="text-2xl font-black uppercase text-white mb-2 tracking-wide">Advanced</h3>
                    <p class="text-zinc-500 text-sm mb-8 h-12 leading-relaxed">For serious students</p>
                    <div class="text-4xl font-black text-white mb-1 tracking-tight">₱6,000<span class="text-sm font-normal text-zinc-500 ml-2 uppercase tracking-wide">/ month</span></div>
                    <div class="my-8 h-px bg-zinc-800 group-hover:bg-zinc-700 transition-colors"></div>
                    <ul class="space-y-4 mb-8 flex-1">
                        <li class="flex items-start text-sm text-zinc-300">
                            <UIcon name="i-lucide-circle-check-big" class="w-5 h-5 text-red-700 mr-3 flex-shrink-0" /><span>Unlimited classes</span>
                        </li>
                        <li class="flex items-start text-sm text-zinc-300">
                            <UIcon name="i-lucide-circle-check-big" class="w-5 h-5 text-red-700 mr-3 flex-shrink-0" /><span>Advanced techniques</span>
                        </li>
                    </ul>
                    <a class="w-full py-4 rounded-sm font-bold uppercase tracking-widest text-sm text-center transition-colors bg-zinc-800 hover:bg-white hover:text-black text-white" href="/join?plan=plan-advanced" data-discover="true">Select Plan</a>
                </div>
            </div>
            
            <div class="mt-20 max-w-3xl mx-auto text-center border border-zinc-900 bg-zinc-900/30 p-10 rounded-sm">
                <UIcon name="i-lucide-shield" class="w-12 h-12 text-zinc-700 mx-auto mb-6" />
                <h3 class="text-2xl font-bold uppercase text-white mb-4">Not sure where to start?</h3>
                <p class="text-zinc-400 mb-8 leading-relaxed">We strongly recommend scheduling a trial session before committing to a membership. Meet the instructors, experience the training, and see if Budokan PH is right for you.</p>
                <a class="inline-block border-2 border-red-700 text-red-700 hover:bg-red-700 hover:text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest transition-colors" href="/join" data-discover="true">Book Trial Session</a>
            </div>
        </div>
    </div>
</template>