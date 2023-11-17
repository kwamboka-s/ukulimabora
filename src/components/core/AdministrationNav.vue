<template>
  <div class="main-container">
    <section id="header">
        <div class="admin-badge">
            <span><i class="fa-solid fa-user"></i> Admin</span>
        </div>
        <nav>
            <ul id="navbar">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/administration">Add New Products</router-link></li>
                <li><router-link to="/createblog" v-if="admin">Publish New Blogs</router-link></li>
                <!-- <li><router-link to="/administrator">Add New Administrators</router-link></li> -->
                <li><router-link to="/messages" v-if="admin">Messages</router-link></li>
            </ul>
        </nav>
        <div id="mobile">
            <ul class="mobile-nav">
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/createblog" v-if="admin">Publish New Blogs</router-link></li>
                <!-- <li><router-link to="/administrator">Add New Administrators</router-link></li> -->
                <li><router-link to="/messages" v-if="admin">Messages</router-link></li>
            </ul>
        </div>
    </section>
  </div>

</template>
<script>
export default {
    name: "AdministrationNav",
    computed: {
        admin() {
            return this.$store.state.admin;
        }
    }
}
</script>
<style scoped>
.main-container {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f7f7f7;
    padding: 20px;
}

#header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    width: 100%;
    max-width: 800px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.admin-badge {
    display: flex;
    align-items: center;
    font-size: small;
    color: #333;
    margin-right: 20px;
}

#navbar {
    list-style-type: none;
    display: flex;
    gap: 20px;
    margin: 0;
    padding: 0;
}

#navbar li {
    font-size: small;
}

#navbar li a {
    text-decoration: none;
    color: #333;
    transition: color 0.3s ease;
}

#navbar li a:hover {
    color: #4caf50;
}

#mobile {
    display: none;
}

.mobile-nav {
    display: flex;
    flex-direction: column;
    font-size: small;
    margin-left: 20px;
}

@media (max-width: 768px) {
    #navbar {
        display: none;
    }

    #mobile {
        display: block;
    }
}

</style>
