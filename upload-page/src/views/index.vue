<template>
    <div style="background:#eeeeee;">
        <Spin fix v-show="loading">
            <Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
            <div>上传中</div>
        </Spin>
        <!-- 头部空位 -->
        <Row type="flex" justify="center">
            <Col span="8" style="height:50px;"></Col>
        </Row>

        <!-- 主体部分 -->
        <Row type="flex" justify="center">
            <Col span="20" style="height:600px;">
                <Layout>
                    <Content style="display:flex;justify-content:center;background:#eeeeee">
                        <Card class="Card">
                            <br>
                            <h1 style="text-align: center;font-size:32px;">难看的上传页</h1>
                            <br>
                            <div style="background-color:#dddddd;height:2px;"></div>
                            <br>
                            <Form class="Form" ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="80">
                                <FormItem label="上传路径" prop="destDir" >
                                    <Input v-model="formValidate.destDir" placeholder="请输入上传路径"></Input>
                                </FormItem>
                                <Row>
                                    <Col span="6.5">
                                        <label class="ivu-form-item-label" style="width: 80px;">上传文件</label>
                                    </Col>
                                    <Col span="17.5">
                                        <Upload multiple :before-upload="handleUpload" action="">
                                            <Button icon="ios-cloud-upload-outline">选择</Button>
                                        </Upload>
                                    </Col>
                                </Row>
                                <Card dis-hover>
                                    <div v-for="file in formValidate.files">{{ file.name }}</div>
                                </Card>
                                 <FormItem>
                                    <Button type="primary" @click="handleSubmit('formValidate')">上传</Button>
                                    <Button @click="handleReset()" style="margin-left: 8px">重置</Button>
                                </FormItem>
                            </Form>
                        </Card>
                    </Content>
                </Layout>
            </Col>
        </Row>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                formValidate: {
                    destDir: 'F:\\temp\\upload',
                    files: []
                },
                ruleValidate: {
                    destDir: [
                        { required: false, pattern: '^[c-zC-Z]:(\\\\[^\\\\/:*?"<>|]+)*\\\\?$',message: '上传路径格式错误', trigger: 'blur' },
                    ]
                },
                loading : false
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        console.dir(this.formValidate.files);
                        if(this.formValidate.files.length == 0) {
                            this.$Message.warning({
                                content: '请选择文件',
                                duration: 0,
                                closable: true
                            });
                            return;
                        }
                        this.loading = true;
                        let params = new FormData();
                        params.append('destDir', this.formValidate.destDir);
                        this.formValidate.files.forEach(file => params.append('files', file));
                        let config = {
                            headers:{'Content-Type':'multipart/form-data'}
                        };
                        this.$http.post('upload', params, config)
                            .then(response => {
                                console.dir(response);
                                this.loading = false;
                                this.$Message.success({
                                    content: '上传成功',
                                    duration: 0,
                                    closable: true
                                });
                            }).catch(error => {
                                console.dir(error);
                                this.loading = false;
                                this.$Message.error({
                                    content: '上传失败，起来查bug',
                                    duration: 0,
                                    closable: true
                                });
                             });
                    }
                })
            },
            handleUpload (file) {
                this.formValidate.files.push(file);
                return false;
            },
            handleReset () {
                this.$refs['formValidate'].resetFields();
                this.formValidate.files = [];
            }
        }
    }
</script>

<style lang="less" scoped>
    .Card{ // 原生css
        border-radius:30px;
        width: 100%;
        // justify-content: center; // 这样会使得Card里面的元素居中
        box-shadow: 5px 5px 5px 5px #cccccc;
    }
    .Form{
        padding: 5%;
    }
    .demo-spin-icon-load{
        animation: ani-demo-spin 1s linear infinite;
    }
    @keyframes ani-demo-spin {
        from { transform: rotate(0deg);}
        50%  { transform: rotate(180deg);}
        to   { transform: rotate(360deg);}
    }
    .demo-spin-col{
        height: 100px;
        position: relative;
        border: 1px solid #eee;
    }
</style>
