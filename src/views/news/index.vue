<template>
  <div id="news">
<el-container>
    <el-main>
      <el-row id="pieces">
        <el-col :span="24">
        <Newspiece
            :key="newsList[newsNo].id"
            :title="newsList[newsNo].title"
            :img-src="newsList[newsNo].imgSrc"
            :main-text="newsList[newsNo].mainText"
            :authors="newsList[newsNo].authors"
            :time="newsList[newsNo].time"
            :url="newsList[newsNo].url"
            />
        </el-col>
    </el-row>
    </el-main>
    <el-aside width="40%">
        <el-container>
    <el-row type="flex" justify="center">
        <img src="@/assets/logo.png" width="100%" height="100%">
    </el-row>
    <el-row type="flex" justify="center">
        <el-col :span="24">
            <div style="margin-top: 15px;">          
            <el-input
              @keyup.enter.native="searchClick" 
              placeholder="Please input here" v-model="input3" class="input-with-select">
                <el-button slot="append" icon="el-icon-search" @click="searchClick"></el-button>
            </el-input>
            </div>
        </el-col>
    </el-row>
    <el-row type="flex" justify="center" :gutter="20">
    <!-- Search keywords will be saved and displayed -->
    <!-- Recommended tags-->
    <el-col>
            <el-tag
                :key="tag"
                v-for="tag in dynamicTags"
                closable
                :disable-transitions="false"
                @close="handleClose(tag)">
                {{tag}}
                </el-tag>
        </el-col>
    </el-row>
    <!-- <el-row type="flex" justify="center">
        <el-col :span="8">
            <el-button @click="startHacking">Advance Options</el-button>
        </el-col>
    </el-row> -->
    <el-row type="flex" justify="center">
      <el-tabs 
        :tab-position="tabPosition"
        @tab-click="clickTab"
        v-model="currentTag"
        >
        <el-tab-pane 
          v-for="news in newsList"
          :key="news.id"
          :label="news.title.slice(0, 60)"
        />
      </el-tabs>
    </el-row>
    <el-footer>
      <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      layout="total, prev, pager, next"
      :total="100 * pageSize">
    </el-pagination>
  </div>
    </el-footer>
    </el-container>
  </el-aside>
  </el-container>
  </div>
</template>

<script>
import Newspiece from '@/components/Newspiece'
import { mapState } from 'vuex'
export default {
  name: 'Elements',
  methods: {
    startHacking () {
      this.$notify({
        title: 'Sorry, this is a future feature',
        type: 'warning',
        message: 'We\'ve laid the ground work for you. It\'s time for you to build something epic!',
        duration: 5000
      })
    },
    searchClick() {
        let inputValue = this.input3;
        if (inputValue) {
          this.dynamicTags.push(inputValue);
        }
        this.input3 = '';
        this.newsNo = 0;
        this.currentTag = '0';
        // do search
        this.$store.dispatch('news/getNews', {keywords: this.dynamicTags, currentPage: 1})
    },
    handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        // do search
        if(this.dynamicTags.length <= 0) {
          this.$notify({
            title: 'At least one keyword',
            type: 'warning',
            message: 'Please keep at least one keyword!',
            duration: 5000
          });
        } else {
          this.newsNo = 0;
          this.currentTag = '0';
          this.$store.dispatch('news/getNews', {keywords: this.dynamicTags, currentPage: 1});
        }
    },
      handleSizeChange(_) {
        // console.log(`Each page has ${val} pieces`);
      },
      handleCurrentChange(val) {
        // console.log(`Current Page: ${val}`);
        this.currentPage = val;
        this.currentTag = '0';
        this.newsNo = 0;
        this.$store.dispatch('news/getNews', {keywords: this.dynamicTags, currentPage: this.currentPage});
      },
    clickTab(tab, _) {
      // console.log(tab.index)
      this.newsNo = tab.index;
    }
  },
  computed: {
    ...mapState({
    newsList: state => state.news.newsList,
    totalPages: state => state.news.totalPages,
    pageSize: state => state.news.pageSize,
    totalResults: state => state.news.totalResults
    }),
  },
  data() {
    return {
      input2: '',
      input3: '',
      select: '',
      value: [],
      currentPage: 1,
      dynamicTags: ['COVID-19'],
      newsNo: 0,
      tabPosition: 'right',
      currentTag: '0'
    }
  },
  components: {
    Newspiece 
  },
  created() {
    this.$store.dispatch('news/getNews', {keywords: this.dynamicTags, currentPage: 1});
  }
}
</script>

<style>
  .el-select .el-input {
    width: 130px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
  .el-tag + .el-tag {
    margin-left: 10px;
  }
  .button-new-tag {
    margin-left: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }
  .input-new-tag {
    width: 90px;
    margin-left: 10px;
    vertical-align: bottom;
  }
</style>
