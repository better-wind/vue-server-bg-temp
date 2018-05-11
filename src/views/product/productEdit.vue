<template>
  <div>
    <div class="title-box">
      商品编辑
    </div>
    <div class="section-box">
      <quillEditor  style="max-width: 1200px" v-model="productUpload.detail" ref="myQuillEditor" :options="editorOption">
        <div id="toolbar" slot="toolbar">

          <span class="ql-formats">
            <el-upload action="/goodsAdmin/goods/file/imageUpload"  :multiple="true" :show-file-list="false" :before-upload="beforeUploadDetail">
              <button type="button">
                <svg viewBox="0 0 18 18"> <rect class="ql-stroke" height="10" width="12" x="3" y="4"></rect> <circle class="ql-fill" cx="6" cy="7" r="1"></circle> <polyline class="ql-even ql-fill" points="5 12 5 11 7 9 8 10 11 7 13 9 13 12 5 12"></polyline> </svg>
              </button>
            </el-upload>
          </span>
        </div>
      </quillEditor>
    </div>
    <div>
      <el-button @click="setDemoConfigBtn">click</el-button>
      {{demo_config}}
    </div>
    <div>
      <el-button @click="setDemoConfigGlobalBtn">click</el-button>
      {{demoConfigGlobal}}
    </div>


  </div>
</template>
<script>
  import {quillEditor} from 'vue-quill-editor'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  import {mapActions,mapState} from 'vuex'
  export default{
    created(){
      this.initView()
    },
    computed:{
      // ...mapState({
      //   demo_config:state => state.product.demo_config,
      //   demoConfigGlobal:state => state.demoConfigGlobal
      // })
      ...mapState(['demoConfigGlobal']),
      ...mapState({
        demo_config:state => state.product.demo_config,
      })
    },
    data:()=>({
      productUpload:{
        detail:''
      },
      editorOption: {
        modules: {
          toolbar: '#toolbar'
        }
      },
    }),
    methods:{
      ...mapActions('product',['setDemoConfig']),
      ...mapActions(['setDemoConfigGlobal']),
      // ...mapActions({
      //   setDemoConfigGlobal:'setDemoConfigGlobal',
      //   setDemoConfig:'product/setDemoConfig'
      // }),
      initView(){
        // console.log(this.$store)

      },
      async beforeUploadDetail(file){
        try {
          const imgConfig = await UtilTool.getFileReaderImage(file)
          console.log(imgConfig)
        } catch(err){
          //处理失败
          console.log(err)
        }
      },

      setDemoConfigBtn(){
        let _opts = {
          isShow:true,
          list:[1,2,3,4,5]
        }
        this.setDemoConfig(_opts)
      },
      setDemoConfigGlobalBtn(){
        let _opts = {
          isShow:false,
          list:[6,7,8,9,10]
        }
        this.setDemoConfigGlobal(_opts)
      }
    },
    components:{
      quillEditor
    },
  }
</script>
