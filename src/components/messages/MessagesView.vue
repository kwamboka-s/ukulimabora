<template>
<div class="pro-container">
     <AdministrationNav />
    <div class="card">
            <MessageCard
            :message ="message"
            v-for="(message, index) in messages"
            :key="index"
            />
    </div>
</div>
</template>
<script>
import AdministrationNav from "@/components/core/AdministrationNav.vue";
import MessageCard from '@/components/messages/MessageCard.vue';
export default {
    name: "MessageView",
    components: {
        MessageCard,
        AdministrationNav,
    },
    computed: {
    messages() {
       return this.$store.state.messages;
    },
   },
   created() {
    this.$store.dispatch('getMessages');
  }
}
</script>
<style scoped>
    .pro-container {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #f7f7f7;
        padding: 20px;
        flex-direction: column;
    }
    .card{
        width: 400px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>