<script setup lang="ts">
import styles from "@/style"
import { featuredProjects, otherProjects } from "@/constants"

import pinus_study from "@/assets/images/projects/pinus_study.png"
import github from "@/assets/images/github.png"

function viewLink(link: string) {
    window.open(link, "_blank")
}
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
                    class="transition-all absolute z-10 bg-grey-200 top-[2rem] 2xl:top-[3rem] right-0 ml-20 w-[40rem]">
                    <div class="flex flex-col text-right p-10">
                        <span :class="`${styles.heading2}`">{{ project.title }}</span>
                        <span class="font-metropolis font-bold text-[20px] text-white">{{ project.subtitle }}</span>
                        <div class="flex flex-col mt-5">
                            <span v-for="desc in project.description"
                                class="font-metropolis font-medium text-[20px] text-white">{{ desc }}</span>
                        </div>
                        <div class="flex justify-end gap-8 mt-5">
                            <span v-for="stack in project.stackLogos"
                                :class="`${styles.codeParagraph} text-white opacity-40 hover:opacity-100 my-auto`">{{ stack
                                }}</span>
                            <button class="transition-all opacity-40 hover:opacity-100" @click="viewLink(project.github)">
                                <img :src="github" class="w-10 h-10" />
                            </button>
                        </div>
                    </div>
                </div>
                <div v-else class="transition-all absolute z-10 bg-grey-200 top-[2rem] 2xl:top-[3rem] mr-20 w-[40rem]">
                    <div class="flex flex-col text-left p-10">
                        <span :class="`${styles.heading2}`">{{ project.title }} </span>
                        <span class="font-metropolis font-bold text-[20px] text-white">{{ project.subtitle }}</span>
                        <div class="flex flex-col mt-5">
                            <span v-for="desc in project.description"
                                class="font-metropolis font-medium text-[20px] text-white">{{ desc }}</span>
                        </div>
                        <div class="flex justify-start gap-8 mt-5">
                            <button class="transition-all opacity-40 hover:opacity-100" @click="viewLink(project.github)">
                                <img :src="github" class="w-10 h-10" />
                            </button>
                            <span v-for="stack in project.stackLogos"
                                :class="`${styles.codeParagraph} text-white opacity-40 hover:opacity-100 my-auto`">{{ stack
                                }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Other Projects -->
        <div class="mt-20 2xl:px-20">
            <span :class="styles.heading1">(Also) My Other Interesting Projects</span>

            <!-- Other Projects Card -->
            <div class="grid grid-cols-1 lg:grid-cols-3 lg:grid-flow-col gap-10 mt-10">
                <div v-for="project in otherProjects"
                    class="transition-all border border-white rounded-xl items-center hover:bg-grey-200">
                    <img :src="project.image"
                        class="rounded-t-xl transition-all opacity-70 brightness-50 hover:opacity-100 hover:brightness-100" />
                    <div class="px-8 py-5">
                        <div class="flex flex-col gap-1">
                            <span :class="styles.heading3">{{ project.title }}</span>
                            <span :class="styles.paragraph">{{ project.description }}</span>
                        </div>
                        <div class="flex justify-between mt-5">
                            <div :class="`${styles.codeParagraph} flex gap-4 text-white my-auto`">
                                <span v-for="stack in project.stack" class="transition-all opacity-40 hover:opacity-100">{{
                                    stack }}</span>
                            </div>
                            <button class="transition-all opacity-40 hover:opacity-100" @click="viewLink(project.github)">
                                <img :src="github" class="w-10 h-10" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Other projects Button -->
            <div class="text-center w-full">
                <button class="mt-10 py-4 px-20 bg-grey-200 rounded-xl">
                    <span class="font-metropolis font-semibold text-[24px] text-white">View all projects</span>
                </button>
            </div>
        </div>
    </div>
</template>