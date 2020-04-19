//webpack配置文件
/*
webpack默认会查找 webpack.config.js作为配置文件
自定义配置文件名称：
webpack --config xx.js
*/
const path = require('path');
const webpack=require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    //配置入口
    entry: {
        app:'./src/js/index.js'  // webpack打包的入口文件
    },
    //配置出口
    output: {
        filename: "[name].js",//出口文件名称
        path: __dirname + "/dist"
    },
    //设置模式
    // production(生产模式),development(开发模式)
    //不设置mode,默认是production,production打包后,代码会进行压缩
    mode: 'development',
    //模块
    module: {
        //规则
        rules: [
            {
                test: /\.js|jsx$/,
                use: "babel-loader",
                exclude: /node_modules/
            },{
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                //使用css-loader和style-loader依次对CSS文件进行处理,
                //按数组中从后往前的顺序,所以style-loader必须在css-loader之前
                exclude: /node_modules/
            }
        ]

    },
    //配置插件的节点
    plugins:[
        //创建一个在内存中生成html页面的插件(src->dist)
        new HtmlWebpackPlugin({
            template:__dirname+'/src/index.html', //指定模板页面,将来会根据此页面生成内存中的页面
            filename:'index.html',//指定生成页面的名称,浏览器才会默认直接打开index.html
            title: 'React-TodoList'
        }),
        //使用HotModuleReplacementPlugin插件,启动热更新
        new webpack.HotModuleReplacementPlugin({})
    ],
    //开发服务器
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8081,
        hot:true,//打开热更新
        open: true //是否自动打开浏览器
    }
};