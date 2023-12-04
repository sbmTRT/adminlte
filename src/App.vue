<template>
    <div class="wrapper">
    <!-- Navbar -->
    <nav class="main-header navbar navbar-expand navbar-white navbar-light" id="header">
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" data-widget="pushmenu" href="#" role="button">
            <i class="fas fa-bars"></i>
          </a>
        </li>
      </ul>

      <!-- Right navbar links -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" v-on:click.stop.prevent="logout" href="#" role="button" id="alert" data-toggle="tooltip" data-html="true" data-container="body" title="ログアウト">
            <i class="fas fa-power-off"></i>
          </a>
        </li>
      </ul>
    </nav>
    <!-- /.navbar -->

    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4" id="sidebar">
      <!-- Brand Logo -->
      <a href="#" class="brand-link" style="pointer-events: none;">
        <img src="./assets/logomark.png" alt="Nexco Logo" class="brand-image" style="opacity: 1" />
        <span class="brand-text font-weight-light small80"> 工事記録収集システム </span>
      </a>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div>
            <i class="fas fa-user-tie fa-fw fa-2x fa-user-tie"></i>
          </div>
          <div class="info">
            <span class="d-block" style="color: white">{{ user_nm }}</span>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <li class="nav-header">工事記録入力編集</li>
            <li class="nav-item">
              <router-link class="nav-link" to="/rims/new/" id="sm_constselect">
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
                  <router-link class="nav-link" to="/rims/new/Bank" id="sm_bank">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">盛土</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Cutslope" id="sm_cutslope">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">切土のり面</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Bridge" id="sm_bridge">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">橋梁</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Culvert" id="sm_culvert">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">カルバート</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Pavement" id="sm_pavement">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">舗装</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Guidesign" id="sm_guidesign">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">標識</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Shield" id="sm_shield">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">トンネル</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/RestFacility" id="sm_restfacility">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">連絡休憩等施設</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Geometric" id="sm_geometric">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">幾何構造</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/TrafficSafty" id="sm_trafficsafty">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">交通安全施設</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/TrafficManagement" id="sm_trafficmanagement">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">交通管理施設</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Overpass" id="sm_overpass">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">跨道橋</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Environment" id="sm_environment">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">環境対策工</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/CivilBuild" id="sm_civilbuild">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">土木その他構築物</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Landscaping" id="sm_lamdscapeing">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">造園</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link class="nav-link" to="/rims/new/Excavation" id="sm_excavation">
                    <i class="far fa-circle text-warning mleft"></i>
                    <p class="font-small">掘割(半地下)構造</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/rims/new/Templates" id="sm_templates">
                <i class="fas fa-download nav-icon text-pink"></i>
                <p class="font-small">テンプレート</p>
              </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/rims/new/DataImport" id="sm_dataimport">
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

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
      <!-- Main content -->
      <div class="content">
        <div class="container-fluid">
          <!-- Your page content goes here -->
          <router-view></router-view>
        </div>
        <!-- /.container-fluid -->
      </div>
      <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->

    <!-- Control Sidebar (optional) -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Add your custom components or settings here -->
    </aside>
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <footer class="main-footer" id="footer">
      <strong>Copyright &copy; 2022 </strong> Nippon Expressway Research Institute Company Limited. All rights reserved.
    </footer>

  </div>
  <!-- ./wrapper -->
</template>

<script>
import 'admin-lte/dist/css/adminlte.min.css';
import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
import 'admin-lte/dist/js/adminlte.min.js';

export default {
  name: 'AdminLTE',
};
</script>

<style>
/* Add your custom styles here */
</style>
