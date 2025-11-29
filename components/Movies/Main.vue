<script setup lang="ts">
interface Movie {
    title: string
    year: number
    dateWatched: string
    liked: boolean
}

import moviesData from '@/content/movies.json'
const movies: Movie[] = moviesData

// Group movies by month (MM/YY format)
const moviesByMonth = computed(() => {
    const grouped: Record<string, Movie[]> = {}
    
    movies.forEach(movie => {
        const date = new Date(movie.dateWatched)
        const monthKey = `${String(date.getMonth() + 1).padStart(2, '0')}/${String(date.getFullYear()).slice(-2)}`
        
        if (!grouped[monthKey]) {
            grouped[monthKey] = []
        }
        grouped[monthKey].push(movie)
    })
    
    // Sort months descending (most recent first)
    const sortedKeys = Object.keys(grouped).sort((a, b) => {
        const [monthA, yearA] = a.split('/').map(Number)
        const [monthB, yearB] = b.split('/').map(Number)
        return yearB - yearA || monthB - monthA
    })
    
    return sortedKeys.map(key => ({
        month: key,
        movies: grouped[key].sort((a, b) => 
            new Date(b.dateWatched).getTime() - new Date(a.dateWatched).getTime()
        )
    }))
})
</script>

<template>
    <section class="r">
        <h2 class="title">Movies</h2>
        
        <div v-for="group in moviesByMonth" :key="group.month" class="month-group">
            <h3 class="month-title">{{ group.month }}</h3>
            <ul class="movies-list">
                <li v-for="movie in group.movies" :key="movie.title" class="movie-item">
                    <span class="movie-title">{{ movie.title }} <span class="movie-year">({{ movie.year }})</span></span>
                    <span class="movie-liked">{{ movie.liked ? '★' : '○' }}</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<style scoped>
section {
    width: min(400px, 90%);
    height: 300px;
    overflow-y: scroll;
    background-color: var(--blue);
    padding: 20px;
    border: 1px solid var(--cream);
}
h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
}
.month-group {
    margin-bottom: 1.5rem;
}
.month-group:last-child {
    margin-bottom: 0;
}
.month-title {
    font-size: 1rem;
    font-weight: 600;
    opacity: 0.7;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid var(--cream);
}
.movies-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
.movie-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
}
.movie-title {
    font-weight: 500;
    flex: 1;
}
.movie-year {
    opacity: 0.7;
    font-weight: 400;
}
.movie-liked {
    font-size: 1rem;
    opacity: 0.9;
}
</style>