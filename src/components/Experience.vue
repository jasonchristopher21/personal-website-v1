<script setup lang="ts">
import styles from "@/style"
import { experience } from "@/constants"
import { ref } from 'vue'
import arrow_icon from "@/assets/arrow_icon.svg"

const pageNumber = ref(0)

function viewLink(link: string) {
    window.open(link, "_blank")
}
</script>

<template>
    <div class="flex flex-col" id="work">

        <!-- Heading -->
        <div class="flex gap-5 mt-32">
            <span :class='`${styles.headingNumber} text-purple my-auto`'>02.</span>
            <span :class="styles.heading1">Work Experience</span>
        </div>

        <!-- Tabs -->
        <div class="flex mt-10 gap-20 py-5 px-10 font-monospace text-white text-[20px]">
            <button class="relative flex flex-col" @click="pageNumber = 0">
                <span class="text-white z-10 w-auto font-semibold">developer</span>
                <div class="absolute p-1 w-[110%] -ml-[5%] bg-blue-300 top-5 z-0"> </div>
            </button>
            <button class="relative flex flex-col" @click="pageNumber = 1">
                <span class="text-white z-10 w-auto font-semibold">teaching</span>
                <div class="absolute p-1 w-[110%] -ml-[5%] bg-orange top-5 z-0"> </div>
            </button>
            <button class="relative flex flex-col" @click="pageNumber = 2">
                <span class="text-white z-10 w-auto font-semibold">organisations</span>
                <div class="absolute p-1 w-[110%] -ml-[5%] bg-pink top-5 z-0"> </div>
            </button>
        </div>

        <!-- Grey Border -->
        <div class="w-full border-b-4 mt-3 mb-5 border-grey-100"></div>

        <!-- Content -->
        <div v-for="page in experience[pageNumber]" class="py-5 px-20">
            <div class="flex gap-10">
                <div class="items-center">
                    <div class="ring-4 ring-white ring-offset-4 ring-offset-grey-300 rounded-full z-20">
                        <img :src="page.image" class="w-20 h-20 mt-1 rounded-full z-20">
                    </div>
                    <div class="w-1 mx-auto h-full -mt-10 bg-white z-0"></div>
                </div>
                <div class="flex flex-col gap-6">
                    <div class="flex flex-col">
                        <span class="text-[36px] font-gilroy font-extrabold text-white">{{ page.title }}</span>
                        <span class="text-[22px] font-metropolis font-bold text-white">
                            <button @click="viewLink(page.link)" class="transition-all hover:text-yellow hover:underline">
                                {{ page.company }}
                            </button>
                            , {{ page.time }}
                        </span>
                    </div>
                    <div class="flex flex-col gap-1 text-[20px] font-metropolis font-medium text-white">
                        <div v-for="text in page.description" class="flex gap-4">
                            <img :src="arrow_icon" class="w-3.5 my-auto" />
                            <span class="my-auto">{{ text }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="w-full bg-grey-300 py-5 -mt-5 border-b-4 border-grey-100"></div>
    </div>
</template>