<template>
  <header>
    <link rel="stylesheet" href="src/assets/main.css">
    <link rel="stylesheet" href="src/assets/responsive.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <meta name="viewport" content="width=device-width,initial-scale=1" />
  </header>

  <main>
    <div id="container">
      <div id="header">
        <div class = language-block>
          <button id="language" @click="toggleLanguage(null)" :style="{ width: elementWidth + 'px' }">
            {{ currentLanguage }}
          </button>
          <svg class = arrow-down viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg" @click="togglePanel">
            {{ currentLanguage }}
            <polyline :points="isOpen ? '10,50 50,10 90,50' : '10,10 50,50 90,10'"  stroke="white" stroke-width="20" fill="none" stroke-linecap="square" />
          </svg>
          <div v-if="isOpen" class="language-panel">
            <ul>
              <li v-for="lang in languages" :key="lang" @click="toggleLanguage(lang)">
                {{ lang }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <transition
          name="fade-slide"
          mode="out-in"
      >
      <div  :key="currentImageIndex"
            class="background"
            :style="{ backgroundImage: 'url(' + images[currentImageIndex] + ')' }"
            id="body">
        <div id="buttons">
          <div id="left">
            <a style="text-decoration: none" href=""><h1 id="name">{{ headings.line }}</h1></a>
          </div>
          <div id="right">
            <div class="box">
            <button class="regularBut" @click="navigateTo('about')" :class="{ 'active': activeButton === 'about' }">{{ buttons.about }}</button>
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
        <div id="switchIntroBut1">
          <button class="switchBut" @click="changeImageLeft">
            <svg class = arrow-left viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
              <polyline points="50,50 10,10 50,-30" stroke="white" stroke-width="20" fill="none" stroke-linecap="square" transform="translate(0, 15)"/>
            </svg>
            </button>
        </div>
        <div id="switchIntroBut2" >
          <button class="switchBut" @click="changeImageRight">
            <svg class = arrow-right viewBox="0 0 100 60" xmlns="http://www.w3.org/2000/svg">
              <polyline points="50,50 90,10 50,-30" stroke="white" stroke-width="20" fill="none" stroke-linecap="square" transform="translate(0, 15)"/>
            </svg>
          </button>
        </div>
          <div v-if="activeButton === 'main'" id="centreText">
            <p  class="cc">{{ headings.text }}</p>
        </div>
      </div>
      </transition>
    </div>
    <div class="firstSection">
      <div class="firstSecCenter">
        <hr class="firstSecHorizontalLine">
        <p class="firstSecHeading">
          {{ sectionsFirst.header }}
        </p>
        <p class="firstSecText">
          {{ sectionsFirst.text }}
        </p>
      </div>
    </div>
    <div class="secondSection">
      <div class="secondSecLeft">
        <div class="secondSecSquare"></div>
        <img class="secondSecImg" src="src/assets/imgSectionTwo.png" alt="A man studying in the library.">
      </div>
      <div class="secondSecRight">
        <hr class="secondSecHorizontalLine">
        <p class="secondSecHeading">
          {{ sectionsSecond.header }}
        </p>
        <p class="secondSecText">
          {{ sectionsSecond.text }}
        </p>
        <button class="secondSecButton">{{buttons.contact}}</button>
      </div>
    </div>
    <div class="thirdSection">
      <div class="thirdSecCenter">
        <hr class="thirdSecHorizontalLine">
        <p class="thirdSecHeading">
          {{ sectionsThird.header }}
        </p>
        <div class="thirdSecFlags">
          <div class="thirdSecFlag">
            <img class = "thirdSecFlagImage" src="src/assets/englishFlag.png" alt="English flag">
            <button class="thirdSecBot">{{buttons.english}}</button>
          </div>
          <div class="thirdSecFlag">
            <img class = "thirdSecFlagImage" src="src/assets/germanFlag.png" alt="German flag">
            <button class="thirdSecBot">{{buttons.german}}</button>
          </div>
          <div class="thirdSecFlag">
            <img class = "thirdSecFlagImage" src="src/assets/slovakFlag.png" alt="Slovak flag">
            <button class="thirdSecBot">{{buttons.slovak}}</button>
          </div>
          <div class="thirdSecFlag">
            <img class = "thirdSecFlagImage" src="src/assets/ukrainianFlag.png" alt="Ukrainian flag">
            <button class="thirdSecBot">{{buttons.ukrainian}}</button>
          </div>
          <div class="thirdSecFlag">
            <img class = "thirdSecFlagImage" src="src/assets/russianFlag.png" alt="Russian flag">
            <button class="thirdSecBot">{{buttons.russian}}</button>
          </div>
        </div>
      </div>
    </div>
    <div class="firstSection">
      <div class="firstSecCenter">
        <hr class="firstSecHorizontalLine">
        <p class="firstSecHeading">
          {{ sectionsFourth.header }}
        </p>
        <p class="firstSecText">
          {{ sectionsFourth.text }}
        </p>
      </div>
    </div>
    <svg class="ellipseSVG"  xmlns="http://www.w3.org/2000/svg">
      <ellipse rx="1000" ry="600" cx="760" cy="630" class = "ellipse"/>
    </svg>
    <!---------------------------------------------------------------------->
<!------------------------------------FOOTER---------------------------------->
    <!---------------------------------------------------------------------->
    <div class="footer">
      <div class="footerLeft">
        <div id="footerLogo">
          <a style="text-decoration: none" href=""><h1  id="footerLogoName">{{ headings.line }}</h1></a>
        </div>
        <p class="text1">{{footer.text1}}</p>
        <hr class="hr1">
        <div class="socialMedia">
          <a href="https://www.facebook.com/"><img  class ='footerFIcon' src="src/assets/facebook.png" alt="Facebook icon"></a>
          <a href="https://www.instagram.com/"><img class ='footerIcon' src="src/assets/instagramLogo.png" alt="Instagram icon"></a>
          <a href="https://web.telegram.org/"><img class ='footerIcon' src="src/assets/telegram.png" alt="Telegram icon"></a>
          <a href="https://www.youtube.com/"><img class ='footerIcon' src="src/assets/youtube.png" alt="Youtube icon"></a>
        </div>
      </div>
      <div class="footerCenter1">
          <p class="text2">{{buttons.courses}}</p>
          <hr class="hr2">
        <div class="footerCenter2">
          <div class="footerCenter3">
            <a href="" class="footerBotH">{{buttons.english}}</a>
            <a href="" class="footerBot">{{buttons.slovak}}</a>
            <a href="" class="footerBot">{{buttons.german}}</a>
            <a href="" class="footerBot">{{buttons.ukrainian}}</a>
            <a href="" class="footerBot">{{buttons.russian}}</a>
          </div>
          <p class="text3">© FluentSchool 2024</p>
        </div>
      </div>
      <div class="footerRight">
        <p class="text4">{{footer.text3}}</p>
        <hr class="hr3">
        <a href="" class="footerBot2">{{buttons.privacy}}</a>
        <a href="" class="footerBot2">{{buttons.terms}}</a>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSd2bIT32Bx7b3yxIAC5y6ZjYcNB7WqMmHj25xhFEHVfLD1dzA/viewform?usp=sf_link" class="footerBot2">{{buttons.contact}}</a>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref , onMounted, onBeforeUnmount } from 'vue';
import { activeButton, navigateTo } from './menu.js';

let currentLanguage = ref('English');
const isOpen = ref(false);
const elementWidth = ref(84);

const headings = ref({
  line: 'FluentSchool',
  text: 'Language Training For Children And Adults'
});

const languages = [
    "English",
    "Ukrainian"
];

const buttons = ref({
  about: 'About',
  courses: 'Courses',
  contact: 'Contact us',
  search: 'Search',
  english: 'English',
  ukrainian: 'Ukrainian',
  russian: 'Russian',
  slovak: 'Slovak',
  german: 'German',
  privacy: 'Privacy policy',
  terms: 'Terms of service',
});


const sectionsFirst = {
  header: 'Online learning: find the perfect language training program for you',
  text: 'Our universal approach combines leading technology with the best trainers to help people overcome language barriers. With us, you can start speaking a foreign language in no time. Learn English, German, Ukrainian, Russian and Slovak. Use any connection platform you like, Zoom, Discord, Telegram, WhatsaApp ets.'
};

const sectionsSecond = {
  header: 'Learn any language – anywhere on the planet',
  text: 'Equip you with the skills to succeed with our courses in 5 languages. Our courses are built to be studied at a pace that suits learners, wherever they are based. L&D professionals get total visibility on employee progress, and learners receive constructive, actionable feedback. Click the ‘Contact Us’ button and fill out the form. Then we will write to you and agree on the details before you start your training.'
};
const sectionsThird = {
  header: 'Choose language you want',
};
const sectionsFourth = {
  header: 'About us',
  text: 'At FluentSchool, we are driven by a mission to make the world a smaller, more connected place through the power of language. As an international language school, our goal is to break down barriers and foster cross-cultural understanding by providing accessible and affordable language education to people around the globe.'
};
const footer = {
  text1: 'Follow us',
  text3: 'Support',
}

const currentImageIndex = ref(0);
const images = [
  "src/assets/introImg1.png",
  "src/assets/tutoring.jpg",
  "src/assets/girlsLearningTogether.jpg",
];

const icons = ref({
        facebook: 'facebook',
        search: 'search',
        instagram: 'instagram',
        telegram: 'send',
        youtube: 'youtube'
});


const searchKeyword = ref('');

 const toggleLanguage = (lang) => {
   if(lang === null){
     if(currentLanguage.value === 'English'){
       lang = 'Ukrainian';
     }else{
       lang = 'English';
     }
   }
  if ( lang === 'Ukrainian' && currentLanguage.value === 'English' ) {
    currentLanguage.value = 'Українська';
    elementWidth.value = 115;
    buttons.value.about = 'Про нас';
    headings.value.text = 'Мовні курси для дітей та дорослих';
    buttons.value.courses = 'Курси';
    buttons.value.contact = 'Контакт';
    buttons.value.search = 'Пошук';
    buttons.value.russian = 'Російска';
    buttons.value.ukrainian = 'Українська';
    buttons.value.slovak = 'Словацька';
    buttons.value.german = 'Німецька';
    buttons.value.english = 'Англійська';
    buttons.value.privacy = 'Політика конфіденційності';
    buttons.value.terms = 'Умови використання';
    footer.text3 = 'Підтримка';
    footer.text1 = 'Cлідуйте за нами';
    sectionsFirst.header = 'Онлайн-навчання: знайдіть ідеальну програму мовної підготовки для вас';
    sectionsFirst.text = 'Наш універсальний підхід поєднує в собі провідні технології та найкращих викладачів, щоб допомогти людям подолати мовний бар\'єр. З нами ви зможете заговорити іноземною мовою в найкоротші терміни. Вивчайте англійську, німецьку, українську, російську та словацьку мови. Використовуйте будь-яку зручну для вас платформу: Zoom, Discord, Telegram, WhatsaApp та інші.'
    sectionsSecond.header = 'Вивчайте будь-яку мову в будь-якій точці планети';
    sectionsSecond.text = 'Забезпечимо вас навичками для досягнення успіху за допомогою наших курсів 5 мовами. ' +
        'Наші курси побудовані таким чином, щоб їх можна було вивчати в зручному для слухачів темпі, де б вони не знаходилися. ' +
        'Фахівці з навчання та розвитку отримують повну інформацію про прогрес співробітників, а студенти - конструктивний, дієвий зворотній зв\'язок. Натисніть кнопку «Зв\'язатися з нами» та заповніть форму. ' +
        'Ми зв\'яжемося з вами та узгодимо деталі, перш ніж ви почнете навчання.';
    sectionsThird.header = 'Виберіть мову, яку хочете';
    sectionsFourth.header = 'Про нас';
    sectionsFourth.text = 'У FluentSchool ми керуємося місією зробити світ меншим і більш взаємопов\'язаним завдяки силі мови. Як міжнародна мовна школа, ми прагнемо зруйнувати бар\'єри та сприяти міжкультурному взаєморозумінню, надаючи доступну та недорогу мовну освіту людям з усього світу.';
  } else if ( lang === 'English' && currentLanguage.value === 'Ukrainian' || lang === 'English' && currentLanguage.value === 'Українська'){
    currentLanguage.value = 'English';
    elementWidth.value = 84;
    buttons.value.about = 'About';
    headings.value.text = 'Language Training For Children And Adults';
    buttons.value.courses = 'Courses';
    buttons.value.contact = 'Contact us';
    buttons.value.search = 'Search';
    buttons.value.russian = 'Russian';
    buttons.value.ukrainian = 'Ukrainian';
    buttons.value.slovak = 'Slovak';
    buttons.value.german = 'German';
    buttons.value.english = 'English';
    buttons.value.privacy = 'Privacy policy';
    buttons.value.terms = 'Terms of service';
    footer.text3 = 'Support';
    footer.text1 = 'Follow us';
    sectionsFirst.header = 'Online learning: find the perfect language training program for you';
    sectionsFirst.text = 'Our universal approach combines leading technology with the best trainers to help people overcome language barriers. With us, you can start speaking a foreign language in no time. Learn English, German, Ukrainian, Russian and Slovak. Use any connection platform you like, Zoom, Discord, Telegram, WhatsaApp ets.'
    sectionsSecond.header = 'Learn any language – anywhere on the planet';
    sectionsSecond.text = 'Equip you with the skills to succeed with our courses in 5 languages. Our courses are built to be studied at a pace that suits learners, wherever they are based. L&D professionals get total visibility on employee progress, and learners receive constructive, actionable feedback. Click the ‘Contact Us’ button and fill out the form. Then we will write to you and agree on the details before you start your training.';
    sectionsThird.header = 'Choose language you want';
    sectionsFourth.header = 'About us';
    sectionsFourth.text = 'At FluentSchool, we are driven by a mission to make the world a smaller, more connected place through the power of language. As an international language school, our goal is to break down barriers and foster cross-cultural understanding by providing accessible and affordable language education to people around the globe.';
  }
   isOpen.value = false;
};

const togglePanel = () => {
  isOpen.value = !isOpen.value;
}

const changeImageRight = () =>{
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length;
}
const handleClickOutside = (event) => {
  const languagePanel = document.querySelector('.language-panel');
  const languageButton = document.querySelector('#language');
  const arrowIcon = document.querySelector('.arrow-down');

  if (isOpen.value && !languagePanel.contains(event.target) && !languageButton.contains(event.target) && !arrowIcon.contains(event.target)) {
    isOpen.value = false;
  }
}

// Setup event listeners for clicks outside the panel
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
const changeImageLeft = () =>{
  currentImageIndex.value = (currentImageIndex.value - 1)===-1 ? currentImageIndex.value=2 :currentImageIndex.value-1 % images.length;
}
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


