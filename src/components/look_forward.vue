<template>
  <div id="forward_container">
    <div class="forward_header">
      <p>我们期待您的加入</p>
    </div>
    <div class="job_introduction">
      <div class="top_container">
        <div class="left_text">
          <div class="serve_header">
            <div class="left_container"></div>
            <p>前端开发工程师</p>
          </div>
          <div class="serve_main">
            <p>岗位职责</p>
            <p>
              负责Web/App产品的页面原型实现；
              负责Web/App产品的性能、用户体验优化；
              负责创新产品的开发与改进，致力于通过技术改善用户体验。
            </p>
          </div>
          <div class="serve_main">
            <p>任职要求</p>
            <p>
              计算机、软件工程、数字媒体技术相关专业优先，本科以上学历；
              热爱前端，熟悉 HTML/CSS/Javascript，关注前端社区；
              良好的UI Sense与审美能力，细节控，喜欢折腾的性格。
            </p>
          </div>
          <div class="serve_bottom"></div>
        </div>
        <div class="right_text">
          <div class="text_salary">
            <p>10-15k</p>
          </div>
          <div class="text_salary">
            <img src="../assets/images/定位.png" alt />
            <p>北京-丰台区-丰台科技园丰台科技园</p>
          </div>
        </div>
      </div>
      <div class="top_container" :style="'border:none'">
        <div class="left_text">
          <div class="serve_header">
            <div class="left_container"></div>
            <p>前端开发工程师</p>
          </div>
          <div class="serve_main">
            <p>岗位职责</p>
            <p>
              负责Web/App产品的页面原型实现；
              负责Web/App产品的性能、用户体验优化；
              负责创新产品的开发与改进，致力于通过技术改善用户体验。
            </p>
          </div>
          <div class="serve_main">
            <p>任职要求</p>
            <p>
              计算机、软件工程、数字媒体技术相关专业优先，本科以上学历；
              热爱前端，熟悉 HTML/CSS/Javascript，关注前端社区；
              良好的UI Sense与审美能力，细节控，喜欢折腾的性格。
            </p>
          </div>
          <div class="serve_bottom"></div>
        </div>
        <div class="right_text">
          <div class="text_salary">
            <p>10-15k</p>
          </div>
          <div class="text_salary">
            <img src="../assets/images/定位.png" alt />
            <p>北京-丰台区-丰台科技园丰台科技园</p>
          </div>
        </div>
      </div>
      <div class="footer_link">
        <a href="http://www.baidu.com" target="_blank">北京更多职位请在boss直聘上查看 ></a>
        <a href="http://www.baidu.com" target="_blank">合肥更多职位请在boss直聘上查看 ></a>
      </div>
    </div>
    <!-- 加入我们,共同成长 -->
    <div id="statistics_container">
      <div class="input_container">
        <div class="input_header">
          <p>加入我们 共同成长</p>
        </div>
        <div class="input_statistics">
          <el-form
            :model="JoinForm"
            :rules="Join_Rules"
            ref="JoinForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item label="姓名:" prop="name">
              <el-input v-model="JoinForm.name" placeholder="请输入您的姓名"></el-input>
            </el-form-item>
            <el-form-item label="联系电话:" prop="phone">
              <el-input v-model="JoinForm.phone" placeholder="请输入您的联系电话"></el-input>
            </el-form-item>
            <el-form-item label="城市选择:" prop="city" :style="'width:100%'">
              <el-select v-model="JoinForm.city" placeholder="请选择城市">
                <el-option label="北京" value="beijing"></el-option>
                <el-option label="合肥" value="hefei"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="岗位选择:" prop="post">
              <el-select v-model="JoinForm.post" placeholder="请选择岗位">
                <el-option label="java开发工程师" value="java"></el-option>
                <el-option label="web前端开发工程师" value="web"></el-option>
                <el-option label="ui设计师" value="ui"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="个人简介:" prop="personal_profile">
              <el-input type="textarea" v-model="JoinForm.personal_profile"></el-input>
            </el-form-item>
            <el-form-item class="btns">
              <el-button type="warning" @click="applyimmediately = true" size="medium">立即申请</el-button>
              <p class="contact">申请岗位后,HR会与您电话联系</p>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <!-- 弹出确定框 -->
      <div class="pop_box">
        <el-dialog title="添加用户" :visible.sync="applyimmediately" width="15%" modal:false>
          <!-- 底部区域 -->
          <span slot="footer" class="dialog-footer">
            <el-button @click="applyimmediately = false">取 消</el-button>
            <el-button type="primary">确 定</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    //   自定义验证规则
    var Name = (rule, value, callback) => {
      const regNmae = /^[\u4e00-\u9fa5]+$/;
      if (regNmae.test(value)) {
        return callback();
      } else {
        callback(new Error("请输入汉字"));
      }
    };
    var checkMobil = (rule, value, callback) => {
      // 验证手机号的正则表达式
      const regMobile = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/;
      if (regMobile.test(value)) {
        return callback();
      } else {
        callback(new Error("请输入合法手机号"));
      }
    };
    return {
      JoinForm: {
        name: "", // 姓名
        post: "", // 岗位选择
        phone: "", //电话
        personal_profile:
          "本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验本人三年工作经验" //个人简介
      },
      // 获取登录信息
      UserInfo: [], // 用户登录正确
      SavaToken: "", // 保存token
      // 表单的验证规则
      Join_Rules: {
        // 姓名验证
        name: [
          { required: true, message: "请输入您的姓名", trigger: "blur" },
          { validator: Name, trigger: "blur" }
        ],
        // 用户密码验证
        phone: [
          { required: true, message: "请输入您的手机号", trigger: "blur" },
          { validator: checkMobil, trigger: "blur" }
        ]
      },
      applyimmediately: false
    };
  },
  methods: {}
};
</script>

<style lang="less" scoped>
#statistics_container {
  width: 100%;
  height: 650px;
  background-image: url("../assets/images/员工招聘-留言背景.png");
  background-repeat: no-repeat;
  background-size: 100% 650px;
  overflow: hidden;
  margin-top: 50px;
}
#forward_container {
  width: 100%;
  height: 600px;
}
.forward_header {
  width: 100%;
  height: 120px;
  margin-top: 20px;
  text-align: center;
  position: relative;
}
.forward_header > p {
  font-size: 36px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%);
}
.job_introduction {
  width: 100%;
  height: 929px;
  padding: 84px 321px 39px 321px;
  box-sizing: border-box;
}
.top_container {
  width: 100%;
  height: 410px;
  border-bottom: 1px solid #ededed;
  display: flex;
  justify-content: space-between;
}
.left_text {
  width: 422px;
  height: 285px;
}
.right_text {
  width: 436px;
  height: 285px;
  display: flex;
  justify-content: space-between;
}
.right_text > .text_salary {
  line-height: 14px;
  display: flex;
  justify-content: space-between;
}
.right_text > .text_salary > p {
  font-size: 16px;
  font-family: "Microsoft YaHei";
  font-weight: 400;
  color: rgba(35, 35, 35, 1);
  margin-left: 5px;
}

.right_text > .text_salary > img {
  width: 12px;
  height: 16px;
}
.left_container {
  width: 4px;
  height: 20px;
  background-color: #ffad60;
}
.serve_main {
  width: 100%;
  margin-top: 33px;
}
.serve_main > p:nth-child(1) {
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  color: #232323;
  font-size: 18px;
  text-align: left;
  margin-left: 14px;
}
.serve_main > p:nth-child(2) {
  font-family: "SourceHanSansCN-Regular";
  font-weight: 400;
  color: #232323;
  text-align: left;
  font-size: 16px;
  line-height: 30px;
  margin-left: 14px;
}
.serve_header {
  width: 100%;
  height: 20px;
  line-height: 20px;
  display: flex;
}
.serve_header > p {
  margin-left: 10px;
  font-size: 18px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: rgba(35, 35, 35, 1);
}
.footer_link {
  width: 100%;
  padding: 0 127px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.footer_link > a {
  font-size: 24px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: rgba(255, 173, 96, 1);
  text-decoration: underline;
}
.input_container {
  width: 100%;
  height: 100%;
}
.input_header {
  width: 100%;
  height: 121px;
  padding: 86px 0 0 0;
  box-sizing: border-box;
  text-align: center;
}
.input_header > p {
  font-size: 36px;
  font-family: "Microsoft YaHei";
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 24px;
}
.input_statistics {
  width: 100%;
  height: 500px;
  padding: 68px 680px 77px 557px;
  box-sizing: border-box;
}
.el-select {
  width: 100%;
}
.btns {
  width: 100%;
  text-align: center;
}
.contact {
  font-size: 14px;
  font-family: "Microsoft YaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.el-form-item__label {
  width: 104px;
  height: 24px;
  font-size: 24px;
  font-family: "Microsoft YaHei";
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.pop_box {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
