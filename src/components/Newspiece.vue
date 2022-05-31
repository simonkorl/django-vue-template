<template>
  <el-card id="news-piece" show="hover">
    <div slot="header">
      <el-row>
          <a :href="url"><h1> {{title}} </h1></a>
      </el-row>
    </div>
    <div>
      <el-row justify="left">
        {{authors.join(' ')}}
      </el-row>
      <el-row>
        {{time}}
      </el-row>
      <el-row type="flex" justify="center">
        <el-col>
          <el-row>
            <el-image
              :src="imgSrc"
              :fit="fit"></el-image>
          </el-row>
        <el-row>
          <el-card>
            <p class="main-text" style="white-space: pre-line;" align="left">
                {{mainText}}
            </p>
          </el-card>
        </el-row>
        </el-col>
      </el-row>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Newspiece',
  props: {
    title: {
        type: String,
        default: "hello"
    },
    imgSrc: {
        type: String,
        default: ""
    },
    mainText: {
        type: String,
        default: "Hello World from main text."
    },
    time: {
      type:String,
      default: "2020-06-02"
    },
    authors: {
      type: Array,
      default: () => { return ["Unclear"]}
    },
    url: {
      type: String,
      default: ""
    }
  },
  methods: {
    searchClick() {
      this.$notify({
        title: 'click search',
        type: 'success',
        duration: 5000
      })
    }
  },
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      select: ''
    }
  }
}
</script>

<style>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>