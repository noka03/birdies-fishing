<template>
    <div class="container">
        <article class="blog-post">
            <h2 class="blog-post-title">{{ blog.title }}</h2>
            <p class="blog-post-meta" v-if="blog.publishDate">
                {{ formattedDate }}
            </p>

            <div v-html="htmlText"></div>
        </article>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

export default {
    name: 'BlogPost',
    props: {
        blog: {
            Type: Object,
            required: true
        }
    },
    data() {
        return {
            htmlText: null
        }
    },
    computed: {
        formattedDate() {
            return moment(new Date(this.blog.publishDate)).format('DD/MM/YYYY')
        }
    },
    async mounted() {
        let response = await axios.get(this.blog.fullText)
        this.htmlText = response.data
    }
}
</script>

<style scoped>
.blog-post {
    border: 1px solid #000000;
    margin: 2rem;
    padding: 2rem;
}
</style>
