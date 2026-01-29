<template>
    <div class="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans">
        <NavbarAdmin />
        <main class="flex-grow pt-16">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <Header title="Manage Instructors" subtitle="Add and edit instructor profiles.">
                    <button @click=""
                        class="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-bold transition-colors shadow-lg w-full lg:w-auto">
                        <UIcon name="i-lucide-plus" class="w-5 h-5 mr-2" />
                        Add Instructor
                    </button>
                </Header>
            </div>
        </main>
    </div>
</template>