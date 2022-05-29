<template>
  <div id="news">
    <el-row type="flex" justify="center">
        <img src="@/assets/logo.png" width="30%" height="10%">
    </el-row>
    <el-row type="flex" justify="center">
        <el-col :span="16">
            <div style="margin-top: 15px;">          
            <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
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
    <el-row type="flex" justify="center">
        <el-col :span="8">
            <el-button @click="startHacking">Advance Options</el-button>
        </el-col>
    </el-row>
    <el-row id="pieces" type="flex" justify="center">
        <el-col :span="18">
        <Newspiece 
          v-for="news in newsList"
            :title="news.title"
            :img-src="news.imgSrc"
            :main-text="news.mainText"
            :author="news.author"
            :time="news.time"
            />
        </el-col>
    </el-row>
  </div>
</template>

<script>
import Newspiece from '@/components/Newspiece'
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
        // TODO: do search
    },
    handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
        // TODO: do search
      },
  },
  data() {
    return {
      input2: '',
      input3: '',
      select: '',
      value: [],
      newsList:[
        {
          title: "Dallas Stars Fire Head Coach Jim Montgomery For 'Unprofessional Conduct'",
          mainText: "DALLAS (CBSDFW.COM) - The Dallas Stars announced Tuesday that Jim Montgomery \"has been dismissed as the team's head coach.\" His termination was effective immediately.\nDuring a late morning press conference Stars general manager Jim Nill would only say that he was made aware of a \"situation\" over the weekend and after gathering information, conducting an investigation and speaking with owners, management and general counsel the decision was made to fire Montgomery.\n\"It was determined that there was a material act of unprofessionalism contrary to the values and standards held by the Dallas Stars organization,\" he said. \"It is very clear this cannot be tolerated and therefore we have relieved Jim Montgomery of his duties.\"\nNill said the decision to let Montgomery go was not based on his performance and had no connection to any past or present players.\nNEWS: Jim Montgomery has been dismissed as the team's Head Coach.\nEffective immediately, Rick Bowness will assume the role of Interim Head Coach for the team. #GoStars https://t.co/mC6C6Q7KHA — Dallas Stars (@DallasStars) December 10, 2019\nWhen asked about details on the specific incident Nill said, \"I'm not going to discuss the act, unfortunately I can't. And that's where I stand on that comment.\"\nReferring to the unprofessional behavior Nill said management wasn't releasing details \"out of respect for everyone involved,\" but that \"the decision had to be made.\"\nHours before the press conference Nill released a statement that said:\n\"The Dallas Stars expect all of our employees to act with integrity and exhibit professional behavior while working for and representing our organization. This decision was made due to unprofessional conduct inconsistent with the core values and beliefs of the Dallas Stars and the National Hockey League.\"\nMontgomery, 50, was in his second season as head coach of the Stars. He had played center for the team in 2002.\nRick Bowness will assume the role of Interim Head Coach for the team. He has served as assistant coach since June 22, 2018.\nDerek Laxdal, who was the head coach of the Texas Stars, has been moved into the Dallas Stars assistant coach position.\nOn Monday, NHL Commissioner Gary Bettman released a stern warning to teams about misconduct and how clubs are expected to act if and when they become aware of it. He said any club aware of inappropriate conduct within their organization and who failed to report it would face \"severe discipline.\"\nThe commissioner made the announcement after the NHL Board of Governors meeting.\nToday Nill said the call to fire Montgomery had nothing to do with new NHL 4-point initiative. \"This decision was made before that initiative came out,\" he said. \"There's no connection between the two.\"\nWhen it comes to the Stars staff, coaches, and players Nill said, \"We have a very good team, we got [sic] great leadership and they're gonna get over this. It's a bump in the road, they're gonna digest this and we'll move forward and go from there.\"\nThe Stars have little time to process the change -- the team hosts the New Jersey Devils tonight at the American Airlines Center.",
          imgSrc: "https://cbsnews1.cbsistatic.com/hub/i/r/2019/12/10/b57a699c-dfc4-43ee-893d-9b1d45cef98c/thumbnail/1200x630/b6815298c840f070e12a6980aa07c03b/jim.jpg",
          author: "Unclear",
          time: "2019-12-10 17:20:20",
        }
      ],
      dynamicTags: ['COVID-19'],
    }
  },
  components: {
    Newspiece 
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