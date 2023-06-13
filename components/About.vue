<script setup></script>

<template>
    <div class="flex flex-col" id="about">
        <div class="flex gap-5 mt-36">
            <span class="font-monospace font-bold text-[34px] text-blue-200 my-auto">01.</span>
            <span class="font-gilroy font-extrabold text-[48px] text-white">About me</span>
        </div>
        <div class="flex flex-col gap-10 xl:w-[60%] font-metropolis text-[24px] text-white mt-10 text-justify">
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
        <div class="mt-20">
            <div class="flex flex-col gap-3">
                <span class="font-gilroy font-extrabold text-[48px] text-white">Developer Profile</span>
                <span class="font-metropolis font-normal text-[24px] text-white">I am experienced in the following
                    fields</span>
            </div>
            <div class="grid grid-cols-3 grid-flow-col gap-10 mt-10">
                <!-- TODO: UPDATE TEXT -->

                <!-- Frontend card -->
                <div class="transition-all border border-white rounded-xl px-10 py-8 items-center hover:bg-grey-200">
                    <div class="relative flex gap-8">
                        <img src="@/assets/images/react.svg">
                        <div class="relative flex flex-col">
                            <span class="font-gilroy font-extrabold text-white text-[42px] z-10">Frontend</span>
                            <div class="absolute p-2 w-[110%] -ml-[5%] bg-blue-300 top-9 z-0"> </div>
                            <span class="font-gilroy font-extrabold text-white text-[23px] -mt-1">React, Vue</span>
                        </div>
                    </div>
                    <div class="mt-5">
                        <span class="font-monospace text-grey-100 text-[20px]">&lt;Text&gt;</span>
                        <div
                            class="pl-5 border-l-2 border-grey-100 my-2 ml-2 font-monospace text-white text-[20px] font-medium ">
                            <p>
                                I worked with React and Vue for Frontend Development. I also developed multiple projects on
                                them
                            </p>
                        </div>
                        <span class="font-monospace text-grey-100 text-[20px]">&lt;/Text&gt;</span>
                    </div>
                </div>

                <!-- Backend card -->
                <div class="transition-all border border-white rounded-xl px-10 py-8 items-center hover:bg-grey-200">
                    <div class="relative flex gap-12">
                        <img src="@/assets/images/django.svg">
                        <div class="relative flex flex-col">
                            <span class="font-gilroy font-extrabold text-white text-[42px] z-10 w-auto">Backend</span>
                            <div class="absolute p-2 w-[85%] -ml-[5%] bg-orange top-9 z-0"> </div>
                            <span class="font-gilroy font-extrabold text-white text-[23px] -mt-1">Django, Ruby on
                                Rails</span>
                        </div>
                    </div>
                    <div class="mt-5">
                        <span class="font-monospace text-grey-100 text-[20px]">"""</span>
                        <div class="my-2 ml-2 font-monospace text-white text-[20px] font-medium ">
                            <p>
                                I worked with React and Vue for Frontend Development. I also developed multiple projects on
                                them
                            </p>
                        </div>
                        <span class="font-monospace text-grey-100 text-[20px]">"""</span>
                    </div>
                </div>

                <!-- Frontend card -->
                <div class="transition-all border border-white rounded-xl px-10 py-8 items-center hover:bg-grey-200">
                    <div class="relative flex gap-8">
                        <img src="@/assets/images/figma.svg">
                        <div class="relative flex flex-col">
                            <span class="font-gilroy font-extrabold text-white text-[40px] z-10">UI/UX Design</span>
                            <div class="absolute p-2 w-[110%] -ml-[5%] bg-pink top-9 z-0"> </div>
                            <span class="font-gilroy font-extrabold text-white text-[23px] -mt-1">Figma</span>
                        </div>
                    </div>
                    <div class="mt-5">
                        <span class="font-monospace text-grey-100 text-[20px]">&lt;span&gt;</span>
                        <div
                            class="pl-5 border-l-2 border-grey-100 my-2 ml-2 font-monospace text-white text-[20px] font-medium ">
                            <p>
                                I worked with React and Vue for Frontend Development. I also developed multiple projects on
                                them
                            </p>
                        </div>
                        <span class="font-monospace text-grey-100 text-[20px]">&lt;/span&gt;</span>
                    </div>
                </div>
        </div>
    </div>
    <div class="h-[100px]"></div>
</div></template>