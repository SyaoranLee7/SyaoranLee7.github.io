<template>
    <div class='m-plan-button'>
        <u-button  class='button' :color='color'   :round='true' :plain='plain'>{{value}}</u-button>
    </div>
</template>

<script>
export default {
  props:{
    value:{
      type:String,
      default:'小哥哥',
      
    },
    color:{
      type:String,
      default:'#fff'
    },
    plain:{
      type:Boolean,
      default:true,
    }
  },
    data(){
        return{}
    }
}
</script>

<style lang="scss">
.m-plan-button{
    padding-bottom: 48px;
    .button{
      box-shadow: 0px 38px 35px rgba(16, 113, 241, 0.04);
    }
}
</style>