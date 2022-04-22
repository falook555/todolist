import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <title>TODOLIST</title>
                <Head>
                    <div>

                        <link rel="shortcut icon" href="/static/favicon.ico" />
                        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200&display=swap" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
                        <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet" />
                        <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css" />

                        <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                        <link rel="stylesheet" href="static/plugins/fontawesome-free/css/all.min.css" />
                        <link rel="stylesheet" href="static/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
                        <link rel="stylesheet" href="static/plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
                        <link rel="stylesheet" href="static/dist/css/adminlte.min.css" />
                        <link rel="stylesheet" href="static/plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />

                        <link rel="stylesheet" href="static/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css" />
                        <link rel="stylesheet" href="static/plugins/datatables-responsive/css/responsive.bootstrap4.min.css" />
                        <link rel="stylesheet" href="static/plugins/datatables-buttons/css/buttons.bootstrap4.min.css" />



                    </div>


                </Head>
                <body style={{ fontFamily: 'Kanit' }} className="hold-transition sidebar-mini layout-fixed">
                    <div className="wrapper">

                        <Main />
                        <NextScript />

                    </div>



                    <script src="static/plugins/jquery/jquery.min.js"></script>
                    <script src="static/plugins/jquery-ui/jquery-ui.min.js"></script>
                    <script src="static/plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="static/plugins/moment/moment.min.js"></script>
                    <script src="static/plugins/daterangepicker/daterangepicker.js"></script>
                    <script src="static/plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
                    <script src="static/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
                    <script src="static/dist/js/adminlte.js"></script>

                    {/* DataTables  & Plugins */}
                    <script src="static/plugins/datatables/jquery.dataTables.min.js"></script>
                    <script src="static/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
                    <script src="static/plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
                    <script src="static/plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
                    <script src="static/plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
                    <script src="static/plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
                    <script src="static/plugins/jszip/jszip.min.js"></script>
                    <script src="static/plugins/pdfmake/pdfmake.min.js"></script>
                    <script src="static/plugins/pdfmake/vfs_fonts.js"></script>
                    <script src="static/plugins/datatables-buttons/js/buttons.html5.min.js"></script>
                    <script src="static/plugins/datatables-buttons/js/buttons.print.min.js"></script>
                    <script src="static/plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
                </body>
            </Html>
        )
    }
}

export default MyDocument