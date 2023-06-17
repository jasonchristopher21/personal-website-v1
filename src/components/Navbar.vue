<script setup lang="ts">
import { ref } from 'vue'

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

const aboutHover = ref(false)
const workHover = ref(false)
const projectsHover = ref(false)
const contactHover = ref(false)
const resumeHover = ref(false)

</script>

<template>
    <div class="flex justify-between pl-14 md:px-14 2xl:px-20 pt-8 pb-12 bg-grey-300 text-white z-50 fixed w-full">
        <button class="text-[20px] font-metropolis font-bold" @click="scrollToHero">Jason Christopher</button>
        <div class="md:flex justify-normal gap-12 mt-1 text-[16px] font-monospace font-bold text-grey-100 hidden">
            <button class="transition-all hover:text-yellow" @click="scrollToAbout" @mouseover="aboutHover = true"
                @mouseleave="aboutHover = false">
                <span :class="aboutHover ? 'hidden' : 'mr-2'">//</span>
                <span>about</span>
            </button>
            
            <button class="transition-all hover:text-yellow" @click="scrollToWork" @mouseover="workHover = true"
                @mouseleave="workHover = false">
                <span :class="workHover ? 'text-grey-300 mr-2' : 'mr-2'">//</span>
                <span>experience</span>
            </button>
            <button class="transition-all hover:text-yellow" @click="scrollToProjects" @mouseover="projectsHover = true"
                @mouseleave="projectsHover = false">
                <span :class="projectsHover ? 'text-grey-300 mr-2' : 'mr-2'">//</span>
                <span>projects</span>
            </button>
            <button class="transition-all hover:text-yellow" @click="scrollToContact" @mouseover="contactHover = true"
                @mouseleave="contactHover = false">
                <span :class="contactHover ? 'text-grey-300 mr-2' : 'mr-2'">//</span>
                <span>contact</span>
            </button>
            <button class="transition-all hover:text-yellow" @click="viewResume" @mouseover="resumeHover = true"
                @mouseleave="resumeHover = false">
                <span :class="resumeHover ? 'text-grey-300 mr-2' : 'mr-2'">//</span>
                <span>resume</span>
            </button>
    </div>
</div></template>