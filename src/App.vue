<template>
    <div class="container">
        <SearchBar @termChange="onTermChange"></SearchBar>
        <VideoList @videoSelect="onVideoSelect"  :videosFound="videos"></VideoList>
    </div>
</template>

<script>
import axios from 'axios';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyDhtYU3g9eUnF8C6twjea4HrRzsx4tgwS8';

export default {
    name: 'App',
    components: {
        SearchBar,
        VideoList
    },
    data() {
        return { videos: [] };
    },
    methods: {
        onVideoSelect(video) {
            console.log(video);
        },
        onTermChange(searchTerm) {
            axios
                .get('https://www.googleapis.com/youtube/v3/search', {
                    params: {
                        key: API_KEY,
                        type: 'video',
                        part: 'snippet',
                        q: searchTerm
                    }
                })
                .then(response => {
                    this.videos = response.data.items;
                });
        }
    }
};
</script>