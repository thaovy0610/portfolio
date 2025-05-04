<script>
export default {
    data: () => {
        return {
            typeValue: '',
            typeStatus: false,
            typeArray: ['Developer', 'Tinkerer', 'Builder'],
            typingSpeed: 200,
            erasingSpeed: 200,
            newTextDelay: 2000,
            typeArrayIndex: 0,
            charIndex: 0
        }
    },
    methods: {
        typeText() {
            if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
                if (!this.typeStatus) this.typeStatus = true 

                this.typeValue += this.typeArray[this.typeArrayIndex][this.charIndex]
                this.charIndex += 1;

                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.typeStatus = false
                setTimeout(this.eraseText, this.erasingSpeed + 100)
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus) this.typeStatus = true 

                this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1)
                this.charIndex -= 1
                setTimeout(this.eraseText, this.erasingSpeed)
            } else {
                this.typeStatus = false
                this.typeArrayIndex = (this.typeArrayIndex + 1) % this.typeArray.length
                setTimeout(this.typeText, this.typingSpeed + 500)
            }
        }
    },
    created() {
        setTimeout(this.typeText, this.newTextDelay + 100)
    }
}
</script>

<template>
    <div class="pt-40 pb-10 sm:pt-40 md:pt-60 md:pb-40 mx-auto px-4 sm:px-6 md:px-5 flex flex-col md:flex-row relative max-w-screen text-balance flex-wrap justify-evenly items-center gap-6 md:gap-10">
        <div class="absolute top-10 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px]
            bg-gradient-to-r from-sky-400 via-indigo-400 to-purple-200
            rounded-full blur-[120px] opacity-20 z-0 overflow-hidden">
        </div>
        <!-- Intro text -->
        <div class="md:w-1/2 px-2 text-center md:text-left mb-12 z-10">
            <h1 class="md:text-lg lg:text-xl font-medium text-amber-50 transition duration-500">Great to see you here &#9995; My name is Vy</h1>
            <div class="flex flex-col leading-10 text-amber-50 font-light duration-300">
                <div class="flex flex-col my-6">
                    <h1 class="text-cente md:text-left text-4xl md:text-5xl xl:text-7xl font-bold"> I'm a
                        <span class="typed-text text-blue-300">{{ typeValue }}</span>
                        <span 
                            class="w-2 animate-cursor-blink inline-block"
                            :class="{'typing': typeStatus}"
                        >
                            &nbsp;
                        </span>
                    </h1>
                    <p class="text-white/80 mt-3 text-sm md:text-md lg:text-lg">
                        Full-stack Developer | AI Builder | Lifelong Learner
                    </p>
                </div>
                <a href="#about"
                    class="mx-auto md:mx-0 md:text-md lg:text-xl items-center border-2 border-blue-200 text-amber-50 rounded-full font-light px-4 py-1.5 text-base w-fit 
                            transition duration-300 hover:shadow-[0_0_10px_2px_rgba(216,180,254,0.7)] hover:shadow-blue-200">
                    Explore below
                </a>
            </div>
            
        </div>
        <!-- Intro Image -->
        <div class="relative w-80 md:mr-5 lg:w-96 lg:mr-10 xl:mr-20 xl:w-[28rem] aspect-square transition-all duration-500 ease-in-out">
            <!-- Outer spinning ring -->
            <div class="outer-ring"></div>

            <!-- Inner spinning ring -->
            <div class="inner-ring"></div>

            <!-- Centered image -->
            <div class="absolute top-1/2 left-1/2 w-[80%] h-[80%] transform -translate-x-1/2 -translate-y-1/2 rounded-full overflow-hidden shadow-blue-300/70 shadow-[0_0_30px] shadow-2xl">
                <img src="../assets/avatar/intro.jpg" alt="avatar" class="w-full h-full object-cover rounded-full"/>
            </div>
        </div>
    </div>
</template>

<style>
    body {
        background: #0e100f;
    }

    span.cursor.typing {
        animation: none;
    }
</style>