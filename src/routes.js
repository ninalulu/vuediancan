import Home from './components/home'
import Menu from './components/menu'
import Admin from './components/admin'
import About from './components/about/about'
import Login from './components/login'
import Reigter from './components/reigter'

// 二级路由
import Contact from './components/about/contact'
import Delivery from './components/about/delivery'
import History from './components/about/history'
import Ordering from './components/about/ordering'

// 三级路由
import Phone from './components/about/contact/phone'
import PersonName from './components/about/contact/personname'

export const routes = [
	{path:'/',name:'homelink',components:{
		default:Home,
		'ordering':Ordering,
		'delivery':Delivery,
		'history':History
	}},
	{path:'/menu',component:Menu,name:'menulink'},
	{path:'/admin',component:Admin,name:'adminlink'},
	{path:'/about',component:About,name:'aboutlink',redirect:'/history',children:[//设置二级路由,redirect:'/history'设置默认路径
		{path:'/about/contact',component:Contact,name:'contactlink',redirect:'/phone',children:[//设置三级路由,redirect:'/phone'设置默认路径
			{path:'/phone',name:'phonenumber',component:Phone},
			{path:'/personname',name:'personname',component:PersonName}
		]},
		{path:'/history',component:History,name:'historylink'},
		{path:'/delivery',component:Delivery,name:'deliverylink'},
		{path:'/ordering',component:Ordering,name:'orderinglink'}
	]},
	{path:'/login',component:Login,name:'loginlink'},
	{path:'/reigter',component:Reigter,name:'reigterlink'},
	{path:'*',redirect:'/'}//如果路径错误，跳转到首页
	]