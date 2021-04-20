<template>
  <div class="flex flex-wrap">
    <div v-for="image in images" :key="image.id" class="flex flex-col m-auto">
      <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <video autoplay loop muted playsinline style="width: 450px; height: 250px;">  
        <source :src="'https://tom.imgix.net' + image.attributes.origin_path + '?w=400&h=250&fit=crop&fm=mp4'" />
        </video>
        <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Height:  {{ image.attributes.media_height }} px
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Width:  {{ image.attributes.media_width }} px
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          {{ image.attributes.media_kind }}
        </span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          Type:  {{ image.attributes.content_type }}
        </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ImgixAPI from 'imgix-management-js';

export default {
  asyncData() {
    const imgix = new ImgixAPI({
      apiKey: process.env.IMGIX_READ_KEY
    });

    return imgix.request(`assets/55e4d9390d42e03905934ad4?filter[categories]=publish`).then(res => {
      return { images: res.data }
    });
  }
}
</script>