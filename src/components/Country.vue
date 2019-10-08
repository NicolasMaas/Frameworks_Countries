<template>
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
                    {{ rating }}
                </p>
            </div>
            <div class="c-country--img">
                <img
                    :src="`./assets/images/countries/${ landcode }.png`"
                    class="c-country--img__country"
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Country",

    props: {
        name: String,
        capital: String,
        region: String,
        rating: Number,
        flag: String,
        landcode: String
    }
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/6-components/country.scss";
</style>