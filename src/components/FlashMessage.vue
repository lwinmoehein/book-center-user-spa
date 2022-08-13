<template>
  <div class="bottom-12 fixed w-full left-0" :class="{'bottom-0':!isLoggedIn}">
    <transition-group name="fade">
      <p>{{ error }}</p>
      <p v-if="dataMessage" class="mt-2 text-sm text-green-500" key="dataMessage">
        {{ dataMessage }}
      </p>
      <p v-if="dataError && getType(dataError) === 'string'" key="error" class="mt-2 text-sm bg-red-400 pb-2 pt-2 text-white w-full flex flex-col items-start">
        <span class="ml-2">{{ dataError }}</span>
      </p>
      <ul v-if="getType(dataError) === 'object'" class="mt-2 text-sm bg-red-400 pb-2 pt-2 text-white w-full flex flex-col items-start" key="error-list">
        <li v-for="key in errorKeys" :key="key">
          <ul class="ml-2 mb-1">
            <li class="transition-opacity ease-in duration-700 opacity-100 hover:opacity-0" v-for="(item, index) in getErrors(key)" :key="`${index}-error`">
              {{ item }}
            </li>
          </ul>
        </li>
      </ul>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "FlashMessage",
  props: {
    message: {
      type: String,
      default: null,
    },
    error: {
      type: [Object, String],
      default: null,
    },
    isLoggedIn:{
      type:Boolean,
      default:true
    }
  },
  data() {
    return {
      dataMessage:null,
      dataError:null
    };
  },
  computed: {
    errorKeys() {
      if (!this.dataError || this.getType(this.dataError) === "string") {
        return null;
      }
      return Object.keys(this.dataError);
    },
  },
  watch:{
    error(){
      this.dataError = this.error;
        setTimeout(()=>{this.dataError=null},2000);
      
    },
    message(){
      this.dataMessage = this.message;
        setTimeout(()=>{this.dataMessage=null},2000);
      
    }
  },
  methods: {
    getErrors(key) {
      return this.dataError[key];
    },
    getType(obj) {
      return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
    },
  },
  filters: {
    titleCase(value) {
      return value.replace("_", " ");
    },
  },
};
</script>
