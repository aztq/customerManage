import Vue from 'vue'
import Router from 'vue-router'

import Customer from '@/components/Customer'
import newCustomer from '@/components/newCustomer'
import waitPass from '@/components/waitPass'
import passGov from '@/components/passGov'
import passPer from '@/components/passPer'
import zfDetail from '@/components/goverment/zfDetail'
import first from '@/components/goverment/first'
import second from '@/components/goverment/second'
import third from '@/components/goverment/third'
import fourth from '@/components/goverment/fourth'
import fifth from '@/components/goverment/fifth'
import tree from '@/components/goverment/tree'
import zfChange from '@/components/goverment/zfChange'
import personal from '@/components/business/personal'
import pDesign from '@/components/business/pDesign'

import proud from '@/components/chance/proud'
import cdetail from '@/components/chance/cdetail'
import judge from '@/components/chance/judge'
import cnew from '@/components/chance/cnew'
import rewrite from '@/components/chance/rewrite'

import program from '@/components/cooperation/program'
import cooDetail from '@/components/cooperation/cooDetail'
import coonew from '@/components/cooperation/coonew'

import vlist from '@/components/visit/vlist'
import increase from '@/components/visit/increase'
import vdetail from '@/components/visit/vdetail'
import addDetail from '@/components/visit/addDetail'

import mainPage from '@/components/sale/mainPage'
import procedure from '@/components/sale/procedure'
import newExpand from '@/components/sale/newExpand'

import my from '@/components/my/my'
import setting from '@/components/my/setting'
import message from '@/components/my/message'
import DY from '@/components/my/DY'
import BS from '@/components/my/BS'
import SH from '@/components/my/SH'
import TZ from '@/components/my/TZ'
import RC from '@/components/my/RC'
import book from '@/components/my/book'
import first2 from '@/components/my/first'
import second2 from '@/components/my/second'
import third2 from '@/components/my/third'
import fourth2 from '@/components/my/fourth'
import info from '@/components/my/info'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/Customer'
    },
    {
      path: '/Customer',
      name: 'Customer',
      component: Customer
    },
    {
      path: '/newCustomer',
      name: 'newCustomer',
      component: newCustomer
    },
    {
      path: '/waitPass',
      name: 'waitPass',
      component: waitPass
    },
    {
      path: '/passGov',
      name: 'passGov',
      component: passGov
    },
    {
      path: '/passPer',
      name: 'passPer',
      component: passPer
    },
    {
      path: '/goverment/zfDetail',
      name: 'zfDetail',
      component: zfDetail,
      children:[
        {
        path:'/goverment/zfDetail/',
        component:first
      },
      {
        path:'/goverment/zfDetail/fff',
        component:()=>import('@/components/goverment/fuck')
      },
      {
        path:'/goverment/zfDetail/first',
        component:first
      },{
        path:'/goverment/zfDetail/second',
        component:second
      },{
        path:'/goverment/zfDetail/third',
        component:third
      },{
        path:'/goverment/zfDetail/fourth',
        component:fourth
      },{
        path:'/goverment/zfDetail/fifth',
        component:fifth
      }
     ]
    },
    {
      path:'/goverment/tree',
      component:tree
    },
    {
      path: '/goverment/zfChange',
      name: 'zfChange',
      component: zfChange
    },
    {
      path: '/business/personal',
      name: 'personal',
      component: personal
    },
    {
      path: '/business/pDesign',
      name: 'pDesign',
      component: pDesign
    },
    {
      path: '/chance/proud',
      name: 'proud',
      component: proud

    },
    {
      path: '/chance/cnew',
      name: 'cnew',
      component: cnew

    },
    {
      path: '/chance/cdetail',
      name: 'cdetail',
      component: cdetail

    },
    {
      path: '/chance/judge',
      name: 'judge',
      component: judge
    },
    {
      path: '/chance/rewrite',
      name: 'rewrite',
      component: rewrite
    },
    {
      path: '/cooperation/program',
      name: 'program',
      component: program
    },
    {
      path: '/cooperation/cooDetail',
      name: 'cooDetail',
      component: cooDetail
    },
    {
      path: '/cooperation/coonew',
      name: 'coonew',
      component: coonew
    },


    {
      path: '/visit/vlist',
      name: 'vlist',
      component: vlist
    },
    {
      path: '/visit/vdetail',
      name: 'vdetail',
      component: vdetail
    },
    {
      path: '/visit/addDetail',
      name: 'addDetail',
      component: addDetail
    },
    {
      path: '/visit/increase',
      name: 'increase',
      component: increase
    },



    {
      path: '/sale/mainPage',
      name: 'mainPage',
      component: mainPage
    },
    {
      path: '/sale/newExpand',
      name: 'newExpand',
      component: newExpand
    },
    {
      path: '/sale/procedure',
      name: 'procedure',
      component: procedure
    },


    {
      path: '/my/my',
      name: 'my',
      component: my
    },
    {
      path: '/my/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/my/info',
      name: 'info',
      component: info
    },
    {
      path: '/my/message',
      name: 'message',
      component: message
    },
    {
      path: '/my/message/DY',
      name: 'DY',
      component: DY
    },
    {
      path: '/my/message/SH',
      name: 'SH',
      component: SH
    },
    {
      path: '/my/message/RC',
      name: 'RC',
      component: RC
    },
    {
      path: '/my/message/BS',
      name: 'BS',
      component: BS
    },
    {
      path: '/my/message/TZ',
      name: 'TZ',
      component: TZ
    },
    {
      path:'/my/book',
      name:book,
      component:book,
      children:[
        {
          path:'',
          name:first2,
          component:first2
        },
        {
          path:'first2',
          name:first2,
          component:first2
        },
        {
          path:'second2',
          name:second2,
          component:second2
        },
        {
          path:'third2',
          name:third2,
          component:third2
        },
        {
          path:'fourth2',
          name:fourth2,
          component:fourth2
        },
      ]
    }
  ]
})
