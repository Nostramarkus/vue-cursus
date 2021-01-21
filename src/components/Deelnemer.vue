<template>
  <div>
    <div class="deelnemer" v-for="deelnemer in deelnemers" :key="deelnemer.id">
      <div class="naam">{{deelnemer.naam}}</div>
      <div class="afdeling">{{deelnemer.afdeling}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Deelnemer",
  data() {
    return {
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
  }
};
</script>
