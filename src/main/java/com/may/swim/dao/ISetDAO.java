package com.may.swim.dao;

import com.may.frame.model.PageInfo;
import com.may.swim.model.Session;
import com.may.swim.model.Set;
import org.apache.ibatis.annotations.Param;
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

    ArrayList<Set> getRowsBySessionId(
            @Param("sessionId")Long sessionId,
            @Param("pageInfo")PageInfo pageInfo);


}
