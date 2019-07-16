const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin")
module.exports={
    entry:path.join(__dirname,"./src/index.js"),
    output:{
        path:path.join(__dirname,"./dist"),
        filename:"main.js"
    },
    devServer:{
        open:true,
        port:3000,
        contentBase:"src",
        hot:true
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            template:path.join(__dirname,"./src/index.html"),
            filename:"index.html"
        })
    ],
    module:{
        rules:[
            {test:/\.css$/,use:["style-loader","css-loader"]},
            {test:/\.less$/,use:["style-loader","css-loader","less-loader"]},
            {test:/\.scss$/,use:["style-loader","css-loader","sass-loader"]},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:"url-loader?limit=7631&name=[hash:8].[name].[ext]"},
            //大于或等于limit给定的值，则不会以base64编码的格式显示
            //添加name=[name].[ext] 将转换的文件名更改为本身的文件名
            //[hash:8]指截取hsash32位字符串的前八位
            {test:/\.(eot|ttf|svg|woff|woff2)$/,use:"url-loader"},
            {test:/\.js$/,use:"babel-loader",exclude:/node_modules/},
            {test:/\.vue$/,use:"vue-loader"},
            

        ]
    },
    resolve:{
        alias:{
            "Vue$":"vue/dist/vue.js"
        }
    }
}