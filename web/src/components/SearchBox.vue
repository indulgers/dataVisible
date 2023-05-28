<!--搜索框组件-->
<template>
  <div style="padding-top: 50px">
    <div class="search-box">
      <input
          class="search-input"
          type="text"
          :placeholder="placeholder"
          @input="handleInput"
          @blur="handleBlur"
          @focus="handleFocus"
          @keyup.enter="handleEnter"
      />
      <button class="search-button" @click="handleClick">搜索</button>
    </div>
  </div>

<!--  <p style="font-size: 5px;padding-left: 20px;padding-top: 5px">热门搜索：北京市、广东省</p>-->
</template>

<script>
export default {
  name: "SearchBox",
  data() {
    return {
      inputValue: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "请输入查找省份",
    },
  },
  methods: {
    handleInput(e) {
      this.inputValue = e.target.value;
    },
    handleClick() {
      this.$emit("search", this.inputValue);
    },
    handleEnter() {
      this.$emit("search", this.inputValue);
    },
    handleFocus() {
      // console.log("输入框获取到焦点");
    },
    handleBlur() {
      // console.log("输入框失去焦点");
    },
  },
};
</script>

<style>
.search-box {
  display: flex;
  align-items: center;
  border: 2px solid #ecc898;
  border-radius: 40px;
  padding: 5px 10px;
  width: 400px;
  height: 30px;
}

.search-input {
  background-color: transparent;
  padding-left: 20px;
  border: none;
  outline: none;
  flex-grow: 1;
  margin-right: 10px;
  height: 40px;
  color:#ecc898;
  font-size: 20px;
}

.search-button {
  border: none;
  background: linear-gradient(to right, #ecc898, #7a5427);
  color: white;
  padding: 5px 10px;
  border-radius: 30px;
  cursor: pointer;
  height: 30px;
  width: 70px;
  font-size: 15px;
}


</style>