<script setup lang="ts">
import styles from "@/style"
import { featuredProjects } from "@/constants"
</script>

<template>
    <div class="flex flex-col" id="projects">

        <!-- Projects Heading -->
        <div class="flex gap-5 mt-32">
            <span :class='`${styles.headingNumber} text-green my-auto`'>03.</span>
            <span class="font-gilroy font-extrabold text-[40px] text-white">Featured Projects</span>
        </div>

        <!-- Projects Card -->
        <div class="flex flex-col relative mt-20 px-10 2xl:px-[5vw]" v-for="project in featuredProjects">
            <div class="relative flex">
                <img v-if="project.display === 'right'" :src="project.image"
                    class="transition-all w-[40rem] z-0 opacity-70 brightness-50 hover:opacity-100 hover:brightness-100 drop-shadow-[4px_4px_20px_rgba(0,0,0,0.5)] 2xl:w-[50rem]" />
                <img v-else :src="project.image"
                    class="transition-all w-[40rem] z-0 opacity-70 brightness-50 hover:opacity-100 hover:brightness-100 drop-shadow-[4px_4px_20px_rgba(0,0,0,0.5)] 2xl:w-[50rem] mr-0 ml-auto" />

                <div v-if="project.display === 'right'"
                    class="transition-all absolute z-10 bg-grey-200 top-[5rem] 2xl:top-[6rem] right-0 ml-20 w-[40rem]">
                    <div class="flex flex-col text-right p-10">
                        <span :class="`${styles.heading2}`">PINUS Study</span>
                        <span class="font-metropolis font-bold text-[20px] text-white">A study forum for NUS Indonesian
                            Students</span>
                        <div class="flex flex-col mt-5">
                            <span class="font-metropolis font-medium text-[20px] text-white">Collaborated with 8
                                developers</span>
                            <span class="font-metropolis font-medium text-[20px] text-white">Implemented a Customisable
                                Rich-text editor</span>
                        </div>
                    </div>
                </div>
                <div v-else class="transition-all absolute z-10 bg-grey-200 top-[5rem] 2xl:top-[6rem] mr-20 w-[40rem]">
                    <div class="flex flex-col text-left p-10">
                        <span :class="`${styles.heading2}`">PINUS Study</span>
                        <span class="font-metropolis font-bold text-[20px] text-white">A study forum for NUS Indonesian
                            Students</span>
                        <div class="flex flex-col mt-5">
                            <span class="font-metropolis font-medium text-[20px] text-white">Collaborated with 8
                                developers</span>
                            <span class="font-metropolis font-medium text-[20px] text-white">Implemented a Customisable
                                Rich-text editor</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="h-[800px]"></div>
    </div>
</template>