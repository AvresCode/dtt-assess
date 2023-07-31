<template>
  <div class="form-container">
    <form @submit.prevent="handleSubmit" class="listing-form">
      <h1>New Listing Form</h1>
      <div class="form-field">
        <label for="streetName">Street Name *</label>
        <input
          type="text"
          id="streetName"
          v-model="formData.streetName"
          required
        />
      </div>
      <div class="fields-join">
        <div class="form-field">
          <label for="houseNumber">House Number *</label>
          <input
            type="text"
            id="houseNumber"
            v-model="formData.houseNumber"
            required
          />
        </div>
        <div class="form-field">
          <label for="zip">Zip Code *</label>
          <input type="text" id="zip" v-model="formData.zip" required />
        </div>
      </div>
      <div class="form-field">
        <label for="city">City *</label>
        <input type="text" id="city" v-model="formData.city" required />
      </div>
      <div class="fields-join">
        <div class="form-field">
          <label for="bedrooms">No. of Bedrooms *</label>
          <input
            type="text"
            id="bedrooms"
            v-model="formData.bedrooms"
            required
          />
        </div>
        <div class="form-field">
          <label for="bathrooms">No. of Bathrooms *</label>
          <input
            type="text"
            id="bathrooms"
            v-model="formData.bathrooms"
            required
          />
        </div>
      </div>
      <div class="fields-join">
        <div class="form-field">
          <label for="size">Size(m2) *</label>
          <input type="text" id="size" v-model="formData.size" required />
        </div>
        <div class="form-field">
          <label for="price">Price(€) *</label>
          <input type="text" id="price" v-model="formData.price" required />
        </div>
      </div>
      <div class="form-field">
        <label for="constructionYear">Construction Year *</label>
        <input
          type="text"
          id="constructionYear"
          v-model="formData.constructionYear"
          required
        />
      </div>
      <div class="form-field">
        <label for="numberAddition">Number Addition</label>
        <input
          type="text"
          id="numberAddition"
          v-model="formData.numberAddition"
        />
      </div>

      <div class="form-field">
        <label for="hasGarage">Has garage?</label>
        <select id="hasGarage" v-model="formData.hasGarage" required>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
      </div>
      <div class="form-field">
        <label for="image">Image *</label>
        <input type="file" id="image" @change="handleImageChange" required />
      </div>
      <label for="decsription">Description *</label>
      <textarea v-model="formData.description" required></textarea>
      <button type="submit">Create Listing</button>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'AddListing',
  setup() {
    const formData = reactive({
      streetName: '',
      houseNumber: '',
      zip: '',
      city: '',
      bedrooms: '',
      bathrooms: '',
      size: '',
      price: '',
      constructionYear: '',
      numberAddition: '',
      hasGarage: 'true',
      image: null,
      description: '',
    });

    const store = useStore();

    const handleImageChange = (event) => {
      formData.image = event.target.files[0];
      console.log('image', event.target);
    };

    const handleSubmit = async () => {
      // console.log('submitted');
      // const rawFormData = toRaw(formData);
      // console.log('Form Data:', rawFormData);
      await store.dispatch('fetchAllHouses');
      const allHouses = store.state.allHouses;
      const houseId =
        allHouses.length > 0 ? allHouses[allHouses.length - 1].id : null;
      console.log('houseId', houseId);
      if (houseId) {
        try {
          await store.dispatch('createListing', { formData, houseId });
        } catch (error) {
          console.log('Create Listing error:', error.message);
        }
      } else {
        console.log('No houses found. Cannot create listing without a house.');
      }
    };

    return {
      formData,
      handleImageChange,
      handleSubmit,
    };
  },
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
/* input[type='checkbox'] {
  width: 2rem;
  width: 1.5rem;
  height: 1.5rem;
} */
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
