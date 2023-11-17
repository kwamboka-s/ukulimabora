<template>
<div class="pro">
    <router-link :to="{ name: 'senderMessages', params: { messageid: this.message.messageID }}">
        <div class="des">
            <h3>{{ message.username }}</h3>
            <p><span>Subject:</span> {{ message.messageSubject }}</p>
        </div>
    </router-link>
    <div class="date">
        <span>{{ new Date(message.messageDate).toLocaleString("en-us", { dateStyle: "medium" }) }}</span>
    </div>
    <div @click="deleteMessage" class="icon">
        <i class="fa-solid fa-trash"></i>
    </div>
</div>


</template>
<script>
    export default {
      name: "MessageCard",
      props: ["message"],
      methods: {
        deleteMessage() {
         this.$store.dispatch("deleteMessage", this.message.messageID);
        },
      },
      // computed: {
      //   senderEmail: {
      //    get() {
      //     return this.$store.state.senderEmail;
      //    }
      //   },
      //   senderName: {
      //    get() {
      //     return this.$store.state.senderName;
      //    }
      //   },
      //   messageSubject: {
      //    get() {
      //     return this.$store.state.messageSubject;
      //    }
      //   },
      //   messageContent: {
      //    get() {
      //     return this.$store.state.messageContent;
      //    }
      //   },
      // }
    };
    </script>
    <style scoped>
.pro {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px;
    margin-bottom: 10px;
    background-color: #fff;
}

.des {
    flex: 3;
}

h3 {
    margin: 0;
    font-size: 1.2rem;
}

p {
    margin: 0;
    color: #555;
}

span {
    font-weight: bold;
    margin-right: 5px;
}

.date {
    flex: 1;
    text-align: right;
}

.icon {
    flex: 1;
    text-align: center;
    cursor: pointer;
    color: #f44336; /* Red color for the trash icon */
}

      </style>
