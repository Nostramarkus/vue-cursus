<template>
  <div>
    <h1>Home</h1>
    <p>Welkom {{naam}} bij de cursus.</p>

    <!-- div class="deelnemer" v-for="deelnemer in deelnemers" :key="deelnemer.id">
      <div class="naam">{{deelnemer.naam}}</div>
      <div class="afdeling">{{deelnemer.afdeling}}</div>
    </div-->

    <Deelnemer/>

    <br>
    <h2>Voeg nieuwe deelnemer toe</h2>

    <div>Naam:</div>
    <input type="text" v-model="nieuweDeelnemerNaam">

    <div>Afdeling:</div>
    <input type="text" v-model="nieuweDeelnemerAfdeling">

    <br>
    <br>
    <button @click="voegNieuweDeelnemerToe">Voeg toe</button>
  </div>
</template>

<script>
import Deelnemer from "@/components/Deelnemer.vue";

export default {
  name: "Home",
  components: {
    Deelnemer
  },
  data() {
    return {
      naam: "Piet",
      nieuweDeelnemerNaam: "",
      nieuweDeelnemerAfdeling: "",
      deelnemers: [
        {
          id: 1,
          naam: "Mark van Lit",
          afdeling: "Platforms"
        },
        {
          id: 2,
          naam: "Pim Willems",
          afdeling: "Platforms"
        },
        {
          id: 3,
          naam: "Tom Luijten",
          afdeling: "Platforms"
        },
        {
          id: 4,
          naam: "Jeffrey Happel",
          afdeling: "Engagement"
        },
        {
          id: 5,
          naam: "Nick Goossens",
          afdeling: "Engagement"
        },
        {
          id: 6,
          naam: "Dennis Leenders",
          afdeling: "Engagement"
        }
      ]
    };
  },
  methods: {
    voegNieuweDeelnemerToe() {
      if (this.nieuweDeelnemerNaam && this.nieuweDeelnemerAfdeling) {
        this.deelnemers.push({
          id: 10,
          naam: this.nieuweDeelnemerNaam,
          afdeling: this.nieuweDeelnemerAfdeling
        });
        this.nieuweDeelnemerNaam = "";
        this.nieuweDeelnemerAfdeling = "";
      } else {
        alert("Vul beide velden in");
      }
    }
  }
};
</script>

<style lang="scss">
.deelnemer {
  padding: 1rem;
  background-color: cornflowerblue;
  margin: 10px;
  .naam {
    font-size: 2rem;
    color: white;
    font-weight: bold;
  }
  .afdeling {
    margin-left: 10px;
  }
}
</style>
