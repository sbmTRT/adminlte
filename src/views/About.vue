<template>

    <Header />
    <Sidebar target="sm_about" menu="open" />
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-md-12 col-sm-12 col-12">
                    <h2><i class="fas fa-edit"></i> お知らせ</h2>
                </div>
            </div>
        </div>
        <!-- /.container-fluid -->
        <!-- Main content -->
        <div class="content">
            <div class="container-fluid k_header">
                <div class="col-md-12 col-sm-12 col-12">
                    <div class="info-box shadow mt-4">
                        <span class="info-box-icon bg-warning">
                            <i class="fas fa-wrench"></i>
                        </span>
                        <div class="info-box-content">
                            <span class="info-box-text text-sm">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div class="col-sm-auto"><b>【契約番号】</b> 03408349398</div>
                                        <div class="col-sm-auto"><b>【件名】</b> About Tester</div>
                                        <div class="col-sm-auto"><b>【受注者】</b> KK2322422552</div>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                    <div class="info-box shadow mt-4">
                        <span class="info-box-icon bg-warning">
                            <i class="fas fa-wrench"></i>
                        </span>
                        <div class="info-box-content">
                            <span class="info-box-text text-sm">
                                <div class="container-fluid">
                                    <div class="row">
                                        <div v-if="submittedData">
                                            <div class="col-sm-auto"><b>【User ID】</b> {{ submittedData.userId }}</div>
                                            <div class="col-sm-auto"><b>【Password】</b> {{ submittedData.password }}</div>
                                            <div class="col-sm-auto"><b>【LIFF ID】】</b> {{ liffid }}</div>
                                            <div class="col-sm-auto"><b>【message】</b> {{ message }}</div>
                                            <div class="col-sm-auto"><b>【error】</b><code>{{ error }}</code></div>
                                        </div>
                                    </div>
                                </div>
                            </span>
                        </div>
                        <!-- /.info-box-content -->
                    </div>
                </div>
                <!-- /.container-fluid -->
            </div>
            <!-- /.container-fluid -->
        </div>
        <!-- /.content -->
        <!-- /.content -->
    </div>
    <!-- /.content-wrapper -->
</template>
<script>
import liff from "@line/liff";

export default {
    computed: {
        submittedData() {
            return this.$store.state.formData;
        },
    },
    data() {
        return {
            liffid: import.meta.env.VITE_LIFF_ID,
            message: "",
            error: "",
        };
    },
    mounted() {
        await this.initializeLIFF();
    },
    methods: {
        async initializeLIFF() {
            try {
                await liff.init({
                    liffId: import.meta.env.VITE_LIFF_ID
                });
                this.message = "LIFF init succeeded.";
            } catch (e) {
                this.message = "LIFF init failed.";
                this.error = `${e}`;
            }
        },
    },
};
</script>

<style scoped>
/* View-specific styles go here */
</style>
