package com.may.swim.dao;

import com.may.swim.model.Set;
import org.junit.Test;

import javax.annotation.Resource;

import java.util.ArrayList;

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

    private Set getSet(){


        Set set = new Set();
        return set;
    }
}