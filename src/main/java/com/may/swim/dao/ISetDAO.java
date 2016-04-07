package com.may.swim.dao;

import com.may.swim.model.Session;
import com.may.swim.model.Set;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */

@Repository
public interface ISetDAO {
    int insertRows(ArrayList<Set> list);

    int deleteRow(Long setId);

    int deleteRowsBySessionId(long sessionId);

    int updateRow(Set set);

    Set getRowBySetId(long setId);

    ArrayList<Session> getRowsBySessionId(Map map);


}
