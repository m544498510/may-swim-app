package com.may.test;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.transaction.TransactionConfiguration;
import org.springframework.transaction.annotation.Transactional;

@RunWith(SpringJUnit4ClassRunner.class)  //使用junit4进行测试
@ContextConfiguration({
        "classpath:/applicationContext.xml",
        "classpath:/spring-servlet.xml"
}) //加载配置文件

@Transactional
@TransactionConfiguration(transactionManager = "transactionManager", defaultRollback = true)
public class BaseTest {
    /***
     * 防止运行报错
     */
    @Test
    public void test(){

    }
}