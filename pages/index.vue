<template>
  <div class="h-screen flex">
    <div class="flex" style="flex-basis: 312px;">
      <div class="bg-gray-100 pt-3" style="flex-basis: 72px;">
        <div class="flex flex-col items-center">
          <div v-for="server in servers" :key="server.name">
          <div @mouseover="hoverServer = server.name"
              @mouseleave="hoverServer = ''"
              @click="activeServer = server.name"  class="server" :class="[server.name === activeServer || server.name === hoverServer ? 'active' : '', server.classes]">
            <!-- prettier-ignore -->
            <svg class="w-12" aria-hidden="false" width="28" height="20" viewBox="0 0 28 20"><path fill="currentColor" d="M20.6644 20C20.6644 20 19.8014 18.9762 19.0822 18.0714C22.2226 17.1905 23.4212 15.2381 23.4212 15.2381C22.4384 15.881 21.5034 16.3334 20.6644 16.6429C19.4658 17.1429 18.3151 17.4762 17.1884 17.6667C14.887 18.0953 12.7774 17.9762 10.9795 17.6429C9.61301 17.381 8.43836 17 7.45548 16.6191C6.90411 16.4048 6.30479 16.1429 5.70548 15.8096C5.63356 15.7619 5.56164 15.7381 5.48973 15.6905C5.44178 15.6667 5.41781 15.6429 5.39384 15.6191C4.96233 15.381 4.7226 15.2143 4.7226 15.2143C4.7226 15.2143 5.87329 17.1191 8.91781 18.0238C8.19863 18.9286 7.31164 20 7.31164 20C2.0137 19.8333 0 16.381 0 16.381C0 8.7144 3.45205 2.50017 3.45205 2.50017C6.90411 -0.07123 10.1884 0.000197861 10.1884 0.000197861L10.4281 0.285909C6.11301 1.52399 4.12329 3.40493 4.12329 3.40493C4.12329 3.40493 4.65068 3.11921 5.53767 2.71446C8.10274 1.59542 10.1404 1.2859 10.9795 1.21447C11.1233 1.19066 11.2432 1.16685 11.387 1.16685C12.8493 0.976379 14.5034 0.92876 16.2295 1.11923C18.5068 1.38114 20.9521 2.0478 23.4452 3.40493C23.4452 3.40493 21.5514 1.61923 17.476 0.381146L17.8116 0.000197861C17.8116 0.000197861 21.0959 -0.07123 24.5479 2.50017C24.5479 2.50017 28 8.7144 28 16.381C28 16.381 25.9623 19.8333 20.6644 20ZM9.51712 8.88106C8.15068 8.88106 7.07192 10.0715 7.07192 11.5239C7.07192 12.9763 8.17466 14.1667 9.51712 14.1667C10.8836 14.1667 11.9623 12.9763 11.9623 11.5239C11.9863 10.0715 10.8836 8.88106 9.51712 8.88106ZM18.2671 8.88106C16.9007 8.88106 15.8219 10.0715 15.8219 11.5239C15.8219 12.9763 16.9247 14.1667 18.2671 14.1667C19.6336 14.1667 20.7123 12.9763 20.7123 11.5239C20.7123 10.0715 19.6336 8.88106 18.2671 8.88106Z"></path></svg>
          </div>
          </div>
        </div>
      </div>
      <div class="flex-1 bg-gray-200 flex flex-col">
        <div class="flex justify-center items-center border-b border-gray-100" style="flex-basis: 48px; padding-right: 0.625rem; padding-left: 0.625rem;">
          <button class="bg-gray-600 text-sm rounded text-gray-400 w-full text-left" style="padding-right: 0.375rem; padding-left: 0.375rem; height: 1.75rem;">Find or start a conversation</button>
        </div>
        <div class="flex-1 flex flex-col" style="padding-right: 0.625rem; padding-left: 0.625rem;">
          <div class="flex items-center rounded bg-header-active-item mt-2 p-2 cursor-pointer">
            <!-- prettier-ignore -->
            <svg class="text-white w-6 mr-3" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="currentColor" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)" /><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z" /></g></svg>
            <p class="text-white text-base">Friends</p>
          </div>
          <div class="flex justify-between items-center mt-5 ml-2 mr-2">
            <p class="text-gray-800 hover:text-gray-500 cursor-pointer text-xs uppercase font-semibold">direct messages</p>
            <!-- prettier-ignore -->
            <svg v-tooltip="{
              content: 'Create DM',
              placement: 'auto'
            }" class="w-4 text-gray-500 hover:text-white cursor-pointer" viewBox="0 0 18 18"><polygon fill-rule="nonzero" fill="currentColor" points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"></polygon></svg>
          </div>
          <div class="flex items-center mt-4">
            <!-- prettier-ignore -->
            <svg class="w-48 opacity-25 ml-2" viewBox="0 0 184 428"><rect x="40" y="6" width="144" height="20" rx="10"></rect><circle cx="16" cy="16" r="16"></circle><rect x="40" y="50" width="144" height="20" rx="10" opacity="0.9"></rect><circle cx="16" cy="60" r="16" opacity="0.9"></circle><rect x="40" y="94" width="144" height="20" rx="10" opacity="0.8"></rect><circle cx="16" cy="104" r="16" opacity="0.8"></circle><rect x="40" y="138" width="144" height="20" rx="10" opacity="0.7"></rect><circle cx="16" cy="148" r="16" opacity="0.7"></circle><rect x="40" y="182" width="144" height="20" rx="10" opacity="0.6"></rect><circle cx="16" cy="192" r="16" opacity="0.6"></circle><rect x="40" y="226" width="144" height="20" rx="10" opacity="0.5"></rect><circle cx="16" cy="236" r="16" opacity="0.5"></circle><rect x="40" y="270" width="144" height="20" rx="10" opacity="0.4"></rect><circle cx="16" cy="280" r="16" opacity="0.4"></circle><rect x="40" y="314" width="144" height="20" rx="10" opacity="0.3"></rect><circle cx="16" cy="324" r="16" opacity="0.3"></circle><rect x="40" y="358" width="144" height="20" rx="10" opacity="0.2"></rect><circle cx="16" cy="368" r="16" opacity="0.2"></circle><rect x="40" y="402" width="144" height="20" rx="10" opacity="0.1"></rect><circle cx="16" cy="412" r="16" opacity="0.1"></circle></svg>
          </div>
        </div>
        <div class="flex justify-between items-center bg-gray-700 px-2" style="flex-basis: 52px;">
          <div class="flex items-center cursor-pointer">
            <!-- prretier-ignore -->
            <svg class="w-10 hover:opacity-75" viewBox="0 0 40 32"><mask id="61d703f1-3f03-433a-8af6-4854f57b223b" width="32" height="32"><circle cx="16" cy="16" r="16" fill="white"></circle><rect color="black" x="19" y="19" width="16" height="16" rx="8" ry="8"></rect></mask><foreignObject x="0" y="0" width="32" height="32" mask="url(#61d703f1-3f03-433a-8af6-4854f57b223b)"><img src="https://cdn.discordapp.com/avatars/739403030130196520/7b0b017809b6c2ad803f89267b84de74.png?size=256" alt=" " class="avatar-VxgULZ" aria-hidden="true"></foreignObject><svg x="14.5" y="17" width="25" height="15" viewBox="0 0 25 15"><mask id="7bf62be8-e7e6-4011-9311-3b5d86b29351"><rect x="7.5" y="5" width="10" height="10" rx="5" ry="5" fill="white"></rect><rect x="12.5" y="10" width="0" height="0" rx="0" ry="0" fill="black"></rect><polygon points="-2.16506,-2.5 2.16506,0 -2.16506,2.5" fill="black" transform="scale(0) translate(13.125 10)" style="transform-origin: 13.125px 10px;"></polygon><circle fill="black" cx="12.5" cy="10" r="0"></circle></mask><rect fill="rgba(67, 181, 129, 1)" width="25" height="15" mask="url(#7bf62be8-e7e6-4011-9311-3b5d86b29351)"></rect></svg><rect x="22" y="22" width="10" height="10" fill="transparent" aria-hidden="true" class="pointerEvents-2zdfdO"></rect></svg>
            <div v-tooltip="{
              content: 'Click to copy username',
              placement: 'auto'
            }" class="flex flex-col">
              <p class="text-white text-sm font-semibold">ballonura</p>
              <p class="text-gray-500 text-xs">#8227</p>
            </div>
          </div>
          <div class="flex items-center">
            <div v-tooltip="{
              content: 'Unmute',
              placement: 'auto'
            }" class="flex justify-center items-center w-8 h-8 text-gray-500 hover:text-white hover:bg-gray-300 cursor-pointer rounded">
              <!-- preetier-ignore -->
              <svg class="w-5" viewBox="0 0 24 24"><path d="M6.7 11H5C5 12.19 5.34 13.3 5.9 14.28L7.13 13.05C6.86 12.43 6.7 11.74 6.7 11Z" fill="currentColor"></path><path d="M9.01 11.085C9.015 11.1125 9.02 11.14 9.02 11.17L15 5.18V5C15 3.34 13.66 2 12 2C10.34 2 9 3.34 9 5V11C9 11.03 9.005 11.0575 9.01 11.085Z" fill="currentColor"></path><path d="M11.7237 16.0927L10.9632 16.8531L10.2533 17.5688C10.4978 17.633 10.747 17.6839 11 17.72V22H13V17.72C16.28 17.23 19 14.41 19 11H17.3C17.3 14 14.76 16.1 12 16.1C11.9076 16.1 11.8155 16.0975 11.7237 16.0927Z" fill="currentColor"></path><path d="M21 4.27L19.73 3L3 19.73L4.27 21L8.46 16.82L9.69 15.58L11.35 13.92L14.99 10.28L21 4.27Z" fill="#f04747"></path></svg>
            </div>
            <div v-tooltip="{
              content: 'Deafen',
              placement: 'auto'
            }" class="flex justify-center items-center w-8 h-8 text-gray-500 hover:text-white hover:bg-gray-300 cursor-pointer rounded">
              <!-- preetier-ignore -->
              <svg class="w-5 text-gray-500 hover:text-white cursor-pointer" viewBox="0 0 24 24"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.00305C6.486 2.00305 2 6.48805 2 12.0031V20.0031C2 21.1071 2.895 22.0031 4 22.0031H6C7.104 22.0031 8 21.1071 8 20.0031V17.0031C8 15.8991 7.104 15.0031 6 15.0031H4V12.0031C4 7.59105 7.589 4.00305 12 4.00305C16.411 4.00305 20 7.59105 20 12.0031V15.0031H18C16.896 15.0031 16 15.8991 16 17.0031V20.0031C16 21.1071 16.896 22.0031 18 22.0031H20C21.104 22.0031 22 21.1071 22 20.0031V12.0031C22 6.48805 17.514 2.00305 12 2.00305Z" fill="currentColor"></path></svg></svg>
            </div>
            <div v-tooltip="{
              content: 'User Settings',
              placement: 'auto'
            }" class="flex justify-center items-center w-8 h-8 text-gray-500 hover:text-white hover:bg-gray-300 cursor-pointer rounded">
              <!-- preetier-ignore -->
              <svg class="w-5 text-gray-500 hover:text-white cursor-pointer" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M19.738 10H22V14H19.739C19.498 14.931 19.1 15.798 18.565 16.564L20 18L18 20L16.565 18.564C15.797 19.099 14.932 19.498 14 19.738V22H10V19.738C9.069 19.498 8.203 19.099 7.436 18.564L6 20L4 18L5.436 16.564C4.901 15.799 4.502 14.932 4.262 14H2V10H4.262C4.502 9.068 4.9 8.202 5.436 7.436L4 6L6 4L7.436 5.436C8.202 4.9 9.068 4.502 10 4.262V2H14V4.261C14.932 4.502 15.797 4.9 16.565 5.435L18 3.999L20 5.999L18.564 7.436C19.099 8.202 19.498 9.069 19.738 10ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"></path></svg>
             </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1 flex flex-col">
      <div class="flex items-center justify-between bg-gray-300 border-b border-gray-100 px-2" style="flex-basis: 48px;">
        <div class="flex items-center">
          <div class="flex items-center cursor-default">
            <!-- prettier-ignore -->
            <svg class="text-gray-400 w-6 mr-2" viewBox="0 0 24 24">
              <g fill="none" fill-rule="evenodd">
                <path
                  fill="currentColor"
                  fill-rule="nonzero"
                  d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z"
                  transform="translate(2 4)"
                />
                <path
                  d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"
                />
              </g>
            </svg>
            <p class="text-white font-semibold">Friends</p>
          </div>
          <div class="border border-gray-400 mx-2 h-6 opacity-50"></div>
          <div class="flex">
            <p
              v-for="headerItem in headerItems"
              @mouseover="hoverHeaderItem = headerItem.title"
              @mouseleave="hoverHeaderItem = ''"
              @click="activeHeaderItem = headerItem.title"
              :key="headerItem.title"
              class="font-medium px-2 mx-2 capitalize cursor-pointer rounded-lg transition duration-150"
              :class="[headerItem.title === activeHeaderItem || headerItem.title === hoverHeaderItem ? 'text-white bg-header-active-item' : 'text-gray-500']"
            >
              {{ headerItem.title }}
            </p>
          </div>
          <div
            class="px-2 mx-2 rounded cursor-pointer"
            @click="activeHeaderItem = 'add-friend'"
            :class="['add-friend' === activeHeaderItem ? 'text-green-100 bg-header-active-item-add-friend' : 'text-white bg-green-100']"
            style="padding-bottom: 2px; padding-top: 2px;"
          >
            <p class="leading-5">Add Friend</p>
          </div>
        </div>
        <div class="flex items-center">
          <div
            v-tooltip="{
              content: 'New Group DM',
              placement: 'auto'
            }"
            class="flex items-center justify-center w-8 h-8 cursor-pointer text-gray-500 hover:text-white"
          >
            <!-- prettier-ignore -->
            <svg class="w-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.998 0V3H23.998V5H20.998V8H18.998V5H15.998V3H18.998V0H20.998ZM2.99805 20V24L8.33205 20H14.998C16.102 20 16.998 19.103 16.998 18V9C16.998 7.896 16.102 7 14.998 7H1.99805C0.894047 7 -0.00195312 7.896 -0.00195312 9V18C-0.00195312 19.103 0.894047 20 1.99805 20H2.99805Z"
              />
            </svg>
          </div>
          <div
            v-tooltip="{
              content: 'Inbox',
              placement: 'auto'
            }"
            class="flex items-center justify-center w-8 h-8 cursor-pointer text-gray-500 hover:text-white mx-2"
          >
            <!-- prettier-ignore -->
            <svg class="w-6" viewBox="0 0 24 24">
              <path
                d="M19 3H4.99C3.88 3 3.01 3.89 3.01 5L3 19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.89 20.1 3 19 3ZM19 15H15C15 16.66 13.65 18 12 18C10.35 18 9 16.66 9 15H4.99V5H19V15Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <div
            v-tooltip="{
              content: 'Help',
              placement: 'auto'
            }"
            class="flex items-center justify-center w-8 h-8 cursor-pointer text-gray-500 hover:text-white"
          >
            <!-- prettier-ignore -->
            <svg class="w-6" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M12 2C6.486 2 2 6.487 2 12C2 17.515 6.486 22 12 22C17.514 22 22 17.515 22 12C22 6.487 17.514 2 12 2ZM12 18.25C11.31 18.25 10.75 17.691 10.75 17C10.75 16.31 11.31 15.75 12 15.75C12.69 15.75 13.25 16.31 13.25 17C13.25 17.691 12.69 18.25 12 18.25ZM13 13.875V15H11V12H12C13.104 12 14 11.103 14 10C14 8.896 13.104 8 12 8C10.896 8 10 8.896 10 10H8C8 7.795 9.795 6 12 6C14.205 6 16 7.795 16 10C16 11.861 14.723 13.429 13 13.875Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="flex-1 flex">
        <div class="flex-1 bg-gray-300 flex flex-col justify-center items-center">
          <img class="mb-12" :src="require(`@/assets/images/${activeHeaderItem}.svg`)" />
          <p class="text-gray-400">{{ headerItems.find(x => x.title === activeHeaderItem) === undefined ? "Wumpus is waiting on friends. You don’t have to though!" : headerItems.find(x => x.title === activeHeaderItem).description }}</p>
        </div>
        <div class="bg-gray-200 flex flex-col p-3" style="flex-basis: 420px;">
          <p class="uppercase text-gray-500 text-xs font-semibold mb-2">active now</p>
          <div class="flex flex-col justify-center items-center bg-gray-300 rounded p-4">
            <p class="mb-1 text-white text-base font-semibold">It's quiet for now...</p>
            <p class="text-center text-sm text-gray-500">When a friend starts an activity—like playing a game or hanging out on voice—we’ll show it here!</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { VTooltip, VPopover, VClosePopover } from "v-tooltip";

export default {
  created() {
    Vue.directive("tooltip", VTooltip);
    Vue.directive("close-popover", VClosePopover);
    Vue.component("v-popover", VPopover);
  },
  data() {
    return {
      activeServer: 'discord',
      hoverServer: '',
      servers: [
        {
          name: 'discord',
          classes : 'bg-purple-100 text-white'
        },
        {
          name: 'nuxt',
          classes : 'bg-green-100 text-white'
        },
        {
          name: 'react',
          classes : 'bg-gray-300 text-gray-400'
        },
        {
          name: 'angular',
           classes : 'bg-purple-100 text-white'
        },
      ],
      activeHeaderItem: "online",
      hoverHeaderItem: "",
      headerItems: [
        { title: "online", description: "No one's around to play with Wumpus." },
        { title: "all", description: "Wumpus is waiting on friends. You don’t have to though!" },
        { title: "pending", description: "There are no pending friend requests. Here's Wumpus for now." },
        { title: "blocked", description: "You can't unblock the Wumpus." }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "~/assets/css/_tooltip.scss";

.bg-header-active-item {
  background-color: rgba(79, 84, 92, 0.32);
}

.bg-header-active-item-add-friend {
  background-color: rgba(67, 181, 129, 0.2);
}

.server {
  transition: border-radius 400ms;
  border-radius: 24px;

  @apply flex justify-center items-center h-12 w-12 cursor-pointer mb-3;

  &.active {
    border-radius: 16px;
  }
}
</style>
