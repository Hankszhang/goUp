任务完成说明
------------
1. 详见src/下面的代码
2. 单元测试
	测试代码详见test/下的token.js和user.js
3. 实际测试
	- 	实际测试基本符合预期，测试项目有：
		* 正确用户名和密码，且口令不过期： test1
		* test1，但是用错误密码
		* 正确用户名和密码，但口令无效： test3
		* 用户名空白

    - 问题： 在index.html中实际测试时，发现使用令牌已过期的用户(test2)登录时，仍然能够登录成功，这与预期结果及单元测试的结果不一致。
    	* 经调试，发现用test2登录时，调用isTokenValid函数后的返回值为true,预期值应为false, 问题应该出在此处；
    	* 但是用test2用户进行单元测试时的返回值与预期符合，为false，因此可以确定不是isTokenValid函数自身实现的问题；
    	* 由此可以确定问题发生在compile阶段，分析package.json可知，compile做了两件事：打包模块和压缩index.
    	* 发现去掉uglify的 --compress参数后，问题就解决了，分析原因可能是压缩代码过程中Token内变量作用域被污染
