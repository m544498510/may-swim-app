package com.may.swim.service;

import com.may.frame.model.PageInfo;
import com.may.swim.model.Session;
import com.may.swim.model.Set;
import com.may.swim.model.Stroke;

import java.util.ArrayList;
import java.util.Date;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */

public interface ISwimService {

    ArrayList<Stroke> getAllStroke();

    boolean createSession(Session session);

    boolean updateSession(Session session);

    boolean delSession(Long sessionId);

    ArrayList<Session> getSessionByUserId(String userId, PageInfo pageInfo);

    boolean createSetList(ArrayList<Set> list);

    boolean updateSet(Set set);

    boolean delSetById(Long setId);

    boolean delSetBySessionId(Long sessionId);

    ArrayList<Set> getSetBySessionId(Long sessionId,PageInfo pageInfo);

}
