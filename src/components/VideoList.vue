<template>
    <ul>
        <VideoListItem
            v-for="video in videosFound"
            :video="video"
            :key="video.etag"
        >
        </VideoListItem>
    </ul>
</template>

<script>
import VideoListItem from './VideoListItem';

export default {
    name: 'VideoList',
    components: {
        VideoListItem
    },
    props: {
        videosFound: Array // prop validation for type of prop
    }
};
</script>

<style>
</style>