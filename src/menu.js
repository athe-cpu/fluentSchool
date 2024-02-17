import { ref, onMounted } from 'vue';

export const activeButton = ref('');

export const navigateTo = (button) => {
    activeButton.value = button;
    // You can implement navigation logic here, such as updating URL parameters or using Vue Router to navigate to the same page with different parameters.
};

// On component mount, check URL parameters and set the activeButton accordingly
onMounted(() => {
    const params = new URLSearchParams(window.location.search);
    const activeButtonParam = params.get('activeButton');
    if (activeButtonParam) {
        activeButton.value = activeButtonParam;
    } else {
        // If no activeButtonParam is provided, set 'main' as default active button
        activeButton.value = 'main';
    }
});
