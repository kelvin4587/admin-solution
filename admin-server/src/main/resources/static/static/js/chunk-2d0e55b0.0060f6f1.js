(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0e55b0"],{"93aa":function(e,i,n){"use strict";n.r(i);var t=function(){var e=this,i=e.$createElement,n=e._self._c||i;return n("div",{staticClass:"app-container"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:e.roles,"max-height":"1250",border:""}},[n("el-table-column",{attrs:{fixed:"",prop:"id",label:"id",width:"150"}}),e._v(" "),n("el-table-column",{attrs:{prop:"roleName",label:"角色名称",width:"620"}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(i){return[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(n){return e.handleEdit(i.$index,i.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(n){return e.addPermission(i.$index,i.row)}}},[e._v("授权")]),e._v(" "),n("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(n){return e.handleDelete(i.$index,i.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-dialog",{attrs:{title:"分配权限",visible:e.permissionDialogVisible},on:{"update:visible":function(i){e.permissionDialogVisible=i}}},[n("el-checkbox-group",{model:{value:e.checkedPermissions,callback:function(i){e.checkedPermissions=i},expression:"checkedPermissions"}},e._l(e.permissions,(function(i){return n("div",[n("el-checkbox",{key:i.id,attrs:{label:i.permissionName,size:"medium"},on:{change:function(n){return e.handleCheckedPermissionChange(n,i.id)}}},[e._v("\n            "+e._s(i.permissionName)+"\n        ")])],1)})),0)],1)],1)},s=[],o=n("fd85"),r={data:function(){return{permissionDialogVisible:!1,checkedPermissions:[],selectedRole:null}},computed:{roles:function(){return this.$store.getters.roles},permissions:function(){return this.$store.getters.backendPermisions}},methods:{handleEdit:function(e,i){},addPermission:function(e,i){var n=this;this.selectedRole=i,this.permissionDialogVisible=!0;var t={roleId:i.id};Object(o["b"])(t).then((function(e){n.checkedPermissions=e.data.permissions.dataList.map((function(e){return e.permissionName}))}))},handleDelete:function(e,i){},handleCheckedPermissionChange:function(e,i){var n={type:1==e?1:0,permissionId:i,roleId:this.selectedRole.id};Object(o["i"])(n).then((function(e){}))}}},l=r,a=n("2877"),c=Object(a["a"])(l,t,s,!1,null,null,null);i["default"]=c.exports}}]);