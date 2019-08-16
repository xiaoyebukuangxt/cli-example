<template>
  <div class="nav">
    <div class="fold cursor" @click="isCollapse = !isCollapse">
        <i class="el-icon-arrow-left"  v-if="!isCollapse"></i>
        <i class="el-icon-arrow-right" v-if="isCollapse"></i>
    </div>
    <div class="menu-box" style="">
        <el-menu style="" router class="el-menu-vertical-demo" :collapse="isCollapse">
          <el-submenu v-for="(menu,num) in menuList" :key="num"  :index="''+num" :class="{sub_active:isActiveSub(menu)}">
              <template slot="title" ><i class="fa nav-icon" :class="menu.icon"></i><span slot="title">{{menu.menuName}}</span></template>
              <el-menu-item :index="item.url" v-for="(item,i) in menu.children" :key="i" :class="{router_active:isActive(item)}">
                  <span slot="title">{{item.menuName}}</span>
              </el-menu-item>						
          </el-submenu>
        </el-menu>
    </div>
    
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false,
      menuList: []
    };
  },
  mounted() {
    this.setMenu();
  },
  computed: {},
  methods: {
    //控制当前子菜单样式
    isActive(item) {
      // 获取当前路由
      return item.url == this.$route.path.slice(1);
    },
    //控制当前父菜单样式
    isActiveSub(item) {
      let flag = false;
      item.children.forEach(element => {
        if(element.url == this.$route.path.slice(1)){
          flag = true;
        }
      });
     return flag;
    },
    setMenu(id) {
      let person = {
        menuName: "关注人员管理",
        icon: "fa-user-o",
        children: [
          { menuName: "我的人员", url: "MyPeople" },
          { menuName: "新增人员", url: "AddPeople" },
          { menuName: "本机构人员", url: "OrganPerson" }
        ]
      };
      let bk = {
        menuName: "布撤控管理",
        icon: "fa-tasks",
        children: [
          { menuName: "我的布控", url: "MyControl" },
          { menuName: "新建布控", url: "addControl" },
          { menuName: "本机构布控", url: "departControl" }
        ]
      };
      let warning = {
        menuName: "预警管理",
        icon: "fa-exclamation-triangle",
        children: [
          { menuName: "我的预警", url: "warningPerson" },
          { menuName: "本机构预警", url: "warningPersonOrgan" }
        ]
      };
      let leave = {
        menuName: "请销假管理",
        icon: "fa-pagelines",
        children: [
          { menuName: "我的请销假", url: "MyLeave" },
          { menuName: "本机构请销假", url: "OrganLeave" }
        ]
      };
      let checkControl = {
        menuName: "审批管理",
        icon: "fa-list",
        children: [
          { menuName: "布控审批", url: "checkControl" },
          { menuName: "撤控审批", url: "retractControl" },
          { menuName: "转控审批", url: "forwardControl" }
        ]
      };
      let statistics = {
        menuName: "统计管理",
        icon: "fa-bar-chart",
        children: [{ menuName: "我的统计", url: "statistics" }]
      };
      let special = {
        menuName: "专题库",
        icon: "fa-bar-chart",
        children: [
          { menuName: "本地人员专题库", url: "special" },
          { menuName: "本地关注车辆", url: "focusCar" },
          { menuName: "外籍人员专题库", url: "foreigners" },
          { menuName: "人车拟合专题库", url: "perCar" },
          { menuName: "流动人口专题库", url: "flowMan" },
          { menuName: "案件专题库", url: "caseSpecial" },
          { menuName: "设备专题库", url: "deviceSpecial" }
        ]
      };
      this.menuList = [
        person,
        bk,
        warning,
        leave,
        checkControl,
        statistics,
        special,
      ];
    },
  },
  components: {},
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.nav {
  font-size: 16px;
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  text-align: left;
  overflow: hidden;

  .fold {
    position: absolute;
    bottom: 0;
    z-index: 999;
    width: 100%;
    height: 25px;
    background: rgb(40, 52, 70);
    color: #fff;
    text-align: center;
    line-height: 25px;

    i {
      font-size: 18px;
    }
  }

  .menu-box {
    height: calc(100% - 25px);
    overflow-y: auto;
    overflow-x: hidden;
    background: #001529 !important;  
  }

  .menu-box::-webkit-scrollbar {
    width: 0px !important;
    height: 0px !important;
  }

  .nav-icon {
    margin-right: 10px;
    font-size: 16px;
  }
}

// 菜单展开的宽度
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 260px;
}
</style>
