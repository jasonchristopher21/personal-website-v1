<script setup lang="ts">
import styles from '@/style';
import link_icon from "@/assets/link_icon.svg"

function scrollToHero() {
    const heroElement = document.getElementById("hero")
    if (heroElement) { heroElement.scrollIntoView({ behavior: 'smooth' }); }
}

</script>

<template>
    <div class="flex justify-between md:px-20 2xl:px-32 pt-8 pb-12 bg-grey-200 text-white">

        <!-- Jason Christopher name -->
        <div class="my-auto">
            <button class="text-[20px] font-metropolis font-bold" @click="scrollToHero">Jason Christopher</button>
        </div>

        <!-- Social Media icons -->
        <div class="my-auto">
            <OpenInNewIcon />
        </div>

        <!-- Made with love -->
        <div class="flex flex-col gap-1.5 opacity-80 text-right">
            <span :class="styles.codeParagraph">Made with ❤️ by Jason Christopher, (c) 2023</span>
            <div>
                <button class="transition-all flex gap-2 mr-0 ml-auto border-b-0 border-white hover:border-b hover:scale-[102%]">
                    <span :class="`${styles.codeParagraph}`">View this website on GitHub!</span>
                    <img :src="link_icon" class="w-5 h-5 my-auto invert">
                </button>
            </div>
        </div>

    </div>
</template>