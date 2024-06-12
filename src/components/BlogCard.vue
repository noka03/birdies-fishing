<template>
    <div class="blog-card">
        <div class="col">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h3>{{ blog.title }}</h3>
                    <img :src="blog.thumb" alt="" style="width: 100%" />
                    <p class="card-text" v-html="blog.summary"></p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                                @click="
                                    $router.push({
                                        name: 'blog-post',
                                        params: { blog: blog }
                                    })
                                "
                            >
                                View
                            </button>
                        </div>
                        <small v-if="blog.publishDate" class="text-muted">
                            {{ formattedDate }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import moment from 'moment'

export default {
    name: 'BlogCard',
    props: {
        blog: {
            Type: Object,
            required: true
        }
    },
    data() {
        return {}
    },
    computed: {
        formattedDate() {
            return moment(new Date(this.blog.publishDate)).format('DD/MM/YYYY')
        }
    }
}
</script>

<style scoped>
.blog-card .card {
    height: 500px;
}
</style>
