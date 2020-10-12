# upload-server
上传工具后台源码
## Complie
```bush
maven run complie
```
## Run
### Development

复制前端打包文件dist目录和index_prod.html到resources/static目录下，并将index_prod.html重命名为indexx.html

```bush
maven run install
```
### Production(Build)
```bush
java -jar upload-server-*.jar
```

