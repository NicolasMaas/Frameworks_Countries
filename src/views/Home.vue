<template>
    <div>
        <div class="o-container">
            <div class="o-row">
                <h2>Home</h2>
            </div>
        </div>

        <div class="o-container">
            <div class="o-row u-flex u-justify-content-center">
                <h2 class="u-max-width-md">
                    There are some beautiful countries on this earth.
                    Explore which ones are worth a visit!
                </h2>
            </div>
        </div>

        <div class="o-container">
            <div class="o-row">
                <div class="c-countries">
                    <country
                        v-for="country in countries"
                        :key="country.name"
                        :name="country.name"
                        :capital="country.capital"
                        :region="country.region"
                        :flag="country.flag"
                        :landcode="country.alpha2Code"
                        :rating="country.rating"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Country from "@/components/Country";

export default {
    name: "home",

    components: { Country },

    computed: {
        countries() {
            return this.$store.state.countries;
        }
    },

    created() {
        this.$store.dispatch("getCountries");
    }
};
</script>

<style lang="scss">
.c-countries {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    column-count: 3;
    grid-gap: 1rem;
}
</style>
