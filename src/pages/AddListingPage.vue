<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit" class="listing-form">
      <h1>New Listing Form</h1>
      <div class="form-field">
        <label for="street">Street Name *</label>
        <input type="text" id="street" v-model="street" required />
      </div>
      <div class="fields-join">
        <div class="form-field">
          <label for="houseNumber">House Number *</label>
          <input type="text" id="houseNumber" v-model="houseNumber" required />
        </div>
        <div class="form-field">
          <label for="zip">Zip Code *</label>
          <input type="text" id="zip" v-model="zip" required />
        </div>
      </div>
      <div class="form-field">
        <label for="city">City *</label>
        <input type="text" id="city" v-model="city" required />
      </div>
      <div class="fields-join">
        <div class="form-field">
          <label for="bedrooms">No. of Bedrooms *</label>
          <input type="text" id="bedrooms" v-model="bedrooms" required />
        </div>
        <div class="form-field">
          <label for="bathrooms">No. of Bathrooms *</label>
          <input type="text" id="bathrooms" v-model="bathrooms" required />
        </div>
      </div>
      <div class="fields-join">
        <div class="form-field">
          <label for="size">Size(m2) *</label>
          <input type="text" id="size" v-model="size" required />
        </div>
        <div class="form-field">
          <label for="price">Price(€) *</label>
          <input type="text" id="price" v-model="price" required />
        </div>
      </div>
      <div class="form-field">
        <label for="constructionYear">Construction Year *</label>
        <input
          type="text"
          id="constructionYear"
          v-model="constructionYear"
          required
        />
      </div>
      <div class="form-field checkbox">
        <label for="hasGarage">Has garage?</label>
        <input type="checkbox" id="hasGarage" v-model="hasGarage" required />
      </div>
      <label for="decsription">Description *</label>
      <textarea v-model="description" required></textarea>
      <button type="submit">Create Listing</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'AddListing',
};
</script>
<style scoped>
.form-container {
  max-width: 30rem;
  padding: 1rem;
  margin: 5rem auto;
  background-color: rgba(227, 227, 227, 0.434);
}

.listing-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

input {
  padding: 0.5rem;
  border: 1px solid rgb(227, 224, 224);
  border-radius: 0.5rem;
  width: full;
}
.form-field {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin: auto;
}
.checkbox {
  flex-direction: row;
  text-align: center;
}
.fields-join {
  display: flex;
  gap: 1rem;
}
input[type='checkbox'] {
  width: 2rem;
  width: 1.5rem;
  height: 1.5rem;
}
button {
  padding: 1rem;
  width: 50%;
  margin: auto;
  background-color: rgb(252, 251, 251);
}
textarea {
  height: 8rem;
}
</style>
