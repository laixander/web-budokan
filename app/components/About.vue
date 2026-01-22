<template>
    <section id="about" class="py-24 bg-zinc-950">
        <div class="max-w-4xl mx-auto px-4 text-center">
            <div class="w-20 h-1 bg-red-700 mx-auto mb-8"></div>
            <h2 class="text-red-700 text-sm font-bold tracking-[0.3em] uppercase mb-4">
                The Dojo
            </h2>
            <h3 class="text-3xl md:text-5xl font-black uppercase text-white mb-8 tracking-tight">
                Structure Before Expression
            </h3>
            <p class="text-zinc-400 text-lg leading-loose mb-12 max-w-3xl mx-auto">
                Budokan Philippines was established to address the loss of function through over-modernization, sportification, and dilution of martial arts. We do not offer sport-driven, modernized, or commercialized martial arts. We preserve and train martial systems as they were intended to function—with structure, pressure, discipline, and purpose.
            </p>
            <p class="text-white text-xl font-serif italic mb-16">
                "This is a place for practitioners seeking depth, realism, and lineage—not trends or shortcuts."
            </p>

            <!-- Cards -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                <div
                    v-for="(about, index) in abouts"
                    :key="index"
                    class="p-8 border-l-2 border-zinc-800 hover:border-red-700 transition-colors bg-zinc-900/30"
                >
                    <h4 class="text-2xl font-black uppercase text-white mb-1">
                        {{ about.title }}
                    </h4>

                    <span class="text-red-700 font-bold uppercase text-xs tracking-widest mb-4 block">
                        {{ about.subtitle }}
                    </span>

                    <p class="text-zinc-500 leading-relaxed text-sm">
                        {{ about.description }}
                    </p>
                </div>
            </div>

            <div class="mt-16 text-zinc-500 uppercase tracking-widest text-sm font-bold border border-zinc-800 inline-block px-6 py-3 rounded-full">
                Not a fitness club. Not a tournament gym. A Martial Institution.
            </div>
        </div>
    </section>
</template>

<script setup>
const abouts = [
    {
        title: 'Martial Integrity',
        subtitle: 'Over Popularity',
        description: 'We prioritize the authenticity and effectiveness of the art over mass appeal or commercial success.',
    },
    {
        title: 'Structure',
        subtitle: 'Before Expression',
        description: 'Foundational mechanics and discipline must be mastered before personal style or improvisation can exist.',
    },
    {
        title: 'Function',
        subtitle: 'Before Appearance',
        description: 'Every movement must have a combat purpose. Aesthetic value is secondary to martial efficiency.',
    },
]
</script>