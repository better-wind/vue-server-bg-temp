<template>
  <div class="item-box">
    <div class="item-table">
      <div class="item-table">
        <el-table v-loading="loading" element-loading-text="拼命加载中" :data="searchResult.rows" style="width: 100%;" >
          <template v-for="(item,index) in searchConfig.searchResult">
            <el-table-column v-if="item.type=='image'" :label="item.label" :width="item.width" :align="item.align">
              <template slot-scope="scope">
                <div class="table-image">
                  <img :src="scope.row[item.key]" style="width: 80px;height: 80px" alt="">
                </div>
              </template>
            </el-table-column>
            <el-table-column v-else-if="item.type=='slot'" :label="item.label" :width="item.width" :align="item.align">
              <template slot-scope="scope">
                <slot :name="item.slotName" :rs="scope.row[item.key]"></slot>
              </template>
            </el-table-column>
            <el-table-column v-else-if="item.type=='slot-operate'" :label="item.label" :width="item.width" :align="item.align">
              <template slot-scope="scope">
                <slot :name="item.slotName" :rs="scope.row"></slot>
              </template>
            </el-table-column>
            <el-table-column v-else :prop="item.key" :label="item.label" :width="item.width" :align="item.align"></el-table-column>
          </template>
        </el-table>
      </div>
      <v-pagination v-if="pagingShow" :paging="paging" />
    </div>
  </div>
</template>
<script>
  import pageMix from '@/components/Mixin/resultPage'

  export default{
    mixins:[pageMix],
    created(){
      this.initView()
    },
    props:['getSearchList'],
    methods:{
      async searchList(params){
        this.loading = true
        try {
          const rs = await this.getSearchList(params)
          this.searchResult = rs
          this.setPage()
          this.loading = false
        } catch(err){
          this.loading = false
        }
      },
    }
  }
</script>


