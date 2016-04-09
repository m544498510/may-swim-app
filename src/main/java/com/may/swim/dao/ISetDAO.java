package com.may.swim.dao;

import com.may.frame.model.PageInfo;
import com.may.swim.model.Set;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */

@Repository
public interface ISetDAO {
    /***
     * 新增一组训练
     * @param set set对象
     * @return 成功1，失败0
     */
    int insertRow(Set set);

    /***
     * 新增多组训练
     * @param list 一组set对象
     * @return 成功大于1，失败0
     */
    int insertRows(ArrayList<Set> list);

    /***
     * 删除一组训练
     * @param setId set id
     * @return 成功1，失败0
     */
    int deleteRow(Long setId);

    /***
     * 通过session id 删除多组训练
     * @param sessionId session id
     * @return 成功大于1，失败0
     */
    int deleteRowsBySessionId(long sessionId);

    /***
     * 更新一组训练
     * @param set set对象
     * @return 成功1，失败0
     */
    int updateRow(Set set);

    /***
     *  根据set id查询set信息
     * @param setId set id
     * @return Set 对象
     */
    Set getRowBySetId(long setId);

    /***
     * 根据session id 查询多组训练
     * @param sessionId session id
     * @param pageInfo 分页信息
     * @return 结果list
     */
    ArrayList<Set> getRowsBySessionId(
            @Param("sessionId")Long sessionId,
            @Param("pageInfo")PageInfo pageInfo);

    /***
     * 根据user id 查询多组训练
     * @param userId user id
     * @param pageInfo 分页信息
     * @return 结果list
     */
    ArrayList<Set> getRowsByUserId(
            @Param("userId")String userId,
            @Param("pageInfo")PageInfo pageInfo);
}
