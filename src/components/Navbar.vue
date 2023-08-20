<script setup lang="ts">
import { ref } from 'vue'
import github from "@/assets/images/github.png"

function scrollToAbout() {
    const aboutElement = document.getElementById("about")
    if (aboutElement) { aboutElement.scrollIntoView({ behavior: 'smooth' }); }
}

function scrollToWork() {
    const workElement = document.getElementById("work")
    if (workElement) { workElement.scrollIntoView({ behavior: 'smooth' }); }
}

function scrollToProjects() {
    const projectsElement = document.getElementById("projects")
    if (projectsElement) { projectsElement.scrollIntoView({ behavior: 'smooth' }); }
}

function scrollToContact() {
    const contactElement = document.getElementById("contact")
    if (contactElement) { contactElement.scrollIntoView({ behavior: 'smooth' }); }
}

function scrollToHero() {
    const heroElement = document.getElementById("hero")
    if (heroElement) { heroElement.scrollIntoView({ behavior: 'smooth' }); }
}

function viewResume() {
    const resumeLink = "https://drive.google.com/file/d/1va_Hh5Db-MBIgLoM_rVHUxDLQOLepDY9/view?usp=sharing"
    window.open(resumeLink, "_blank")
}

function viewGithub() {
    window.open('https://github.com/jasonchristopher21', '_blank')
}

const aboutHover = ref(false)
const workHover = ref(false)
const projectsHover = ref(false)
const contactHover = ref(false)
const resumeHover = ref(false)

const buttons = [
    {
        name: "about",
        hover: aboutHover,
        action: scrollToAbout,
    },
    {
        name: "experience",
        hover: workHover,
        action: scrollToWork,
    },
    {
        name: "projects",
        hover: projectsHover,
        action: scrollToProjects,
    },
    {
        name: "contact",
        hover: contactHover,
        action: scrollToContact,
    },
    {
        name: "resume",
        hover: resumeHover,
        action: viewResume,
    },
]
</script>

<template>
    <div class="justify-between pl-14 md:px-14 2xl:px-20 pt-8 pb-12 bg-grey-300 text-white z-50 fixed w-full md:flex hidden">

        <!-- Name on the left of navbar -->
        <button class="text-[20px] font-metropolis font-bold" @click="scrollToHero">Jason Christopher</button>

        <!-- Navbar Buttons -->
        <div class="md:flex justify-normal gap-10 mt-1 text-[16px] font-monospace font-bold text-grey-100 hidden">
            <button v-for="item in buttons" class="transition-all hover:text-yellow" @click="item.action"
                @mouseover="item.hover.value = true" @mouseleave="item.hover.value = false">
                <span :class="item.hover.value ? 'transition-all text-grey-300' : 'transition-all mr-1'">
                    //
                </span>
                <span :class="item.hover.value ? 'transition-all pr-4 -ml-3' : 'transition-all'">
                    {{ item.name }}
                </span>
            </button>
            <button @click="viewGithub">
                <img :src="github" class="w-8 h-8 opacity-60 hover:opacity-100 hover:scale-105" />
            </button>
        </div>
    </div>
</template>