<template>
  <nav class=" top-0 z-50" v-auto-animate>
    <div class="flex h-[50px] border-b-[1px] border-neutral-3  items-end justify-between">
      <span>
        <router-link class="inline-block text-xl font-bold text-neutral-1" to="/"
          ><svg xmlns="http://www.w3.org/2000/svg" height="32" width="40" viewBox="0 0 640 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffffff" d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z"/></svg></router-link
        >
     
      </span>
      <span class="hidden md:flex">
        <router-link class="hidden font-bold text-md text-pretty md:inline-block hover:text-primary-3" to="/"
          >Home</router-link>
          <router-link class="hidden font-bold text-md text-pretty md:inline-block hover:text-primary-3" to="/about"
          >About</router-link>
          <router-link class="hidden font-bold text-md text-pretty md:inline-block hover:text-primary-3" to="/community"
          >Community</router-link>
          <router-link class="hidden font-bold text-md text-pretty md:inline-block hover:text-primary-3" to="/threads"
          >Threads</router-link>
          <router-link class="hidden font-bold text-md text-pretty md:inline-block hover:text-primary-3" to="/leaderboard"
          >Leaderboard</router-link>
      </span>

      <span class="inline-block md:hidden" v-auto-animate>
        <span
          class="inline-block px-3 py-2 transition-all rounded-md text-light-1 bg-custom-1 hover:scale-105"
          v-if="!navIsOpen"
          @click="toggleNav"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              fill="currentColor"
              d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            />
          </svg>
        </span>
        <span
          class="inline-block px-3 py-2 transition-all rounded-md cursor-pointer text-custom-1 bg-light-1 hover:scale-105"
          v-if="navIsOpen"
          @click="toggleNav"
        >
          <svg xmlns="http://www.w3.org/2000/svg" height="24" width="19" viewBox="0 0 384 512">
            <!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              fill="currentColor"
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
        </span>
      </span>
    </div>
    <!-- mobile view -->
    <div class="flex flex-col gap-2 mt-1 w-dmv md:hidden bg-neutral-1 "
      v-if="navIsOpen">
      <ul class="flex flex-col gap-2">
        <li><router-link class="font-bold text-md text-pretty hover:bg-primary-3" to="/"
          >Home</router-link></li>
          <li><router-link class="font-bold text-md text-pretty hover:bg-primary-3 " to="/about"
            >About</router-link></li>
            <li><router-link class="font-bold text-md text-pretty hover:bg-primary-3 " to="/community"
              >Community</router-link></li>
              <li><router-link class="font-bold text-md text-pretty hover:bg-primary-3 " to="/threads"
                >Threads</router-link></li>
                <li><router-link class="font-bold text-md text-pretty hover:bg-primary-3 " to="/leaderboard"
                  >Leaderboard</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navIsOpen: false,
    }
  },
  methods: {
    toggleNav() {
      this.navIsOpen = !this.navIsOpen
    }
  }
}
</script>

<style scoped>
nav a.router-link-exact-active {
  color: #D1CAFF;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
@media (max-width: 768px) {
li a:first-of-type {
  border: 0;
}
 li a.router-link-exact-active {
color:#ffff;
background-color: #D1CAFF; 

}
li a.router-link-exact-active:hover {
background-color: #D1CAFF;
color:#ffff;
}
li a{
border-radius: 0.5rem;
color:#ffff;
padding: 0.5rem 1.5rem;
width: 350px;
transition: all 0.5s linear;

}

}
</style>
