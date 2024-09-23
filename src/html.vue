<template>
  <header>
    <link rel="stylesheet" href="src/assets/main.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  </header>

  <main>
    <div id="container">
      <div id="header">
        <div class = language-block>
          <button id="language" @click="toggleLanguage" :style="{ width: elementWidth + 'px' }">
            {{ currentLanguage }}
          </button>
          <svg class = arrow-down viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" @click="toggleLanguage">
            {{ currentLanguage }}
            <polyline points="10,10 50,50 90,10" stroke="white" stroke-width="20" fill="none" stroke-linecap="square" />
          </svg>
        </div>
      </div>
      <div id="body">
        <div id="buttons">
          <div id="left">
            <h1 id="name">{{ headings.line }}</h1>
          </div>
          <div id="right">
            <div class="box">
            <button class="regularBut" @click="navigateTo('about')" :class="{ 'active': activeButton === 'about' }" :style="{ backgroundColor: activeButton === 'about' ? '#f0f0f0' : '' }">{{ buttons.about }}</button>
            </div>
            <div class="box">
              <button class="regularBut" @click="navigateTo('courses')" :class="{ 'active': activeButton === 'courses' }">{{ buttons.courses }}</button>
            </div>
              <div class="box">
              <button class="regularBut" @click="navigateTo('contact')" :class="{ 'active': activeButton === 'contact' }">{{ buttons.contact }}</button>
              </div>
            <div class="searchBox">
              <!--            <input class="lastBut2" type="text" v-model="searchKeyword" placeholder="Search...">-->
              <button class="searchBut" @click="searchKeywords">
                <p id = "search">{{ buttons.search }}</p>
                <i id="loop" class="material-icons">{{ icons.search }}</i>
              </button>
            </div>
              </div>

        </div>
        <div>
<!--          <img  src="/src/assets/img.png" alt="Failed to load image">-->
          <div v-if="activeButton === 'main'" id="centreText">
            <p  class="cc">{{ headings.line }}</p>
        </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import { activeButton, navigateTo } from './menu.js';

const currentLanguage = ref('English');

const elementWidth = ref(84);

const headings = {
  line: 'FluentSchool',
};

const buttons = {
  about: 'About',
  courses: 'Courses',
  contact: 'Contact us',
  search: 'Search',
};

const icons = {
  search: 'search',
};

const searchKeyword = ref('');

const toggleLanguage = () => {
  if (currentLanguage.value === 'English') {
    currentLanguage.value = 'Ukrainian';
    buttons.about = 'Про нас';
    buttons.courses = 'Курси';
    buttons.contact = 'Контакт';
    buttons.search = 'Пошук';
    elementWidth.value = 100;
  } else {
    currentLanguage.value = 'English';
    buttons.about = 'About';
    buttons.courses = 'Courses';
    buttons.contact = 'Contact us';
    buttons.search = 'Search';
    elementWidth.value = 84;
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


