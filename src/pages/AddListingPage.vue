<template>
  <div>
    <form @submit.prevent="handleSubmit" class="listing-form">
      <h1>New Listing Form</h1>
      <div class="form-field">
        <label for="street">Street Name</label>
        <input type="text" id="street" v-model="street" required />
      </div>
      <div class="form-field">
        <label for="houseNumber">House Number</label>
        <input type="text" id="houseNumber" v-model="houseNumber" required />
      </div>
      <div class="form-field">
        <label for="zip">Zip Code</label>
        <input type="text" id="zip" v-model="zip" required />
      </div>
      <div class="form-field">
        <label for="city">City</label>
        <input type="text" id="city" v-model="city" required />
      </div>
      <div class="form-field">
        <label for="bedrooms">No. of Bedrooms</label>
        <input type="text" id="bedrooms" v-model="bedrooms" required />
      </div>
      <div class="form-field">
        <label for="bathrooms">No. of Bathrooms</label>
        <input type="text" id="bathrooms" v-model="bathrooms" required />
      </div>
      <div class="form-field">
        <label for="size">Size (m2)</label>
        <input type="text" id="size" v-model="size" required />
      </div>
      <div class="form-field">
        <label for="price">Price (€)</label>
        <input type="text" id="price" v-model="price" required />
      </div>
      <div class="form-field">
        <label for="constructionYear">Construction Year</label>
        <input
          type="text"
          id="constructionYear"
          v-model="constructionYear"
          required
        />
      </div>
      <div class="form-field">
        <label for="checkbox">Has garage?</label>
        <input type="checkbox" id="hasGarage" v-model="hasGarage" required />
      </div>
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
