package com.may.user.dao;

import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

/**
 * Created by May on 2016/4/2.
 */
@Repository
public interface IUserToPermDAO {
    int insertRow(@Param("userId")String userId,@Param("permId")int permId);

    int deleteRow(@Param("userId")String userId,@Param("permId")int permId);

    int deleteRows(String userId);



}
