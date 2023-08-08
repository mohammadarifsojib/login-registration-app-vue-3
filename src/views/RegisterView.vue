<script setup>
import {ref} from 'vue';
import {RouterLink, useRouter} from 'vue-router';
import axios from 'axios';
import Swal from 'sweetalert2';

const singUpimg = ref(`./signup-image.jpg`);
const username = ref('');
const emailAddress = ref("");
const password = ref("");
const cPassword = ref("");
const router = useRouter();

const iconClass = () => {
  return `w-4 h-4 text-gray-800 dark:text-white absolute left-0 top-1`
}

function alertShow(icon='success', title='Signed in successfully'){
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })

  Toast.fire({
    icon,
    title
  })
}
// let lenData = ref(0)
// onMounted(async() => {
//         try {
//             const {data} = await axios.get("http://localhost:3000/users")
//             // lenData.value = data.length
//             existingEmail = data
//         } catch (error) {
//             console.log(error)
//         }
//     })
const newUser = ref({
  fullName: username,
  email: emailAddress,
  password: password,
  is_login: false
});

const addUser = async () => {

 if(username.value == ''){
   alertShow('error', 'Name is required!')
   return
 }else if(!isNaN(username.value)){
   alertShow('error', 'Only number is not allowed!')
 }else if(emailAddress.value == ''){
   alertShow('error', 'Email is required!')
 }else if (emailAddress.value != emailAddress.value.match('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')){
   alertShow('error', 'Invalid email address!')
 }else if(password.value == ''){
   alertShow('error', 'Password is required!')
 }else if(cPassword.value == ''){
   alertShow('error', 'Confirm password is required!')
 }else if(password.value !== cPassword.value){
   alertShow('error', 'Password not match. Try again!')
 }else{
  try {
    const response = await axios.post('http://localhost:3000/users', newUser.value);
    // console.log('New user added:', response.data);
    if(response.status){
      alertShow('success', 'Account Created Successfully!')
    }
    router.push({name:'login'})
    // Clear the form fields
    newUser.value = {
      fullName: '',
      email: '',
      password: '',
      is_login: ''
    };
  } catch (error) {
    // console.error('Error adding user:', error);
    alertShow('error', 'Something Went Wrong. Try Again!')
  }
 }
  
};

</script>

<template>
  <div style="background-color: #F8F8F8;" class="h-screen flex justify-center items-center">
    <div class="container mx-auto w-8/12 lg:w-6/12 bg-white shadow-lg rounded-lg p-8 lg:p-20">
      <h1 class="text-4xl font-bold mb-10">Sign up</h1>{{ newUser.fullName }}
      <div class="grid grid-cols-1 md:grid-cols-2 align-middle items-center">
        <form action="" class="pr-10 space-y-10">
          <div class="relative">
            <input class="relative w-full pl-6 border-b border-b-gray-200 focus:outline-none focus:placeholder:text-black focus:border-b-gray-500 placeholder:text-gray-400 placeholder:text-sm" type="text" placeholder="Your Name" v-model="username">
            <svg :class="iconClass()" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
              <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z"/>
            </svg>
          </div>
          <div class="relative">
            <input class="relative w-full pl-6 border-b border-b-gray-200 focus:outline-none focus:placeholder:text-black focus:border-b-gray-500 placeholder:text-gray-400 placeholder:text-sm" type="email" placeholder="Your Email" v-model="emailAddress">
            <svg :class="iconClass()" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
              <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
              <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
            </svg>
          </div>
          <div class="relative">
            <input class="relative w-full pl-6 border-b border-b-gray-200 focus:outline-none focus:placeholder:text-black focus:border-b-gray-500 placeholder:text-gray-400 placeholder:text-sm" type="password" placeholder="Password" v-model="password">
            <svg :class="iconClass()" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
              <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z"/>
            </svg>
          </div>
          <div class="relative">
            <input class="relative w-full pl-6 border-b border-b-gray-200 focus:outline-none focus:placeholder:text-black focus:border-b-gray-500 placeholder:text-gray-400 placeholder:text-sm" type="password" placeholder="Confirm Password" v-model="cPassword">
            <svg :class="iconClass()" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.5 8V4.5a3.5 3.5 0 1 0-7 0V8M8 12v3M2 8h12a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1Z"/>
            </svg>
          </div>
          <button @click.prevent="addUser" class="bg-sky-500 border border-sky-500 rounded-lg py-2 px-5 text-white hover:bg-transparent hover:text-sky-500 transition-all">Register</button>
        </form>
        <div class="lg:p-5 mt-5 md:mt-0 text-center md:space-y-5">
          <img class="hidden md:block w-full" :src="singUpimg" alt="Sign Up Image">
          <div>
            <RouterLink :to="{name:'login'}" class="underline underline-offset-4 decoration-sky-500 hover:underline-offset-8 transition-all">I am already member</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
