<template>
  <div class="confirm-dialog">
    <div class="confirm-message">{{ message }}</div>
    <div>
      <button @click="onConfirm" class="button-confirm">YES, DELETE!</button>
      <button @click="onCancel" class="button-cancel">GO BACK</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ConfirmDialog',
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const onConfirm = () => {
      emit('confirmed');
    };

    const onCancel = () => {
      emit('canceled');
    };

    return {
      onConfirm,
      onCancel,
    };
  },
};
</script>
<style scoped>
.confirm-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 247, 247);
  color: black;
  border: 1px solid #ccc;
  padding: 2rem;
  border-radius: 1rem;
  /* z-index: 999; */
}

button {
  padding: 0.5rem 1rem;
  width: 8rem;
  color: white;
  margin: 0.5rem;
  border-radius: 0.5rem;
}
.confirm-message {
  margin: 0.8rem;
  font-size: 1.2rem;
}

.button-confirm {
  background-color: rgba(218, 52, 52, 0.968);
}
.button-cancel {
  background-color: rgb(184, 182, 182);
}
</style>
