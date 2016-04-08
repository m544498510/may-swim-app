package com.may.swim.dao;

import com.may.swim.model.Stroke;
import com.may.test.BaseTest;
import org.junit.Test;

import javax.annotation.Resource;

import java.util.ArrayList;

import static org.junit.Assert.*;

/**
 * @author :    Mei XinLin
 * @version :   1.0
 */
public class IStrokeDAOTest extends BaseTest {
    @Resource
    private IStrokeDAO iStrokeDAO;

    @Test
    public void testGetAllRows() throws Exception {
        ArrayList<Stroke> list = iStrokeDAO.getAllRows();

        assertTrue(list.size() > 0);
        assertTrue("breaststroke".equals(list.get(0).getStrokeName()));
    }
}