package com.may.swim.service;

import com.may.frame.model.PageInfo;
import com.may.swim.model.Session;
import com.may.swim.model.Set;
import com.may.swim.model.Stroke;

import java.util.ArrayList;

/**
 * 常规业务逻辑service
 * @author :    Mei XinLin
 * @version :   1.0
 */

public interface ISwimService {

    /***
     * 获取所有泳姿
     * @return 泳姿list
     */
    ArrayList<Stroke> getAllStroke();
    /***
     * 增加一套训练信息
     * @param session session对象
     * @return 是否成功
     */
    boolean createSession(Session session);
    /***
     *  更新一套训练信息
     * @param session 对象
     * @return 是否成功
     */
    boolean updateSession(Session session);
    /***
     *  删除一套训练信息
     * @param sessionId 训练信息id
     * @return 是否成功
     */
    boolean delSession(Long sessionId);

    /***
     * 通过用户id查询训练信息
     * @param userId 用户id
     * @param pageInfo 分页信息
     * @return 结果list
     */
    ArrayList<Session> getSessionByUserId(String userId, PageInfo pageInfo);

    /***
     * 新增多组训练
     * @param list 一组set对象
     * @return 是否成功
     */
    boolean createSetList(ArrayList<Set> list);
    /***
     * 更新一组训练
     * @param set set对象
     * @return 是否成功
     */
    boolean updateSet(Set set);
    /***
     * 删除一组训练
     * @param setId set id
     * @return 是否成功
     */
    boolean delSetById(Long setId,Long sessionId);
    /***
     * 通过session id 删除多组训练
     * @param sessionId session id
     * @return 是否成功
     */
    boolean delSetBySessionId(Long sessionId);
    /***
     * 根据session id 查询多组训练
     * @param sessionId session id
     * @param pageInfo 分页信息
     * @return 结果list
     */
    ArrayList<Set> getSetBySessionId(Long sessionId,PageInfo pageInfo);

}
