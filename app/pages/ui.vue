<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <NavbarGuest />
        <main id="top" class="flex-grow pt-16">
            <section id="about" class="py-24 bg-zinc-950">
                <div class="max-w-4xl mx-auto px-4 text-center flex gap-2">
                    <UButton>Button</UButton>
                    <UButton icon="i-lucide-log-out">Logout</UButton>
                </div>
            </section>
        </main>
        <Footer />
    </div>
</template>