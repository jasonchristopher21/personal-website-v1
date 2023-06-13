<script setup>
function scrollToAbout() {
    document.getElementById("about").scrollIntoView({ behavior: 'smooth' })
}

function scrollToWork() {
    document.getElementById("work").scrollIntoView({ behavior: 'smooth' })
}

function scrollToProjects() {
    document.getElementById("projects").scrollIntoView({ behavior: 'smooth' })
}

function scrollToContact() {
    document.getElementById("contact").scrollIntoView({ behavior: 'smooth' })
}

</script>

<template>
    <div class="flex justify-between px-14 pt-8 pb-12 bg-grey-300 text-white z-50 fixed w-full">
        <span class="text-[20px] font-metropolis font-bold">Jason Christopher</span>
        <div class="flex justify-normal gap-12 mt-1 text-[16px] font-monospace font-bold text-grey-100">
            <button class="transition-all hover:text-yellow" @click="scrollToAbout">about</button>
            <button class="transition-all hover:text-yellow">experience</button>
            <button class="transition-all hover:text-yellow">projects</button>
            <button class="transition-all hover:text-yellow">contact</button>
        </div>
    </div>
</template>