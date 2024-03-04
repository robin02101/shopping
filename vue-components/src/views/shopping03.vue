<script >
export default{
    components:{
     
    }, 
    data(){
      return{
        
      }
    },
    mounted(){
              //fecth 拿去資料 data宣告變數
    
      
  
    },
    computed:{
              //我的搜尋框的value有變動的時候可以進行篩選 只要有文字符合就會出現
       
  
    },
    methods:{ 
     
    }
}
</script>

<template>
  <div class="all w-full">
    <h1 class="text-3xl font-bold ml-4 mt-2 mb-2">購買確認及填寫資訊</h1>
    <div class="flex mb-5 ml-8 mr-8 border-t-2 border-b-2 h-32">
            
            <div class="w-1/5 ml-40 "><img  class="object-cover h-full" src="../img/123.png" alt=""></div>
            <div class="w-1/5 flex justify-center items-center ">AAA</div>
            
            <div class="w-1/5 flex justify-center items-center">123</div>
            <div class="flex w-1/5 flex-wrap items-center justify-center">7</div>
          </div>
          <div class="ml-14 mr-14 mb-8">
          <div class="text-xl font-bold">姓名</div>
          <input type="text" class="w-full border-2">
          </div>
          <div class="ml-14 mr-14 mb-8">
          <div class="text-xl font-bold">電話</div>
          <input type="text" class="w-full border-2">
          </div>

          <div class="ml-14 mr-14 mb-8">
          <div class="text-xl font-bold">地址</div>
          <input type="text" class="w-full border-2">
          </div>

          <div class="ml-14 mr-14 mb-8">
          <div class="text-xl font-bold">電子信箱</div>
          <input type="text" class="w-full border-2">
          </div>

          <div class="ml-14 mr-14 mb-8 ">
          <div class="text-xl font-bold">付款方式</div>
              <input type="radio" name="1" class="mr-2">信用卡
          <input type="radio" name="1" class=" mr-2">貨到付款
          </div>
          <div class="ml-14 mr-14 mb-8 ">
          <div class="text-xl font-bold">運送方式</div>
              <input type="radio" name="2" class="mr-2">宅配
          <input type="radio" name="2" class=" mr-2">超商取貨
          </div>





    <div class="flex flex-col items-end mr-14 mb-2" >
        <div>商品數量:0</div>
        <div>商品總金額: $0</div>
      </div>
        <div class="flex justify-between ml-14 mr-14 mb-4"> 
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">回到上一頁</button>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">確認購物車</button>
         
        </div>
  </div>
</template>
