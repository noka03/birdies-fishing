<template>
    <main>
        <section class="text-center">
            <div
                style="height: 20vw; background-repeat: no-repeat; background-position: center"
                :style="{ 'background-image': 'url(' + bannerImage + ')' }"
            >
                <h1 class="fw-bold my-auto text-white" style="padding-top: 6.5vw">
                    Welcome to<br />Birdies Outdoor<br />Adventures
                </h1>
            </div>
        </section>

        <div class="album py-5 bg-light">
            <div class="container">
                <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <blog-card
                        v-for="(blogx, index) in sortedBlogPosts"
                        :key="index"
                        :blog="blogx"
                    ></blog-card>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import BlogCard from './BlogCard.vue'
import banner from '../assets/banner.jpeg'

import axios from 'axios'

export default {
    components: {
        BlogCard
    },
    data() {
        return {
            bannerImage: banner,
            blogPosts: null
        }
    },
    computed: {
        sortedBlogPosts() {
            if (this.blogPosts) {
                // copy the object / array
                let result = JSON.parse(JSON.stringify(this.blogPosts))
                return result.blogs.sort(function (a, b) {
                    return new Date(b.publishDate) - new Date(a.publishDate)
                })
            }
            return []
        }
    },
    async mounted() {
        let response = await axios.get('/blogPosts.json')
        this.blogPosts = response.data
    }
}
</script>

<style></style>
