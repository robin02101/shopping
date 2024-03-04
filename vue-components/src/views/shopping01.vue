<script >
export default{
    components:{
     
    }, 
    data(){
      return{
       
        
      }
    },
    mounted(){
              
    
        
      
    },
    computed:{
           
       
  
    },
    methods:{ 
      
  },
}
</script>

<template>
  
<div class="all w-full">
  <h1 class="text-3xl font-bold ml-4 mt-2">商品列表</h1>
  <div class="nav flex justify-end">
    <div><img src="../img/1-2.png" alt=""><img src="../img/1-1.png" alt=""></div>
    <div class="ml-4 mr-8"><img src="../img/2-1.png" alt=""><img src="../img/2-2.png" alt=""></div>
  </div>
  <div class="flex flex-wrap w-full justify-center ">
    <div class="w-60 mx-3 border-2 card justify-between flex flex-col mb-5 rounded-xl">
      <div class="rounded-t-xl overflow-hidden"><img  class="object-cover h-full" src="../img/123.png" alt=""></div>
        <div>商品名稱:name </div>
        <div>商品介紹:description </div>
        <div>價格:price</div>
    
        <div class="flex justify-around"> 數量：
            <div class="pt-2 " ><img  src="../img/-.png" alt=""></div>
            <div class="w-1/5 text-center">quantity </div>
            <div class="pt-1 " ><img  src="../img/+.png" alt=""></div>
        </div>
        <button class="w-full bg-violet-900 text-white rounded-b-xl">加入購物車</button>
      </div>
    </div>

    <div class="w-full ">
      <div class="flex border-t-2 border-b-2 mb-3 ml-8 mr-8">
        <div class="w-1/5 text-center">商品圖片</div>
        <div class="w-1/5 text-center">商品名稱</div>
        <div class="w-1/5 text-center">商品描述</div>
        <div class="w-1/5 text-center">價錢</div>
        <div class="w-1/5"></div>
      </div>
          <div class="flex mb-5 ml-8 mr-8">
            <div class=""><img  class="object-cover h-full" src="../img/123.png" alt=""></div>
            <div class="w-1/5 flex justify-center items-center ">name </div>
            <div class="w-1/5 flex justify-center items-center">description </div>
            <div class="w-1/5 flex justify-center items-center">item.price</div>
            <div class="flex w-1/5 flex-wrap items-center justify-center">
              <div class="pt-2" ><img  src="../img/-.png" alt=""></div>
            <div class="w-1/5 text-center">quantity</div>
            <div class="pt-1"><img  src="../img/+.png" alt=""></div>
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