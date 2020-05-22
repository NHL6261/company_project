<template>
  <div id="win_container">
    <div class="input_container">
      <div class="input_header">
        <p>新零售时代我们携手共赢加入我们 共同成长</p>
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
          <el-form-item label="申请选项:" prop="city" :style="'width:100%'">
            <el-select v-model="JoinForm.city" placeholder="请选择城市">
              <el-option label="食品入住" value="beijing"></el-option>
              <el-option label="云服务收银系统代理" value="hefei"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="城市:" prop="post">
            <el-select v-model="JoinForm.post" placeholder="请选择岗位">
              <el-option label="北京" value="java"></el-option>
              <el-option label="合肥" value="web"></el-option>
              <el-option label="山东" value="ui"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="留言:" prop="personal_profile">
            <el-input type="textarea" v-model="JoinForm.personal_profile"></el-input>
          </el-form-item>
          <el-form-item class="btns">
            <el-button type="warning" size="medium">立即申请</el-button>
            <p class="contact">您的信息将被严格保密，信息提交后，客服会近期与您联系，请留意接听电话</p>
          </el-form-item>
        </el-form>
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
      }
    };
  }
};
</script>

<style lang="less" scoped>
#win_container {
  width: 100%;
  height: 838px;
  background-image: url("../assets/images/申请背景-pc.png");
  background-size: 100% 838px;
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
  font-family: Microsoft YaHei;
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
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.el-form-item__label {
  width: 104px;
  height: 24px;
  font-size: 24px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
</style>
