<script setup lang="ts">
import styles from "@/style"
</script>

<template>
    <div class="flex flex-col" id="about">

        <!-- About Me Heading -->
        <div class="flex gap-5 mt-32">
            <span :class='`${styles.headingNumber} text-blue-200 my-auto`'>01.</span>
            <span :class="styles.heading1">About me</span>
        </div>

        <!-- Paragraph -->
        <div :class="`${styles.paragraph} flex flex-col gap-7 xl:w-[60%] mt-10 text-justify`">
            <p>
                I am a penultimate computer science undergraduate at the National University of Singapore. I am passionate
                about building software that solves real-world problems and improves the lives of others.
            </p>
            <p>
                During my internship, I have worked around <span class="font-bold text-green">Fullstack Development</span>,
                handling both frontend and backend endpoint management.
                Most of my work revolve around <span class="font-bold text-yellow">Frontend Development</span> and <span
                    class="font-bold text-yellow">UI/UX Design</span>, which I polish consistently through projects and
                participating in hackathons.
            </p>
            <p>
                I am also interested in <span class="font-bold text-blue-100">Machine Learning</span>, <span
                    class="font-bold text-blue-100">Natural Language Processing</span> and <span
                    class="font-bold text-blue-100">Computer Security</span>. I have taken modules in these areas and have
                worked on projects that involve them, such as building a search engine by prioritising query relevance.
            </p>
        </div>

        <!-- Developer Profile -->
        <div class="mt-20">

            <!-- Profile Heading -->
            <div class="flex flex-col gap-3 mt-2">
                <span class="font-gilroy font-extrabold text-[40px] text-white">Developer Profile</span>
                <span :class="styles.paragraph">I am experienced in the following
                    fields</span>
            </div>

            <!-- Developer Profile Cards -->
            <!-- TODO: UPDATE TEXT -->
            <div class="grid grid-cols-1 lg:grid-cols-3 lg:grid-flow-col gap-10 mt-10 ">

                <!-- Frontend card -->
                <div class="transition-all border border-white rounded-xl px-10 py-8 items-center hover:bg-grey-200">
                    <div class="relative flex gap-[10%]">
                        <img src="@/assets/images/react.svg" class="xl:w-auto lg:w-[4.5vw] sm:w-auto">
                        <div class="relative flex flex-col">
                            <span class="font-gilroy font-extrabold text-white lg:text-[2.5vw] xl:text-[40px] sm:text-[40px] z-10 w-auto">Frontend</span>
                            <div class="absolute p-2 w-[110%] -ml-[5%] bg-blue-300 lg:top-[2.2vw] xl:top-9  sm:top-9 z-0"> </div>
                            <span class="font-gilroy font-extrabold text-white lg:text-[1.5vw] xl:text-[24px] -mt-0.5 sm:text-[24px]">React, Vue</span>
                        </div>
                    </div>
                    <div class="mt-5">
                        <span :class="`${styles.codeParagraph}  text-grey-100 text-[18px]`">&lt;Text&gt;</span>
                        <div
                            :class="`${styles.codeParagraph} text-white pl-5 border-l-2 border-grey-100 my-2 ml-2`">
                            <p>
                                I worked with React and Vue for Frontend Development. I also developed multiple projects on
                                them
                            </p>
                        </div>
                        <span :class="`${styles.codeParagraph}  text-grey-100 text-[18px]`">&lt;/Text&gt;</span>
                    </div>
                </div>

                <!-- Backend card -->
                <div class="transition-all border border-white rounded-xl px-10 py-8 items-center hover:bg-grey-200">
                    <div class="relative flex gap-[13%]">
                        <img src="@/assets/images/django.svg" class="xl:w-auto lg:w-[4.5vw] sm:w-auto">
                        <div class="relative flex flex-col">
                            <span class="font-gilroy font-extrabold text-white lg:text-[2.5vw] xl:text-[40px] z-10 w-auto sm:text-[40px]">Backend</span>
                            <div class="absolute p-2 w-[110%] -ml-[5%] bg-orange lg:top-[2.2vw] xl:top-9 sm:top-9 z-0"> </div>
                            <span class="font-gilroy font-extrabold text-white lg:text-[1.5vw] xl:text-[24px] -mt-0.5 sm:text-[24px]">Django, Rails</span>
                        </div>
                    </div>
                    <div class="mt-5">
                        <span :class="`${styles.codeParagraph}  text-grey-100 text-[18px]`">"""</span>
                        <div :class="`${styles.codeParagraph} text-white my-2 `">
                            <p>
                                I worked with React and Vue for Frontend Development. I also developed multiple projects on
                                them
                            </p>
                        </div>
                        <span :class="`${styles.codeParagraph}  text-grey-100 text-[18px]`">"""</span>
                    </div>
                </div>

                <!-- UI Design card -->
                <div class="transition-all border border-white rounded-xl px-10 py-8 items-center hover:bg-grey-200">
                    <div class="relative flex gap-[8%]">
                        <img src="@/assets/images/figma.svg" class="xl:w-auto lg:w-[5.5vw] sm:w-auto -mt-1">
                        <div class="relative flex flex-col">
                            <span class="font-gilroy font-extrabold text-white lg:text-[2.5vw] xl:text-[40px] z-10 w-auto sm:text-[40px]">UI/UX</span>
                            <div class="absolute p-2 w-[110%] -ml-[5%] bg-pink lg:top-[2.2vw] xl:top-9  sm:top-9 z-0"> </div>
                            <span class="font-gilroy font-extrabold text-white lg:text-[1.5vw] xl:text-[24px] -mt-0.5 sm:text-[24px]">Figma</span>
                        </div>
                    </div>
                    <div class="mt-5">
                        <span :class="`${styles.codeParagraph}  text-grey-100 text-[18px]`">&lt;span&gt;</span>
                        <div
                        :class="`${styles.codeParagraph} text-white pl-5 border-l-2 border-grey-100 my-2 ml-2`">
                            <p>
                                I worked with React and Vue for Frontend Development. I also developed multiple projects on
                                them
                            </p>
                        </div>
                        <span :class="`${styles.codeParagraph}  text-grey-100 text-[18px]`">&lt;/span&gt;</span>
                    </div>
                </div>
        </div>
    </div>
</div></template>