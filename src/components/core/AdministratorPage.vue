<template>
 <div class="pro-container">
    <AdministrationNav />
    <div class="contains">
        <div class="section-header">
            <h2>Administration</h2>
            <hr />
        </div>
        <div class="add-admin-section">
            <h2>Add Admin</h2>
            <form>
                <div class="form-group">
                    <input
                        placeholder="Enter user email to make them an Admin"
                        type="text"
                        id="addAdmins"
                        class="form-control"
                        v-model="adminEmail"
                    />
                </div>
                <span class="function-message">{{ this.functionMsg }}</span>
                <div class="button-container">
                    <button @click.prevent="addAdmin" type="submit" class="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>

</template>
    <script>
  import AdministrationNav from "@/components/core/AdministrationNav.vue";
  import firebase from "firebase/app"
  import "firebase/functions"
        export default {
          name: "AdministratorPage",
          components: { AdministrationNav},
            data() {
                return {
                    adminEmail: '',
                    functionMsg: null,
                };
            },
            methods: {
              async addAdmin() {
                const addAdmin = await firebase.functions().httpsCallable('addAdminRole');
                const result = await addAdmin({email: this.adminEmail})
                this.functionMsg = result.data.message;
              }
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
.contains{
  width: 400px;
}
.section-header {
    margin-bottom: 20px;
}

.add-admin-section {
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 400px;
}

h2 {
    margin-bottom: 10px;
}

hr {
    border: 1px solid #ccc;
    margin-bottom: 20px;
}

.form-group {
    margin-bottom: 20px;
}

.form-control {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
}

.function-message {
    display: block;
    color: #f44336;
    margin-top: 10px;
}

.button-container {
    text-align: right;
}

.btn-primary {
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.btn-primary:hover {
    background-color: #0056b3;
}

  </style>