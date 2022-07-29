<template>
  <div class="container">
    <div class="loader" v-if="$fetchState.pending"><div class="lds-ripple"><div></div><div></div></div></div>
    <div class="wrapper" v-else>
      <h1>Frontend-разработчик</h1>
      <p class="info">Опыт программирования 1 год 1 месяц</p>
      <p class="info">Дата рождения: 03.06.1996</p>
      <p class="info">Гражданство: Россия</p>
      
      <p class="stack" >
        
        Стек:
        <ul>
           <li v-for="item,i in skills.main" :key="i">{{item}}</li>
           <li>Фреймворки: <ul><li v-for="item,i in skills.framework" :key="i">{{item}}</li></ul></li>
           
        </ul>
        
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      skills: {},
    };
  },
  mounted() {
    
  },
  async fetch() {
      try {
        const result = await this.$strapi.find("about");
        this.skills = result.data.attributes.skills;
      } catch (error) {
        console.log(error);
      } 
  },
};
</script>

<style scoped lang="scss">
.container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  background: rgb(248, 248, 248);
}
.wrapper {
  h1 {
    color: rgb(0, 51, 34);
  }
  .info {
    font-size: 14px;
    font-style: italic;
    color: rgb(0, 75, 50);
  }
  .stack {
    font-size: 16px;
  }
}

.lds-ripple {
  display: inline-block;
  position: relative;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
  width: 80px;
  height: 80px;
}
.lds-ripple div {
  position: absolute;
  border: 4px solid #000;
  opacity: 1;
  border-radius: 50%;
  animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
.lds-ripple div:nth-child(2) {
  animation-delay: -0.5s;
}
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
</style>
