<script >
export default{
    components:{
     
    }, 
    data(){
      return{
        arr:[],
        rule:1,
        
      }
    },
    mounted(){
              
    
        this.fetchData();
      
    },
    computed:{
           
       
  
    },
    methods:{ 
        fetchData(){
      fetch('./MOCK_DATA.json')
        .then(response => response.json())
        .then(data => {
          this.arr = data;
        })
    },
    
      addNumber(index){
        this.arr[index].quantity++;
      },
      removeNumber(index){
        if(this.arr[index].quantity >1){
          this.arr[index].quantity --;
        }
      },
      rule01(){
        this.rule = 1;
      },
      rule02(){
        this.rule = 2;
      },
  },
}
</script>

<template>
  
<div class="all w-full">
  <h1 class="text-3xl font-bold ml-4 mt-2">商品列表</h1>
  <div class="nav flex justify-end">
    <div @click="rule01()"><img v-if="rule===1" src="../img/1-2.png" alt=""><img v-if="rule===2" src="../img/1-1.png" alt=""></div>
    <div @click="rule02()" class="ml-4 mr-8"><img v-if="rule===1" src="../img/2-1.png" alt=""><img v-if="rule===2" src="../img/2-2.png" alt=""></div>
  </div>
  <div class="flex flex-wrap w-full justify-center " v-if="rule===1">
    <div class="w-60 mx-3 border-2 card justify-between flex flex-col mb-5 rounded-xl" v-for="(item,index) in arr" :key="item.id">
      <div class="rounded-t-xl overflow-hidden"><img  class="object-cover h-full" src="../img/123.png" alt=""></div>
        <div>商品名稱：{{ item.name }}</div>
        <div>商品介紹：{{ item.description }}</div>
        <div>價格：{{ item.price}}</div>
    
        <div class="flex justify-around"> 數量：
            <div class="pt-2 " @click="removeNumber(index)"><img  src="../img/-.png" alt=""></div>
            <div class="w-1/5 text-center">{{ item.quantity }}</div>
            <div class="pt-1 " @click="addNumber(index)"><img  src="../img/+.png" alt=""></div>
        </div>
        <button class="w-full bg-violet-900 text-white rounded-b-xl">加入購物車</button>
      </div>
    </div>

    <div class="w-full " v-if="rule===2">
      <div class="flex border-t-2 border-b-2 mb-3 ml-8 mr-8">
        <div class="w-1/5 text-center">商品圖片</div>
        <div class="w-1/5 text-center">商品名稱</div>
        <div class="w-1/5 text-center">商品描述</div>
        <div class="w-1/5 text-center">價錢</div>
        <div class="w-1/5"></div>
      </div>
          <div class="flex mb-5 ml-8 mr-8" v-for="(item,index) in arr" :key="item.id">
            <div class=""><img  class="object-cover h-full" src="../img/123.png" alt=""></div>
            <div class="w-1/5 flex justify-center items-center ">{{ item.name }}</div>
            <div class="w-1/5 flex justify-center items-center">{{ item.description }}</div>
            <div class="w-1/5 flex justify-center items-center">{{ item.price}}</div>
            <div class="flex w-1/5 flex-wrap items-center justify-center">
              <div class="pt-2" @click="removeNumber(index)"><img  src="../img/-.png" alt=""></div>
            <div class="w-1/5 text-center">{{ item.quantity }}</div>
            <div class="pt-1" @click="addNumber(index)"><img  src="../img/+.png" alt=""></div>
            <button class="w-full bg-violet-900 text-white">加入購物車</button>
            </div>
          </div>

    </div>
</div>

</template>

<style>
.card{
  height: 500px;
}
</style>