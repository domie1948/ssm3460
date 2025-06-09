import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import zhongzifenlei from '@/views/modules/zhongzifenlei/list'
    import nongchanpingongqiuliang from '@/views/modules/nongchanpingongqiuliang/list'
    import zaishounongchanpin from '@/views/modules/zaishounongchanpin/list'
    import huafeifenlei from '@/views/modules/huafeifenlei/list'
    import zhongzhiyonghu from '@/views/modules/zhongzhiyonghu/list'
    import qiyeyonghu from '@/views/modules/qiyeyonghu/list'
    import nongyejishu from '@/views/modules/nongyejishu/list'
    import storeup from '@/views/modules/storeup/list'
    import nongyenongyao from '@/views/modules/nongyenongyao/list'
    import nongchanpinjiage from '@/views/modules/nongchanpinjiage/list'
    import nongyezhongzi from '@/views/modules/nongyezhongzi/list'
    import nongchanpinfenlei from '@/views/modules/nongchanpinfenlei/list'
    import nongyehuafei from '@/views/modules/nongyehuafei/list'
    import yonghu from '@/views/modules/yonghu/list'
    import nongyaofenlei from '@/views/modules/nongyaofenlei/list'
    import orders from '@/views/modules/orders/list'
    import discusszaishounongchanpin from '@/views/modules/discusszaishounongchanpin/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '农业政策',
        component: news
      }
      ,{
	path: '/zhongzifenlei',
        name: '种子分类',
        component: zhongzifenlei
      }
      ,{
	path: '/nongchanpingongqiuliang',
        name: '农产品供求量',
        component: nongchanpingongqiuliang
      }
      ,{
	path: '/zaishounongchanpin',
        name: '在售农产品',
        component: zaishounongchanpin
      }
      ,{
	path: '/huafeifenlei',
        name: '化肥分类',
        component: huafeifenlei
      }
      ,{
	path: '/zhongzhiyonghu',
        name: '种植用户',
        component: zhongzhiyonghu
      }
      ,{
	path: '/qiyeyonghu',
        name: '企业用户',
        component: qiyeyonghu
      }
      ,{
	path: '/nongyejishu',
        name: '农业技术',
        component: nongyejishu
      }
      ,{
	path: '/storeup',
        name: '我的收藏管理',
        component: storeup
      }
      ,{
	path: '/nongyenongyao',
        name: '农业农药',
        component: nongyenongyao
      }
      ,{
	path: '/nongchanpinjiage',
        name: '农产品价格',
        component: nongchanpinjiage
      }
      ,{
	path: '/nongyezhongzi',
        name: '农业种子',
        component: nongyezhongzi
      }
      ,{
	path: '/nongchanpinfenlei',
        name: '农产品分类',
        component: nongchanpinfenlei
      }
      ,{
	path: '/nongyehuafei',
        name: '农业化肥',
        component: nongyehuafei
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/nongyaofenlei',
        name: '农药分类',
        component: nongyaofenlei
      }
      ,{
        path: '/orders/:status',
        name: '订单管理',
        component: orders
      }
      ,{
	path: '/discusszaishounongchanpin',
        name: '在售农产品评论',
        component: discusszaishounongchanpin
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
