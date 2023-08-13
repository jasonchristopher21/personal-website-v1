<script setup lang="ts">
import styles from "@/style"
import { ref } from 'vue'

const name = ref("")
const email = ref("")
const message = ref("")


</script>

<template>
    <div class="flex flex-col" id="contact">
        <div class="flex gap-5 mt-32">
            <span :class='`${styles.headingNumber} text-orange my-auto`'>04.</span>
            <span :class="styles.heading1">Contact me</span>
        </div>
        <div class="flex md:flex-row flex-col gap-10 mt-10 lg:gap-20 md:gap-10">
            <div class=" flex flex-col gap-5 text-justify md:w-full">
                <p :class="styles.paragraph">
                    I would love to hear from you! Whether you have a project in mind or simply want to say hello, feel free to reach out. 
                </p>
                <p :class="styles.paragraph">
                    Drop me a message below, and I'll get back to you as soon as possible. Your feedback and
                    inquiries are important to me. Let's collaborate and bring your ideas to life together!
                </p>
            </div>
            <div class="md:w-full bg-grey-200 p-10 rounded-2xl flex flex-col gap-4 font-metropolis font-medium text-[20px]">
                <input v-model="name" placeholder="Name"
                    class="bg-grey-200 border-b-2 w-2/3 border-grey-100 py-2 px-5 text-white focus:outline-0 focus:border-blue-100 transition-all" />
                <input v-model="email" placeholder="Email"
                    class="bg-grey-200 border-b-2 w-2/3 border-grey-100 py-2 px-5 text-white focus:outline-0 focus:border-blue-100 transition-all" />
                <span class="mt-5 text-white ml-5 opacity-60">Write your message below</span>
                <textarea v-model="message"
                    class="bg-grey-200 border-b-2 border-grey-100 py-2 px-5 text-white focus:outline-0 focus:border-blue-100 transition-all" />
                <div class="mt-5">
                    <button class="bg-blue-200 text-white font-semibold py-2 px-5 rounded-lg">Send Details!</button>
                </div>
            </div>
        </div>
        <div class="h-20"></div>
    </div>
</template>