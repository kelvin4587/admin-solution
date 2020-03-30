(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ceed5"],{6214:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-tabs",{attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[i("el-tab-pane",{attrs:{label:"user",name:"user"}},[i("user")],1),e._v(" "),i("el-tab-pane",{attrs:{label:"role",name:"role"}},[i("role")],1),e._v(" "),i("el-tab-pane",{attrs:{label:"permission",name:"permission"}},[i("permission")],1)],1)],1)},s=[],l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.users,"max-height":"1250"}},[i("el-table-column",{attrs:{fixed:"",prop:"id",label:"id",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{prop:"userName",label:"用户名称",width:"620"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){return e.addPermission(t.$index,t.row)}}},[e._v("分配角色")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("el-dialog",{attrs:{title:"分配角色",visible:e.rolesDialogVisible},on:{"update:visible":function(t){e.rolesDialogVisible=t}}},[i("el-checkbox-group",{model:{value:e.checkedRoles,callback:function(t){e.checkedRoles=t},expression:"checkedRoles"}},e._l(e.roles,(function(t){return i("el-checkbox",{key:t.id,attrs:{label:t.roleName},on:{change:function(i){return e.handleCheckedRoleChange(i,t.id)}}},[e._v(e._s(t.roleName))])})),1)],1)],1)},a=[],o=i("fd85"),r={data:function(){return{rolesDialogVisible:!1,users:null,roles:null,checkedRoles:[],selectedUser:null}},computed:{},created:function(){this.initUsers(),this.initRoles()},methods:{initUsers:function(){var e=this;Object(o["e"])().then((function(t){e.users=t.data.users.dataList}))},initRoles:function(){var e=this;Object(o["c"])().then((function(t){e.roles=t.data.roles.dataList}))},handleEdit:function(e,t){this.selectedUser=t},addPermission:function(e,t){var i=this;this.selectedUser=t,this.rolesDialogVisible=!0;var n={userId:t.id};Object(o["d"])(n).then((function(e){i.checkedRoles=e.data.roles.dataList.map((function(e){return e.roleName}))}))},handleDelete:function(e,t){},handleCheckedRoleChange:function(e,t){var i={type:1==e?1:0,roleId:t,userId:this.selectedUser.id};Object(o["g"])(i).then((function(e){console.log("updateUserRole",e)}))}}},c=r,d=i("2877"),u=Object(d["a"])(c,l,a,!1,null,null,null),h=u.exports,m=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.roles,"max-height":"1250"}},[i("el-table-column",{attrs:{fixed:"",prop:"id",label:"id",width:"150"}}),e._v(" "),i("el-table-column",{attrs:{prop:"roleName",label:"角色名称",width:"620"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){return e.addPermission(t.$index,t.row)}}},[e._v("授权")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("el-dialog",{attrs:{title:"分配权限",visible:e.permissionDialogVisible},on:{"update:visible":function(t){e.permissionDialogVisible=t}}},[i("el-checkbox-group",{model:{value:e.checkedPermissions,callback:function(t){e.checkedPermissions=t},expression:"checkedPermissions"}},e._l(e.permissions,(function(t){return i("div",[i("el-checkbox",{key:t.id,attrs:{label:t.permissionName,size:"medium"},on:{change:function(i){return e.handleCheckedPermissionChange(i,t.id)}}},[e._v("\n            "+e._s(t.permissionName)+"\n        ")])],1)})),0)],1)],1)},p=[],b={data:function(){return{permissionDialogVisible:!1,roles:[],permissions:[],checkedPermissions:[],selectedRole:null}},computed:{},created:function(){this.initRoles(),this.initPermissions()},methods:{initRoles:function(){var e=this;Object(o["c"])().then((function(t){e.roles=t.data.roles.dataList}))},initPermissions:function(){var e=this;Object(o["a"])().then((function(t){e.permissions=t.data.permissions.dataList}))},handleEdit:function(e,t){},addPermission:function(e,t){var i=this;this.selectedRole=t,this.permissionDialogVisible=!0;var n={roleId:t.id};Object(o["b"])(n).then((function(e){i.checkedPermissions=e.data.permissions.dataList.map((function(e){return e.permissionName}))}))},handleDelete:function(e,t){},handleCheckedPermissionChange:function(e,t){console.log("handleCheckedPermissionChange",t,this.selectedRole);var i={type:1==e?1:0,permissionId:t,roleId:this.selectedRole.id};Object(o["f"])(i).then((function(e){console.log("updateRolePermission",e)}))}}},f=b,v=Object(d["a"])(f,m,p,!1,null,null,null),_=v.exports,k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-table",{staticStyle:{width:"100%"},attrs:{data:e.permissions,"max-height":"1250"}},[i("el-table-column",{attrs:{fixed:"",prop:"id",label:"id",width:"120"}}),e._v(" "),i("el-table-column",{attrs:{prop:"path",label:"路径",width:"400"}}),e._v(" "),i("el-table-column",{attrs:{prop:"permissionName",label:"权限名称",width:"400"}}),e._v(" "),i("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini"},on:{click:function(i){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1)},g=[],w={data:function(){return{permissions:[]}},computed:{},created:function(){this.initPermissions()},methods:{initPermissions:function(){var e=this;Object(o["a"])().then((function(t){e.permissions=t.data.permissions.dataList}))},handleEdit:function(e,t){},handleDelete:function(e,t){}}},x=w,y=Object(d["a"])(x,k,g,!1,null,null,null),P=y.exports,R={components:{user:h,role:_,permission:P},data:function(){return{activeName:"user"}},watch:{},methods:{}},C=R,D=Object(d["a"])(C,n,s,!1,null,null,null);t["default"]=D.exports}}]);