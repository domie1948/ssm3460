
var projectName = '农业信息化服务平台';
/**
 * 轮播图配置
 */
var swiper = {
	// 设定轮播容器宽度，支持像素和百分比
	width: '100%',
	height: '400px',
	// hover（悬停显示）
	// always（始终显示）
	// none（始终不显示）
	arrow: 'none',
	// default（左右切换）
	// updown（上下切换）
	// fade（渐隐渐显切换）
	anim: 'default',
	// 自动切换的时间间隔
	// 默认3000
	interval: 2000,
	// 指示器位置
	// inside（容器内部）
	// outside（容器外部）
	// none（不显示）
	indicator: 'outside'
}

/**
 * 个人中心菜单
 */
var centerMenu = [{
	name: '个人中心',
	url: '../' + localStorage.getItem('userTable') + '/center.html'
}, 
{
	name: '我的订单',
	url: '../shop-order/list.html'
},

{
	name: '我的地址',
	url: '../shop-address/list.html'
},

{
	name: '我的收藏',
	url: '../storeup/list.html'
}
]


var indexNav = [

{
	name: '农业技术',
	url: './pages/nongyejishu/list.html'
}, 
{
	name: '农产品价格',
	url: './pages/nongchanpinjiage/list.html'
}, 
{
	name: '农产品供求量',
	url: './pages/nongchanpingongqiuliang/list.html'
}, 
{
	name: '农业种子',
	url: './pages/nongyezhongzi/list.html'
}, 
{
	name: '农业化肥',
	url: './pages/nongyehuafei/list.html'
}, 
{
	name: '农业农药',
	url: './pages/nongyenongyao/list.html'
}, 
{
	name: '在售农产品',
	url: './pages/zaishounongchanpin/list.html'
}, 

{
	name: '农业政策',
	url: './pages/news/list.html'
},
]

var adminurl =  "http://localhost:8080/ssm5ws18/admin/dist/index.html";

var cartFlag = false

var chatFlag = false


cartFlag = true


var menu = [{"backMenu":[{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"用户","menuJump":"列表","tableName":"yonghu"}],"menu":"用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"种植用户","menuJump":"列表","tableName":"zhongzhiyonghu"}],"menu":"种植用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"企业用户","menuJump":"列表","tableName":"qiyeyonghu"}],"menu":"企业用户管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"农业技术","menuJump":"列表","tableName":"nongyejishu"}],"menu":"农业技术管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"农产品分类","menuJump":"列表","tableName":"nongchanpinfenlei"}],"menu":"农产品分类管理"},{"child":[{"buttons":["新增","查看","修改","删除","报表"],"menu":"农产品价格","menuJump":"列表","tableName":"nongchanpinjiage"}],"menu":"农产品价格管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"农产品供求量","menuJump":"列表","tableName":"nongchanpingongqiuliang"}],"menu":"农产品供求量管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"种子分类","menuJump":"列表","tableName":"zhongzifenlei"}],"menu":"种子分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"农业种子","menuJump":"列表","tableName":"nongyezhongzi"}],"menu":"农业种子管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"化肥分类","menuJump":"列表","tableName":"huafeifenlei"}],"menu":"化肥分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"农业化肥","menuJump":"列表","tableName":"nongyehuafei"}],"menu":"农业化肥管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"农药分类","menuJump":"列表","tableName":"nongyaofenlei"}],"menu":"农药分类管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"农业农药","menuJump":"列表","tableName":"nongyenongyao"}],"menu":"农业农药管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"在售农产品","menuJump":"列表","tableName":"zaishounongchanpin"}],"menu":"在售农产品管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"农业政策","tableName":"news"},{"buttons":["查看","修改"],"menu":"轮播图管理","tableName":"config"}],"menu":"系统管理"},{"child":[{"buttons":["查看"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看"],"menu":"未支付订单","tableName":"orders/未支付"},{"buttons":["查看"],"menu":"已取消订单","tableName":"orders/已取消"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"农业技术列表","menuJump":"列表","tableName":"nongyejishu"}],"menu":"农业技术模块"},{"child":[{"buttons":["查看"],"menu":"农产品价格列表","menuJump":"列表","tableName":"nongchanpinjiage"}],"menu":"农产品价格模块"},{"child":[{"buttons":["查看"],"menu":"农产品供求量列表","menuJump":"列表","tableName":"nongchanpingongqiuliang"}],"menu":"农产品供求量模块"},{"child":[{"buttons":["查看"],"menu":"农业种子列表","menuJump":"列表","tableName":"nongyezhongzi"}],"menu":"农业种子模块"},{"child":[{"buttons":["查看"],"menu":"农业化肥列表","menuJump":"列表","tableName":"nongyehuafei"}],"menu":"农业化肥模块"},{"child":[{"buttons":["查看"],"menu":"农业农药列表","menuJump":"列表","tableName":"nongyenongyao"}],"menu":"农业农药模块"},{"child":[{"buttons":["查看","查看评论"],"menu":"在售农产品列表","menuJump":"列表","tableName":"zaishounongchanpin"}],"menu":"在售农产品模块"}],"hasBackLogin":"是","hasBackRegister":"否","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"管理员","tableName":"users"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"农业技术","menuJump":"列表","tableName":"nongyejishu"}],"menu":"农业技术管理"},{"child":[{"buttons":["查看","报表"],"menu":"农产品价格","menuJump":"列表","tableName":"nongchanpinjiage"}],"menu":"农产品价格管理"},{"child":[{"buttons":["查看"],"menu":"农产品供求量","menuJump":"列表","tableName":"nongchanpingongqiuliang"}],"menu":"农产品供求量管理"},{"child":[{"buttons":["查看"],"menu":"农业种子","menuJump":"列表","tableName":"nongyezhongzi"}],"menu":"农业种子管理"},{"child":[{"buttons":["查看"],"menu":"农业化肥","menuJump":"列表","tableName":"nongyehuafei"}],"menu":"农业化肥管理"},{"child":[{"buttons":["查看"],"menu":"农业农药","menuJump":"列表","tableName":"nongyenongyao"}],"menu":"农业农药管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看"],"menu":"未支付订单","tableName":"orders/未支付"},{"buttons":["查看"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看","确认收货"],"menu":"已发货订单","tableName":"orders/已发货"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"农业技术列表","menuJump":"列表","tableName":"nongyejishu"}],"menu":"农业技术模块"},{"child":[{"buttons":["查看"],"menu":"农产品价格列表","menuJump":"列表","tableName":"nongchanpinjiage"}],"menu":"农产品价格模块"},{"child":[{"buttons":["查看"],"menu":"农产品供求量列表","menuJump":"列表","tableName":"nongchanpingongqiuliang"}],"menu":"农产品供求量模块"},{"child":[{"buttons":["查看"],"menu":"农业种子列表","menuJump":"列表","tableName":"nongyezhongzi"}],"menu":"农业种子模块"},{"child":[{"buttons":["查看"],"menu":"农业化肥列表","menuJump":"列表","tableName":"nongyehuafei"}],"menu":"农业化肥模块"},{"child":[{"buttons":["查看"],"menu":"农业农药列表","menuJump":"列表","tableName":"nongyenongyao"}],"menu":"农业农药模块"},{"child":[{"buttons":["查看","查看评论"],"menu":"在售农产品列表","menuJump":"列表","tableName":"zaishounongchanpin"}],"menu":"在售农产品模块"}],"hasBackLogin":"否","hasBackRegister":"否","hasFrontLogin":"是","hasFrontRegister":"是","roleName":"用户","tableName":"yonghu"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"农业技术","menuJump":"列表","tableName":"nongyejishu"}],"menu":"农业技术管理"},{"child":[{"buttons":["查看","报表"],"menu":"农产品价格","menuJump":"列表","tableName":"nongchanpinjiage"}],"menu":"农产品价格管理"},{"child":[{"buttons":["查看"],"menu":"农产品供求量","menuJump":"列表","tableName":"nongchanpingongqiuliang"}],"menu":"农产品供求量管理"},{"child":[{"buttons":["查看"],"menu":"农业种子","menuJump":"列表","tableName":"nongyezhongzi"}],"menu":"农业种子管理"},{"child":[{"buttons":["查看"],"menu":"农业化肥","menuJump":"列表","tableName":"nongyehuafei"}],"menu":"农业化肥管理"},{"child":[{"buttons":["查看"],"menu":"农业农药","menuJump":"列表","tableName":"nongyenongyao"}],"menu":"农业农药管理"},{"child":[{"buttons":["新增","查看","修改","删除","查看评论"],"menu":"在售农产品","menuJump":"列表","tableName":"zaishounongchanpin"}],"menu":"在售农产品管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看","确认收货"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看"],"menu":"未支付订单","tableName":"orders/未支付"},{"buttons":["查看"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看","发货"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看"],"menu":"已退款订单","tableName":"orders/已退款"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"农业技术列表","menuJump":"列表","tableName":"nongyejishu"}],"menu":"农业技术模块"},{"child":[{"buttons":["查看"],"menu":"农产品价格列表","menuJump":"列表","tableName":"nongchanpinjiage"}],"menu":"农产品价格模块"},{"child":[{"buttons":["查看"],"menu":"农产品供求量列表","menuJump":"列表","tableName":"nongchanpingongqiuliang"}],"menu":"农产品供求量模块"},{"child":[{"buttons":["查看"],"menu":"农业种子列表","menuJump":"列表","tableName":"nongyezhongzi"}],"menu":"农业种子模块"},{"child":[{"buttons":["查看"],"menu":"农业化肥列表","menuJump":"列表","tableName":"nongyehuafei"}],"menu":"农业化肥模块"},{"child":[{"buttons":["查看"],"menu":"农业农药列表","menuJump":"列表","tableName":"nongyenongyao"}],"menu":"农业农药模块"},{"child":[{"buttons":["查看","查看评论"],"menu":"在售农产品列表","menuJump":"列表","tableName":"zaishounongchanpin"}],"menu":"在售农产品模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"种植用户","tableName":"zhongzhiyonghu"},{"backMenu":[{"child":[{"buttons":["查看"],"menu":"农业技术","menuJump":"列表","tableName":"nongyejishu"}],"menu":"农业技术管理"},{"child":[{"buttons":["查看","报表"],"menu":"农产品价格","menuJump":"列表","tableName":"nongchanpinjiage"}],"menu":"农产品价格管理"},{"child":[{"buttons":["查看"],"menu":"农产品供求量","menuJump":"列表","tableName":"nongchanpingongqiuliang"}],"menu":"农产品供求量管理"},{"child":[{"buttons":["新增","查看","修改","删除"],"menu":"我的收藏管理","tableName":"storeup"}],"menu":"我的收藏管理"},{"child":[{"buttons":["查看"],"menu":"已取消订单","tableName":"orders/已取消"},{"buttons":["查看"],"menu":"已支付订单","tableName":"orders/已支付"},{"buttons":["查看"],"menu":"已退款订单","tableName":"orders/已退款"},{"buttons":["查看"],"menu":"已完成订单","tableName":"orders/已完成"},{"buttons":["查看","确认收货"],"menu":"已发货订单","tableName":"orders/已发货"},{"buttons":["查看"],"menu":"未支付订单","tableName":"orders/未支付"}],"menu":"订单管理"}],"frontMenu":[{"child":[{"buttons":["查看"],"menu":"农业技术列表","menuJump":"列表","tableName":"nongyejishu"}],"menu":"农业技术模块"},{"child":[{"buttons":["查看"],"menu":"农产品价格列表","menuJump":"列表","tableName":"nongchanpinjiage"}],"menu":"农产品价格模块"},{"child":[{"buttons":["查看"],"menu":"农产品供求量列表","menuJump":"列表","tableName":"nongchanpingongqiuliang"}],"menu":"农产品供求量模块"},{"child":[{"buttons":["查看"],"menu":"农业种子列表","menuJump":"列表","tableName":"nongyezhongzi"}],"menu":"农业种子模块"},{"child":[{"buttons":["查看"],"menu":"农业化肥列表","menuJump":"列表","tableName":"nongyehuafei"}],"menu":"农业化肥模块"},{"child":[{"buttons":["查看"],"menu":"农业农药列表","menuJump":"列表","tableName":"nongyenongyao"}],"menu":"农业农药模块"},{"child":[{"buttons":["查看","查看评论"],"menu":"在售农产品列表","menuJump":"列表","tableName":"zaishounongchanpin"}],"menu":"在售农产品模块"}],"hasBackLogin":"是","hasBackRegister":"是","hasFrontLogin":"否","hasFrontRegister":"否","roleName":"企业用户","tableName":"qiyeyonghu"}]


var isAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].backMenu.length;j++){
                for(let k=0;k<menus[i].backMenu[j].child.length;k++){
                    if(tableName==menus[i].backMenu[j].child[k].tableName){
                        let buttons = menus[i].backMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}

var isFrontAuth = function (tableName,key) {
    let role = localStorage.getItem("userTable");
    let menus = menu;
    for(let i=0;i<menus.length;i++){
        if(menus[i].tableName==role){
            for(let j=0;j<menus[i].frontMenu.length;j++){
                for(let k=0;k<menus[i].frontMenu[j].child.length;k++){
                    if(tableName==menus[i].frontMenu[j].child[k].tableName){
                        let buttons = menus[i].frontMenu[j].child[k].buttons.join(',');
                        return buttons.indexOf(key) !== -1 || false
                    }
                }
            }
        }
    }
    return false;
}
