<template>
    <div class="o-container" v-if="country">
        <div class="c-review">
            <div class="c-review--form">
                <div class="o-row">
                    <h1>
                        {{ country.name }}
                        <span class="u-text-italic">({{ country.nativeName }})</span>
                    </h1>
                    <h2>Review</h2>
                    <h3>What others think about visiting {{ country.name }}</h3>
                    <h2>Share your thoughts</h2>
                    <h4>Reviews:</h4>

                    <form class="c-form">
                        <label for="title" class="c-form__label">
                            Title of the review
                            <input
                                type="text"
                                name="title"
                                id="title"
                                placeholder="Title your review"
                                class="c-form__input"
                            />
                        </label>

                        <label for="experience" class="c-form__label">
                            Your experience
                            <textarea
                                name="experience"
                                id="experience"
                                placeholder="Give a concise review"
                                class="c-form__input c-form__input--textarea"
                            ></textarea>
                        </label>

                        <label class="c-form__label">Rating</label>

                        <input type="submit" value="Post review" class="c-form__submit" />
                    </form>
                </div>
            </div>

            <div class="c-review--map">
                <div class="o-row">
                    <h2>{{ country.name }}</h2>
                    <img :src="`${ country.flag }`" class="c-review__flag" />
                    <p>{{ country.name }} is located in {{ country.region }} ({{ country.subregion }}) and the capital is {{ country.capital }}.</p>
                    <p>There are {{ country.population | formatNumber }} people living in {{ country.name }}.</p>
                    <img
                        :src="require(`../assets/images/countries/${ country.alpha2Code }.png`)"
                        :alt="`${ country.name }`"
                        class="c-review__countryimg"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import numeral from "numeral";
import Vue from "vue";

Vue.filter("formatNumber", value => {
    return numeral(value).format("0,0");
});

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
            console.log(JSON.stringify(this.country, null, 4));
        }
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/6-components/forms.scss";

.c-review {
    display: flex;
    flex-direction: column;

    @media (min-width: 900px) {
        flex-direction: row;
    }
}

.c-review--form,
.c-review--map {
    width: 100%;
}

.c-review__flag {
    display: block;
    width: auto;
    height: 32px;
    object-fit: cover;
    border-radius: 5px;
}

.c-review__countryimg {
    display: block;

    width: 100%;
    height: auto;

    padding: 16px 32px;
    box-sizing: border-box;
}
</style>