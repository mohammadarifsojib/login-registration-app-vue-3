<script setup>
    import {ref, defineProps} from 'vue'
    const props = defineProps(['fullName', 'email', 'is_login','id'])
    import Navbar from '../components/Navbar.vue';
</script>

<template>
    <div>
        <Navbar/>
        <div>
            <div style="background-color: #F8F8F8;" class="min-h-screen flex justify-center items-center">
                <div class="container mx-auto w-6/12 bg-white shadow-lg rounded-lg p-20 text-center space-y-5">
                    <h1 class="text-2xl italic">Welcome!</h1>
                </div>
            </div>
        </div>
    </div>
</template>