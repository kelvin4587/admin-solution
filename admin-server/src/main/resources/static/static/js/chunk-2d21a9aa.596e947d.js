(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a9aa"],{bbe9:function(e,t,n){"use strict";n.r(t);var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users,"max-height":"1250",border:""}},[n("el-table-column",{attrs:{fixed:"",prop:"id",label:"id",width:"150"}}),e._v(" "),n("el-table-column",{attrs:{prop:"userName",label:"用户名称",width:"620"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.addPermission(t.$index,t.row)}}},[e._v("分配角色")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:"分配角色",visible:e.rolesDialogVisible},on:{"update:visible":function(t){e.rolesDialogVisible=t}}},[n("el-checkbox-group",{model:{value:e.checkedRoles,callback:function(t){e.checkedRoles=t},expression:"checkedRoles"}},e._l(e.roles,(function(t){return n("el-checkbox",{key:t.id,attrs:{label:t.roleName},on:{change:function(n){return e.handleCheckedRoleChange(n,t.id)}}},[e._v(e._s(t.roleName))])})),1)],1)],1)},i=[],s=n("fd85"),o={data:function(){return{rolesDialogVisible:!1,checkedRoles:[],selectedUser:null}},computed:{users:function(){return this.$store.getters.users},roles:function(){return this.$store.getters.roles}},methods:{handleEdit:function(e,t){this.selectedUser=t},addPermission:function(e,t){var n=this;this.selectedUser=t,this.rolesDialogVisible=!0;var l={userId:t.id};Object(s["f"])(l).then((function(e){n.checkedRoles=e.data.roles.dataList.map((function(e){return e.roleName}))}))},handleDelete:function(e,t){},handleCheckedRoleChange:function(e,t){var n={type:1==e?1:0,roleId:t,userId:this.selectedUser.id};Object(s["k"])(n).then((function(e){console.log("updateUserRole",e)}))}}},r=o,a=n("2877"),c=Object(a["a"])(r,l,i,!1,null,null,null);t["default"]=c.exports}}]);