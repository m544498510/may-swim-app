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
    int insertRow(Set set);

    int insertRows(ArrayList<Set> list);

    int deleteRow(Long setId);

    int deleteRowsBySessionId(long sessionId);

    int updateRow(Set set);

    Set getRowBySetId(long setId);

    ArrayList<Set> getRowsBySessionId(
            @Param("sessionId")Long sessionId,
            @Param("pageInfo")PageInfo pageInfo);

    ArrayList<Set> getRowsByUserId(
            @Param("userId")String userId,
            @Param("pageInfo")PageInfo pageInfo);
}
