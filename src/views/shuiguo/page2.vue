<template>
<div v-if="!isLoading">
  <mt-header title="中国高端水果领导者">
    <router-link to="/" slot="left">
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <div class="info">
    <div class="title">{{cardTitle}}</div>
    <div class="content">{{cardDescription}}</div>
  </div>
  <div class="filed-wrap">
   <mt-field label="收货人" placeholder="请输入收货人" v-model="name"></mt-field>
   <mt-field label="收货电话" placeholder="请输入收货电话" type="tel" v-model="phone"></mt-field>
   <mt-field label="收货时间" placeholder="请输入收货时间" v-model="dateFormat" @click.native="openDatePicker"></mt-field>
   <mt-field label="收货地址" placeholder="请输入收货地址" type="textarea" rows="4" v-model="address"></mt-field>
  </div>
   <div class="btn-wrap">
        <mt-button type="primary" class="btn" size="small" @click="clickOk">提交</mt-button>
   </div>
  <mt-datetime-picker
    ref="picker"
    type="date"
    @confirm="handleConfirm"
    v-model="pickerValue">
  </mt-datetime-picker>
</div>
</template>

<script>
import { Toast, Indicator, MessageBox } from 'mint-ui';
import api from '../../api/shuiguo';

export default {
  data() {
    return {
      isLoading: true,
      cardTitle: '',
      cardDescription: '',

      name: '',
      phone: '',
      date: '',
      address: '',

      pickerVisible: true,
      pickerValue: new Date(),
    };
  },
  computed: {
    dateFormat() {
      return this.date instanceof Date ? `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}` : '';
    },
  },
  created() {
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle',
    });
    const { history: { current: { query: { id } } } } = this.$router;
    api.cardInfo(id)
      .then((rsp) => {
        const { data: { cardTitle, cardDescription } } = rsp;
        this.cardTitle = cardTitle;
        this.cardDescription = cardDescription;

        Indicator.close();
        this.isLoading = false;
      })
      .catch((error) => {
        Toast(`出现错误，具体原因：${error.msg}`);
      });
  },
  methods: {
    openDatePicker() {
      this.$refs.picker.open();
    },
    handleConfirm(v) {
      this.date = v;
    },
    clickOk() {
      const { history: { current: { query: { id } } } } = this.$router;
      const {
        name, phone, date, address,
      } = this;
      const reportDate = date instanceof Date ? date.getTime() : '';
      api.fillInfo({
        address, id, name, phone, reportDate,
      })
        .then(() => {
          MessageBox('提示', '提交成功');
        })
        .catch((error) => {
          Toast(`出现错误，具体原因：${error.msg}`);
        });
    },
  },
};

</script>

<style lang="less" scoped>
.info{
  padding: 0 10px;
  .title{
    font-size: 18px;
    margin: 10px 0px;
    color: #333;
  }
  .content{
    font-size: 14px;
    margin: 10px 0px;
    padding-bottom: 20px;
    color: #888;
    border-bottom: 1px solid #ccc;
  }
}
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

