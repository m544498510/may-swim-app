package com.may.swim.dao;

import com.may.frame.model.PageInfo;
import com.may.swim.model.Session;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Map;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
@Repository
public interface ISessionDAO {
    int insertRow(Session session);

    int deleteRow(Long sessionId);

    int updateRow(Session session);

    Session getRowBySessionId(Long sessionId);

    ArrayList<Session> getRowsByUserId(
            @Param("userId")String userId,
            @Param("pageInfo")PageInfo pageInfo);

}
