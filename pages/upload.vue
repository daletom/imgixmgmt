<template>
<div>
    <div v-if="!loading">
        <input class="m-4" type="file" @change="uploadableFile" />
        <img v-if="inputFile" :src="inputFile" class="w-1/3" />
        <button class="bg-blue-500 rounded p-2 m-4 hover:bg-white hover:text-blue-500" @click="uploadFile" >Upload File</button>
        <ul v-if="returnData" class="m-4">
            <li>Image Type: {{returnData.data.attributes.content_type}}</li>
            <li>Image Name: {{returnData.data.attributes.origin_path}}</li> 
        </ul>
        <code v-if="returnData">
            {{returnData.data.attributes.tags}}
        </code>
    </div>
    <div v-if="loading">
        Loading...
    </div>
</div>
</template>

<script>
    export default {
        data() {
            return {
                inputFile: null,
                inputFileName: null,
                inputFileBase64: null,
                loading: false,
                returnData: null
            }
        },
        methods: {
            uploadableFile(event) {
                let fileReader = new FileReader();
                fileReader.onload = (event) => {
                    this.inputFileBase64 = event.target.result;
                };
                fileReader.readAsDataURL(event.target.files[0]);
                this.inputFileName = event.target.files[0].name;
                this.inputFile = URL.createObjectURL(event.target.files[0]);
                this.inputFileBase64 = fileReader;
                console.log(this.inputFileName);
                console.log(this.inputFile);
                console.log(this.inputFileBase64);
            },
            async uploadFile() {
                this.loading = true;
                await this.$axios.$post(`https://imgixmgmt.vercel.app/api/upload` , {
                    name: this.inputFileName,
                    base64: this.inputFileBase64
                })
                .then(response => {
                    this.loading = false;
                    this.returnData = response;
                    this.publish();
                })
            },
            async publish() {
                let publishData = this.returnData.data.attributes;
                await this.$axios.$post('https://imgixmgmt.vercel.app/api/publish' , {
                    name: publishData.origin_path
                })
                .then(response => {
                    console.log(response);
                })
            }
        }
        
    }
</script>

