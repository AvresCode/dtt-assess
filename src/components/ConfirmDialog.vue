<template>
  <div class="confirm-dialog">
    <div class="confirm-message">{{ message }}</div>
    <div>
      <button @click="onConfirm">YES, DELETE!</button>
      <button @click="onCancel">GO BACK</button>
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
<style>
.confirm-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(255, 247, 247);
  color: black;
  border: 1px solid #ccc;
  padding: 20px;
  z-index: 9999;
}
</style>
