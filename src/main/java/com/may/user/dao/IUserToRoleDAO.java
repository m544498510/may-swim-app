package com.may.user.dao;

import com.may.user.model.Role;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 *  用户角色关系表DAO
 * @author :    Mei XinLin
 * @version :   1.0
 */
@Repository
public interface IUserToRoleDAO {
    /***
     * 获取指定id的用户角色
     * @param userId 用户id
     * @return 角色list
     */
    ArrayList<Role> getRolesByUserId(String userId);

    /***
     * 插入指定用户的一条角色。
     * @param userId 用户id
     * @param roleId 角色id
     * @return 插入数量。
     */
    int insertRow(@Param("userId")String userId,@Param("roleId")int roleId);

    /***
     * 插入指定用户的多条角色。
     * @param userId 用户id
     * @param rolesArr 角色id数组
     * @return 插入数量。
     */
    int insertRows(@Param("userId")String userId,@Param("rolesArray")int[] rolesArr);

    /***
     * 删除单条数据
     * @param userId 用户id
     * @param roleId 角色id
     * @return 删除行数
     */
    int deleteRow(@Param("userId")String userId,@Param("roleId")int roleId);

    /***
     * 删除多行数据
     * @param userId 用户id
     * @return 删除行数
     */
    int deleteRows(String userId);



}
