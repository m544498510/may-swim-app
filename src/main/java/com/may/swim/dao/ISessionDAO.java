package com.may.swim.dao;

import com.may.frame.model.PageInfo;
import com.may.swim.model.Session;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
@Repository
public interface ISessionDAO {
    /***
     * 增加一套训练信息
     * @param session session对象
     * @return 成功1，失败0
     */
    int insertRow(Session session);

    /***
     *  删除一套训练信息
     * @param sessionId 训练信息id
     * @return 成功1，失败0
     */
    int deleteRow(Long sessionId);

    /***
     *  更新一套训练信息
     * @param session 对象
     * @return 成功1，失败0
     */
    int updateRow(Session session);

    /***
     * 通过session id 查询某套训练信息
     * @param sessionId session id
     * @return 结果
     */
    Session getRowBySessionId(Long sessionId);

    /***
     * 通过用户id查询训练信息
     * @param userId 用户id
     * @param pageInfo 分页信息
     * @return 结果list
     */
    ArrayList<Session> getRowsByUserId(
            @Param("userId")String userId,
            @Param("pageInfo")PageInfo pageInfo);

}
