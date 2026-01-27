<template>
    <div class="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
            <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-red-900/10 rounded-full blur-3xl"></div>
            <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-zinc-800/20 rounded-full blur-3xl"></div>
        </div>
        <div class="relative z-10 w-full max-w-lg my-10">
            <a class="inline-flex items-center text-zinc-500 hover:text-white mb-8 transition-colors" href="/" data-discover="true">
                <UIcon name="i-lucide-arrow-left" class="w-4 h-4 mr-2" /> Back to Homepage
            </a>
            <div class="text-center mb-8">
                <h1 class="text-4xl font-black uppercase italic text-white mb-2">Join Budokan</h1>
                <p class="text-zinc-400">Begin your martial arts journey today</p>
            </div>
            <div class="bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-2xl">
                <form class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-2">Full Name</label>
                        <input type="text" required class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-colors" placeholder="e.g. Daniel LaRusso" value="">
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-2">Email Address</label>
                        <input type="email" required class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-colors" placeholder="e.g. daniel@example.com" value="">
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-zinc-400 mb-2">Phone Number</label>
                            <input type="tel" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-colors" placeholder="e.g. 555-0123" value="">
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-zinc-400 mb-2">Date of Birth</label>
                            <input type="date" class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-colors [color-scheme:dark]" value="">
                        </div>
                    </div>
                    <div>
                        <label class="block text-sm font-medium text-zinc-400 mb-2">Address</label>
                        <textarea class="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:border-red-600 outline-none transition-colors" placeholder="Street, City, State, Zip" rows="2"></textarea>
                    </div>
                    <button type="submit" class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-colors uppercase italic flex items-center justify-center shadow-lg hover:shadow-red-900/20">
                        <UIcon name="i-lucide-user-plus" class="w-5 h-5 mr-2" />Register Now
                    </button>
                </form>
                <div class="mt-6 text-center text-sm text-zinc-500">By joining, you accept the rules of the dojo.</div>
            </div>
        </div>
    </div>
</template>