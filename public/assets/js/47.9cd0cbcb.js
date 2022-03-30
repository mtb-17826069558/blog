(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1064:function(s,a,n){"use strict";n.r(a);var t=n(3),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"javascript学习笔记-二十四-mysql基础操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#javascript学习笔记-二十四-mysql基础操作"}},[s._v("#")]),s._v(" JavaScript学习笔记（二十四）-- MYSQL基础操作")]),s._v(" "),t("h2",{attrs:{id:"mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql"}},[s._v("#")]),s._v(" "),t("strong",[s._v("MYSQL")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("mysql 是一个数据库的名字")])]),s._v(" "),t("li",[t("p",[s._v("和 php 合作的比较好的数据库")])]),s._v(" "),t("li",[t("p",[s._v("之前我们说过一个问题，前端向后端索要数据，后端就是去数据库中查询数据，返回给前端")])]),s._v(" "),t("li",[t("p",[s._v("接下来就聊聊使用 php 操作数据库")])])]),s._v(" "),t("p",[s._v("MySQL 是最流行的关系型数据库管理系统（非关系型数据库简略介绍） 关系数据库管理系统(Relational Database Management System)的特点 数据以表格的形式出现 每行为各种记录名称 许多的行和列组成一张表单 若干的表单组成database 主键：主键是唯一的。一个数据表中只能包含一个主键。你可以使用主键来查询数据。")]),s._v(" "),t("h3",{attrs:{id:"数据库的数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据库的数据类型"}},[s._v("#")]),s._v(" "),t("strong",[s._v("数据库的数据类型")])]),s._v(" "),t("p",[t("strong",[s._v("数值类型")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(558),alt:"img"}})]),s._v(" "),t("p",[t("strong",[s._v("日期和时间类型")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(559),alt:"img"}})]),s._v(" "),t("p",[t("strong",[s._v("字符串类型")])]),s._v(" "),t("p",[t("img",{attrs:{src:n(560),alt:"img"}})]),s._v(" "),t("h3",{attrs:{id:"操作数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作数据库"}},[s._v("#")]),s._v(" "),t("strong",[s._v("操作数据库")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("之前都是对数据库的简单了解，不需要全都背下来")])]),s._v(" "),t("li",[t("p",[s._v("我们只要了解一下就可以了")])]),s._v(" "),t("li",[t("p",[s._v("接下来我们就是使用 php 链接 mysql 数据库进行数据的增删改查")])]),s._v(" "),t("li",[t("p",[s._v("想要操作数据库，除了需要 php 的语法以外，还需要一个 mysql 的 sql 语句")])]),s._v(" "),t("li",[t("p",[s._v("使用 php 操作数据库的步骤")])])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("和数据库建立链接")])]),s._v(" "),t("li",[t("p",[s._v("使用 sql 语句对数据库进行操作")])]),s._v(" "),t("li",[t("p",[s._v("获取结果")])]),s._v(" "),t("li",[t("p",[s._v("和数据库的链接断开")])])]),s._v(" "),t("h3",{attrs:{id:"和数据库建立链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#和数据库建立链接"}},[s._v("#")]),s._v(" "),t("strong",[s._v("和数据库建立链接")])]),s._v(" "),t("ul",[t("li",[s._v("在 php 中我们使用 mysql_connect() 方法来建立和数据库的链接")])]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n # 下面就是建立链接，$link 会得到一个链接信息\n  $link = mysql_connect('ip地址', '数据库用户名', '数据库密码'); \n?>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[s._v("我们有了链接信息 $link 以后就可以继续去操作数据库了")])]),s._v(" "),t("h3",{attrs:{id:"确定操作哪个哪个库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#确定操作哪个哪个库"}},[s._v("#")]),s._v(" "),t("strong",[s._v("确定操作哪个哪个库")])]),s._v(" "),t("ul",[t("li",[s._v("刚才是和数据库建立了链接，我们还要确定操作哪个库")])]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n # 下面就是确定你要操作哪个库  \n  mysql_select_db('你要操作的库的名称', $link);\n?>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h3",{attrs:{id:"执行-sql-语句操作数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#执行-sql-语句操作数据库"}},[s._v("#")]),s._v(" "),t("strong",[s._v("执行 sql 语句操作数据库")])]),s._v(" "),t("ul",[t("li",[s._v("接下来就是使用 sql 语句去这个库里面进行增删改查的操作了")])]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n # 下面就是使用 sql 语句对数据库进行操作\n  $res = mysql_query('你要执行的 sql 语句');      \n?>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("这里有一个注意的点：")])]),s._v(" "),t("li",[t("p",[s._v("我们拿到的结果是一个我们看不懂的处理信息")])]),s._v(" "),t("li",[t("p",[s._v("需要使用 mysql_fetch_row || mysql_fetch_assoc 解析一下结果才能看得懂")])])]),s._v(" "),t("h3",{attrs:{id:"关闭链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#关闭链接"}},[s._v("#")]),s._v(" "),t("strong",[s._v("关闭链接")])]),s._v(" "),t("ul",[t("li",[s._v("全部用完以后我们最好是关闭一下数据库链接")])]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n  mysql_close($conn);\n?>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h3",{attrs:{id:"完整步骤"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#完整步骤"}},[s._v("#")]),s._v(" "),t("strong",[s._v("完整步骤")])]),s._v(" "),t("ul",[t("li",[s._v("我们完整的写一下操作的步骤")])]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n $conn = mysql_connect('localhost', 'root', 'root');\n mysql_select_db('test1913');\n $res = mysql_query('SELECT * FROM `student`');\n $row = mysql_fetch_assoc($res);\n mysql_close($conn);\n print_r($row);\n?>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h3",{attrs:{id:"常用的-sql-语句"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的-sql-语句"}},[s._v("#")]),s._v(" "),t("strong",[s._v("常用的 sql 语句")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("刚才说了怎么操作数据库")])]),s._v(" "),t("li",[t("p",[s._v("现在我们学习一下，操作数据库时候常用的 sql 语句")])]),s._v(" "),t("li",[t("p",[s._v("我们就是依靠这些 sql 语句来进行数据库操作的")])])]),s._v(" "),t("h3",{attrs:{id:"查"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查"}},[s._v("#")]),s._v(" "),t("strong",[s._v("查")])]),s._v(" "),t("ul",[t("li",[s._v("查询语句")])]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n # 查询 student 这个表里面的所有数据\n $sql = 'SELECT * FROM `student`';\n \n # 查询 student 表中的数据里面 gender 为 男 的数据\n $sql = 'SELECT * FROM `student` WHERE `gender`=\"男\"';\n \n # 查询 student 表中的数据里面 age 大于 18 的数据\n $sql = 'SELECT * FROM `student` WHERE `age`>18';\n \n # 查询 student 表中的数据里面 age 大于 18 且 gender 为 男 的数据\n $sql = 'SELECT * FROM `student` WHERE `age`>18 AND `gender`=\"男\"';\n # 查询 student 表中的数据里面 age 小于 22 或者 age 大于 28 的数据\n $sql = 'SELECT * FROM `student` WHERE `age`<22 OR `age`>28';\n # 查询 student 表中的数据里面从 第几条开始 查询多少条\n $sql = 'SELECT * FROM `student` LIMIT 0, 10';\n \n # 先按照条件筛选出数据以后再进行分页查询\n # 下面是查询表中所有 age>18 且 性别为男的所有数据，查出来以后从第 10 条开始查 10 条\n $sql = 'SELECT * FROM `student` WHERE `age`>18 AND `gender`=\"男\" LIMIT 10, 10';\n # 查询表的模糊查询\n # 下面表示查询表中所有数据里面 name 字段中包含 \"三\" 字的数据\n $sql = 'SELECT * FROM `student` WHERE `name` LIKE \"%三%\"';\n # 查询排序，查询的时候按照某一个字段升序或降序排序\n $sql = 'SELECT * FROM `student` ORDER BY `age` ASC';\n $sql = 'SELECT * FROM `student` ORDER BY `age` DESC';\n?>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br")])]),t("h3",{attrs:{id:"增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#增"}},[s._v("#")]),s._v(" "),t("strong",[s._v("增")])]),s._v(" "),t("ul",[t("li",[s._v("增加语句")])]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('<?php\n # 向表中增加一条数据，再增加的时候主键不能由我们书写，而是 mysql 数据库自己递增\n $sql = \'INSERT INTO `student` VALUES(null, "张三", 18, "男", 1913, 100)\';\n \n # 插入固定几个键的数据，其他的用默认值\n $sql = \'INSERT INTO `student` (`name`, `age`) VALUES("李四", 22)\';\n?>\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("h3",{attrs:{id:"删"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删"}},[s._v("#")]),s._v(" "),t("strong",[s._v("删")])]),s._v(" "),t("ul",[t("li",[s._v("删除语句")])]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n # 删除表中 id 为 100 的数据\n $sql = 'DELETE FROM `student` WHERE `id`=100';\n # 删除表中 name 为 张三 的数据\n $sql = 'DELETE FROM `student` WHERE `name`=\"张三\"'\n?>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#改"}},[s._v("#")]),s._v(" "),t("strong",[s._v("改")])]),s._v(" "),t("ul",[t("li",[s._v("修改语句")])]),s._v(" "),t("div",{staticClass:"language-mysql line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("<?php\n # 更新一条 id 为 100 的数据中的 name 字段的值和 age 字段的值\n $sql = 'UPDATE `student` SET `name`=\"张三\", `age`=10 WHERE `id`=100'\n \n # 更新数据的时候让所有的数据增加一些内容\n $sql = 'UPDATE `student` SET `age`=age+1'\n?>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports},558:function(s,a,n){s.exports=n.p+"assets/img/1609154797783-d16a6b64-2a62-4441-a021-b393be151fc0.348c054c.jpg"},559:function(s,a,n){s.exports=n.p+"assets/img/1609154797811-1bf22b1c-27e1-490a-baca-4eb565354540.0054e038.jpg"},560:function(s,a,n){s.exports=n.p+"assets/img/1609154797862-02c391d3-588f-4627-a863-3e3a1321aa53.7ea920b7.jpeg"}}]);