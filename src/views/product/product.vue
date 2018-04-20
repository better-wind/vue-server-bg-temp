<template>
  <div>
    <div class="title-box">
      商品查询
    </div>
    <div class="section-box">
      <v-search />
      <v-result />
    </div>
  </div>
</template>
<script>
  import pageMix from '@/components/Mixin/searchPage'
  import vResult from '@/views/product/components/result'
  export default{
    mixins:[pageMix],
    created(){
      this.initView()
    },
    data:()=>({
      searchPage:{
        searchItem:[
          {
            type:'',
            key:'page',
            intKey:1
          },
          {
            type:'',
            key:'rows',
            intKey:20
          },
          {
            type:'input',
            label:'商品ID',
            placeholder:'',
            key:'baseGoodsCode',
            intKey:'', //初始值
            isClear:true, //重置是否清空
            regType:[
              {
                type:'Num',
                msg:'ID请输入数字'
              }
            ],
          },
          {
            type:'input',
            label:'商品名称',
            placeholder:'',
            key:'baseGoodsName',
            intKey:'', //初始值
            isClear:true, //重置是否清空
          },
          {
            type:'select',
            label:'出售状态',
            filterable:false, //是否可模糊匹配
            placeholder:'',
            key:'status',
            intKey:'',
            selectType:'selectAll',
            options:[
              {
                value: 'all',
                label: '全部'
              },
              {
                label:'出售中',
                value:'BB'
              },
              {
                label:'待出售',
                value:'CC'
              },
            ]
          },
          {
            type:'select',
            label:'商品分组',
            filterable:true, //是否可模糊匹配
            placeholder:'',
            key:'managerGroupId',
            intKey:'',
            options:[
              {
                label:'A',
                value:'BB'
              },
            ]
          },
        ],
        searchMenu:[
          {
            label:'查询',
            type:'search',
            style:'primary',
          },
          {
            isSlot:true,
            slotName:'private-menu',
          }
        ],
        searchResult:[
          {
            label:'ID',
            key:'id',
            width:'240',
            align:'center'
          },
          {
            label:'主图',
            key:'imageUrl',
            width:'120',
            type:'image',
            align:'center'
          },
          {
            label:'名称',
            key:'name',
            width:'580',
            align:'center'
          },
          {
            label:'详情',
            type:'detail',
            key:'detail',
            align:'center'
          },
          {
            label:'操作',
            key:'operate',
            width:'',
            type:'operate',
            align:'center',
            items:[
              {
                label:'编辑',
                type:'primary'
              },
              {
                label:'下架'
              }
            ]
          }
        ],
      },
    }),
    methods:{
      initView(){
        this.paramsInit()
      },

    },
    components:{
      vResult
    },
  }
</script>
