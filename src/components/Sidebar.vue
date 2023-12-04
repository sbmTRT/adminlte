<template>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4" id="sidebar">
      <!-- Brand Logo -->
      <a href="#" class="brand-link" style="pointer-events: none;">
        <img src="../assets/logomark.png" alt="Nexco Logo" class="brand-image" style="opacity: 1" />
        <span class="brand-text font-weight-light small80"> システム </span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div>
            <i class="fas fa-user-tie fa-fw fa-2x fa-user-tie"></i>
          </div>
          <div class="info">
            <span class="d-block" style="color: white">SBMテスト者</span>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-header">工事記録入力編集</li>
            <li class="nav-item">
              <router-link class="nav-link" to="/" id="sm_select">
                <i class="fas fa-search nav-icon text-info"></i>
                <p class="font-small">工事選択</p>
              </router-link>
            </li>
            <li class="nav-item" id="sm_kosyumenu">
              <a href="#" class="nav-link" id="nav-menu">
                <i class="nav-icon fas fa-wrench text-warning"></i>
                <p class="font-small">工種選択
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link class="nav-link" to="/Home" id="sm_home">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">ホーム</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/About" id="sm_about">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">情報共有</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Bridge" id="sm_bridge">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">橋梁</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Culvert" id="sm_culvert">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">カルバート</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Pavement" id="sm_pavement">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">舗装</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Guidesign" id="sm_guidesign">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">標識</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Shield" id="sm_shield">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">トンネル</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/RestFacility" id="sm_restfacility">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">連絡休憩等施設</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Geometric" id="sm_geometric">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">幾何構造</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/TrafficSafty" id="sm_trafficsafty">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">交通安全施設</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/TrafficManagement" id="sm_trafficmanagement">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">交通管理施設</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Overpass" id="sm_overpass">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">跨道橋</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Environment" id="sm_environment">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">環境対策工</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/CivilBuild" id="sm_civilbuild">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">土木その他構築物</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Landscaping" id="sm_lamdscapeing">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">造園</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/Excavation" id="sm_excavation">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">掘割(半地下)構造</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/Templates" id="sm_templates">
                <i class="fas fa-download nav-icon text-pink"></i>
                <p class="font-small">テンプレート</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/DataImport" id="sm_dataimport">
                <i class="fas fa-upload nav-icon text-success"></i>
                <p class="font-small">データインポート</p>
              </router-link>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
</template>

<script>
export default {
  // Component logic goes here
}
</script>

<style scoped>
/* Component-specific styles go here */
</style>
