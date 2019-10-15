<template>
    <router-link :to="`/country/${landcode}`">
        <div class="c-country">
            <h3 class="u-flex u-align-items-center">
                <img :src="`${ flag }`" class="c-country--data__flag" />
                {{ name }}
            </h3>

            <div class="u-flex">
                <div class="c-country--data">
                    <p>
                        <strong>Capital:</strong>
                        <br />
                        {{ capital }}
                    </p>

                    <p>
                        <strong>Region:</strong>
                        <br />
                        {{ region }}
                    </p>

                    <p>
                        <strong>Rating:</strong>
                        <br />
                        <star-rating
                            :rating="rating"
                            :star-size="16"
                            :read-only="true"
                            :show-rating="false"
                        ></star-rating>
                    </p>
                </div>
                <div class="c-country--img">
                    <img
                        :src="require(`../assets/images/countries/${ landcode }.png`)"
                        :alt="`${ name }`"
                        class="c-country--img__country"
                    />
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
import StarRating from "vue-star-rating";

export default {
    name: "Country",

    props: {
        name: String,
        capital: String,
        region: String,
        rating: Number,
        flag: String,
        landcode: String
    },

    components: {
        StarRating
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/6-components/country.scss";
</style>