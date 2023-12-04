<template>
    <Header />
    <Sidebar target="sm_select" menu="close"/>
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1><i class="fas fa-search text-info"></i> 工事選択</h1>
                    </div>
                </div>
            </div>
            <!-- /.container-fluid -->
        </section>

        <!-- Main content -->
        <section class="content">
            <div v-if="show_header == 'show'">
                <SelectiveConstruction :key="resetKey"/>
            </div>
            <!-- content upper box -->
            <div class="container-fluid">
                <div class="card card-lightblue">
                    <div class="card-header">
                        <h3 class="card-title">工事検索</h3>
                    </div>

                    <!-- card-body -->
                    <div class="card-body">
                        <div class="form-group row">
                            <label for="input1" class="col-sm-2 col-form-label"> 工事契約番号 </label>
                            <div class="col-sm-7">
                                <div class="input-group input-group-mb-3">
                                    <input type="text" class="form-control form-control-sm" id="keiyaku_no" name="keiyaku_no" placeholder="" />
                                    <span class="input-group-append">
                                        <button type="reset" class="btn btn-info btn-flat btn-sm text-sm">クリア</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="input2" class="col-sm-2 col-form-label"> 工事件名 </label>
                            <div class="col-sm-7">
                                <div class="input-group input-group-mb-3">
                                    <input type="text" class="form-control form-control-sm" id="kenmei" name="kenmei" placeholder="" />
                                    <span class="input-group-append">
                                        <button type="reset" class="btn btn-info btn-flat btn-sm text-sm" >クリア</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- /.card-body -->
                    <div class="card-footer text-center">
                        <button type="button" class="btn btn-primary btn-sm w-25" id="const_search">検索</button>
                    </div>
                    <!-- /.card-footer-->
                </div>
                <!-- /.card -->
            </div>
            <!-- /.container-fluid -->

            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div class="card card-lightblue">
                            <div class="card-header">
                                <h3 class="card-title">工事一覧</h3>
                            </div>
                            <!-- /.card-header -->
                            <div class="card-body">
                                <DataTable :options="dt_options" :columns="DtOptions.columns" :data="list_data" ref="table" class="table table-bordered table-hover table-striped table-sm" width="100%">
                                    <thead class="thead-dark">
                                        <tr>
                                            <th>ID</th>
                                            <th>契約番号</th>
                                            <th>工事件名</th>
                                            <th>受注者</th>
                                        </tr>
                                    </thead>
                                </DataTable>
                                <!--/table-->
                            </div>
                            <!-- /.card-body -->
                            <div v-if="select_button">
                                <div class="card-footer text-center">
                                    <button type="button" class="btn btn-primary btn-sm w-25 k_select">選択</button>
                                </div>
                            </div>
                            <!-- /.card-footer-->
                        </div>
                        <!-- /.card -->
                    </div>
                    <!-- /.col -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
</template>

<style>
.table-hover tbody tr:hover td {
    background-color: powderblue;
}
.card-title {
    float: left;
    font-size: 1.1rem;
    font-weight: 700;
    margin: 0;
}
</style>
