package com.may.swim.dao;

import com.may.swim.model.Session;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Map;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
@Repository
public interface ISessionDAO {
    long insertRow(Session session);

    int deleteRow(long sessionId);

    int deleteRowsByUserId(String userId);

    int updateRow(Session session);

    Session getRowBySessionId(long sessionId);

    ArrayList<Session> getRowsByUserId(Map map);

}
