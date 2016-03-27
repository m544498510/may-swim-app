package com.may.util;

import java.sql.*;

/**
 * 用于测试数据库连接。
 * Created by May on 2016/3/27.
 */
public class JDBCTest {

    private static Connection getConn() {
        String driver = "com.mysql.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/mayapp?useUnicode=true&characterEncoding=utf-8";
        String username = "root";
        String password = "root";
        Connection conn = null;
        try {
            Class.forName(driver); //classLoader,加载对应驱动
            conn = (Connection) DriverManager.getConnection(url, username, password);
        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return conn;
    }


    public static void main(String[] args){
        Connection conn = getConn();
        String sql = "select * from t_user";
        PreparedStatement pstmt;
        try {
            pstmt = conn.prepareStatement(sql);
            ResultSet ret = pstmt.executeQuery();//执行语句，得到结果集
            while (ret.next()) {
                String uid = ret.getString(1);
                String ufname = ret.getString(2);
                String ulname = ret.getString(3);
                String udate = ret.getString(4);
                System.out.println(uid + "\t" + ufname + "\t" + ulname + "\t" + udate );
            }//显示数据
            ret.close();
            pstmt.close();
            conn.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
