<template>
<div class="flex flex-col items-center my-16 mx-8 md:mx-0">
        <img src="../assets/images/shield.png" class="h-64">
        <span class="text-center font-light text-grey-darkest text-5xl mt-8">
            Node & Vue secret server app!
        </span>
        <span class="font-black text-gray-600 text-center my-8 max-w-md">
            Maecenas feugiat, tortor a commodo feugiat, ante nunc congue turpis, ullamcorper laoreet mi lacus lacinia dolor. Donec ultrices interdum tortor, in facilisis leo varius a. Vivamus nec consequat ex.
        </span>
        <div class="flex flex-row items-center justify-center">
            <router-link to='/create' class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Create Secret
            </router-link> 
            <router-link to='/list' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-5">
                Secret List
            </router-link>
        </div>
    </div>
</template>


<script>
export default {
    
}
</script>