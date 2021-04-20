<template>
    <nav class="flex item-center justify-between flex-wrap bg-blue-500">
        <div class="text-sm sm:flex-grow">
            <NuxtLink to="/" class="no-underline font-semibold block mt-4 sm:inline-block sm:mt-0 text-orange-500 hover:text-white mr-4" >
            Home
            </NuxtLink>
        </div>
        <div class="text-sm sm:flex-grow">
            <NuxtLink to="/upload" class="no-underline font-semibold block mt-4 sm:inline-block sm:mt-0 text-orange-500 hover:text-white mr-4" >
            Upload
            </NuxtLink>
        </div>
    </nav>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>