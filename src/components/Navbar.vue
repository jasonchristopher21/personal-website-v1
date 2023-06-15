<script setup lang="ts">
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

function viewResume() {
    const resumeLink = "https://drive.google.com/file/d/1va_Hh5Db-MBIgLoM_rVHUxDLQOLepDY9/view?usp=sharing"
    window.open(resumeLink, "_blank")
}

</script>

<template>
    <div class="flex justify-between px-14 pt-8 pb-12 bg-grey-300 text-white z-50 fixed w-full">
        <span class="text-[20px] font-metropolis font-bold">Jason Christopher</span>
        <div class="flex justify-normal gap-12 mt-1 text-[16px] font-monospace font-bold text-grey-100">
            <button class="transition-all hover:text-yellow" @click="scrollToAbout">about</button>
            <button class="transition-all hover:text-yellow" @click="scrollToWork">experience</button>
            <button class="transition-all hover:text-yellow" @click="scrollToProjects">projects</button>
            <button class="transition-all hover:text-yellow" @click="scrollToContact">contact</button>
            <button class="transition-all hover:text-yellow" @click="viewResume">resume</button>
        </div>
    </div>
</template>