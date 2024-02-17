<template>
  <header>
    <link rel="stylesheet" href="src/assets/main.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  </header>

  <main>
    <div id="container">
      <div id="header">
        <button id="language" @click="toggleLanguage">{{ currentLanguage }}</button>
      </div>
      <div id="bottoms">
        <div id="left">
          <h1>{{ headings.line }}</h1>
        </div>
        <div id="right">
          <button class="regularBut" @click="navigateTo('main')" :class="{ 'active': activeButton === 'main' }" :style="{ backgroundColor: activeButton === 'main' ? '#f0f0f0' : '' }">{{ buttons.main }}</button>
          <button class="regularBut" @click="navigateTo('methodology')" :class="{ 'active': activeButton === 'methodology' }">{{ buttons.methodology }}</button>
          <button class="regularBut" @click="navigateTo('who')" :class="{ 'active': activeButton === 'who' }">{{ buttons.who }}</button>
          <button class="regularBut" @click="navigateTo('online')" :class="{ 'active': activeButton === 'online' }">{{ buttons.online }}</button>
          <button class="regularBut" @click="navigateTo('profile')" :class="{ 'active': activeButton === 'profile' }">{{ buttons.profile }}</button>
          <div class="searchBox">
            <input class="lastBut2" type="text" v-model="searchKeyword" placeholder="Search...">
            <button class="lastBut" @click="searchKeywords"><i style="font-size: 16px;" class="material-icons">{{ icons.search }}</i><p>{{ buttons.search }}</p></button>
          </div>
        </div>
      </div>
      <div id="body">
        <img src="/src/assets/img.png">
        <div v-if="activeButton === 'main'" id="centreText">
          <p class="cc">{{ headings.line }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { activeButton, navigateTo } from './menu.js';

const currentLanguage = ref('English');

const headings = {
  line: 'INSIGHT LINE',
};

const buttons = {
  main: 'MAIN',
  methodology: 'METHODOLOGY',
  who: 'WHO WE ARE',
  online: 'ONLINE',
  profile: 'MY PROFILE',
  search: 'SEARCH',
};

const icons = {
  search: 'search',
};

const searchKeyword = ref('');

const toggleLanguage = () => {
  if (currentLanguage.value === 'English') {
    currentLanguage.value = 'Ukrainian';
    // Update button texts accordingly
    buttons.main = 'Головна';
    buttons.methodology = 'Методологія';
    buttons.who = 'Хто ми';
    buttons.online = 'Онлайн';
    buttons.profile = 'Мій профіль';
    buttons.search = 'Пошук';
  } else {
    currentLanguage.value = 'English';
    // Revert button texts back to English
    buttons.main = 'MAIN';
    buttons.methodology = 'METHODOLOGY';
    buttons.who = 'WHO WE ARE';
    buttons.online = 'ONLINE';
    buttons.profile = 'MY PROFILE';
    buttons.search = 'SEARCH';
  }
};

const searchKeywords = () => {
  const searchText = searchKeyword.value.trim().toLowerCase();
  const elements = document.querySelectorAll('#body *');
  elements.forEach(element => {
    if (element.textContent.toLowerCase().includes(searchText)) {
      element.style.backgroundColor = 'yellow'; // Highlighting the matched elements, you can adjust this according to your requirement
    }
  });
};

activeButton.value = 'main';
</script>


