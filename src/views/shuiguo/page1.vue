<template>
<div>
  <mt-header title="中国高端水果领导者">
    <router-link to="/" slot="left">
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <div class="filed-wrap">
   <mt-field label="票号" placeholder="请输入票号" v-model="cardNo"></mt-field>
   <mt-field label="密码" placeholder="请输入密码" type="email" v-model="password"></mt-field>
  </div>
   <div class="btn-wrap">
        <mt-button type="primary" class="btn" size="small" @click="clickOk">确定</mt-button>
   </div>
</div>
</template>

<script>
import { Toast } from 'mint-ui';
import api from '../../api/shuiguo';

export default {
  data() {
    return {
      cardNo: '',
      password: '',
    };
  },
  methods: {
    clickOk() {
      const { cardNo, password } = this;
      api.verify({ cardNo, password })
        .then((rsp) => {
          const { data: { id } } = rsp;
          this.$router.push({ path: 'page2', query: { id } });
        })
        .catch((error) => {
          Toast(`出现错误，具体原因：${error.msg}`);
        });
    },
  },
};

</script>

<style lang="less" scoped>
.filed-wrap{
  margin-top: 20px;
}
.btn-wrap{
  padding: 0 10px;
  margin-top: 10px;
}
.btn{
  width: 100%;
}
</style>

