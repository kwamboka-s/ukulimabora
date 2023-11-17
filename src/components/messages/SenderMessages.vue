<template>
<div class="message-container" v-if="currentSender">
    <header class="header">
        <div class="header-content">
            <h6 class="username">{{ currentSender[0].username }}'s Message</h6>
            <p class="email">{{ currentSender[0].email }}</p>
            <p class="phone"><span>Phone No:</span> {{ currentSender[0].senderPhoneNo }}</p>
        </div>
    </header>
    <div class="message-content">
        <div class="message-inner">
            <h2 class="subject"><span>Subject: </span>{{ currentSender[0].messageSubject }}</h2>
            <p class="content">{{ currentSender[0].messageContent }}</p>
            <div class="date"><span>{{ new Date(currentSender[0].messageDate).toLocaleString("en-us", { dateStyle: "short" }) }}</span></div>
        </div>
    </div>
</div>

  </template>

  <script>
    export default {
        name: "SenderMessages",
        data () {
            return {
                currentSender: null,
            }
        },
        async mounted() {
            this.currentSender = await this.$store.state.messages.filter((message) => {
            return message.messageID === this.$route.params.messageid;
        })
        }

    }
  </script>

<style scoped>.message-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  height: 85px;
  background-color: rgb(33, 206, 59);
  display: flex;
  align-items: center;
}

.header-content {
  margin-left: 20px;
}

.username {
  font-weight: 600;
  margin-top: 4px;
}

.email,
.phone {
  margin: 0;
}

.message-content {
  padding-top: 10px;
  background-color: rgb(127, 225, 255);
  flex: 1;
  overflow-y: auto;
}

.message-inner {
  padding: 20px;
}

.subject {
  font-size: 1.5rem;
}

.content {
  margin-top: 10px;
}

.date {
  margin-top: 20px;
}

</style>