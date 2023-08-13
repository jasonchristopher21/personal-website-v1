<script setup lang="ts">
import styles from '@/style';
import link_icon from "@/assets/link_icon.svg"

function scrollToHero() {
    const heroElement = document.getElementById("hero")
    if (heroElement) { heroElement.scrollIntoView({ behavior: 'smooth' }); }
}

function viewLink(link: string) {
    window.open(link, "_blank")
}

function viewProjectWebsite() {
    viewLink("https://github.com/jasonchristopher21/personal-website-v1")
}

</script> 

<template>
    <div class="flex flex-col md:flex-row justify-between md:px-20 2xl:px-32 gap-2 md:gap-0 px-10 pt-8 pb-12 bg-grey-200 text-white">

        <!-- Website logo -->
        <div class="my-auto">
            <button class="text-[20px] font-metropolis font-bold" @click="scrollToHero">Jason Christopher</button>
        </div>

        <!-- Social Media icons -->
        <div class="my-auto">
            <OpenInNewIcon />
        </div>

        <!-- Made with love -->
        <div class="flex flex-col gap-1.5 opacity-80 text-left md:text-right">
            <span :class="styles.codeParagraph">Made with ❤️ by Jason Christopher, (c) 2023</span>
            <div>
                <button class="transition-all flex gap-2 md:mr-0 md:ml-auto border-b-0 border-white hover:border-b hover:scale-[102%]" @click="viewProjectWebsite">
                    <span :class="`${styles.codeParagraph}`">View this website on GitHub!</span>
                    <img :src="link_icon" class="w-5 h-5 my-auto invert">
                </button>
            </div>
        </div>

    </div>
</template>