<template>
  <div>
    <h1>Home</h1>
    <p>Welkom {{naam}} bij de cursus.</p>

    <div class="deelnemer" v-for="deelnemer in deelnemers" :key="deelnemer.id">
      <div class="naam">{{deelnemer.naam}}</div>
      <div class="afdeling">{{deelnemer.afdeling}}</div>
      <button @click="deleteDeelnemer(deelnemer.id)">Delete</button>
    </div>

    <br>
    <h2>Voeg nieuwe deelnemer toe</h2>
    <div>Naam:</div>
    <input type="text" v-model="nieuweDeelnemerNaam">
    <div>Afdeling:</div>
    <input type="text" v-model="nieuweDeelnemerAfdeling">
    <br>
    <br>
    <button @click="voegNieuweDeelnemerToe">Voeg toe</button>

    <br>
    <br>
    <br>
    <br>

    <VcButton to="/test" text="Ga naar test"/>
    <VcButton to="/about2" type="back"/>

    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      naam: "Piet",
      nieuweDeelnemerNaam: "",
      nieuweDeelnemerAfdeling: "",
      deelnemers: []
    };
  },
  methods: {
    voegNieuweDeelnemerToe() {
      if (this.nieuweDeelnemerNaam && this.nieuweDeelnemerAfdeling) {
        this.axios
          .post("http://dump.lwdev.nl/vue-cursus-api/addDeelnemer/", {
            naam: this.nieuweDeelnemerNaam,
            afdeling: this.nieuweDeelnemerAfdeling
          })
          .then(response => {
            this.getDeelnemers();
            this.nieuweDeelnemerNaam = "";
            this.nieuweDeelnemerAfdeling = "";
          });
      } else {
        alert("Vul beide velden in");
      }
    },
    deleteDeelnemer(id) {
      this.axios
        .post("http://dump.lwdev.nl/vue-cursus-api/deleteDeelnemer/", {
          id: id
        })
        .then(response => {
          this.getDeelnemers();
        });
    },
    getDeelnemers() {
      this.axios
        .get("http://dump.lwdev.nl/vue-cursus-api/deelnemers/")
        .then(response => {
          this.deelnemers = response.data;
        });
    }
  },
  created() {
    this.getDeelnemers();
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
