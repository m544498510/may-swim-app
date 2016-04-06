package com.may.swim.dao;

import com.may.swim.model.Set;
import org.junit.Test;

import javax.annotation.Resource;

import java.util.ArrayList;
import java.util.Date;

import static org.junit.Assert.*;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class ISetDAOTest {
    @Resource
    private ISetDAO iSetDAO;

    @Test
    public void testInsertRows() throws Exception {
        ArrayList<Set> list = new ArrayList<Set>();
        int i = iSetDAO.insertRows(list);


    }

    private Set getSet(Short index) {
        Long sessionId = 1L;
        Short patternId = 1;
        Short setLap = 4;
        Short setStroke = 10;
        Short setDistance = 100;
        Short setCalory = 99;
        Short setEfficiency = 56;
        Date setTime = ;
        Date setRestTime;
        Short setSpeed;


        Set set = new Set();
        return set;
    }
}