<template>
    <div>
        <div class="o-container">
            <div class="o-row">
                <h1>{{ country.name }}</h1>
                <h2>Review</h2>
                <h3>What others think about visiting {{ country.name }}</h3>
                <h2>Share your thoughts</h2>
                <h4>Reviews:</h4>

                <form>
                    <label for="title">
                        Title of the review
                        <input
                            type="text"
                            name="title"
                            id="title"
                            placeholder="Title your review"
                        />
                    </label>

                    <label for="experience">
                        Your experience
                        <textarea
                            name="experience"
                            id="experience"
                            placeholder="Give a concise review"
                        ></textarea>
                    </label>

                    <label>Rating</label>

                    <input type="submit" value="Post review" />
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "country",

    data() {
        return {
            country: ""
        };
    },

    created() {
        this.getCountry(this.$route.params.id);
    },

    methods: {
        async getCountry(id) {
            const request = await fetch(
                `https://restcountries.eu/rest/v2/alpha?codes=${id}`,
                {
                    method: "GET"
                }
            );
            const data = await request.json();
            this.country = data[0];
        }
    }
};
</script>

<style lang="scss">
</style>