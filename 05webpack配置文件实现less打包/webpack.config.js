
module.exports={
  entry:'./src/main.js',  //指定打包的入口文件
  output:{
  	path : __dirname+'/dist',  // 注意：webpack1.14.0 要求这个路径是一个绝对路径
  	filename:'build.js'
  },
  module:{
  	loaders:[
  		{
  			test: /\.css$/,  //打包 .css文件
  			loader:'style-loader!css-loader'
  		},
      {
        test: /\.scss$/,  //打包 .scss文件
        loader:'style-loader!css-loader!sass-loader'
      },
       {
        test: /\.less/,  //打包 .less文件
        loader:'style-loader!css-loader!less-loader'
      }
  	]
  }
}